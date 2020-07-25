!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.VMoney=t():e.VMoney=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t,n){"use strict";t.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2,allowBlank:!1,min:Number.MIN_SAFE_INTEGER,max:Number.MAX_SAFE_INTEGER,masked:!1,amend:!1}},function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return y})),n.d(t,"a",(function(){return g}));var r=n(0),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.a;if(t.allowBlank&&""==e)return"";if("number"===typeof e)var n=e.toFixed(f(t.precision));else n=u(e,t);var i=n.indexOf("-")>=0?"-":"",o=s(n),a=p(o,t.precision),c=m(a),l=c[0],v=c[1];return l=d(l,t.thousands),t.prefix+i+h(l,v,t.decimal)+t.suffix},o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.a;if("string"!==typeof e)return e;var i=u(e,n),o=i.indexOf("-")>=0?-1:1,a=s(i),c=p(a,t);return parseFloat(c)*o},u=function(e,t){return c(a(e,t.prefix),t.suffix)},a=function(e,t){return e.startsWith(t)?e.replace(t,""):e},c=function(e,t){return e.endsWith(t)?e.substring(0,e.length-t.length):e},s=function(e){return v(e).replace(/\D+/g,"")||"0"},f=function(e){return l(0,e,20)},l=function(e,t,n){return Math.max(e,Math.min(t,n))},p=function(e,t){var n=Math.pow(10,t);return(parseFloat(e)/n).toFixed(f(t))},d=function(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1".concat(t))},m=function(e){return v(e).split(".")},h=function(e,t,n){return t?e+n+t:e},v=function(e){return e?e.toString():""},y=function(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(n(),setTimeout(n,1))},g=function(e){return new Event(e)}},function(e,t,n){"use strict";var r=n(1),i=n(0);t.a=function(e,t){if(t.value){var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).concat(Object.keys(t)).reduce((function(n,r){return n[r]=void 0===t[r]?e[r]:t[r],n}),{})}(i.a,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var o=e.getElementsByTagName("input");1!==o.length||(e=o[0])}e.onkeydown=function(t){var i=8==t.which||46==t.which,o=e.value.length-e.selectionEnd===0;n.allowBlank&&i&&o&&0===Object(r.d)(e.value,0,n)&&(e.__vue__.innerValue="",e.dispatchEvent(Object(r.a)("change")))},e.oninput=function(){var t=e.value.length-e.selectionEnd;try{e.__vue__.innerValue=Object(r.b)(e.value,n)}catch(i){e.value=Object(r.b)(e.value,n)}t=Math.max(t,n.suffix.length),t=e.value.length-t,t=Math.max(t,n.prefix.length+1),Object(r.c)(e,t),e.dispatchEvent(Object(r.a)("change"))},e.onfocus=function(){e.selectionEnd<n.prefix.length?Object(r.c)(e,n.prefix.length):e.selectionEnd>e.value.length-n.suffix.length?Object(r.c)(e,e.value.length-n.suffix.length):Object(r.c)(e,e.selectionEnd)},e.oninput()}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"model",rawName:"v-model",value:e.innerValue,expression:"innerValue"},{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix,allowBlank:e.allowBlank,min:e.min,max:e.max},expression:"{precision, decimal, thousands, prefix, suffix, allowBlank, min, max}"}],staticClass:"v-money",attrs:{type:"tel",pattern:e.pattern,title:e.minMaxMessage},domProps:{value:e.innerValue},on:{blur:e.blur,input:function(t){t.target.composing||(e.innerValue=t.target.value)}}})};r._withStripped=!0;var i=n(2),o=n(0),u=n(1);var a=function(e,t,n,r,i,o,u,a){var c,s="function"===typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),o&&(s._scopeId="data-v-"+o),u?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},s._ssrRegister=c):i&&(c=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(s.functional){s._injectStyles=c;var f=s.render;s.render=function(e,t){return c.call(t),f(e,t)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:s}}({name:"Money",props:{value:{required:!1,type:[Number,String]},minMaxMessage:{type:String},masked:{type:Boolean,default:function(){return o.a.masked}},precision:{type:Number,default:function(){return o.a.precision}},decimal:{type:String,default:function(){return o.a.decimal}},thousands:{type:String,default:function(){return o.a.thousands}},prefix:{type:String,default:function(){return o.a.prefix}},suffix:{type:String,default:function(){return o.a.suffix}},allowBlank:{type:Boolean,default:function(){return o.a.allowBlank}},max:{type:Number,default:function(){return o.a.max}},min:{type:Number,default:function(){return o.a.min}},amend:{type:Boolean,default:function(){return o.a.amend}}},directives:{money:i.a},data:function(){return{pattern:".*",innerValue:0}},watch:{innerValue:function(e,t){if(e!==t){var n=this.unformat(e);this.$emit("input",this.masked?e:n),n>this.$props.max?this.pattern=this.$props.max:n<this.$props.min?this.pattern=this.$props.min:this.pattern=".*"}},value:function(e){this.innerValue=this.format(e)}},created:function(){this.value&&(this.innerValue=this.format(this.value))},methods:{blur:function(){"number"===typeof this.pattern&&this.$props.amend&&(this.$emit("input",this.pattern),this.pattern=".*")},format:function(e){return Object(u.b)(e,this.$props)},unformat:function(e){return Object(u.d)(e,this.precision,this.$props)}}},r,[],!1,null,null,null);a.options.__file="src/component.vue";t.a=a.exports},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"VERSION",(function(){return u}));var r=n(3);n.d(t,"Money",(function(){return r.a}));var i=n(2);n.d(t,"VMoney",(function(){return i.a}));var o=n(0);n.d(t,"options",(function(){return o.a}));var u=e.env.VERSION;t.default={install:function(e,t){t&&Object.keys(t).map((function(e){o.a[e]=t[e]})),e.directive("money",i.a),e.component("money",r.a)}}}.call(this,n(6))},function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:u}catch(e){r=u}}();var c,s=[],f=!1,l=-1;function p(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&d())}function d(){if(!f){var e=a(p);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||f||a(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}])}));