/*! For license information please see s2w-js-min.js.LICENSE.txt */
!function(n,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.s2w=r():n.s2w=r()}(this,(function(){return function(){"use strict";var n={d:function(r,t){for(var e in t)n.o(t,e)&&!n.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:t[e]})},o:function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},r:function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},r={};n.r(r),n.d(r,{browser:function(){return S},color:function(){return N},"default":function(){return w},each:function(){return O},isArr:function(){return l},isBoo:function(){return m},isEnum:function(){return b},isFun:function(){return p},isJQ:function(){return g},isNan:function(){return v},isNull:function(){return h},isNum:function(){return y},isObj:function(){return j},isStr:function(){return x},isUnd:function(){return M},random:function(){return I}});var t=function(n){return Array.isArray(n)},e=function(n){return"boolean"==typeof n},o=function(n){return"function"==typeof n},i=function(n){return n instanceof jQuery},u=function(n){return"[object Object]"===Object.prototype.toString.call(n)},s=function(n){return!(t(n)||o(n)||u(n)||i(n)||n==n)},c=function(n){return"number"==typeof n},f=function(n){return"string"==typeof n},a=function(n){var r=function(n){};return c(n)?r=function(r){for(var t=0;t<n;t++)r(t+1,t)}:f(n)&&(r=function(r){for(var t=0;t<n.length;t++)r(n[t],t)}),{"for":r}},d=function(n,r,t){var o=c(n)?Math.round(n):0,i=c(r)?Math.round(r):1,u=e(t)?t?16:0:c(t)?t>16?16:Math.floor(t):0,s=0;if(u){if((s=Math.random()*(i+1))<o&&(s=d(o,i,u)),u){var f="".concat(s).split("."),l=String(Number("0.".concat(f[1].slice(0,u)))).split(".")[1];l.length<u&&a(u-l.length)["for"]((function(){l+=d(1,9,0)})),f[1]=l,s=Number(f.join("."))}}else(s=Math.floor(Math.random()*(i+1)))<o&&(s=d(o,i,u));return s},l=t,m=e,b=function(n){return n%2==0},p=o,g=i,v=s,h=function(n){return null===n},y=c,j=u,x=f,M=function(n){return void 0===n},S=function(){var n,r={name:"",version:""},t=navigator.userAgent;return(n=/edg\/([\d\.]+)/i.exec(t))?(r.name="Edge",r.version=n[1]):/msie/i.test(t)?(r.name="IE",r.version=/msie ([\d\.]+)/i.exec(t)[1]):/Trident/i.test(t)?(r.name="IE",r.version=/rv:([\d\.]+)/i.exec(t)[1]):/chrome/i.test(t)?(r.name="Chrome",r.version=/chrome\/([\d\.]+)/i.exec(t)[1]):/safari/i.test(t)?(r.name="Safari",r.version=/version\/([\d\.]+)/i.exec(t)[1]):/firefox/i.test(t)&&(r.name="Firefox",r.version=/firefox\/([\d\.]+)/i.exec(t)[1]),r},N=function(n,r,t){t=Math.max(Math.min(Number(t),1),0);var e=parseInt(n.substring(1,3),16),o=parseInt(n.substring(3,5),16),i=parseInt(n.substring(5,7),16),u=parseInt(r.substring(1,3),16),s=parseInt(r.substring(3,5),16),c=parseInt(r.substring(5,7),16),f=Math.round(e*(1-t)+u*t),a=Math.round(o*(1-t)+s*t),d=Math.round(i*(1-t)+c*t);return"#"+("0"+(f||0).toString(16)).slice(-2)+("0"+(a||0).toString(16)).slice(-2)+("0"+(d||0).toString(16)).slice(-2)},O=a,I=d,w={isArr:l,isBoo:m,isEnum:b,isFun:p,isJQ:g,isNan:v,isNull:h,isNum:y,isObj:j,isStr:x,isUnd:M,browser:S,color:N,each:O,random:I};return r}()}));