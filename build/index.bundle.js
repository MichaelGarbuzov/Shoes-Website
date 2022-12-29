(()=>{"use strict";var r,n,t,e,o,i,a,s,c,p,l,u,d,f,h={426:(r,n,t)=>{t.d(n,{Z:()=>d});var e=t(81),o=t.n(e),i=t(645),a=t.n(i),s=t(667),c=t.n(s),p=new URL(t(183),t.b),l=a()(o());l.push([r.id,"@import url(https://fonts.googleapis.com/css?family=Montserrat:400,400i,700);"]);var u=c()(p);l.push([r.id,'* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nh2 {\r\n  position: absolute;\r\n  font-size: 33px;\r\n  white-space: nowrap;\r\n  top: 265px;\r\n  left: 302px;\r\n}\r\n\r\nh4 {\r\n  position: absolute;\r\n  font-size: 50px;\r\n  left: 146px;\r\n  top: 192px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.Shop-button {\r\n  all: unset;\r\n  width: 100px px;\r\n  height: 30px;\r\n  font-size: 16px;\r\n  background: transparent;\r\n  border: none;\r\n  position: absolute;\r\n  color: #f0f0f0;\r\n  cursor: pointer;\r\n  z-index: 1;\r\n  padding: 10px 20px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  white-space: nowrap;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  top: 319px;\r\n  left: 433px;\r\n}\r\n\r\n.Shop-button::after,\r\n.Shop-button::before {\r\n  content: "";\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  z-index: -99999;\r\n  transition: all 0.4s;\r\n}\r\n\r\n.Shop-button::before {\r\n  transform: translate(0%, 0%);\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #28282d;\r\n  border-radius: 10px;\r\n}\r\n\r\n.Shop-button::after {\r\n  transform: translate(10px, 10px);\r\n  width: 35px;\r\n  height: 35px;\r\n  background: #ffffff15;\r\n  backdrop-filter: blur(5px);\r\n  -webkit-backdrop-filter: blur(5px);\r\n  border-radius: 50px;\r\n}\r\n\r\n.Shop-button:hover::before {\r\n  transform: translate(5%, 20%);\r\n  width: 110%;\r\n  height: 110%;\r\n}\r\n\r\n.Shop-button:hover::after {\r\n  border-radius: 10px;\r\n  transform: translate(0, 0);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.Shop-button:active::after {\r\n  transition: 0s;\r\n  transform: translate(0, 5%);\r\n}\r\n\r\n.curved-header {\r\n  width: 100%;\r\n  height: 80vh;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: baseline;\r\n  font-family: Montserrat, sans-serif;\r\n  position: relative;\r\n}\r\n.curved-header::before {\r\n  content: "";\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),\r\n    url('+u+');\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  /* border-radius: 0 0 50% 50%/ 0 0 100% 100%;\r\n  transform: scale(1.5); */\r\n  z-index: -1;\r\n}\r\n.curved-header .logo {\r\n  margin: 50px;\r\n}\r\n.curved-header .logo a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-size: 30px;\r\n}\r\n.curved-header .nav-links {\r\n  margin: 50px;\r\n  list-style-type: none;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  width: 40%;\r\n}\r\n.curved-header .nav-links li {\r\n  margin: 0 15px;\r\n}\r\n.curved-header .nav-links li a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  position: relative;\r\n}\r\n.nav-links li a:after {\r\n  content: "";\r\n  position: absolute;\r\n  bottom: -5px;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 2px;\r\n  background-color: #fff;\r\n  transform: scaleX(0);\r\n  transition: transform 0.3s;\r\n}\r\n.nav-links li a:hover:after {\r\n  transform: scaleX(1);\r\n}\r\n.toggle-button {\r\n  position: absolute;\r\n  top: 0.55rem;\r\n  right: 2rem;\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  width: 20px;\r\n  height: 16px;\r\n  text-decoration: none;\r\n}\r\n.toggle-button i {\r\n  color: white;\r\n  font-size: 35px;\r\n}\r\n\r\n#description {\r\n  position: absolute;\r\n  color: #fff;\r\n}\r\n\r\n.section-p1 {\r\n  padding: 40px 80px;\r\n}\r\n.section-m1 {\r\n  margin: 40px 0;\r\n}\r\n\r\n#product1 {\r\n  text-align: center;\r\n}\r\n\r\n#product1 .pro {\r\n  width: 23%;\r\n  min-width: 250px;\r\n  padding: 10px 12px;\r\n  border: 1px solid #cce7d0;\r\n}\r\n\r\n#product1 .pro img {\r\n  width: 100%;\r\n  border-radius: 20px;\r\n}\r\n\r\n@media (max-width: 850px) {\r\n  .toggle-button {\r\n    display: block;\r\n  }\r\n  .nav-links {\r\n    display: none;\r\n  }\r\n}\r\n',""]);const d=l},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var t="",e=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),e&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=r(n),e&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(r,t,e,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(e)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var p=0;p<r.length;p++){var l=[].concat(r[p]);e&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:r=>{r.exports=function(r,n){return n||(n={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]|(%20)/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function t(r){for(var t=-1,e=0;e<n.length;e++)if(n[e].identifier===r){t=e;break}return t}function e(r,e){for(var i={},a=[],s=0;s<r.length;s++){var c=r[s],p=e.base?c[0]+e.base:c[0],l=i[p]||0,u="".concat(p," ").concat(l);i[p]=l+1;var d=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var h=o(f,e);e.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(r,n){var t=n.domAPI(n);return t.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;t.update(r=n)}else t.remove()}}r.exports=function(r,o){var i=e(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=e(r,o),p=0;p<i.length;p++){var l=t(i[p]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:r=>{var n={};r.exports=function(r,t){var e=function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}n[r]=t}return n[r]}(r);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,t)=>{r.exports=function(r){var n=t.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(t){!function(r,n,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(e,r,n.options)}(n,r,t)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},183:(r,n,t)=>{r.exports=t.p+"3a15163f67f4f047f654.jpg"}},b={};function g(r){var n=b[r];if(void 0!==n)return n.exports;var t=b[r]={id:r,exports:{}};return h[r](t,t.exports,g),t.exports}g.m=h,g.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return g.d(n,{a:n}),n},g.d=(r,n)=>{for(var t in n)g.o(n,t)&&!g.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),g.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;g.g.importScripts&&(r=g.g.location+"");var n=g.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=r})(),g.b=document.baseURI||self.location.href,g.nc=void 0,r=g(379),n=g.n(r),t=g(795),e=g.n(t),o=g(569),i=g.n(o),a=g(565),s=g.n(a),c=g(216),p=g.n(c),l=g(589),u=g.n(l),d=g(426),(f={}).styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=e(),f.insertStyleElement=p(),n()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals})();