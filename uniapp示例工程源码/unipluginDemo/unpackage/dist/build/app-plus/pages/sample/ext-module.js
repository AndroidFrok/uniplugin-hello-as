!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=15)}([function(t,n){t.exports={"uni-icon":{fontFamily:"uniicons",fontWeight:"normal"},"uni-bg-red":{backgroundColor:"#F76260",color:"#FFFFFF"},"uni-bg-green":{backgroundColor:"#09BB07",color:"#FFFFFF"},"uni-bg-blue":{backgroundColor:"#007AFF",color:"#FFFFFF"},"uni-container":{flex:1,paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",backgroundColor:"#f8f8f8"},"uni-padding-lr":{paddingLeft:"15",paddingRight:"15"},"uni-padding-tb":{paddingTop:"15",paddingBottom:"15"},"uni-header-logo":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"10upx"},"uni-header-image":{width:"80",height:"80"},"uni-hello-text":{marginBottom:"20"},"hello-text":{color:"#7A7E83",fontSize:"14",lineHeight:"20"},"hello-link":{color:"#7A7E83",fontSize:"14",lineHeight:"20"},"uni-panel":{marginBottom:"12"},"uni-panel-h":{backgroundColor:"#ffffff",flexDirection:"row",alignItems:"center",paddingTop:"12",paddingRight:"12",paddingBottom:"12",paddingLeft:"12"},"uni-panel-h-on":{backgroundColor:"#f0f0f0"},"uni-panel-text":{flex:1,color:"#000000",fontSize:"14",fontWeight:"normal"},"uni-panel-icon":{marginLeft:"15",color:"#999999",fontSize:"14",fontWeight:"normal",transform:"rotate(0deg)",transitionDuration:0,transitionProperty:"transform"},"uni-panel-icon-on":{transform:"rotate(180deg)"},"uni-navigate-item":{flexDirection:"row",alignItems:"center",backgroundColor:"#FFFFFF",borderTopStyle:"solid",borderTopColor:"#f0f0f0",borderTopWidth:"1",paddingTop:"12",paddingRight:"12",paddingBottom:"12",paddingLeft:"12","backgroundColor:active":"#f8f8f8"},"uni-navigate-text":{flex:1,color:"#000000",fontSize:"14",fontWeight:"normal"},"uni-navigate-icon":{marginLeft:"15",color:"#999999",fontSize:"14",fontWeight:"normal"},"uni-list-cell":{position:"relative",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},"uni-list-cell-pd":{paddingTop:"22upx",paddingRight:"30upx",paddingBottom:"22upx",paddingLeft:"30upx"},"flex-r":{flexDirection:"row"},"flex-c":{flexDirection:"column"},"a-i-c":{alignItems:"center"},"j-c-c":{justifyContent:"center"},"list-item":{flexDirection:"row",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10"},"@VERSION":2}},function(t,n,e){"use strict";function o(t,n,e,o,r,i,a,u,l,c){var f,d="function"==typeof t?t.options:t;if(l){d.components||(d.components={});var s=Object.prototype.hasOwnProperty;for(var p in l)s.call(l,p)&&!s.call(d.components,p)&&(d.components[p]=l[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(d.mixins||(d.mixins=[])).push(c)),n&&(d.render=n,d.staticRenderFns=e,d._compiled=!0),o&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),a?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=f):r&&(f=u?function(){r.call(this,this.$root.$options.shadowRoot)}:r),f)if(d.functional){d._injectStyles=f;var g=d.render;d.render=function(t,n){return f.call(n),g(t,n)}}else{var y=d.beforeCreate;d.beforeCreate=y?[].concat(y,f):[f]}return{exports:t,options:d}}e.d(n,"a",(function(){return o}))},,function(t,n,e){"use strict";var o=e(9),r=e(6),i=e(1),a=Object(i.a)(r.default,o.b,o.c,!1,null,null,"1047b191",!1,o.a,void 0);n.default=a.exports},,,function(t,n,e){"use strict";var o=e(7),r=e.n(o);n.default=r.a},function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=t("uniplugin_module"),o=t("modal"),r={onLoad:function(){plus.globalEvent.addEventListener("TestEvent",(function(t){o.toast({message:"TestEvent\u6536\u5230\uff1a"+t.msg,duration:1.5})}))},methods:{testAsyncFunc:function(){e.testAsyncFunc({name:"unimp",age:1},(function(t){o.toast({message:t,duration:1.5})}))},testSyncFunc:function(){var t=e.testSyncFunc({name:"unimp",age:1});o.toast({message:t,duration:1.5})},gotoNativePage:function(){e.gotoNativePage()}}};n.default=r}).call(this,e(16).default)},,function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){}));var o=function(){var t=this.$createElement,n=this._self._c||t;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("div",[n("button",{attrs:{type:"primary"},on:{click:this.testAsyncFunc}},[this._v("testAsyncFunc")]),n("button",{attrs:{type:"primary"},on:{click:this.testSyncFunc}},[this._v("testSyncFunc")]),n("button",{attrs:{type:"primary"},on:{click:this.gotoNativePage}},[this._v("\u8df3\u8f6c\u539f\u751fActivity")])],1)])},r=[]},function(t,n,e){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(e(11).default,Vue.prototype.__$appStyle__)},function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);n.default=r.a},function(t,n){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var n=this.constructor;return this.then((function(e){return n.resolve(t()).then((function(){return e}))}),(function(e){return n.resolve(t()).then((function(){throw e}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var e=uni.requireGlobal();ArrayBuffer=e.ArrayBuffer,Int8Array=e.Int8Array,Uint8Array=e.Uint8Array,Uint8ClampedArray=e.Uint8ClampedArray,Int16Array=e.Int16Array,Uint16Array=e.Uint16Array,Int32Array=e.Int32Array,Uint32Array=e.Uint32Array,Float32Array=e.Float32Array,Float64Array=e.Float64Array,BigInt64Array=e.BigInt64Array,BigUint64Array=e.BigUint64Array}},,,function(t,n,e){"use strict";e.r(n);e(10),e(12);var o=e(3);o.default.mpType="page",o.default.route="pages/sample/ext-module",o.default.el="#root",new Vue(o.default)},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return weex.requireModule(t)}}]);