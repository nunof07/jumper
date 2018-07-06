/*!
 * MIT License
 * 
 * Copyright (c) 2018 Nuno Freitas
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{111:function(t,e,n){var r=n(90);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},112:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},1137:function(t,e,n){"use strict";var r=n(87);Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressBar=void 0;var o=r(n(86)),i=r(n(85)),u=function(){function t(e,n,r){(0,o.default)(this,t),this.graphics=e,this.bar=n,this.complete=r}return(0,i.default)(t,[{key:"render",value:function(){this.graphics.strokeRectShape(this.bar).fillRectShape(this.complete)}},{key:"update",value:function(t){this.complete.width=t*this.bar.width}},{key:"destroy",value:function(){this.graphics.destroy()}}]),t}();e.ProgressBar=u},1138:function(t,e,n){"use strict";var r=n(145),o=n(87);Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressBarFactory=void 0;var i=o(n(86)),u=o(n(85)),c=n(1137),s=r(n(110)),f=function(){function t(e,n,r){(0,i.default)(this,t),this.scene=e,this.size=n,this.position=r}return(0,u.default)(t,[{key:"create",value:function(){var t=this.createGraphics(),e=this.createComplete(),n=s.Geom.Rectangle.Clone(e),r=new c.ProgressBar(t,n,e);return this.scene.load.on("progress",function(t){r.update(t),r.render()}),this.scene.load.on("complete",function(){r.destroy()}),r}},{key:"createGraphics",value:function(){return this.scene.add.graphics({x:0,y:0,fillStyle:{color:16777215,alpha:1},lineStyle:{width:2,color:16777215,alpha:1}})}},{key:"createComplete",value:function(){var t=new s.Geom.Rectangle(0,0,this.size.width,this.size.height);return s.Geom.Rectangle.CenterOn(t,this.position.x,this.position.y),t}}]),t}();e.ProgressBarFactory=f},1139:function(t,e,n){var r=n(468);function o(e,n){return t.exports=o=r||function(t,e){return t.__proto__=e,t},o(e,n)}t.exports=o},1140:function(t,e,n){var r=n(89);r(r.S,"Object",{create:n(233)})},1141:function(t,e,n){n(1140);var r=n(33).Object;t.exports=function(t,e){return r.create(t,e)}},1142:function(t,e,n){t.exports=n(1141)},1143:function(t,e,n){var r=n(90),o=n(111),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(480)(Function.call,n(238).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},1144:function(t,e,n){var r=n(89);r(r.S,"Object",{setPrototypeOf:n(1143).set})},1145:function(t,e,n){n(1144),t.exports=n(33).Object.setPrototypeOf},1146:function(t,e,n){var r=n(473),o=n(474);n(481)("getPrototypeOf",function(){return function(t){return o(r(t))}})},1147:function(t,e,n){n(1146),t.exports=n(33).Object.getPrototypeOf},1148:function(t,e,n){t.exports=n(1147)},1149:function(t,e,n){n(226)("observable")},1150:function(t,e,n){n(226)("asyncIterator")},1151:function(t,e){},1152:function(t,e,n){var r=n(67),o=n(471).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},1153:function(t,e,n){var r=n(484);t.exports=Array.isArray||function(t){return"Array"==r(t)}},1154:function(t,e,n){var r=n(232),o=n(472),i=n(237);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),s=i.f,f=0;c.length>f;)s.call(t,u=c[f++])&&e.push(u);return e}},1155:function(t,e,n){var r=n(142)("meta"),o=n(90),i=n(66),u=n(64).f,c=0,s=Object.isExtensible||function(){return!0},f=!n(112)(function(){return s(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";a(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;a(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&s(t)&&!i(t,r)&&a(t),t}}},1156:function(t,e,n){"use strict";var r=n(55),o=n(66),i=n(65),u=n(89),c=n(476),s=n(1155).KEY,f=n(112),a=n(230),l=n(228),p=n(142),d=n(84),v=n(227),h=n(226),y=n(1154),b=n(1153),m=n(111),g=n(90),x=n(67),O=n(236),w=n(144),_=n(233),S=n(1152),j=n(238),P=n(64),k=n(232),M=j.f,L=P.f,E=S.f,C=r.Symbol,T=r.JSON,F=T&&T.stringify,R=d("_hidden"),A=d("toPrimitive"),I={}.propertyIsEnumerable,U=a("symbol-registry"),N=a("symbols"),B=a("op-symbols"),G=Object.prototype,z="function"==typeof C,D=r.QObject,J=!D||!D.prototype||!D.prototype.findChild,H=i&&f(function(){return 7!=_(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=M(G,e);r&&delete G[e],L(t,e,n),r&&t!==G&&L(G,e,r)}:L,V=function(t){var e=N[t]=_(C.prototype);return e._k=t,e},W=z&&"symbol"==typeof C.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof C},$=function(t,e,n){return t===G&&$(B,e,n),m(t),e=O(e,!0),m(n),o(N,e)?(n.enumerable?(o(t,R)&&t[R][e]&&(t[R][e]=!1),n=_(n,{enumerable:w(0,!1)})):(o(t,R)||L(t,R,w(1,{})),t[R][e]=!0),H(t,e,n)):L(t,e,n)},q=function(t,e){m(t);for(var n,r=y(e=x(e)),o=0,i=r.length;i>o;)$(t,n=r[o++],e[n]);return t},K=function(t){var e=I.call(this,t=O(t,!0));return!(this===G&&o(N,t)&&!o(B,t))&&(!(e||!o(this,t)||!o(N,t)||o(this,R)&&this[R][t])||e)},Y=function(t,e){if(t=x(t),e=O(e,!0),t!==G||!o(N,e)||o(B,e)){var n=M(t,e);return!n||!o(N,e)||o(t,R)&&t[R][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=E(x(t)),r=[],i=0;n.length>i;)o(N,e=n[i++])||e==R||e==s||r.push(e);return r},X=function(t){for(var e,n=t===G,r=E(n?B:x(t)),i=[],u=0;r.length>u;)!o(N,e=r[u++])||n&&!o(G,e)||i.push(N[e]);return i};z||(c((C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(B,n),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),H(this,t,w(1,n))};return i&&J&&H(G,t,{configurable:!0,set:e}),V(t)}).prototype,"toString",function(){return this._k}),j.f=Y,P.f=$,n(471).f=S.f=Q,n(237).f=K,n(472).f=X,i&&!n(143)&&c(G,"propertyIsEnumerable",K,!0),v.f=function(t){return V(d(t))}),u(u.G+u.W+u.F*!z,{Symbol:C});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)d(Z[tt++]);for(var et=k(d.store),nt=0;et.length>nt;)h(et[nt++]);u(u.S+u.F*!z,"Symbol",{for:function(t){return o(U,t+="")?U[t]:U[t]=C(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in U)if(U[e]===t)return e},useSetter:function(){J=!0},useSimple:function(){J=!1}}),u(u.S+u.F*!z,"Object",{create:function(t,e){return void 0===e?_(t):q(_(t),e)},defineProperty:$,defineProperties:q,getOwnPropertyDescriptor:Y,getOwnPropertyNames:Q,getOwnPropertySymbols:X}),T&&u(u.S+u.F*(!z||f(function(){var t=C();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!W(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!W(e))return e}),r[1]=e,F.apply(T,r)}}),C.prototype[A]||n(88)(C.prototype,A,C.prototype.valueOf),l(C,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},1157:function(t,e,n){n(1156),n(1151),n(1150),n(1149),t.exports=n(33).Symbol},1158:function(t,e,n){t.exports=n(1157)},1159:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},1160:function(t,e){t.exports=function(){}},1161:function(t,e,n){"use strict";var r=n(1160),o=n(1159),i=n(234),u=n(67);t.exports=n(477)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},1162:function(t,e,n){n(1161);for(var r=n(55),o=n(88),i=n(234),u=n(84)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var f=c[s],a=r[f],l=a&&a.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},1163:function(t,e,n){var r=n(55).document;t.exports=r&&r.documentElement},1164:function(t,e,n){var r=n(235),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},1165:function(t,e,n){var r=n(235),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},1166:function(t,e,n){var r=n(67),o=n(1165),i=n(1164);t.exports=function(t){return function(e,n,u){var c,s=r(e),f=o(s.length),a=i(u,f);if(t&&n!=n){for(;f>a;)if((c=s[a++])!=c)return!0}else for(;f>a;a++)if((t||a in s)&&s[a]===n)return t||a||0;return!t&&-1}}},1167:function(t,e,n){var r=n(64),o=n(111),i=n(232);t.exports=n(65)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,s=0;c>s;)r.f(t,n=u[s++],e[n]);return t}},1168:function(t,e,n){"use strict";var r=n(233),o=n(144),i=n(228),u={};n(88)(u,n(84)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},1169:function(t,e,n){var r=n(235),o=n(239);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),s=r(n),f=c.length;return s<0||s>=f?t?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===f||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536}}},1170:function(t,e,n){"use strict";var r=n(1169)(!0);n(477)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},1171:function(t,e,n){n(1170),n(1162),t.exports=n(227).f("iterator")},1172:function(t,e,n){t.exports=n(1171)},1173:function(t,e,n){var r=n(1172),o=n(1158);function i(t){return(i="function"==typeof o&&"symbol"==typeof r?function(t){return typeof t}:function(t){return t&&"function"==typeof o&&t.constructor===o&&t!==o.prototype?"symbol":typeof t})(t)}function u(e){return"function"==typeof o&&"symbol"===i(r)?t.exports=u=function(t){return i(t)}:t.exports=u=function(t){return t&&"function"==typeof o&&t.constructor===o&&t!==o.prototype?"symbol":i(t)},u(e)}t.exports=u},1174:function(t,e,n){var r=n(89);r(r.S+r.F*!n(65),"Object",{defineProperty:n(64).f})},1175:function(t,e,n){n(1174);var r=n(33).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},1176:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},1177:function(t,e,n){var r=n(484);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},1178:function(t,e,n){var r=n(67),o=n(238).f;n(481)("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}})},1179:function(t,e,n){n(1178);var r=n(33).Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},1180:function(t,e,n){t.exports=n(1179)},1181:function(t,e,n){"use strict";var r=n(145),o=n(87);Object.defineProperty(e,"__esModule",{value:!0}),e.Boot=void 0;var i=o(n(86)),u=o(n(85)),c=o(n(478)),s=o(n(469)),f=o(n(467)),a=n(1138),l=n(242),p=n(496),d=n(241),v=function(t){function e(){return(0,i.default)(this,e),(0,c.default)(this,(0,s.default)(e).call(this,{key:"boot"}))}return(0,f.default)(e,t),(0,u.default)(e,[{key:"preload",value:function(){var t=this;new a.ProgressBarFactory(this,(0,p.mainCameraSize)(this,1/3,1/30),(0,l.mainCameraCenter)(this)).create(),(0,d.setupCamerasResize)(this),this.load.on("complete",function(){t.scene.start("game")}),this.load.pack("manifest","manifest.json")}}]),e}(r(n(110)).Scene);e.Boot=v},1182:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},1183:function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,c=0,s=[],f=n(1182);function a(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var u=0;u<i.parts.length;u++)i.parts[u](o.parts[u]);for(;u<o.parts.length;u++)i.parts.push(y(o.parts[u],e))}else{var c=[];for(u=0;u<o.parts.length;u++)c.push(y(o.parts[u],e));r[o.id]={id:o.id,refs:1,parts:c}}}}function l(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[u]?r[u].parts.push(c):n.push(r[u]={id:u,parts:[c]})}return n}function p(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),s.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=s.indexOf(t);e>=0&&s.splice(e,1)}function v(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),h(e,t.attrs),p(t,e),e}function h(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=c++;n=u||(u=v(e)),r=m.bind(null,n,s,!1),o=m.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(u),c&&URL.revokeObjectURL(c)}.bind(null,n,e),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=l(t,e);return a(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var u=n[i];(c=r[u.id]).refs--,o.push(c)}t&&a(l(t,e),e);for(i=0;i<o.length;i++){var c;if(0===(c=o[i]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete r[c.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}},1184:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},1185:function(t,e,n){(t.exports=n(1184)(!1)).push([t.i,"html,\nbody {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    background-color: #808080;\n}\n\n#game {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ncanvas {\n    cursor: none;\n}\n",""])},1186:function(t,e,n){var r=n(1185);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1183)(r,o);r.locals&&(t.exports=r.locals)},1187:function(t,e,n){"use strict";n(1186);var r=n(1181),o=n(495),i=n(491),u=n(490),c=n(489),s=n(488),f=n(487),a=n(486);(0,c.log_banner)((0,f.title)(),(0,a.version)()),(0,i.addResizeListener)((0,s.start)((0,u.config)(),[r.Boot,o.Game]))},142:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},143:function(t,e){t.exports=!0},144:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},145:function(t,e,n){var r=n(1180),o=n(479);t.exports=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=o&&r?r(t,n):{};i.get||i.set?o(e,n,i):e[n]=t[n]}return e.default=t,e}},226:function(t,e,n){var r=n(55),o=n(33),i=n(143),u=n(227),c=n(64).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},227:function(t,e,n){e.f=n(84)},228:function(t,e,n){var r=n(64).f,o=n(66),i=n(84)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},229:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},230:function(t,e,n){var r=n(33),o=n(55),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(143)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},231:function(t,e,n){var r=n(230)("keys"),o=n(142);t.exports=function(t){return r[t]||(r[t]=o(t))}},232:function(t,e,n){var r=n(475),o=n(229);t.exports=Object.keys||function(t){return r(t,o)}},233:function(t,e,n){var r=n(111),o=n(1167),i=n(229),u=n(231)("IE_PROTO"),c=function(){},s=function(){var t,e=n(482)("iframe"),r=i.length;for(e.style.display="none",n(1163).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},234:function(t,e){t.exports={}},235:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},236:function(t,e,n){var r=n(90);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},237:function(t,e){e.f={}.propertyIsEnumerable},238:function(t,e,n){var r=n(237),o=n(144),i=n(67),u=n(236),c=n(66),s=n(483),f=Object.getOwnPropertyDescriptor;e.f=n(65)?f:function(t,e){if(t=i(t),e=u(e,!0),s)try{return f(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},239:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},241:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setupCamerasResize=function(t){t.events.on("resize",function(e,n){t.cameras.resize(e,n)})}},242:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mainCameraCenter=function(t){return(0,r.center)(t.cameras.main)};var r=n(497)},33:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},467:function(t,e,n){var r=n(1142),o=n(1139);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=r(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},468:function(t,e,n){t.exports=n(1145)},469:function(t,e,n){var r=n(1148),o=n(468);function i(e){return t.exports=i=o?r:function(t){return t.__proto__||r(t)},i(e)}t.exports=i},470:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},471:function(t,e,n){var r=n(475),o=n(229).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},472:function(t,e){e.f=Object.getOwnPropertySymbols},473:function(t,e,n){var r=n(239);t.exports=function(t){return Object(r(t))}},474:function(t,e,n){var r=n(66),o=n(473),i=n(231)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},475:function(t,e,n){var r=n(66),o=n(67),i=n(1166)(!1),u=n(231)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),s=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(f,n)||f.push(n));return f}},476:function(t,e,n){t.exports=n(88)},477:function(t,e,n){"use strict";var r=n(143),o=n(89),i=n(476),u=n(88),c=n(234),s=n(1168),f=n(228),a=n(474),l=n(84)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,h,y,b){s(n,e,v);var m,g,x,O=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",_="values"==h,S=!1,j=t.prototype,P=j[l]||j["@@iterator"]||h&&j[h],k=P||O(h),M=h?_?O("entries"):k:void 0,L="Array"==e&&j.entries||P;if(L&&(x=a(L.call(new t)))!==Object.prototype&&x.next&&(f(x,w,!0),r||"function"==typeof x[l]||u(x,l,d)),_&&P&&"values"!==P.name&&(S=!0,k=function(){return P.call(this)}),r&&!b||!p&&!S&&j[l]||u(j,l,k),c[e]=k,c[w]=d,h)if(m={values:_?k:O("values"),keys:y?k:O("keys"),entries:M},b)for(g in m)g in j||i(j,g,m[g]);else o(o.P+o.F*(p||S),e,m);return m}},478:function(t,e,n){var r=n(1173),o=n(470);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},479:function(t,e,n){t.exports=n(1175)},480:function(t,e,n){var r=n(1176);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},481:function(t,e,n){var r=n(89),o=n(33),i=n(112);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},482:function(t,e,n){var r=n(90),o=n(55).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},483:function(t,e,n){t.exports=!n(65)&&!n(112)(function(){return 7!=Object.defineProperty(n(482)("div"),"a",{get:function(){return 7}}).a})},484:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},486:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.version=function(){return"1.16.0_20180706062828".replace("_",".")}},487:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.title=function(){return"Jumper"}},488:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.start=function(t,e){return new Phaser.Game((0,r.assoc)("scene",e,t))};var r=n(240)},489:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.log_banner=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:console.log,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:console;n.apply(r,["%c %c %c %c %c ".concat(t,"%c v").concat(e," %c %c %c %c "),"color: #ffffff; background: #8888FF","color: #ffffff; background: #4444FF","color: #ffffff; background: #2222FF","color: #ffffff; background: #0000FF","color: #ffffff; background: #000099","color: #a0a0a0; background: #000099","color: #ffffff; background: #0000FF","color: #ffffff; background: #2222FF","color: #ffffff; background: #4444FF","color: #ffffff; background: #8888FF"])}},490:function(t,e,n){"use strict";var r=n(145);Object.defineProperty(e,"__esModule",{value:!0}),e.config=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;return{type:o.AUTO,parent:"game",width:t.innerWidth,height:t.innerHeight,physics:{default:"arcade",arcade:{debug:!1}}}};var o=r(n(110))},491:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addResizeListener=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;e.addEventListener("resize",function(){t.resize(e.innerWidth,e.innerHeight)},!1)}},492:function(t,e,n){"use strict";var r=n(87);Object.defineProperty(e,"__esModule",{value:!0}),e.TitleSystem=void 0;var o=r(n(86)),i=r(n(85)),u=n(242),c=function(){function t(e){(0,o.default)(this,t),this.scene=e}return(0,i.default)(t,[{key:"create",value:function(){var t=(0,u.mainCameraCenter)(this.scene);this.scene.add.bitmapText(t.x,t.y,"nescyrillic","Hello World",32).setOrigin(.5,.5)}},{key:"update",value:function(t,e){}}]),t}();e.TitleSystem=c},493:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.compositeUpdate=function(t,e,n){t.forEach(function(t){t.update(e,n)})}},494:function(t,e,n){"use strict";var r=n(87);Object.defineProperty(e,"__esModule",{value:!0}),e.CompositeSystem=void 0;var o=r(n(86)),i=r(n(85)),u=n(493),c=function(){function t(e){(0,o.default)(this,t),this.systems=e}return(0,i.default)(t,[{key:"create",value:function(){this.systems.forEach(function(t){t.create()})}},{key:"update",value:function(t,e){(0,u.compositeUpdate)(this.systems,t,e)}}]),t}();e.CompositeSystem=c},495:function(t,e,n){"use strict";var r=n(145),o=n(87);Object.defineProperty(e,"__esModule",{value:!0}),e.Game=void 0;var i=o(n(86)),u=o(n(85)),c=o(n(478)),s=o(n(469)),f=o(n(467)),a=o(n(470)),l=n(494),p=n(241),d=n(492),v=function(t){function e(){var t;return(0,i.default)(this,e),(t=(0,c.default)(this,(0,s.default)(e).call(this,{key:"game"}))).systems=new l.CompositeSystem([new d.TitleSystem((0,a.default)((0,a.default)(t)))]),t}return(0,f.default)(e,t),(0,u.default)(e,[{key:"preload",value:function(){(0,p.setupCamerasResize)(this)}},{key:"create",value:function(){this.systems.create()}},{key:"update",value:function(t,e){this.systems.update(t,e)}}]),e}(r(n(110)).Scene);e.Game=v},496:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mainCameraSize=function(t,e,n){return{width:t.cameras.main.width*e,height:t.cameras.main.height*n}}},497:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.center=function(t){return{x:t.width/2,y:t.height/2}}},55:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},64:function(t,e,n){var r=n(111),o=n(483),i=n(236),u=Object.defineProperty;e.f=n(65)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},65:function(t,e,n){t.exports=!n(112)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},66:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},67:function(t,e,n){var r=n(1177),o=n(239);t.exports=function(t){return r(o(t))}},84:function(t,e,n){var r=n(230)("wks"),o=n(142),i=n(55).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},85:function(t,e,n){var r=n(479);function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(t,o.key,o)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},86:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},87:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},88:function(t,e,n){var r=n(64),o=n(144);t.exports=n(65)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},89:function(t,e,n){var r=n(55),o=n(33),i=n(480),u=n(88),c=n(66),s=function(t,e,n){var f,a,l,p=t&s.F,d=t&s.G,v=t&s.S,h=t&s.P,y=t&s.B,b=t&s.W,m=d?o:o[e]||(o[e]={}),g=m.prototype,x=d?r:v?r[e]:(r[e]||{}).prototype;for(f in d&&(n=e),n)(a=!p&&x&&void 0!==x[f])&&c(m,f)||(l=a?x[f]:n[f],m[f]=d&&"function"!=typeof x[f]?n[f]:y&&a?i(l,r):b&&x[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((m.virtual||(m.virtual={}))[f]=l,t&s.R&&g&&!g[f]&&u(g,f,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},90:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}}},[[1187,0,1]]]);