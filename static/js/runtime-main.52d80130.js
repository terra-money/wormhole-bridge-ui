!function(e){function n(n){for(var r,u,a=n[0],s=n[1],f=n[2],c=0,l=[];c<a.length;c++)u=a[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&l.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(p&&p(n);l.length;)l.shift()();return i.push.apply(i,f||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,u=1;u<t.length;u++){var a=t[u];0!==o[a]&&(r=!1)}r&&(i.splice(n--,1),e=s(s.s=t[0]))}return e}var r={},o={5:0},i=[];var u={};var a={1375:function(){return{"./token_bridge_bg.js":{__wbindgen_json_parse:function(e,n){return r[1371].exports.a(e,n)}}}},1374:function(){return{"./bridge_bg.js":{__wbindgen_json_serialize:function(e,n){return r[1370].exports.b(e,n)},__wbindgen_object_drop_ref:function(e){return r[1370].exports.c(e)},__wbindgen_json_parse:function(e,n){return r[1370].exports.a(e,n)}}}},1376:function(){return{"./nft_bridge_bg.js":{__wbindgen_json_parse:function(e,n){return r[1372].exports.a(e,n)}}}},1377:function(){return{"./wormhole_migration_bg.js":{__wbindgen_json_parse:function(e,n){return r[1373].exports.a(e,n)}}}}};function s(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=function(e){return s.p+"static/js/"+({}[e]||e)+"."+{0:"9ea44bbf",1:"3cb197ff",2:"d078d252",3:"5ee40945"}[e]+".chunk.js"}(e);var c=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,t[1](c)}o[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return({0:[1375],1:[1374],2:[1376],3:[1377]}[e]||[]).forEach((function(e){var t=u[e];if(t)n.push(t);else{var r,o=a[e](),i=fetch(s.p+""+{1374:"ca204dfc200496606884",1375:"90090375410170ab02a3",1376:"a67df83152a65237105a",1377:"5276bfe0afb1a2163728"}[e]+".module.wasm");if(o instanceof Promise&&"function"===typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(i),o]).then((function(e){return WebAssembly.instantiate(e[0],e[1])}));else if("function"===typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(i,o);else{r=i.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,o)}))}n.push(u[e]=r.then((function(n){return s.w[e]=(n.instance||n).exports})))}})),Promise.all(n)},s.m=e,s.c=r,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(t,r,function(n){return e[n]}.bind(null,r));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e},s.w={};var f=this.webpackJsonptest_ui=this.webpackJsonptest_ui||[],c=f.push.bind(f);f.push=n,f=f.slice();for(var l=0;l<f.length;l++)n(f[l]);var p=c;t()}([]);
//# sourceMappingURL=runtime-main.52d80130.js.map