import KhanMath from "./math.js"
import { point as kpoint } from "kmath"

class GraphUtils {
  cartToPolar = (coord: number[], angleInRadians: number) => {
    const r = Math.sqrt(Math.pow(coord[0], 2) + Math.pow(coord[1], 2))
    let theta = Math.atan2(coord[1], coord[0])
    // convert angle range from [-pi, pi] to [0, 2pi]
    if (theta < 0) {
      theta += 2 * Math.PI
    }
    if (!angleInRadians) {
      theta = (theta * 180) / Math.PI
    }
    return [r, theta]
  }

  polar = (r: number | number[], theta: number) => {
    if (typeof r === "number") {
      return this.polar([r, r], theta)
    }
    theta = (theta * Math.PI) / 180
    return [r[0] * Math.cos(theta), r[1] * Math.sin(theta)]
  }

  getSlope = (point1: number[], point2: number[]) =>
    (point1[1] - point2[1]) / (point1[0] - point2[0])

  getIntercept = (point1: number[], point2: number[]) =>
    point1[1] - this.getSlope(point1, point2) * point1[0]

  getSlopeIntercept = (point1: number[], point2: number[]) => {
    let m = this.getSlope(point1, point2)
    return [m, point2[1] - m * point2[0]]
  }

  getDistance = (point1: number[], point2: number[]) =>
    kpoint.distanceToPoint(point1, point2)

  /**
   * Return the difference between two sets of coordinates
   */
  coordDiff = (startCoord: number[], endCoord: number[]) =>
    endCoord.map((coord, i) => coord - startCoord[i])

  /**
   * Round the given coordinates to a given snap value
   * (e.g., nearest 0.2 increment)
   */
  snapCoord = (coord: number[], snap: number[]) =>
    coord.map((val, i) => KhanMath.roundToNearest(snap[i], val))

  // Find the angle in degrees between two or three points
  findAngle = (point1: number[], point2: number[], vertex?: number[]) => {
    if (vertex === undefined) {
      const x = point1[0] - point2[0]
      const y = point1[1] - point2[1]
      if (!x && !y) {
        return 0
      }
      return (180 + (Math.atan2(-y, -x) * 180) / Math.PI + 360) % 360
    } else {
      return this.findAngle(point1, vertex) - this.findAngle(point2, vertex)
    }
  }

  scaleVector = (
    point: number | number[],
    range: number[][],
    scale: number[]
  ) => {
    if (typeof point === "number") {
      return this.scaleVector([point, point], range, scale)
    }

    const [xUnit, yUnit] = this.scaleGridUnit(range, scale)
    return [xUnit * point[0], yUnit * point[1]]
  }

  unscaleVector = (point: number | number[], scale: number[]) => {
    if (typeof point === "number") {
      return this.unscaleVector([point, point], scale)
    }

    return [point[0] / scale[0], point[1] / scale[1]]
  }

  // given a point in graph units, return point in graph pixels
  scalePoint = (
    point: number[] | number,
    range: number[][],
    scale: number[]
  ) => {
    if (typeof point === "number") {
      return this.scalePoint([point, point], range, scale)
    }

    const x = point[0] - range[0][0]
    const y = range[1][1] - point[1]
    const xUnit = scale[0] / (range[0][1] - range[0][0])
    const yUnit = scale[1] / (range[1][1] - range[1][0])

    return [x * xUnit, y * yUnit]
  }

  // given a point in graph pixels return point in graph units
  unscalePoint = (
    point: number | number[],
    range: number[][],
    scale: number[]
  ) => {
    if (typeof point === "number") {
      return this.unscalePoint([point, point], range, scale)
    }

    const [xUnit, yUnit] = this.scaleGridUnit(range, scale)
    const x = point[0]
    const y = point[1]
    return [x / xUnit + range[0][0], range[1][1] - y / yUnit]
  }

  // given a gridRange in grid units return the number of pixels to make 1 unit
  scaleGridUnit = (range: number[][], scale: number[]) => {
    const xUnit = scale[0] / (range[0][1] - range[0][0])
    const yUnit = scale[1] / (range[1][1] - range[1][0])
    return [xUnit, yUnit]
  }

  scaleAxisCenter = (
    point: number | number[],
    range: number[][],
    scale: number[]
  ) => {
    if (typeof point === "number") {
      return this.scaleAxisCenter([point, point], range, scale)
    }

    const xUnit = scale[0] / (range[0][1] - range[0][0])
    const yUnit = scale[1] / (range[1][1] - range[1][0])

    // scale center from units to pixels
    const axisCenterX =
      point[0] === 0
        ? scale[0] / 2
        : scale[0] / 2 + (scale[0] / point[0]) * xUnit
    const axisCenterY =
      point[1] === 0
        ? scale[1] / 2
        : scale[1] / 2 + (scale[1] / point[1]) * yUnit

    return [axisCenterX, axisCenterY]
  }

  svgPath = function(
    points: number[][],
    range: number[][],
    scale: number[],
    closed: boolean = false
  ) {
    return points
      .map((point, i, arr) => {
        let scaled = this.scalePoint(point, range, scale)

        return `${i === 0 ? "M" : "L"}${KhanMath.bound(
          scaled[0]
        )} ${KhanMath.bound(scaled[1])}${
          arr.length - 1 === i && closed ? "z" : ""
        }`
      })
      .join("")
  }

  svgParabolaPath = (
    a: number,
    b: number,
    c: number,
    range: number[][],
    scale: number[]
  ) => {
    const evaluateQuadratic = (x: number) => (a * x + b) * x + c

    // If points are collinear, plot a line instead
    if (a === 0) {
      const points = range[0].map(x => [x, evaluateQuadratic(x)])
      return this.svgPath(points, range, scale)
    }

    // Calculate x coordinates of points on parabola
    const xVertex = -b / (2 * a)
    const distToEdge = Math.max(
      Math.abs(xVertex - range[0][0]),
      Math.abs(xVertex - range[0][1])
    )

    // To guarantee that drawn parabola to spans the viewport, use a point
    // on the edge of the graph furtherest from the vertex
    const xPoint = xVertex + distToEdge

    // Compute parabola and other point on the curve
    const vertex = [xVertex, evaluateQuadratic(xVertex)]
    const point = [xPoint, evaluateQuadratic(xPoint)]

    // Calculate SVG 'control' point, defined by spec
    const control = [vertex[0], vertex[1] - (point[1] - vertex[1])]

    // Calculate mirror points across parabola's axis of symmetry
    const dx = Math.abs(vertex[0] - point[0])
    const left = [vertex[0] - dx, point[1]]
    const right = [vertex[0] + dx, point[1]]

    // Scale and bound
    const points = [left, control, right].map(p =>
      this.scalePoint(p, range, scale)
    )
    const values = [].concat(...points).map(KhanMath.bound)
    return `M${values[0]},${values[1]} Q${values[2]},${values[3]} ${values[4]},${values[5]}`
  }

  svgSinusoidPath = (
    a: number,
    b: number,
    c: number,
    d: number,
    range: number[][],
    scale: number[]
  ) => {
    // Plot a sinusoid of the form: f(x) = a * sin(b * x - c) + d
    const quarterPeriod = Math.abs(Math.PI / (2 * b))

    const computeSine = (x: number) => a * Math.sin(b * x - c) + d

    const computeDerivative = (x: number) => a * b * Math.cos(c - b * x)

    const coordsForOffset = (initial: number, i: number) => {
      // Return the cubic coordinates (including the two anchor and two
      // control points) for the ith portion of the sinusoid.
      const x0 = initial + quarterPeriod * i
      const x1 = x0 + quarterPeriod

      // Interpolate using derivative technique
      // See: http://stackoverflow.com/questions/13932704/how-to-draw-sine-waves-with-svg-js
      const xCoords = [
        x0,
        (x0 * 2) / 3 + (x1 * 1) / 3,
        (x0 * 1) / 3 + (x1 * 2) / 3,
        x1,
      ]
      const yCoords = [
        computeSine(x0),
        computeSine(x0) + (computeDerivative(x0) * (x1 - x0)) / 3,
        computeSine(x1) - (computeDerivative(x1) * (x1 - x0)) / 3,
        computeSine(x1),
      ]

      // Zip and scale
      const zippedCoords = xCoords.map((coord, i) => [coord, yCoords[i]])
      return zippedCoords.map(coord => this.scalePoint(coord, range, scale))
    }

    // How many quarter-periods do we need to span the graph?
    const extent = range[0][1] - range[0][0]
    const numQuarterPeriods = Math.ceil(extent / quarterPeriod) + 1

    // Find starting coordinate: first anchor point curve left of xRange[0]
    let initial = c / b
    const distToEdge = initial - range[0][0]
    initial -= quarterPeriod * Math.ceil(distToEdge / quarterPeriod)

    // First portion of path is special-case, requiring move-to ('M')
    let coords = coordsForOffset(initial, 0)
    let path = `M${coords[0][0]},${coords[0][1]} C${coords[1][0]},${coords[1][1]} ${coords[2][0]},${coords[2][1]} ${coords[3][0]},${coords[3][1]}`

    for (let i = 1; i < numQuarterPeriods; i++) {
      coords = coordsForOffset(initial, i)
      path += ` C${coords[1][0]},${coords[1][1]} ${coords[2][0]},${coords[2][1]} ${coords[3][0]},${coords[3][1]}`
    }

    return path
  }
}

export default new GraphUtils()
