(function(e){function t(t){for(var n,o,i=t[0],u=t[1],s=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},c=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue3-qr-reader/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=u;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},4855:function(e,t,r){"use strict";r("904e")},"64be":function(e,t,r){"use strict";r("c894")},"837e":function(e,t,r){},"904e":function(e,t,r){},c4b2:function(e,t,r){},c894:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function a(e,t,r,a,c,o){var i=Object(n["o"])("qr-stream-example"),u=Object(n["o"])("qr-capture-example"),s=Object(n["o"])("qr-dropzone-example");return Object(n["j"])(),Object(n["d"])(n["a"],null,[Object(n["f"])(i,{class:"pb"}),Object(n["f"])(u,{class:"pb"}),Object(n["f"])(s,{class:"pb"})],64)}var c=Object(n["f"])("div",{class:"mb"}," Qr Capture ",-1),o={class:"result"};function i(e,t,r,a,i,u){var s=Object(n["o"])("qr-capture");return Object(n["j"])(),Object(n["d"])("div",null,[c,Object(n["f"])(s,{onDecode:e.onDecode,class:"mb"},null,8,["onDecode"]),Object(n["f"])("div",o," Result: "+Object(n["p"])(e.data),1)])}var u=r("5530"),s=Object(n["v"])("data-v-f73a6250");Object(n["l"])("data-v-f73a6250");var l={class:"qr-stream-wrapper"},d={ref:"video",class:"qr-stream-camera",autoplay:"",muted:"",playsinline:""},f={ref:"pauseFrame",class:"qr-stream-camera"},p={ref:"trackingLayer",class:"qr-stream-overlay"},b={class:"qr-stream-overlay"};Object(n["k"])();var v=s((function(e,t,r,a,c,o){return Object(n["j"])(),Object(n["d"])("div",l,[Object(n["t"])(Object(n["f"])("video",d,null,512),[[n["r"],e.shouldScan]]),Object(n["t"])(Object(n["f"])("canvas",f,null,512),[[n["r"],!e.shouldScan]]),Object(n["f"])("canvas",p,null,512),Object(n["f"])("div",b,[Object(n["n"])(e.$slots,"default")])])})),m=(r("241c"),r("c1c3"),r("1da1"));function j(e,t,r){var n,a,c=new Promise((function(e,t){n=e,a=t}));return e.addEventListener(t,n),e.addEventListener(r,a),c.finally((function(){e.removeEventListener(t,n),e.removeEventListener(r,a)})),c}function h(e){return new Promise((function(t){setTimeout(t,e)}))}function O(e,t){return g.apply(this,arguments)}function g(){return g=Object(m["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new t,n.postMessage(r,[r.data.buffer]),e.next=4,j(n,"message");case 4:return a=e.sent,n.terminate(),e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function w(e,t,r){var n=r.detectHandler,a=r.locateHandler,c=r.minDelay,o=null,i=null,u=performance.now(),s=new e,l=!1,d=!0;s.onmessage=function(e){l=!1;var t=e.data,r=t.content,c=t.location;null!==r&&r!==o&&n(e.data),c!==i&&a(c),o=r||o,i=c};var f=function e(r){if(d){if(window.requestAnimationFrame(e),r-u>=c&&(u=r,!1===l)){l=!0;var n=t.captureFrame();s.postMessage(n,[n.data.buffer])}}else s.terminate()};return f(),function(){d=!1}}function x(e){var t=e.color;return function(e,r){var n=e.topLeftCorner,a=e.topRightCorner,c=e.bottomLeftCorner,o=e.bottomRightCorner;r.strokeStyle=t,r.beginPath(),r.moveTo(n.x,n.y),r.lineTo(c.x,c.y),r.lineTo(o.x,o.y),r.lineTo(a.x,a.y),r.lineTo(n.x,n.y),r.closePath(),r.stroke()}}r("9588"),r("46d4"),r("5a85"),r("dddc"),r("534d"),r("f432");var y=r("3835"),k=r("d4ec"),D=r("bee2"),R=(r("0ffc"),r("262e")),S=r("2caf"),I=r("9072"),E=function(e){Object(R["a"])(r,e);var t=Object(S["a"])(r);function r(){var e;return Object(k["a"])(this,r),e=t.call(this,"can't process cross-origin image"),e.name="DropImageFetchError",e}return r}(Object(I["a"])(Error)),C=function(e){Object(R["a"])(r,e);var t=Object(S["a"])(r);function r(){var e;return Object(k["a"])(this,r),e=t.call(this,"drag-and-dropped file is not of type image and can't be decoded"),e.name="DropImageDecodeError",e}return r}(Object(I["a"])(Error)),q=function(e){Object(R["a"])(r,e);var t=Object(S["a"])(r);function r(){var e;return Object(k["a"])(this,r),e=t.call(this,"this browser has no Stream API support"),e.name="StreamApiNotSupportedError",e}return r}(Object(I["a"])(Error)),F=function(e){Object(R["a"])(r,e);var t=Object(S["a"])(r);function r(){var e;return Object(k["a"])(this,r),e=t.call(this,"camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP."),e.name="InsecureContextError",e}return r}(Object(I["a"])(Error)),L=(r("22f4"),r("e0d3"),r("3130"),document.createElement("canvas")),Q=L.getContext("2d");function M(e,t,r){var n=Math.min(1,L.width/t,L.height/r),a=n*t,c=n*r;return Q.drawImage(e,0,0,a,c),Q.getImageData(0,0,a,c)}function T(e){var t=e.naturalWidth,r=e.naturalHeight;return M(e,t,r)}function P(e){var t=e.videoWidth,r=e.videoHeight;return M(e,t,r)}function _(e){return U.apply(this,arguments)}function U(){return U=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.startsWith("http")||!1!==t.includes(location.host)){e.next=2;break}throw new E;case 2:return r=document.createElement("img"),r.src=t,e.next=6,j(r,"load");case 6:return e.abrupt("return",T(r));case 7:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function z(e){return H.apply(this,arguments)}function H(){return H=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!/image.*/.test(t.type)){e.next=10;break}return r=new FileReader,r.readAsDataURL(t),e.next=5,j(r,"load");case 5:return n=e.sent,a=n.target.result,e.abrupt("return",_(a));case 10:throw new C;case 11:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}L.width=1920,L.height=1080;var A=function(){function e(t,r){Object(k["a"])(this,e),this.videoEl=t,this.stream=r}return Object(D["a"])(e,[{key:"stop",value:function(){this.stream.getTracks().forEach((function(e){return e.stop()}))}},{key:"captureFrame",value:function(){return P(this.videoEl)}},{key:"getCapabilities",value:function(){var e,t,r=this.stream.getVideoTracks(),n=Object(y["a"])(r,1),a=n[0];return null!==(e=null===a||void 0===a||null===(t=a.getCapabilities)||void 0===t?void 0:t.call(a))&&void 0!==e?e:{}}}]),e}(),W=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:if(r=e.sent.filter((function(e){var t=e.kind;return"videoinput"===t})),!(r.length>2)){e.next=15;break}n=r[0],a=r[r.length-1],e.t0=t,e.next="auto"===e.t0?9:"rear"===e.t0?10:"front"===e.t0?11:12;break;case 9:return e.abrupt("return",{deviceId:{exact:a.deviceId}});case 10:return e.abrupt("return",{deviceId:{exact:a.deviceId}});case 11:return e.abrupt("return",{deviceId:{exact:n.deviceId}});case 12:return e.abrupt("return",void 0);case 13:e.next=22;break;case 15:e.t1=t,e.next="auto"===e.t1?18:"rear"===e.t1?19:"front"===e.t1?20:21;break;case 18:return e.abrupt("return",{facingMode:{ideal:"environment"}});case 19:return e.abrupt("return",{facingMode:{exact:"environment"}});case 20:return e.abrupt("return",{facingMode:{exact:"user"}});case 21:return e.abrupt("return",void 0);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(e,t){return $.apply(this,arguments)};function $(){return $=Object(m["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,c,o,i,s,l,d,f,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(c=r.camera,o=r.torch,!0===window.isSecureContext){e.next=3;break}throw new F;case 3:if(void 0!==(null===(n=navigator)||void 0===n||null===(a=n.mediaDevices)||void 0===a?void 0:a.getUserMedia)){e.next=5;break}throw new q;case 5:return e.t0=u["a"],e.t1={width:{min:360,ideal:640,max:1920},height:{min:240,ideal:480,max:1080}},e.next=9,W(c);case 9:return e.t2=e.sent,e.t3=(0,e.t0)(e.t1,e.t2),i={audio:!1,video:e.t3},e.next=14,navigator.mediaDevices.getUserMedia(i);case 14:return s=e.sent,void 0!==t.srcObject?t.srcObject=s:void 0!==t.mozSrcObject?t.mozSrcObject=s:window.URL.createObjectURL?t.src=window.URL.createObjectURL(s):window.webkitURL?t.src=window.webkitURL.createObjectURL(s):t.src=s,e.next=18,j(t,"loadeddata");case 18:return e.next=20,h(500);case 20:return o&&(l=s.getVideoTracks(),d=Object(y["a"])(l,1),f=d[0],p=f.getCapabilities(),p.torch?f.applyConstraints({advanced:[{torch:!0}]}):console.warn("device does not support torch capability")),e.abrupt("return",new A(t,s));case 22:case"end":return e.stop()}}),e)}))),$.apply(this,arguments)}r("32ec"),r("f542"),r("c35d"),r("4a00");var J,V=function(e){var t=e.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1];return new Worker(URL.createObjectURL(new Blob([t],{type:"text/javascript"})))},N=function(){return V((function(){self.importScripts("https://cdn.jsdelivr.net/npm/jsqr@1.3.1/dist/jsQR.min.js"),self.addEventListener("message",(function(e){var t=e.data,r=jsQR(t.data,t.width,t.height),n=null,a=null;null!==r&&(n=r.data,a=r.location);var c={content:n,location:a,imageData:t};self.postMessage(c,[t.data.buffer])}))}))};function G(e){function t(e){return r.apply(this,arguments)}function r(){return r=Object(m["a"])(regeneratorRuntime.mark((function t(r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e("detect",r),t.prev=1,t.next=4,r;case 4:n=t.sent,a=n.content,null!==a&&e("decode",a),t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](1);case 11:case"end":return t.stop()}}),t,null,[[1,9]])}))),r.apply(this,arguments)}return{onDetect:t}}(function(e){e["auto"]="auto",e["rear"]="rear",e["off"]="off",e["front"]="front"})(J||(J={}));var K=Object(n["g"])({name:"QrStream",props:{camera:{type:String,default:"auto"},torch:{type:Boolean,default:!1},track:{type:[Function,Boolean],default:!0},worker:{type:Function,default:N}},setup:function(e,t){var r=t.emit,a=G(r),c=Object(n["m"])({cameraInstance:null,destroyed:!1,stopScanning:function(){},video:null,trackingLayer:null,pauseFrame:null,shouldStream:Object(n["b"])((function(){return!1===c.destroyed&&e.camera!==J.off})),shouldScan:Object(n["b"])((function(){return!0===c.shouldStream&&null!==c.cameraInstance})),scanInterval:Object(n["b"])((function(){return!1===e.track?500:40})),trackRepaintFunction:Object(n["b"])((function(){return!0===e.track?x({color:"#ff0000"}):!1===e.track?void 0:e.track}))});function o(){var t=Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(s(),"off"!==e.camera){t.next=6;break}return c.cameraInstance=null,t.abrupt("return",{capabilities:{}});case 6:return t.next=8,B(c.video,{camera:e.camera,torch:e.torch});case 8:return c.cameraInstance=t.sent,r=c.cameraInstance.getCapabilities(),c.destroyed&&c.cameraInstance.stop(),t.abrupt("return",{capabilities:r});case 12:case"end":return t.stop()}}),t)})))();r("init",t)}function i(){var t=function(e){a.onDetect(Promise.resolve(e))};c.stopScanning=w(e.worker,c.cameraInstance,{detectHandler:t,locateHandler:l,minDelay:c.scanInterval})}function s(){null!==c.cameraInstance&&(c.cameraInstance.stop(),c.cameraInstance=null)}function l(e){void 0===c.trackRepaintFunction||null===e?f():d(e)}function d(e){var t=c.video,r=c.trackingLayer,n=r.getContext("2d"),a=t.offsetWidth,o=t.offsetHeight,i=t.videoWidth,u=t.videoHeight,s=Math.max(a/i,o/u),l=i*s,d=u*s,f=l/i,p=d/u,b=(a-l)/2,v=(o-d)/2,m={};for(var j in e)m[j]={x:Math.floor(e[j].x*f+b),y:Math.floor(e[j].y*p+v)};window.requestAnimationFrame((function(){r.width=a,r.height=o,c.trackRepaintFunction(m,n)}))}function f(){var e=c.trackingLayer,t=e.getContext("2d");window.requestAnimationFrame((function(){t.clearRect(0,0,e.width,e.height)}))}function p(e){var t=c.pauseFrame,r=t.getContext("2d");window.requestAnimationFrame((function(){t.width=e.width,t.height=e.height,r.putImageData(e,0,0)}))}function b(){var e=c.pauseFrame,t=e.getContext("2d");window.requestAnimationFrame((function(){t.clearRect(0,0,e.width,e.height)}))}return Object(n["s"])((function(){return c.shouldStream}),(function(e){if(!e){var t=c.cameraInstance.captureFrame();p(t)}})),Object(n["s"])((function(){return c.shouldScan}),(function(e){e?(b(),f(),i()):c.stopScanning()})),Object(n["s"])((function(){return e.torch}),(function(){o()})),Object(n["s"])((function(){return e.camera}),(function(){o()})),Object(n["h"])((function(){o()})),Object(n["i"])((function(){s(),c.stopScanning(),c.destroyed=!0})),Object(u["a"])(Object(u["a"])({},Object(n["q"])(c)),{},{init:o})}});r("e150");K.render=v,K.__scopeId="data-v-f73a6250";var X=K;function Y(e,t,r,a,c,o){return Object(n["j"])(),Object(n["d"])("div",{onDrop:t[1]||(t[1]=Object(n["u"])((function(){return a.onDrop.apply(a,arguments)}),["prevent","stop"])),onDragenter:t[2]||(t[2]=Object(n["u"])((function(e){return a.onDragOver(!0)}),["prevent","stop"])),onDragleave:t[3]||(t[3]=Object(n["u"])((function(e){return a.onDragOver(!1)}),["prevent","stop"])),onDragover:t[4]||(t[4]=Object(n["u"])((function(){}),["prevent","stop"]))},[Object(n["n"])(e.$slots,"default")],32)}var Z=r("2909"),ee={name:"QrDropzone",props:{worker:{type:Function,default:N}},setup:function(e,t){var r=t.emit,n=G(r);function a(e){r("dragover",e)}function c(e){var t=e.dataTransfer;a(!1);var r=Object(Z["a"])(t.files),c=t.getData("text/uri-list");r.forEach((function(e){n.onDetect(o(e))})),""!==c&&n.onDetect(u(c))}function o(e){return i.apply(this,arguments)}function i(){return i=Object(m["a"])(regeneratorRuntime.mark((function t(r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,z(r);case 2:return n=t.sent,t.next=5,O(e.worker,n);case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)}))),i.apply(this,arguments)}function u(e){return s.apply(this,arguments)}function s(){return s=Object(m["a"])(regeneratorRuntime.mark((function t(r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_(r);case 2:return n=t.sent,t.next=5,O(e.worker,n);case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}return{onDrop:c,onDragOver:a}}};ee.render=Y;var te=ee;function re(e,t,r,a,c,o){return Object(n["j"])(),Object(n["d"])("input",{onChange:t[1]||(t[1]=function(){return a.onChangeInput.apply(a,arguments)}),type:"file",name:"image",accept:"image/*",capture:"environment",multiple:""},null,32)}r("966c");var ne={name:"QrCapture",props:{worker:{type:Function,default:N}},setup:function(e,t){var r=t.emit,n=G(r);function a(e){var t=Object(Z["a"])(e.target.files),r=t.map(c);r.forEach(n.onDetect)}function c(e){return o.apply(this,arguments)}function o(){return o=Object(m["a"])(regeneratorRuntime.mark((function t(r){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,z(r);case 2:return n=t.sent,t.next=5,O(e.worker,n);case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}return{onChangeInput:a}}};ne.render=re;var ae=ne,ce=Object(n["g"])({name:"QrCaptureExample",components:{QrCapture:ae},setup:function(){var e=Object(n["m"])({data:null});function t(t){e.data=t}return Object(u["a"])(Object(u["a"])({},Object(n["q"])(e)),{},{onDecode:t})}});ce.render=i;var oe=ce,ie=Object(n["v"])("data-v-4dea8090");Object(n["l"])("data-v-4dea8090");var ue=Object(n["f"])("div",{class:"mb"}," Qr Stream ",-1),se={class:"center"},le=Object(n["f"])("div",{style:{color:"red"},class:"frame"},null,-1),de={class:"result"};Object(n["k"])();var fe=ie((function(e,t,r,a,c,o){var i=Object(n["o"])("qr-stream");return Object(n["j"])(),Object(n["d"])("div",null,[ue,Object(n["f"])("div",se,[Object(n["f"])(i,{onDecode:e.onDecode,class:"mb stream"},{default:ie((function(){return[le]})),_:1},8,["onDecode"])]),Object(n["f"])("div",de," Result: "+Object(n["p"])(e.data),1)])})),pe=Object(n["g"])({name:"QrStreamExample",components:{QrStream:X},setup:function(){var e=Object(n["m"])({data:null});function t(t){e.data=t}return Object(u["a"])(Object(u["a"])({},Object(n["q"])(e)),{},{onDecode:t})}});r("4855");pe.render=fe,pe.__scopeId="data-v-4dea8090";var be=pe,ve=Object(n["v"])("data-v-7726d082");Object(n["l"])("data-v-7726d082");var me=Object(n["f"])("div",{class:"mb"}," Qr Dropzone ",-1),je=Object(n["e"])(" Drop image here. "),he={class:"result"};Object(n["k"])();var Oe=ve((function(e,t,r,a,c,o){var i=Object(n["o"])("qr-dropzone");return Object(n["j"])(),Object(n["d"])("div",null,[me,Object(n["f"])(i,{class:"dropzone mb",onDecode:e.onDecode},{default:ve((function(){return[je]})),_:1},8,["onDecode"]),Object(n["f"])("div",he," Result: "+Object(n["p"])(e.data),1)])})),ge=Object(n["g"])({name:"QrDropzoneExample",components:{QrDropzone:te},setup:function(){var e=Object(n["m"])({data:null});function t(t){e.data=t}return Object(u["a"])(Object(u["a"])({},Object(n["q"])(e)),{},{onDecode:t})}});r("d381");ge.render=Oe,ge.__scopeId="data-v-7726d082";var we=ge,xe=Object(n["g"])({name:"App",components:{QrCaptureExample:oe,QrStreamExample:be,QrDropzoneExample:we}});r("64be");xe.render=a;var ye=xe,ke=Object(n["c"])(ye);ke.mount("#app")},d381:function(e,t,r){"use strict";r("c4b2")},e150:function(e,t,r){"use strict";r("837e")}});
//# sourceMappingURL=app.0df2ff6a.js.map