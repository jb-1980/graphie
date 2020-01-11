!function(e,t){if("object"===typeof exports&&"object"===typeof module)module.exports=t();else if("function"===typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"===typeof exports?exports:e)[r]=n[r]}}(this,(function(){return(this["webpackJsonpreact-graphie"]=this["webpackJsonpreact-graphie"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"DEFAULT_TOLERANCE",(function(){return f})),n.d(r,"EPSILON",(function(){return p})),n.d(r,"is",(function(){return E})),n.d(r,"equal",(function(){return m})),n.d(r,"sign",(function(){return y})),n.d(r,"isInteger",(function(){return h})),n.d(r,"round",(function(){return d})),n.d(r,"roundTo",(function(){return v})),n.d(r,"floorTo",(function(){return g})),n.d(r,"ceilTo",(function(){return b})),n.d(r,"toFraction",(function(){return k})),n.d(r,"bound",(function(){return A})),n.d(r,"factorial",(function(){return O})),n.d(r,"isPrime",(function(){return M})),n.d(r,"getPrimeFactorization",(function(){return j}));var a={};n.r(a),n.d(a,"snapCoord",(function(){return F})),n.d(a,"scaleVector",(function(){return B})),n.d(a,"unscaleVector",(function(){return C})),n.d(a,"scalePoint",(function(){return G})),n.d(a,"unscalePoint",(function(){return w})),n.d(a,"scaleGridUnit",(function(){return S})),n.d(a,"scaleAxisCenter",(function(){return I})),n.d(a,"path",(function(){return N})),n.d(a,"parabola",(function(){return T})),n.d(a,"sinusoid",(function(){return U}));var i=n(3),o=n(1),c=n(0),s=n.n(c),l=n(6),u=n(2),f=1e-9,p=Math.pow(2,-42),E=function(e){return"[object Number]"===toString.call(e)&&!isNaN(e)},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f;return e===t||Math.abs(e-t)<n},y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;return m(e,0,t)?0:Math.abs(e)/e},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;return m(Math.round(e),e,t)},d=function(e,t){var n=Math.pow(10,t);return Math.round(e*n)/n},v=function(e,t){return Math.round(e/t)*t},g=function(e,t){return Math.floor(e/t)*t},b=function(e,t){return Math.ceil(e/t)*t},k=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,r=[1,0],a=[0,1],i=Math.floor(e),o=e-i;a[0]<=n;){if(m(r[0]/a[0],e,t))return[r[0],a[0]];r=[i*r[0]+r[1],r[0]],a=[i*a[0]+a[1],a[0]],o=1/o-(i=Math.floor(1/o))}return[e,1]},A=function e(t){return 0===t?t:t<0?-e(-t):Math.max(1e-6,Math.min(t,1e20))},O=function(e){if(e<0||!Number.isInteger(e))throw TypeError("x must be a positive integer");if(e<=1)return 1;for(var t=e;e>1;)t*=e-=1;return t},x=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],M=function(e){if(e<=1)return!1;if(e<101)return x.includes(e);if(e%2===0)return!1;if(e%3===0)return!1;for(var t=Math.floor(Math.sqrt(e)),n=5;n<=t;n+=6)if(e%n===0||e%(n+2)===0)return!1;return!0};function j(e){if(1===e)return[];if(M(e))return[e];for(var t=Math.sqrt(e),n=2;n<=t;n++)if(e%n===0)return[].concat(Object(i.a)(j(n)),Object(i.a)(j(e/n)))}function P(e,t){if(e.length!==t.length)throw TypeError("vectors must be same dimension to subtract");return e.map((function(e,n){return e-t[n]}))}function L(e,t){var n,r;if(Array.isArray(e))n=e[1],r=e[0];else{if(void 0===t){throw" cartFromPolarRad function or make the first argument an array",TypeError("theta was not defined. Either supply a second argument to the cartFromPolarRad function or make the first argument an array")}n=t,r=e}return[r*Math.cos(n),r*Math.sin(n)]}var D=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?360:2*Math.PI;return[~~(e/n),(e%n+n)%n]};function _(e){return(e[1][1]-e[0][1])/(e[1][0]-e[0][0])}function R(e){var t=(e[1][1]-e[0][1])/(e[1][0]-e[0][0]);return[t,e[1][1]-t*e[1][0]]}var F=function(e,t){return e.map((function(e,n){return r.roundTo(e,t[n])}))},B=function e(t,n,r){if("number"===typeof t)return e([t,t],n,r);var a=S(n,r),i=Object(o.a)(a,2),c=i[0],s=i[1];return[c*t[0],s*t[1]]},C=function e(t,n){return"number"===typeof t?e([t,t],n):[t[0]/n[0],t[1]/n[1]]},G=function e(t,n,r){if("number"===typeof t)return e([t,t],n,r);var a=t[0]-n[0][0],i=n[1][1]-t[1];return[a*(r[0]/(n[0][1]-n[0][0])),i*(r[1]/(n[1][1]-n[1][0]))]},w=function e(t,n,r){if("number"===typeof t)return e([t,t],n,r);var a=S(n,r),i=Object(o.a)(a,2),c=i[0],s=i[1],l=t[0],u=t[1];return[l/c+n[0][0],n[1][1]-u/s]},S=function(e,t){return[t[0]/(e[0][1]-e[0][0]),t[1]/(e[1][1]-e[1][0])]},I=function e(t,n,r){if("number"===typeof t)return e([t,t],n,r);var a=r[0]/(n[0][1]-n[0][0]),i=r[1]/(n[1][1]-n[1][0]);return[0===t[0]?r[0]/2:r[0]/2+r[0]/t[0]*a,0===t[1]?r[1]/2:r[1]/2+r[1]/t[1]*i]},N=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e.map((function(e,i,o){var c=G(e,t,n);return"".concat(0===i?"M":"L").concat(r.bound(c[0])," ").concat(r.bound(c[1])).concat(o.length-1===i&&a?"z":"")})).join("")},T=function(e,t,n,a,o){var c,s=function(r){return(e*r+t)*r+n};if(0===e){var l=a[0].map((function(e){return[e,s(e)]}));return N(l,a,o)}var u=-t/(2*e),f=u+Math.max(Math.abs(u-a[0][0]),Math.abs(u-a[0][1])),p=[u,s(u)],E=[f,s(f)],m=[p[0],p[1]-(E[1]-p[1])],y=Math.abs(p[0]-E[0]),h=[[p[0]-y,E[1]],m,[p[0]+y,E[1]]].map((function(e){return G(e,a,o)})),d=(c=[]).concat.apply(c,Object(i.a)(h)).map(r.bound);return"M".concat(d[0],",").concat(d[1]," Q").concat(d[2],",").concat(d[3]," ").concat(d[4],",").concat(d[5])},U=function(e,t,n,r,a,i){for(var o=Math.abs(Math.PI/(2*t)),c=function(a){return e*Math.sin(t*a-n)+r},s=function(r){return e*t*Math.cos(n-t*r)},l=function(e,t){var n=e+o*t,r=n+o,l=[n,2*n/3+1*r/3,1*n/3+2*r/3,r],u=[c(n),c(n)+s(n)*(r-n)/3,c(r)-s(r)*(r-n)/3,c(r)];return l.map((function(e,t){return[e,u[t]]})).map((function(e){return G(e,a,i)}))},u=a[0][1]-a[0][0],f=Math.ceil(u/o)+1,p=n/t,E=p-a[0][0],m=l(p-=o*Math.ceil(E/o),0),y="M".concat(m[0][0],",").concat(m[0][1]," C").concat(m[1][0],",").concat(m[1][1]," ").concat(m[2][0],",").concat(m[2][1]," ").concat(m[3][0],",").concat(m[3][1]),h=1;h<f;h++)m=l(p,h),y+=" C".concat(m[1][0],",").concat(m[1][1]," ").concat(m[2][0],",").concat(m[2][1]," ").concat(m[3][0],",").concat(m[3][1]);return y},Y=function(e){var t=e.center,n=e.radius,r=e.startAngle,a=e.endAngle,i=e.sector,o=e.angleInRadians,s=void 0===o||o,l=e.style,u=ge(),f=u.range,p=u.scale,E=s?[r,a]:[r*Math.PI/180,a*Math.PI/180],m=D(E[0])[1],y=D(E[1])[1],h=G(t,f,p),d=B(n,f,p),v=L(n,m),g=L(n,y),b=G([t[0]+v[0],t[1]+v[1]],f,p),k=G([t[0]+g[0],t[1]+g[1]],f,p),A=D(y-m)[1]>Math.PI,O="M".concat(b.join(),"A").concat(d.join()," 0 ").concat(A?1:0," 0 ").concat(k.join()).concat(i?"L"+h.join(" ")+"z":"");return c.createElement("path",{className:"graphie-arc",d:O,style:l})},H=function(e){var t=e.d,n=e.style;return s.a.createElement("path",{d:t,style:n})},W=function(e){var t=e.x,n=e.y,r=e.width,a=e.height,i=e.style,c=ge(),l=c.range,f=c.scale,p=G([t,n],l,f),E=Object(o.a)(p,2),m=E[0],y=E[1],h=B([r,a],l,f),d=Object(o.a)(h,2),v=d[0],g=d[1],b=Object(u.a)({fill:"#000",fillOpacity:.1},i);return s.a.createElement("rect",{x:m,y:y,width:v,height:g,style:b})},K=function(e){var t=e.center,n=e.radius,r=e.style,a=ge(),i=a.range,o=a.scale,c=a.axisCenter,l=t.map((function(e,t){return e+c[t]})),f=G(l,i,o),p=n*o[0]/(i[0][1]-i[0][0]),E=Object(u.a)({fill:"none",stroke:"black",strokeWidth:3,overflow:"hidden"},r);return s.a.createElement("circle",{cx:f[0],cy:f[1],r:p,style:E})},V=function(e){var t=e.center,n=e.radii,r=e.style,a=ge(),i=a.range,c=a.scale,l=G(t,i,c),f=Object(o.a)(l,2),p=f[0],E=f[1],m=B(n,i,c),y=Object(o.a)(m,2),h=y[0],d=y[1],v=Object(u.a)({fill:"#000",fillOpacity:.1},r);return s.a.createElement("ellipse",{cx:p,cy:E,rx:h,ry:d,style:v})},z=function(e){var t=e.start,n=e.end,r=e.style,a=ge(),i=a.range,c=a.scale,l=s.a.useMemo((function(){return G(t,i,c)}),[t,i,c]),u=Object(o.a)(l,2),f=u[0],p=u[1],E=s.a.useMemo((function(){return G(n,i,c)}),[n,i,c]),m=Object(o.a)(E,2),y=m[0],h=m[1];return s.a.createElement("line",{x1:f,x2:y,y1:p,y2:h,style:r})},q=function(e){var t=e.points,n=e.style,r=ge(),a=r.range,i=r.scale,o=t.map((function(e){return G(e,a,i).join()})),c=Object(u.a)({fill:"none"},n);return s.a.createElement("polyline",{points:o.join(" "),style:c})},J=function(e){var t=e.points,n=e.style,r=ge(),a=r.range,i=r.scale,o=t.map((function(e){return G(e,a,i).join()})),c=Object(u.a)({fill:"#000",fillOpacity:.1},n);return s.a.createElement("polygon",{points:o.join(" "),style:c})},X=function(e){for(var t=e.fn,n=e.style,r=ge(),a=r.range,i=r.scale,s=a[0][0],l=a[0][1],f=(l-s)/(2*i[0]),p=[],E=t(s),m=s;m<=l;m+=f){var y=t(m);y<0!==E<0&&Math.abs(y-E)>2*i[1]&&p.push(c.createElement(z,{key:"asymptote-".concat(m),start:[m,a[1][0]],end:[m,a[1][1]]})),E=y}var h=S(a,i),d=Object(o.a)(h,2)[1],v=Object(u.a)({strokeDasharray:.25*d},n);return c.createElement("g",{style:v},p)},Q=function(e){var t=e.style,n=ge(),r=n.range,a=n.axisArrows,i=n.axisOpacity,c=n.axisCenter,l=Object(o.a)(c,2),f=l[0],p=l[1],E=Object(u.a)({stroke:"#000000",opacity:i,strokeWidth:2},t);"<->"===a||!0===a?(E.markerEnd='URL("#open-endpoint")',E.markerStart='URL("#open-endpoint")'):"->"===a?E.markerEnd='URL("#axis-arrowhead")':"<-"===a&&(E.markerStart='URL("#axis-arrowhead")');var m=[];return m.push(s.a.createElement(z,{key:"x-axis",start:[r[0][0],p],end:[r[0][1],p],style:E})),m.push(s.a.createElement(z,{key:"y-axis",start:[f,r[1][0]],end:[f,r[1][1]],style:E})),s.a.createElement("g",{id:"graphie-axes"},m)},$=function(e){var t=e.endpointArray,n=e.style,r=t.map((function(e,t){var r=Object(u.a)({},n,{stroke:e.open?null===n||void 0===n?void 0:n.stroke:"none",fill:e.open?"#fff":null===n||void 0===n?void 0:n.fill});return s.a.createElement(K,{key:"endpoint-circle-".concat(t),center:e.point,radius:.25,style:r})}));return s.a.createElement("g",null,r)},Z=function(e){var t=e.fn,n=e.shade,r=void 0!==n&&n,a=e.range,i=e.fn2,s=void 0===i?function(e){return[e,0]}:i,l=e.style,f=ge(),p=Object(o.a)(f.range,1)[0],E=f.scale,m=function(e){return Math.abs(e[1])>5e5?[e[0],Math.min(Math.max(e[1],-5e5),5e5)]:e},y=function(e){return m(t(e))},h=function(e){return m(s(e))},d=a?a[0]:p[0],v=a?a[1]:p[1],g=(v-d)/(2*E[0]);0===g&&(g=1);for(var b=[],k=[],A=P(y(d),h(d)),O=d,x=d;x<=v;x+=g){var M=y(x),j=P(M,h(x));if(j[1]<0!==A[1]<0&&Math.abs(j[1]-A[1])>2*E[1]||isNaN(j[1])){if(r){k.push(M);for(var L=x-g;L>=O;L-=g)k.push(h(L));O=x}b.push(c.createElement(q,{key:"parametric-path-".concat(x),style:{fill:r?"inherit":"none"},points:k})),k=[],r&&k.push(M)}else k.push(M);A=j}if(r)for(var D=v-g;D>=O;D-=g)k.push(h(D));b.push(c.createElement(q,{key:"parametric-path",style:{fill:r?"inherit":"none"},points:k}));var _=Object(u.a)({strokeLinejoin:"round",strokeLinecap:"round",fill:r?"#000":"none",fillOpacity:.5},l);return c.createElement("g",{style:_},b)},ee=function(e){var t=e.fn,n=e.range,r=e.swapAxes,a=e.shade,i=e.fn2,o=e.style;if(r){if(i)throw new Error("Can't shade area between functions with swapped axes.");return s.a.createElement(Z,{fn:function(e){return[t(e),e]},range:n,shade:a,style:o})}if(i){if(a)return s.a.createElement(Z,{fn:function(e){return[e,t(e)]},shade:a,range:n,fn2:function(e){return[e,i(e)]},style:o});throw new Error("fn2 should only be set when 'shade' is True.")}return s.a.createElement(Z,{fn:function(e){return[e,t(e)]},range:n,shade:a,style:o})},te=function(e){var t=e.a,n=void 0===t?1:t,r=e.b,a=void 0===r?Math.E:r,i=e.h,c=void 0===i?0:i,l=e.k,u=void 0===l?0:l,f=e.range,p=e.style,E=ge(),m=Object(o.a)(E.range,1)[0];return s.a.createElement(ee,{fn:function(e){return n*Math.pow(a,e-c)+u},range:f||m,swapAxes:!1,shade:!1,style:p})},ne={BLUE:"#6495ED",ORANGE:"#FFA500",PINK:"#FF00AF",GREEN:"#28AE7B",PURPLE:"#9D38BD",RED:"#DF0030",GRAY:"gray",BLACK:"black",LIGHT_BLUE:"#9AB8ED",LIGHT_ORANGE:"#EDD19B",LIGHT_PINK:"#ED9BD3",LIGHT_GREEN:"#9BEDCE",LIGHT_PURPLE:"#DA9BED",LIGHT_RED:"#ED9AAC",LIGHT_GRAY:"#ED9B9B",LIGHT_BLACK:"#ED9B9B",GRAY10:"#D6D6D6",GRAY20:"#CDCDCD",GRAY30:"#B3B3B3",GRAY40:"#9A9A9A",GRAY50:"#808080",GRAY60:"#666666",GRAY70:"#4D4D4D",GRAY80:"#333333",GRAY90:"#1A1A1A",BLUE_A:"#CCFAFF",BLUE_B:"#80F6FF",BLUE_C:"#63D9EA",BLUE_D:"#11ACCD",BLUE_E:"#0C7F99",TEAL_A:"#94FFF5",TEAL_B:"#26EDD5",TEAL_C:"#01D1C1",TEAL_D:"#01A995",TEAL_E:"#208170",GREEN_A:"#B6FFB0",GREEN_B:"#8AF281",GREEN_C:"#74CF70",GREEN_D:"#1FAB54",GREEN_E:"#0D923F",GOLD_A:"#FFD0A9",GOLD_B:"#FFBB71",GOLD_C:"#FF9C39",GOLD_D:"#E07D10",GOLD_E:"#A75A05",RED_A:"#FCA9A9",RED_B:"#FF8482",RED_C:"#F9685D",RED_D:"#E84D39",RED_E:"#BC2612",MAROON_A:"#FFBDE0",MAROON_B:"#FF92C6",MAROON_C:"#ED5FA6",MAROON_D:"#CA337C",MAROON_E:"#9E034E",PURPLE_A:"#DDD7FF",PURPLE_B:"#C6B9FC",PURPLE_C:"#AA87FF",PURPLE_D:"#7854AB",PURPLE_E:"#543B78",MINT_A:"#F5F9E8",MINT_B:"#EDF2DF",MINT_C:"#E0E5CC",GRAY_A:"#F6F7F7",GRAY_B:"#F0F1F2",GRAY_C:"#E3E5E6",GRAY_D:"#D6D8DA",GRAY_E:"#BABEC2",GRAY_F:"#888D93",GRAY_G:"#626569",GRAY_H:"#3B3E40",GRAY_I:"#21242C",KA_BLUE:"#314453",KA_GREEN:"#71B307"};ne.INTERACTING=ne.KA_GREEN,ne.INTERACTIVE=ne.KA_GREEN,ne.DYNAMIC=ne.BLUE;var re=ne,ae=function(e){for(var t=e.style,n=ge(),r=n.range,a=n.gridStep,i=n.gridOpacity,o=n.isMobile,c=[],l=Math.ceil(r[0][0]);l<=r[0][1];l+=a[0])c.push(s.a.createElement(z,{key:"x-range-".concat(l),start:[l,r[1][1]],end:[l,r[1][0]]}));for(var f=Math.ceil(r[1][0]);f<=r[1][1];f+=a[1])c.push(s.a.createElement(z,{key:"y-range-".concat(f),start:[r[0][0],f],end:[r[0][1],f]}));var p=Object(u.a)({stroke:o?re.GRAY_C:"#000000",opacity:o?1:i,strokeWidth:o?1:2},t);return s.a.createElement("g",{id:"graphie-grid",style:p},c)};var ie=n(7),oe=n.n(ie),ce=(n(13),n(4),function(e){var t;return e="string"===typeof(t=e)?t.replace(/\+\s*-/g,"- ").replace(/-\s*-/g,"+ ").replace(/\^1/g,""):t,oe.a.renderToString(String(e))}),se=function(e){var t=e.point,n=e.text,r=e.direction,a=e.latex,i=void 0===a||a,s=(e.style,ge()),l=s.range,u=s.scale,f=s.tickLen,p=S(l,u),E=Object(o.a)(p,2),m=E[0],y=E[1],h=i?ce(n):n,d={center:[-.5,-.5],above:[-.5,-1],"above right":[0,-1],right:[0,-.5],"below right":[0,0],below:[-.5,f[0]/4],"below left":[-1,0],left:[-1,-.5],"above left":[-1,-1]}[r],v=t[0]+m*d[0],g=t[1]+y*d[1],b="".concat(2.2*u[1]/500,"ch");return c.createElement("foreignObject",{className:"graphie-label",x:v,y:g,width:m,height:y,style:{textAlign:"center",overflow:"visible",pointerEvents:"none"}},c.createElement("span",{dangerouslySetInnerHTML:{__html:h},style:{fontSize:b,userSelect:"none"}}))},le=function(){for(var e=ge(),t=e.scale,n=e.gridStep,r=e.tickStep,a=e.labelStep,i=e.range,s=e.axisLabels,l=e.axisCenter,u=e.axisArrows,f=e.isMobile,p=e.labelOpacity,E=e.unityLabels,m=e.xLabelFormat,y=e.yLabelFormat,h={stroke:f?re.GRAY_G:"#000000",opacity:f?1:p},d=t[0]/(i[0][1]-i[0][0]),v=t[1]/(i[1][1]-i[1][0]),g=n[0]*r[0]*a[0]*d,b=n[1]*r[1]*a[1]*v,k=I(l,i,t),A=Object(o.a)(k,2),O=A[0],x=A[1],M=l[0]<0?"above":"below",j=l[0]<0?"right":"left",P=0===l[0]&&0!==l[1],L=0!==l[0]&&0===l[1],D=0!==l[0]||0!==l[1],_=E?E[0]:D,R=E?E[1]:D,F=["<->","<-",!0].includes(u),B=["<->","->",!0].includes(u),C=.012*t[0],G=[],S=(P?0:g)+O;S<=t[0];S+=g)if(S<t[0]-10||!B){var N=w(S,i,t)[0];G.push(c.createElement(se,{key:"x-label-".concat(S),point:[S,x],text:m(N),direction:M,style:h}))}for(var T=-g*(_?1:2)+O;T>=0;T-=g)if(T>10||!F){var U=w(T,i,t)[0];G.push(c.createElement(se,{key:"x-label-".concat(T),point:[T-C,x],text:m(U),direction:M,style:h}))}for(var Y=x-(L?0:b);Y>=0;Y-=b)if(Y>10||!B){var H=w(Y,i,t)[1];G.push(c.createElement(se,{key:"y-label-".concat(Y),point:[O,Y],text:y(H),direction:j,style:h}))}for(var W=b*(R?1:2)+x;W<=t[1];W+=b)if(W<t[1]-10||!F){var K=w(W,i,t)[1];G.push(c.createElement(se,{key:"y-label-".concat(W),point:[O-C,W],text:y(K),direction:j,style:h}))}return 2===s.length&&(G.push(c.createElement(se,{key:"x-axis-label",point:[t[0],x],text:s[0],direction:"right",style:h})),G.push(c.createElement(se,{key:"y-axis-label",point:[O,0],text:s[1],direction:"above",style:h}))),c.createElement("g",{id:"graphie-labels"},G)},ue=function(e){var t,n=e.a,r=void 0===n?1:n,a=e.b,i=void 0===a?10:a,c=e.h,l=void 0===c?0:c,u=e.k,f=void 0===u?0:u,p=e.range,E=e.style,m=ge(),y=Object(o.a)(m.range,1)[0];t=10===i?Math.log10:i===Math.E?Math.log:function(e){return Math.log(e)/Math.log(i)};var h=p||(l<y[1]?[l,y[1]]:null);return h?s.a.createElement(ee,{fn:function(e){return e>l?r*t(e-l)+f:r*t(l-e)+f},range:h,swapAxes:!1,shade:!1,style:E}):null},fe=function(e){var t=e.a,n=e.b,r=e.c,a=e.style,i=ge(),o=i.scale,s=i.range,l=T(t,n,r,s,o),f=Object(u.a)({fill:"none",strokeWidth:3},a);return c.createElement("path",{d:l,style:f})},pe=function(e){var t=e.fnArray,n=e.rangeArray,r=e.endpoints,a=e.style,i=void 0===a?{}:a,c=ge(),l=Object(o.a)(c.range,1)[0],f=[],p=t.map((function(e,t){var a=n?n[t]:l;if(r){if(r.length!==n.length)throw TypeError("the endpoints array and rangeArray must be the same length when providing either to the Piecewise component");"none"!==r[t][0]&&f.push({point:[a[0],e(a[0])],open:"open"===r[t][0]}),"none"!==r[t][1]&&f.push({point:[a[1],e(a[1])],open:"open"===r[t][1]})}return s.a.createElement(Z,{key:"piecewise-".concat(t),range:a,fn:function(t){return[t,e(t)]}})})),E=f&&s.a.createElement($,{endpointArray:f,style:Object(u.a)({fill:i.stroke},i)});return s.a.createElement("g",{style:i},p,E)},Ee=function(e){var t=e.fn,n=e.style;return c.createElement(Z,{fn:function(e){return L(t(e),e)},style:n})},me=function(e){var t=e.a,n=e.b,r=e.c,a=e.d,i=e.style,o=ge(),c=o.range,l=o.scale,f=o.axisCenter,p=a+f[1],E=r+f[0],m=s.a.useMemo((function(){return U(t,n,E,p,c,l)}),[t,n,E,p,c,l]),y=Object(u.a)({fill:"none"},i);return s.a.createElement("path",{d:m,style:y})},ye=function(e){for(var t=e.style,n=ge(),r=n.isMobile,a=n.tickOpacity,i=n.tickLen,c=n.tickStep,l=n.axisCenter,f=n.gridStep,p=n.range,E=n.axisArrows,m=Object(u.a)({stroke:r?re.GRAY_G:"#000000",opacity:r?1:a,strokeWidth:1},t),y=i[0]/2,h=f[0]*c[0],d=i[1]/2,v=f[1]*c[1],g=["<->","<-",!0].includes(E),b=["<->","->",!0].includes(E),k=Object(o.a)(l,2),A=k[0],O=k[1],x=[],M=h+A;M<=p[0][1];M+=h)(M<p[0][1]-1/3||!b)&&x.push(s.a.createElement(z,{key:"x-tick-mark-".concat(M),start:[M,-y+O],end:[M,y+O],style:m}));for(var j=-h+A;j>=p[0][0];j-=h)(j>p[0][0]+1/3||!g)&&x.push(s.a.createElement(z,{key:"x-tick-mark-".concat(j),start:[j,-y+O],end:[j,y+O],style:m}));for(var P=v+O;P<=p[1][1];P+=v)(P<p[1][1]-1/3||!b)&&x.push(s.a.createElement(z,{key:"y-tick-mark-".concat(P),start:[-d+A,P],end:[d+A,P],style:m}));for(var L=-v+O;L>=p[1][0];L-=v)(L>p[1][0]+1/3||!g)&&x.push(s.a.createElement(z,{key:"y-tick-mark-".concat(L),start:[-d+A,L],end:[d+A,L],style:m}));return s.a.createElement("g",{id:"graphie-tick-marks"},x)},he={range:[[-10,10],[-10,10]],scale:[500,500],grid:!0,gridOpacity:.1,gridStep:[1,1],axes:!0,axisCenter:[0,0],axisOpacity:1,axisLabels:[],tickMarks:!0,tickStep:[2,2],tickLen:[.5,.5],tickOpacity:1,labelStep:[1,1],yLabelFormat:function(e){return e},xLabelFormat:function(e){return e},snap:[.5,.5],isDragging:!1,setIsDragging:function(e){return e},mouseMove:null,setMouseMove:function(e){return null}},de=s.a.createContext(he),ve=function(e){var t,n,r,a,i,c,l=e.options,f=e.children,p=Object.entries(Object(u.a)({},he,{},l)).reduce((function(e,t){var n=Object(o.a)(t,2),r=n[0],a=n[1];return e[r]=a,r.match(/.*Opacity$/)||"range"===r||"number"!==typeof a||(e[r]=[a,a]),"range"!==r&&"gridRange"!==r||(Array.isArray(a)?Array.isArray(a[0])||(e[r]=[[-a[0],a[0]],[-a[1],a[1]]]):"number"===typeof a&&(e[r]=[[-a,a],[-a,a]])),e}),{}),E=p.scale,m=p.grid,y=p.axes,h=p.tickMarks,d=p.labels,v=p.range,g=p.axisCenter,b=p.axisLabels,k="",A="";if(2===b.length){var O=S(v,E);r=O[0],a=O[1];var x=I(g,v,E);t=x[0],n=x[1],k=ce(b[0]),A=ce(b[1]),c=t-a/2,i=n-r/2}var M=s.a.useState(!1),j=Object(o.a)(M,2),P=j[0],L=j[1],D=s.a.useState(null),_=Object(o.a)(D,2),R=_[0],F=_[1],B=function(){L(!1),F(null)};return s.a.createElement(de.Provider,{value:Object(u.a)({},p,{isDragging:P,setIsDragging:L,mouseMove:R,setMouseMove:F})},s.a.createElement("div",null,s.a.createElement("div",{style:{width:E[0],marginLeft:i,padding:"5px 0",userSelect:"none"},dangerouslySetInnerHTML:{__html:A}}),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:E[0],height:E[1],className:"graphie",style:{cursor:P?"move":"inherit"},onMouseMove:function(e){P&&(e.persist(),F(e))},onMouseUp:B,onMouseLeave:B},m&&s.a.createElement(ae,null),y&&s.a.createElement(Q,null),h&&s.a.createElement(ye,null),d&&s.a.createElement(le,null),f),s.a.createElement("div",{style:{marginTop:c,padding:"0 5px",userSelect:"none"},dangerouslySetInnerHTML:{__html:k}}))))},ge=function(){var e=s.a.useContext(de);if(void 0===e)throw Error("useGraphie must be used in a GraphieProvider");return e},be=function(e){var t=e.point,n=e.setPoint,r=e.snap,a=e.style,i=ge(),o=i.range,c=i.scale,l=i.axisCenter,f=i.isDragging,p=i.setIsDragging,E=i.mouseMove,m=i.snap,y=s.a.useRef();s.a.useEffect((function(){if(f===y.current&&E){var e=E.nativeEvent,t=e.offsetX,a=e.offsetY,i=w([t,a],o,c);n(F(i,r||m))}}),[f,E]);var h=t.map((function(e,t){return e+l[t]})),d=G(h,o,c),v=.25*c[0]/(o[0][1]-o[0][0]),g=Object(u.a)({fill:re.PINK,stroke:"transparent",strokeWidth:5,cursor:"move"},a);return s.a.createElement("circle",{ref:y,onMouseDown:function(){return p(y.current)},cx:d[0],cy:d[1],r:v,style:g})},ke=function(e){var t=e.vertex,n=e.point,r=e.setVertex,a=e.setPoint,i=e.style,s=ge(),l=Object(o.a)(s.range,1)[0],f=Math.abs(_([t,n])),p=function(e){return t[1]<n[1]?f*Math.abs(e-t[0])+t[1]:-f*Math.abs(e-t[0])+t[1]},E=[l[0],p(l[0])],m=[l[1],p(l[1])],y=Object(u.a)({stroke:re.BLUE},i);return c.createElement("g",{style:y},c.createElement(z,{start:E,end:t}),c.createElement(z,{start:t,end:m}),c.createElement(be,{point:t,setPoint:function(e){return e[0]===n[0]?null:r(e)}}),c.createElement(be,{point:n,setPoint:function(e){return e[0]===t[0]?null:a(e)}}))},Ae=function(e){var t=e.axis,n=e.setAxis,r=e.snap,a=e.vertical,i=void 0!==a&&a,s=e.style,l=ge(),f=l.range,p=l.scale,E=l.isDragging,m=l.setIsDragging,y=l.mouseMove,h=l.snap,d=c.useRef();c.useEffect((function(){if(E===d.current&&y){var e=y.nativeEvent,t=e.offsetX,a=e.offsetY,c=w([t,a],f,p),s=F(c,r||h),l=Object(o.a)(s,2),u=l[0],m=l[1];n(i?u:m)}}),[E,y,h,f,p,n,r,i]);var v=i?[t,f[1][0]]:[f[0][0],t],g=i?[t,f[1][1]]:[f[0][1],t],b=G(v,f,p),k=Object(o.a)(b,2),A=k[0],O=k[1],x=G(g,f,p),M=Object(o.a)(x,2),j=M[0],P=M[1],L=Object(u.a)({stroke:re.PINK,strokeWidth:3,cursor:"move"},s);return c.createElement("line",{onMouseDown:function(){return m(d.current)},ref:d,x1:A,x2:j,y1:O,y2:P,style:L})},Oe=function(e){var t=e.radius,n=e.setRadius,r=e.center,a=e.setCenter,i=s.a.useState([t,r[1]]),c=Object(o.a)(i,2),l=c[0],u=c[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(K,{center:r,radius:t,style:{stroke:re.BLUE}}),s.a.createElement(be,{point:l,setPoint:function(e){var t=[e[0]-r[0],e[1]-r[1]];n(Math.sqrt(t[0]*t[0]+t[1]*t[1])),u(e)}}),s.a.createElement(be,{point:r,setPoint:function(e){var t=[l[0]-r[0]+e[0],l[1]-r[1]+e[1]];u(t),a(e)}}))},xe=function(e){var t=e.axis,n=e.point1,r=e.point2,a=e.setAxis,i=e.setPoint1,o=e.setPoint2,c=e.style,l=t,f=Math.log((n[1]-l)/(r[1]-l))/(n[0]-r[0]),p=(n[1]-l)/Math.exp(f*n[0]),E=Object(u.a)({stroke:re.BLUE,strokeWidth:3},c);return s.a.createElement("g",{style:E},s.a.createElement(te,{a:p,b:Math.exp(f),k:l}),s.a.createElement(Ae,{axis:l,setAxis:function(e){return l<n[1]===l<r[1]&&e<n[1]===e<r[1]&&e!==n[1]&&e!==r[1]?a(e):null}}),s.a.createElement(be,{point:n,setPoint:function(e){if(e[0]===r[0])return null;e[1]<l!==r[1]<l?(i(e),o([r[0],-r[1]])):i(e)}}),s.a.createElement(be,{point:r,setPoint:function(e){if(e[0]===n[0])return null;e[1]<l!==n[1]<l?(o(e),i([n[0],-n[1]])):o(e)}}))},Me=function(e){var t=e.point1,n=e.point2,r=e.setPoint1,a=e.setPoint2,i=e.style;return s.a.createElement("g",{style:i},s.a.createElement(z,{start:t,end:n}),s.a.createElement(be,{point:t,setPoint:r}),s.a.createElement(be,{point:n,setPoint:a}))},je=function(e){var t,n,r=e.point1,a=e.point2,i=e.setPoint1,c=e.setPoint2,l=e.style,u=ge(),f=Object(o.a)(u.range,2),p=f[0],E=f[1],m=R([r,a]),y=Object(o.a)(m,2),h=y[0],d=y[1],v=function(e){return h*e+d};return r[0]<=a[0]?Math.abs(h)===1/0?(n=a[1]<r[1]?E[0]:E[1],t=[a[0],n]):t=[p[1],v(p[1])]:t=[p[0],v(p[0])],s.a.createElement("g",{style:l},s.a.createElement(z,{start:r,end:t}),s.a.createElement(be,{point:r,setPoint:i}),s.a.createElement(be,{point:a,setPoint:c}))},Pe=function(e){var t=e.point1,n=e.point2,r=e.setPoint1,a=e.setPoint2,i=e.style,c=ge(),l=Object(o.a)(c.range,2),u=l[0],f=l[1],p=R([t,n]),E=Object(o.a)(p,2),m=E[0],y=E[1],h=function(e){return m*e+y},d=m===1/0?[[t[0],f[0]],[t[0],f[1]]]:[[u[0],h(u[0])],[u[1],h(u[1])]],v=Object(o.a)(d,2),g=v[0],b=v[1];return s.a.createElement("g",{style:i},s.a.createElement(z,{start:g,end:b}),s.a.createElement(be,{point:t,setPoint:r}),s.a.createElement(be,{point:n,setPoint:a}))},Le=function(e){var t=e.axis,n=e.point1,r=e.point2,a=e.setAxis,i=e.setPoint1,c=e.setPoint2,l=e.style,f=ge(),p=Object(o.a)(f.range,1)[0],E=t,m=Math.log((n[0]-E)/(r[0]-E))/(n[1]-r[1]),y=(n[0]-E)/Math.exp(m*n[1]),h=1/m,d=Math.E,v=y>0?-1/m*Math.log(y):-Math.log(-y)/m,g=y>0?[t,p[1]]:[p[0],t],b=Object(u.a)({stroke:re.BLUE,strokeWidth:3},l);return s.a.createElement("g",{style:b},s.a.createElement(ue,{a:h,b:d,h:E,k:v,range:g}),s.a.createElement(Ae,{axis:E,setAxis:function(e){return E<n[0]===E<r[0]&&e<n[0]===e<r[0]&&e!==n[0]&&e!==r[0]?a(e):null},vertical:!0}),s.a.createElement(be,{point:n,setPoint:function(e){if(e[1]===r[1]||e[0]===r[0])return null;e[0]<E!==r[0]<E?(i(e),c([-r[0],r[1]])):i(e)}}),s.a.createElement(be,{point:r,setPoint:function(e){if(e[1]===n[1]||e[0]===n[0])return null;e[0]<E!==n[0]<E?(c(e),i([-n[0],n[1]])):c(e)}}))},De=function(e){var t=e.vertex,n=e.point,r=e.setVertex,a=e.setPoint,i=e.style,o=(n[1]-t[1])/Math.pow(n[0]-t[0],2),c=-2*o*t[0],l=o*t[0]*t[0]+t[1];return s.a.createElement("g",{style:i},s.a.createElement(fe,{a:o,b:c,c:l}),s.a.createElement(be,{point:t,setPoint:r}),s.a.createElement(be,{point:n,setPoint:a}))},_e=function(e){var t=e.midpoint,n=e.maxpoint,r=e.setMidpoint,a=e.setMaxpoint,i=e.style,o=t[1]-n[1],c=Math.PI/(2*(t[0]-n[0])),l=n[0]*c+Math.PI/2,f=t[1],p=Object(u.a)({stroke:re.BLUE},i);return s.a.createElement("g",{style:p},s.a.createElement(me,{a:o,b:c,c:l,d:f}),s.a.createElement(be,{point:t,setPoint:function(e){return e[0]===n[0]?null:r(e)}}),s.a.createElement(be,{point:n,setPoint:function(e){return e[0]===t[0]?null:a(e)}}))},Re=function(e){var t=e.point1,n=e.point2,r=e.setPoint1,a=e.setPoint2,i=e.style,c=ge(),l=Object(o.a)(c.range,1)[0],f=n[1]-t[1],p=Math.PI/(4*(n[0]-t[0])),E=t[0]*p,m=t[1],y=Object(u.a)({stroke:re.BLUE},i);return s.a.createElement("g",{style:y},s.a.createElement(ee,{fn:function(e){return f*Math.tan(p*e-E)+m},shade:!1,swapAxes:!1,range:l}),s.a.createElement(be,{point:t,setPoint:function(e){return e[0]===n[0]?null:r(e)}}),s.a.createElement(be,{point:n,setPoint:function(e){return e[0]===t[0]?null:a(e)}}))},Fe=(n(14),function(){return c.createElement(Y,{center:[1,1],radius:5,startAngle:0,endAngle:.75*Math.PI,sector:!1,style:{stroke:"var(--graphie-LIGHT_RED)"}})}),Be=function(){return c.createElement(X,{key:"test-asymptote",fn:function(e){return(1+5*e)/(e-1)}})},Ce=function(){return c.createElement(K,{center:[-3,5],radius:4,style:{stroke:"var(--graphie-GREEN)"}})},Ge=function(){return c.createElement(V,{center:[5,-1],radii:[4,2],style:{stroke:"var(--graphie-MAROON_C)",strokeWidth:3}})},we=function(){return c.createElement($,{endpointArray:[{point:[-8,8],open:!1},{point:[8,-8],open:!0}],style:{stroke:"var(--graphie-TEAL_D)",fill:"var(--graphie-TEAL_D)"}})},Se=function(){return c.createElement(te,{a:.5,b:Math.E,h:-1,k:3,style:{stroke:"var(--graphie-TEAL_D)"}})},Ie=function(){return c.createElement(z,{start:[-8,8],end:[8,-8],style:{stroke:"var(--graphie-BLUE)",strokeWidth:3}})},Ne=function(){return c.createElement(ue,{a:1,b:2,h:-1,k:3,style:{stroke:"var(--graphie-TEAL_D)"}})},Te=function(){return c.createElement(fe,{a:1,b:3,c:4,style:{stroke:"var(--graphie-RED_D)"}})},Ue=function(){return c.createElement(Z,{fn:function(e){return[e,(1+5*e)/(e-1)]},shade:!0,style:{stroke:"var(--graphie-PINK)",strokeWidth:3}})},Ye=function(){var e=ge(),t=e.range,n=e.scale,r=[[-9,0],[0,-9],[9,0],[0,9]].map((function(e){return a.scalePoint(e,t,n).join()})),i="M".concat(r.join("L"),"z");return c.createElement(H,{d:i,style:{stroke:"var(--graphie-MINT_C)",fill:"none"}})},He=function(){return c.createElement(pe,{fnArray:[function(e){return e/3-4},function(e){return.5*e*e+3}],rangeArray:[[-10,-1],[-1,10]],endpoints:[["none","open"],["closed","none"]],style:{stroke:"var(--graphie-PURPLE_D)"}})},We=function(){return c.createElement(ee,{fn:function(e){return 3*Math.pow(Math.E,e)},range:[-10,10],swapAxes:!1,shade:!0})},Ke=function(){return c.createElement(Ee,{fn:function(e){return[1-Math.sin(e),e]},style:{stroke:"var(--graphie-ORANGE)"}})},Ve=function(){return c.createElement(J,{points:[[0,8],[-8,5],[-4,-6],[4,-6],[8,5]],style:{fill:"var(--graphie-KA_BLUE)",opacity:.6}})},ze=function(){return c.createElement(W,{x:-8,y:4,width:10,height:12,style:{fill:"var(--graphie-PURPLE_D)",stroke:"var(--graphie-PURPLE_E)",strokeWidth:5}})},qe=function(){return c.createElement(me,{a:3,b:1,c:-Math.PI/2,d:4,style:{stroke:"var(--graphie-PURPLE)"}})},Je=function(){var e=c.useState([0,0]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=c.useState([5,5]),i=Object(o.a)(a,2),s=i[0],l=i[1];return c.createElement(ke,{vertex:n,setVertex:r,point:s,setPoint:l})},Xe=function(){var e=c.useState([5,5]),t=Object(o.a)(e,2),n=t[0],r=t[1];return c.createElement(be,{point:n,setPoint:r})},Qe=function(){var e=c.useState(5),t=Object(o.a)(e,2),n=t[0],r=t[1];return c.createElement(Ae,{axis:n,setAxis:r,vertical:!0})},$e=function(){var e=c.useState(4),t=Object(o.a)(e,2),n=t[0],r=t[1],a=c.useState([0,0]),i=Object(o.a)(a,2),s=i[0],l=i[1];return c.createElement(Oe,{center:s,radius:n,setCenter:l,setRadius:r})},Ze=function(){var e=c.useState(0),t=Object(o.a)(e,2),n=t[0],r=t[1],a=c.useState([0,2]),i=Object(o.a)(a,2),s=i[0],l=i[1],u=c.useState([2,4]),f=Object(o.a)(u,2),p=f[0],E=f[1];return c.createElement(xe,{axis:n,point1:s,point2:p,setAxis:r,setPoint1:l,setPoint2:E})},et=function(){var e=c.useState([-5,5]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=c.useState([5,-5]),i=Object(o.a)(a,2),s=i[0],l=i[1];return c.createElement(Pe,{point1:n,point2:s,setPoint1:r,setPoint2:l,style:{stroke:"var(--graphie-BLUE)"}})},tt=function(){var e=c.useState([-5,-5]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=c.useState([5,5]),i=Object(o.a)(a,2),s=i[0],l=i[1];return c.createElement(je,{point1:n,point2:s,setPoint1:r,setPoint2:l,style:{stroke:"var(--graphie-BLUE)"}})},nt=function(){var e=c.useState([-5,5]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=c.useState([5,-5]),i=Object(o.a)(a,2),s=i[0],l=i[1];return c.createElement(Me,{point1:n,point2:s,setPoint1:r,setPoint2:l,style:{stroke:"var(--graphie-BLUE)"}})},rt=function(){var e=c.useState(0),t=Object(o.a)(e,2),n=t[0],r=t[1],a=c.useState([1,0]),i=Object(o.a)(a,2),s=i[0],l=i[1],u=c.useState([4,2]),f=Object(o.a)(u,2),p=f[0],E=f[1];return c.createElement(Le,{axis:n,point1:s,point2:p,setAxis:r,setPoint1:l,setPoint2:E})},at=function(){var e=c.useState([5,5]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=c.useState([0,0]),i=Object(o.a)(a,2),s=i[0],l=i[1];return c.createElement(De,{point:n,setPoint:r,vertex:s,setVertex:l,style:{stroke:"var(--graphie-BLUE)"}})},it=function(){var e=c.useState([3,5]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=c.useState([0,0]),i=Object(o.a)(a,2),s=i[0],l=i[1];return c.createElement(_e,{maxpoint:n,midpoint:s,setMaxpoint:r,setMidpoint:l,style:{stroke:"var(--graphie-BLUE)"}})},ot=function(){var e=c.useState([3,5]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=c.useState([0,0]),i=Object(o.a)(a,2),s=i[0],l=i[1];return c.createElement(Re,{point1:n,point2:s,setPoint1:r,setPoint2:l,style:{stroke:"var(--graphie-BLUE)"}})};var ct=document.getElementById("root");l.render(c.createElement((function(){var e=c.useState([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=c.useState([]),s=Object(o.a)(a,2),l=s[0],u=s[1],f={arc:c.createElement(Fe,{key:"test-arc"}),asymptotes:c.createElement(Be,{key:"test-asymptotes"}),circle:c.createElement(Ce,{key:"test-circle"}),ellipse:c.createElement(Ge,{key:"test-ellipse"}),endpointCircles:c.createElement(we,{key:"test-endpoint-circles"}),exponential:c.createElement(Se,{key:"test-exponential"}),line:c.createElement(Ie,{key:"test-line"}),logarithmic:c.createElement(Ne,{key:"test-logarithmic"}),parabola:c.createElement(Te,{key:"test-parabola"}),parametric:c.createElement(Ue,{key:"test-parametric"}),path:c.createElement(Ye,{key:"test-path"}),piecewise:c.createElement(He,{key:"test-piecewise"}),plot:c.createElement(We,{key:"test-plot"}),polar:c.createElement(Ke,{key:"test-polar"}),polygon:c.createElement(Ve,{key:"test-polygon"}),rect:c.createElement(ze,{key:"test-rect"}),sinusoid:c.createElement(qe,{key:"test-sinusoid"})},p={"absolute value":c.createElement(Je,{key:"test-movable-absolute-value"}),asymptote:c.createElement(Qe,{key:"test-movable-asymptote"}),point:c.createElement(Xe,{key:"test-movable-point"}),circle:c.createElement($e,{key:"test-movable-circle"}),exponential:c.createElement(Ze,{key:"test-movable-exponential"}),line:c.createElement(et,{key:"test-movable-line"}),"line ray":c.createElement(tt,{key:"test-movable-line ray"}),"line segment":c.createElement(nt,{key:"test-movable-line segment"}),logarithmic:c.createElement(rt,{key:"test-movable-logarithmic"}),parabola:c.createElement(at,{key:"test-movable-parabola"}),sinusoid:c.createElement(it,{key:"test-movable-sinusoid"}),tangent:c.createElement(ot,{key:"test-movable-tangent"})};return c.createElement("div",{style:{padding:30,position:"relative",border:"thin solid purple",display:"flex"}},c.createElement("section",null,c.createElement(ve,{options:{axisArrows:"<->",gridStep:1,isMobile:!1,xLabelFormat:function(e){return"\\small{".concat(e,"}")},yLabelFormat:function(e){return"\\small{".concat(e,"}")},axes:!0,grid:!0,tickMarks:!0,tickStep:1,labelStep:1,labels:!0,axisLabels:["x","f(x)"],range:[[-10,10],[-10,10]],scale:[600,600]}},n.map((function(e){return f[e]})),l.map((function(e){return p[e]})))),c.createElement("section",null,c.createElement("section",null,c.createElement("h2",null,"Graph Shapes"),c.createElement("form",null,Object.keys(f).map((function(e){return c.createElement("div",{key:e},c.createElement("label",null,c.createElement("input",{type:"checkbox",checked:n.includes(e),onChange:function(){return n.includes(e)?r(n.filter((function(t){return t!==e}))):r([].concat(Object(i.a)(n),[e]))}})," ",e))})))),c.createElement("section",null,c.createElement("h2",null,"Graph Movables"),c.createElement("form",null,Object.keys(p).map((function(e){return c.createElement("div",{key:e},c.createElement("label",null,c.createElement("input",{type:"checkbox",checked:l.includes(e),onChange:function(){return l.includes(e)?u(l.filter((function(t){return t!==e}))):u([].concat(Object(i.a)(l),[e]))}})," ",e))}))))))}),null),ct)},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]])}));
//# sourceMappingURL=main.2d140dc7.chunk.js.map