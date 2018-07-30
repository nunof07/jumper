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
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(t,e,n){var r=n(495),o=n(249);t.exports=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var i=o&&r?r(t,n):{};i.get||i.set?o(e,n,i):e[n]=t[n]}return e.default=t,e}},113:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},114:function(t,e){t.exports=!0},115:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},1179:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.center=function(t){return{x:t.width/2,y:t.height/2}}},1180:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mainCameraSize=function(t,e,n){return{width:t.cameras.main.width*e,height:t.cameras.main.height*n}}},1181:function(t,e,n){"use strict";var r=n(112),o=n(72);Object.defineProperty(e,"__esModule",{value:!0}),e.Game=void 0;var i=o(n(73)),u=o(n(74)),c=o(n(250)),s=o(n(259)),f=o(n(261)),a=o(n(258)),l=n(1182),p=n(486),d=n(1184),v=function(t){function e(){var t;return(0,i.default)(this,e),(t=(0,c.default)(this,(0,s.default)(e).call(this,{key:"game"}))).systems=new l.CompositeSystem([new d.TitleSystem((0,a.default)((0,a.default)(t)))]),t}return(0,f.default)(e,t),(0,u.default)(e,[{key:"preload",value:function(){(0,p.setupCamerasResize)(this)}},{key:"create",value:function(){this.systems.create()}},{key:"update",value:function(t,e){this.systems.update(t,e)}}]),e}(r(n(94)).Scene);e.Game=v},1182:function(t,e,n){"use strict";var r=n(72);Object.defineProperty(e,"__esModule",{value:!0}),e.CompositeSystem=void 0;var o=r(n(73)),i=r(n(74)),u=n(1183),c=function(){function t(e){(0,o.default)(this,t),this.systems=e}return(0,i.default)(t,[{key:"create",value:function(){this.systems.forEach(function(t){t.create()})}},{key:"update",value:function(t,e){(0,u.compositeUpdate)(this.systems,t,e)}}]),t}();e.CompositeSystem=c},1183:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.compositeUpdate=function(t,e,n){t.forEach(function(t){t.update(e,n)})}},1184:function(t,e,n){"use strict";var r=n(72);Object.defineProperty(e,"__esModule",{value:!0}),e.TitleSystem=void 0;var o=r(n(73)),i=r(n(74)),u=n(485),c=function(){function t(e){(0,o.default)(this,t),this.scene=e}return(0,i.default)(t,[{key:"create",value:function(){var t=(0,u.mainCameraCenter)(this.scene);this.scene.add.bitmapText(t.x,t.y,"nescyrillic","Hello World",32).setOrigin(.5,.5)}},{key:"update",value:function(t,e){}}]),t}();e.TitleSystem=c},1185:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.addResizeListener=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;e.addEventListener("resize",function(){t.resize(e.innerWidth,e.innerHeight)},!1)}},1186:function(t,e,n){"use strict";var r=n(112);Object.defineProperty(e,"__esModule",{value:!0}),e.config=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;return{type:o.AUTO,parent:"game",width:t.innerWidth,height:t.innerHeight,physics:{default:"arcade",arcade:{debug:!1}}}};var o=r(n(94))},1187:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.log_banner=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:console.log,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:console;n.apply(r,["%c %c %c %c %c ".concat(t,"%c v").concat(e," %c %c %c %c "),"color: #ffffff; background: #8888FF","color: #ffffff; background: #4444FF","color: #ffffff; background: #2222FF","color: #ffffff; background: #0000FF","color: #ffffff; background: #000099","color: #a0a0a0; background: #000099","color: #ffffff; background: #0000FF","color: #ffffff; background: #2222FF","color: #ffffff; background: #4444FF","color: #ffffff; background: #8888FF"])}},1188:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.start=function(t,e){return new Phaser.Game((0,r.assoc)("scene",e,t))};var r=n(487)},1189:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.title=function(){return"Jumper"}},1190:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.version=function(){return"1.16.0_20180730210244".replace("_",".")}},147:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},148:function(t,e,n){var r=n(149),o=n(113),i=n(56),u=n(150),c=n(57),s=n(245),f=Object.getOwnPropertyDescriptor;e.f=n(58)?f:function(t,e){if(t=i(t),e=u(e,!0),s)try{return f(t,e)}catch(t){}if(c(t,e))return o(!r.f.call(t,e),t[e])}},149:function(t,e){e.f={}.propertyIsEnumerable},150:function(t,e,n){var r=n(69);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},151:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},152:function(t,e){t.exports={}},153:function(t,e,n){var r=n(93),o=n(508),i=n(157),u=n(155)("IE_PROTO"),c=function(){},s=function(){var t,e=n(246)("iframe"),r=i.length;for(e.style.display="none",n(512).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[u]=t):n=s(),void 0===e?n:o(n,e)}},154:function(t,e,n){var r=n(253),o=n(157);t.exports=Object.keys||function(t){return r(t,o)}},155:function(t,e,n){var r=n(156)("keys"),o=n(115);t.exports=function(t){return r[t]||(r[t]=o(t))}},156:function(t,e,n){var r=n(31),o=n(48),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(114)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},157:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},158:function(t,e,n){var r=n(59).f,o=n(57),i=n(75)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},159:function(t,e,n){e.f=n(75)},160:function(t,e,n){var r=n(48),o=n(31),i=n(114),u=n(159),c=n(59).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:u.f(t)})}},244:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},245:function(t,e,n){t.exports=!n(58)&&!n(92)(function(){return 7!=Object.defineProperty(n(246)("div"),"a",{get:function(){return 7}}).a})},246:function(t,e,n){var r=n(69),o=n(48).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},247:function(t,e,n){var r=n(70),o=n(31),i=n(92);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},248:function(t,e,n){var r=n(499);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},249:function(t,e,n){t.exports=n(500)},250:function(t,e,n){var r=n(502),o=n(258);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},251:function(t,e,n){"use strict";var r=n(114),o=n(70),i=n(252),u=n(71),c=n(152),s=n(507),f=n(158),a=n(254),l=n(75)("iterator"),p=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,h,y,b){s(n,e,v);var m,g,x,O=function(t){if(!p&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",_="values"==h,S=!1,j=t.prototype,P=j[l]||j["@@iterator"]||h&&j[h],k=P||O(h),M=h?_?O("entries"):k:void 0,L="Array"==e&&j.entries||P;if(L&&(x=a(L.call(new t)))!==Object.prototype&&x.next&&(f(x,w,!0),r||"function"==typeof x[l]||u(x,l,d)),_&&P&&"values"!==P.name&&(S=!0,k=function(){return P.call(this)}),r&&!b||!p&&!S&&j[l]||u(j,l,k),c[e]=k,c[w]=d,h)if(m={values:_?k:O("values"),keys:y?k:O("keys"),entries:M},b)for(g in m)g in j||i(j,g,m[g]);else o(o.P+o.F*(p||S),e,m);return m}},252:function(t,e,n){t.exports=n(71)},253:function(t,e,n){var r=n(57),o=n(56),i=n(509)(!1),u=n(155)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),s=0,f=[];for(n in c)n!=u&&r(c,n)&&f.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(f,n)||f.push(n));return f}},254:function(t,e,n){var r=n(57),o=n(255),i=n(155)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},255:function(t,e,n){var r=n(147);t.exports=function(t){return Object(r(t))}},256:function(t,e){e.f=Object.getOwnPropertySymbols},257:function(t,e,n){var r=n(253),o=n(157).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},258:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},259:function(t,e,n){var r=n(527),o=n(260);function i(e){return t.exports=i=o?r:function(t){return t.__proto__||r(t)},i(e)}t.exports=i},260:function(t,e,n){t.exports=n(530)},261:function(t,e,n){var r=n(533),o=n(536);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=r(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}},31:function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},48:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},485:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.mainCameraCenter=function(t){return(0,r.center)(t.cameras.main)};var r=n(1179)},486:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setupCamerasResize=function(t){t.events.on("resize",function(e,n){t.cameras.resize(e,n)})}},488:function(t,e,n){"use strict";n(489);var r=n(494),o=n(1181),i=n(1185),u=n(1186),c=n(1187),s=n(1188),f=n(1189),a=n(1190);(0,c.log_banner)((0,f.title)(),(0,a.version)()),(0,i.addResizeListener)((0,s.start)((0,u.config)(),[r.Boot,o.Game]))},489:function(t,e,n){var r=n(490);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(492)(r,o);r.locals&&(t.exports=r.locals)},490:function(t,e,n){(t.exports=n(491)(!1)).push([t.i,"html,\nbody {\n    height: 100%;\n    margin: 0;\n}\n\nbody {\n    background-color: #808080;\n}\n\n#game {\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\ncanvas {\n    cursor: none;\n}\n",""])},491:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];"number"==typeof u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},492:function(t,e,n){var r={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),u=null,c=0,s=[],f=n(493);function a(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=r[o.id];if(i){i.refs++;for(var u=0;u<i.parts.length;u++)i.parts[u](o.parts[u]);for(;u<o.parts.length;u++)i.parts.push(y(o.parts[u],e))}else{var c=[];for(u=0;u<o.parts.length;u++)c.push(y(o.parts[u],e));r[o.id]={id:o.id,refs:1,parts:c}}}}function l(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[u]?r[u].parts.push(c):n.push(r[u]={id:u,parts:[c]})}return n}function p(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),s.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,o)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=s.indexOf(t);e>=0&&s.splice(e,1)}function v(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),h(e,t.attrs),p(t,e),e}function h(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var s=c++;n=u||(u=v(e)),r=m.bind(null,n,s,!1),o=m.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(u),c&&URL.revokeObjectURL(c)}.bind(null,n,e),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=l(t,e);return a(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var u=n[i];(c=r[u.id]).refs--,o.push(c)}t&&a(l(t,e),e);for(i=0;i<o.length;i++){var c;if(0===(c=o[i]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete r[c.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function m(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}},493:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},494:function(t,e,n){"use strict";var r=n(112),o=n(72);Object.defineProperty(e,"__esModule",{value:!0}),e.Boot=void 0;var i=o(n(73)),u=o(n(74)),c=o(n(250)),s=o(n(259)),f=o(n(261)),a=n(537),l=n(485),p=n(1180),d=n(486),v=function(t){function e(){return(0,i.default)(this,e),(0,c.default)(this,(0,s.default)(e).call(this,{key:"boot"}))}return(0,f.default)(e,t),(0,u.default)(e,[{key:"preload",value:function(){var t=this;new a.ProgressBarFactory(this,(0,p.mainCameraSize)(this,1/3,1/30),(0,l.mainCameraCenter)(this)).create(),(0,d.setupCamerasResize)(this),this.load.on("complete",function(){t.scene.start("game")}),this.load.pack("manifest","manifest.json")}}]),e}(r(n(94)).Scene);e.Boot=v},495:function(t,e,n){t.exports=n(496)},496:function(t,e,n){n(497);var r=n(31).Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}},497:function(t,e,n){var r=n(56),o=n(148).f;n(247)("getOwnPropertyDescriptor",function(){return function(t,e){return o(r(t),e)}})},498:function(t,e,n){var r=n(244);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},499:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},500:function(t,e,n){n(501);var r=n(31).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},501:function(t,e,n){var r=n(70);r(r.S+r.F*!n(58),"Object",{defineProperty:n(59).f})},502:function(t,e,n){var r=n(503),o=n(517);function i(t){return(i="function"==typeof o&&"symbol"==typeof r?function(t){return typeof t}:function(t){return t&&"function"==typeof o&&t.constructor===o&&t!==o.prototype?"symbol":typeof t})(t)}function u(e){return"function"==typeof o&&"symbol"===i(r)?t.exports=u=function(t){return i(t)}:t.exports=u=function(t){return t&&"function"==typeof o&&t.constructor===o&&t!==o.prototype?"symbol":i(t)},u(e)}t.exports=u},503:function(t,e,n){t.exports=n(504)},504:function(t,e,n){n(505),n(513),t.exports=n(159).f("iterator")},505:function(t,e,n){"use strict";var r=n(506)(!0);n(251)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},506:function(t,e,n){var r=n(151),o=n(147);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),s=r(n),f=c.length;return s<0||s>=f?t?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===f||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536}}},507:function(t,e,n){"use strict";var r=n(153),o=n(113),i=n(158),u={};n(71)(u,n(75)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},508:function(t,e,n){var r=n(59),o=n(93),i=n(154);t.exports=n(58)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,s=0;c>s;)r.f(t,n=u[s++],e[n]);return t}},509:function(t,e,n){var r=n(56),o=n(510),i=n(511);t.exports=function(t){return function(e,n,u){var c,s=r(e),f=o(s.length),a=i(u,f);if(t&&n!=n){for(;f>a;)if((c=s[a++])!=c)return!0}else for(;f>a;a++)if((t||a in s)&&s[a]===n)return t||a||0;return!t&&-1}}},510:function(t,e,n){var r=n(151),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},511:function(t,e,n){var r=n(151),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},512:function(t,e,n){var r=n(48).document;t.exports=r&&r.documentElement},513:function(t,e,n){n(514);for(var r=n(48),o=n(71),i=n(152),u=n(75)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var f=c[s],a=r[f],l=a&&a.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},514:function(t,e,n){"use strict";var r=n(515),o=n(516),i=n(152),u=n(56);t.exports=n(251)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},515:function(t,e){t.exports=function(){}},516:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},517:function(t,e,n){t.exports=n(518)},518:function(t,e,n){n(519),n(524),n(525),n(526),t.exports=n(31).Symbol},519:function(t,e,n){"use strict";var r=n(48),o=n(57),i=n(58),u=n(70),c=n(252),s=n(520).KEY,f=n(92),a=n(156),l=n(158),p=n(115),d=n(75),v=n(159),h=n(160),y=n(521),b=n(522),m=n(93),g=n(69),x=n(56),O=n(150),w=n(113),_=n(153),S=n(523),j=n(148),P=n(59),k=n(154),M=j.f,L=P.f,E=S.f,C=r.Symbol,T=r.JSON,F=T&&T.stringify,R=d("_hidden"),A=d("toPrimitive"),I={}.propertyIsEnumerable,U=a("symbol-registry"),N=a("symbols"),B=a("op-symbols"),G=Object.prototype,z="function"==typeof C,D=r.QObject,J=!D||!D.prototype||!D.prototype.findChild,H=i&&f(function(){return 7!=_(L({},"a",{get:function(){return L(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=M(G,e);r&&delete G[e],L(t,e,n),r&&t!==G&&L(G,e,r)}:L,V=function(t){var e=N[t]=_(C.prototype);return e._k=t,e},W=z&&"symbol"==typeof C.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof C},$=function(t,e,n){return t===G&&$(B,e,n),m(t),e=O(e,!0),m(n),o(N,e)?(n.enumerable?(o(t,R)&&t[R][e]&&(t[R][e]=!1),n=_(n,{enumerable:w(0,!1)})):(o(t,R)||L(t,R,w(1,{})),t[R][e]=!0),H(t,e,n)):L(t,e,n)},q=function(t,e){m(t);for(var n,r=y(e=x(e)),o=0,i=r.length;i>o;)$(t,n=r[o++],e[n]);return t},K=function(t){var e=I.call(this,t=O(t,!0));return!(this===G&&o(N,t)&&!o(B,t))&&(!(e||!o(this,t)||!o(N,t)||o(this,R)&&this[R][t])||e)},Y=function(t,e){if(t=x(t),e=O(e,!0),t!==G||!o(N,e)||o(B,e)){var n=M(t,e);return!n||!o(N,e)||o(t,R)&&t[R][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=E(x(t)),r=[],i=0;n.length>i;)o(N,e=n[i++])||e==R||e==s||r.push(e);return r},X=function(t){for(var e,n=t===G,r=E(n?B:x(t)),i=[],u=0;r.length>u;)!o(N,e=r[u++])||n&&!o(G,e)||i.push(N[e]);return i};z||(c((C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===G&&e.call(B,n),o(this,R)&&o(this[R],t)&&(this[R][t]=!1),H(this,t,w(1,n))};return i&&J&&H(G,t,{configurable:!0,set:e}),V(t)}).prototype,"toString",function(){return this._k}),j.f=Y,P.f=$,n(257).f=S.f=Q,n(149).f=K,n(256).f=X,i&&!n(114)&&c(G,"propertyIsEnumerable",K,!0),v.f=function(t){return V(d(t))}),u(u.G+u.W+u.F*!z,{Symbol:C});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)d(Z[tt++]);for(var et=k(d.store),nt=0;et.length>nt;)h(et[nt++]);u(u.S+u.F*!z,"Symbol",{for:function(t){return o(U,t+="")?U[t]:U[t]=C(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in U)if(U[e]===t)return e},useSetter:function(){J=!0},useSimple:function(){J=!1}}),u(u.S+u.F*!z,"Object",{create:function(t,e){return void 0===e?_(t):q(_(t),e)},defineProperty:$,defineProperties:q,getOwnPropertyDescriptor:Y,getOwnPropertyNames:Q,getOwnPropertySymbols:X}),T&&u(u.S+u.F*(!z||f(function(){var t=C();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(g(e)||void 0!==t)&&!W(t))return b(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!W(e))return e}),r[1]=e,F.apply(T,r)}}),C.prototype[A]||n(71)(C.prototype,A,C.prototype.valueOf),l(C,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},520:function(t,e,n){var r=n(115)("meta"),o=n(69),i=n(57),u=n(59).f,c=0,s=Object.isExtensible||function(){return!0},f=!n(92)(function(){return s(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!s(t))return"F";if(!e)return"E";a(t)}return t[r].i},getWeak:function(t,e){if(!i(t,r)){if(!s(t))return!0;if(!e)return!1;a(t)}return t[r].w},onFreeze:function(t){return f&&l.NEED&&s(t)&&!i(t,r)&&a(t),t}}},521:function(t,e,n){var r=n(154),o=n(256),i=n(149);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,c=n(t),s=i.f,f=0;c.length>f;)s.call(t,u=c[f++])&&e.push(u);return e}},522:function(t,e,n){var r=n(244);t.exports=Array.isArray||function(t){return"Array"==r(t)}},523:function(t,e,n){var r=n(56),o=n(257).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(r(t))}},524:function(t,e){},525:function(t,e,n){n(160)("asyncIterator")},526:function(t,e,n){n(160)("observable")},527:function(t,e,n){t.exports=n(528)},528:function(t,e,n){n(529),t.exports=n(31).Object.getPrototypeOf},529:function(t,e,n){var r=n(255),o=n(254);n(247)("getPrototypeOf",function(){return function(t){return o(r(t))}})},530:function(t,e,n){n(531),t.exports=n(31).Object.setPrototypeOf},531:function(t,e,n){var r=n(70);r(r.S,"Object",{setPrototypeOf:n(532).set})},532:function(t,e,n){var r=n(69),o=n(93),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=n(248)(Function.call,n(148).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},533:function(t,e,n){t.exports=n(534)},534:function(t,e,n){n(535);var r=n(31).Object;t.exports=function(t,e){return r.create(t,e)}},535:function(t,e,n){var r=n(70);r(r.S,"Object",{create:n(153)})},536:function(t,e,n){var r=n(260);function o(e,n){return t.exports=o=r||function(t,e){return t.__proto__=e,t},o(e,n)}t.exports=o},537:function(t,e,n){"use strict";var r=n(112),o=n(72);Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressBarFactory=void 0;var i=o(n(73)),u=o(n(74)),c=n(538),s=r(n(94)),f=function(){function t(e,n,r){(0,i.default)(this,t),this.scene=e,this.size=n,this.position=r}return(0,u.default)(t,[{key:"create",value:function(){var t=this.createGraphics(),e=this.createComplete(),n=s.Geom.Rectangle.Clone(e),r=new c.ProgressBar(t,n,e);return this.scene.load.on("progress",function(t){r.update(t),r.render()}),this.scene.load.on("complete",function(){r.destroy()}),r}},{key:"createGraphics",value:function(){return this.scene.add.graphics({x:0,y:0,fillStyle:{color:16777215,alpha:1},lineStyle:{width:2,color:16777215,alpha:1}})}},{key:"createComplete",value:function(){var t=new s.Geom.Rectangle(0,0,this.size.width,this.size.height);return s.Geom.Rectangle.CenterOn(t,this.position.x,this.position.y),t}}]),t}();e.ProgressBarFactory=f},538:function(t,e,n){"use strict";var r=n(72);Object.defineProperty(e,"__esModule",{value:!0}),e.ProgressBar=void 0;var o=r(n(73)),i=r(n(74)),u=function(){function t(e,n,r){(0,o.default)(this,t),this.graphics=e,this.bar=n,this.complete=r}return(0,i.default)(t,[{key:"render",value:function(){this.graphics.strokeRectShape(this.bar).fillRectShape(this.complete)}},{key:"update",value:function(t){this.complete.width=t*this.bar.width}},{key:"destroy",value:function(){this.graphics.destroy()}}]),t}();e.ProgressBar=u},56:function(t,e,n){var r=n(498),o=n(147);t.exports=function(t){return r(o(t))}},57:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},58:function(t,e,n){t.exports=!n(92)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},59:function(t,e,n){var r=n(93),o=n(245),i=n(150),u=Object.defineProperty;e.f=n(58)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},69:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},70:function(t,e,n){var r=n(48),o=n(31),i=n(248),u=n(71),c=n(57),s=function(t,e,n){var f,a,l,p=t&s.F,d=t&s.G,v=t&s.S,h=t&s.P,y=t&s.B,b=t&s.W,m=d?o:o[e]||(o[e]={}),g=m.prototype,x=d?r:v?r[e]:(r[e]||{}).prototype;for(f in d&&(n=e),n)(a=!p&&x&&void 0!==x[f])&&c(m,f)||(l=a?x[f]:n[f],m[f]=d&&"function"!=typeof x[f]?n[f]:y&&a?i(l,r):b&&x[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((m.virtual||(m.virtual={}))[f]=l,t&s.R&&g&&!g[f]&&u(g,f,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},71:function(t,e,n){var r=n(59),o=n(113);t.exports=n(58)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},72:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},73:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},74:function(t,e,n){var r=n(249);function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r(t,o.key,o)}}t.exports=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}},75:function(t,e,n){var r=n(156)("wks"),o=n(115),i=n(48).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},92:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},93:function(t,e,n){var r=n(69);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}}},[[488,2,1]]]);