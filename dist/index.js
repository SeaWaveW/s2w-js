/*! For license information please see index.js.LICENSE.txt */
!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.s2w=t():n.s2w=t()}(this,(function(){return function(){"use strict";var n={d:function(t,r){for(var e in r)n.o(r,e)&&!n.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:r[e]})},o:function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r:function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}},t={};n.r(t),n.d(t,{browser:function(){return S},color:function(){return N},"default":function(){return w},each:function(){return O},isArr:function(){return l},isBoo:function(){return m},isEnum:function(){return b},isFun:function(){return p},isJQ:function(){return g},isNan:function(){return v},isNull:function(){return h},isNum:function(){return y},isObj:function(){return j},isStr:function(){return x},isUnd:function(){return M},random:function(){return I}});var r=function(n){return n instanceof Array},e=function(n){return"boolean"==typeof n},o=function(n){return"function"==typeof n},i=function(n){return n instanceof jQuery},u=function(n){return"[object Object]"===Object.prototype.toString.call(n)},s=function(n){return!(r(n)||o(n)||u(n)||i(n)||n==n)},c=function(n){return"number"==typeof n},f=function(n){return"string"==typeof n},a=function(n){var t=function(n){};return c(n)?t=function(t){for(var r=0;r<n;r++)t(r+1,r)}:f(n)&&(t=function(t){for(var r=0;r<n.length;r++)t(n[r],r)}),{"for":t}},d=function(n,t,r){var o=c(n)?Math.round(n):0,i=c(t)?Math.round(t):1,u=e(r)?r?16:0:c(r)?r>16?16:Math.floor(r):0,s=0;if(u){if((s=Math.random()*(i+1))<o&&(s=d(o,i,u)),u){var f="".concat(s).split("."),l=String(Number("0.".concat(f[1].slice(0,u)))).split(".")[1];l.length<u&&a(u-l.length)["for"]((function(){l+=d(1,9,0)})),f[1]=l,s=Number(f.join("."))}}else(s=Math.floor(Math.random()*(i+1)))<o&&(s=d(o,i,u));return s},l=r,m=e,b=function(n){return n%2==0},p=o,g=i,v=s,h=function(n){return null===n},y=c,j=u,x=f,M=function(n){return void 0===n},S=function(){var n,t={name:"",version:""},r=navigator.userAgent;return(n=/edg\/([\d\.]+)/i.exec(r))?(t.name="Edge",t.version=n[1]):/msie/i.test(r)?(t.name="IE",t.version=/msie ([\d\.]+)/i.exec(r)[1]):/Trident/i.test(r)?(t.name="IE",t.version=/rv:([\d\.]+)/i.exec(r)[1]):/chrome/i.test(r)?(t.name="Chrome",t.version=/chrome\/([\d\.]+)/i.exec(r)[1]):/safari/i.test(r)?(t.name="Safari",t.version=/version\/([\d\.]+)/i.exec(r)[1]):/firefox/i.test(r)&&(t.name="Firefox",t.version=/firefox\/([\d\.]+)/i.exec(r)[1]),t},N=function(n,t,r){r=Math.max(Math.min(Number(r),1),0);var e=parseInt(n.substring(1,3),16),o=parseInt(n.substring(3,5),16),i=parseInt(n.substring(5,7),16),u=parseInt(t.substring(1,3),16),s=parseInt(t.substring(3,5),16),c=parseInt(t.substring(5,7),16),f=Math.round(e*(1-r)+u*r),a=Math.round(o*(1-r)+s*r),d=Math.round(i*(1-r)+c*r);return"#"+("0"+(f||0).toString(16)).slice(-2)+("0"+(a||0).toString(16)).slice(-2)+("0"+(d||0).toString(16)).slice(-2)},O=a,I=d,w={isArr:l,isBoo:m,isEnum:b,isFun:p,isJQ:g,isNan:v,isNull:h,isNum:y,isObj:j,isStr:x,isUnd:M,browser:S,color:N,each:O,random:I};return t}()}));