(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["component-switch"],{2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("6b75");function c(t){if(Array.isArray(t))return Object(o["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function l(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=n("06c5");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t){return c(t)||l(t)||Object(r["a"])(t)||a()}},"375e":function(t,e,n){},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");var o=n("ade3");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"773f":function(t,e,n){"use strict";n.r(e);var o=n("7a23");function c(t,e,n,c,l,r){var a=Object(o["Q"])("van-switch"),i=Object(o["Q"])("demo-block"),u=Object(o["Q"])("van-cell");return Object(o["H"])(),Object(o["k"])(o["b"],null,[Object(o["n"])(i,{title:c.t("basicUsage")},{default:Object(o["ab"])((function(){return[Object(o["n"])(a,{modelValue:t.checked,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.checked=e})},null,8,["modelValue"])]})),_:1},8,["title"]),Object(o["n"])(i,{title:c.t("disabled")},{default:Object(o["ab"])((function(){return[Object(o["n"])(a,{modelValue:t.checked,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.checked=e}),disabled:""},null,8,["modelValue"])]})),_:1},8,["title"]),Object(o["n"])(i,{title:c.t("loadingStatus")},{default:Object(o["ab"])((function(){return[Object(o["n"])(a,{modelValue:t.checked,"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.checked=e}),loading:""},null,8,["modelValue"])]})),_:1},8,["title"]),Object(o["n"])(i,{title:c.t("customSize")},{default:Object(o["ab"])((function(){return[Object(o["n"])(a,{modelValue:t.checked2,"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.checked2=e}),size:"24px"},null,8,["modelValue"])]})),_:1},8,["title"]),Object(o["n"])(i,{title:c.t("customColor")},{default:Object(o["ab"])((function(){return[Object(o["n"])(a,{modelValue:t.checked3,"onUpdate:modelValue":e[4]||(e[4]=function(e){return t.checked3=e}),"active-color":"#ee0a24","inactive-color":"#dcdee0"},null,8,["modelValue"])]})),_:1},8,["title"]),Object(o["n"])(i,{title:c.t("asyncControl")},{default:Object(o["ab"])((function(){return[Object(o["n"])(a,{"model-value":t.checked4,"onUpdate:modelValue":c.onUpdateValue},null,8,["model-value","onUpdate:modelValue"])]})),_:1},8,["title"]),Object(o["n"])(i,{title:c.t("withCell")},{default:Object(o["ab"])((function(){return[Object(o["n"])(u,{center:"",title:c.t("title")},{"right-icon":Object(o["ab"])((function(){return[Object(o["n"])(a,{modelValue:t.checked5,"onUpdate:modelValue":e[5]||(e[5]=function(e){return t.checked5=e}),size:"24"},null,8,["modelValue"])]})),_:1},8,["title"])]})),_:1},8,["title"])],64)}var l=n("5530"),r=n("dee8"),a=n("d791"),i={"zh-CN":{title:"标题",confirm:"提醒",message:"是否切换开关？",withCell:"搭配单元格使用",customSize:"自定义大小",customColor:"自定义颜色",asyncControl:"异步控制"},"en-US":{title:"Title",confirm:"Confirm",message:"Are you sure to toggle switch?",withCell:"Inside a Cell",customSize:"Custom Size",customColor:"Custom Color",asyncControl:"Async Control"}},u={setup:function(){var t=Object(r["a"])(i),e=Object(o["L"])({checked:!0,checked2:!0,checked3:!0,checked4:!0,checked5:!0,checked6:!1}),n=function(n){a["a"].confirm({title:t("title"),message:t("message")}).then((function(){e.checked4=n}))};return Object(l["a"])(Object(l["a"])({},Object(o["V"])(e)),{},{t:t,onUpdateValue:n})}};n("91d4");u.render=c;e["default"]=u},"7b90":function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var o=n("20db"),c=n("3835"),l=n("7a23"),r=(n("d81d"),n("cb29"),n("a9e3"),Object(o["c"])("loading")),a=Object(c["a"])(r,2),i=a[0],u=a[1],s=Array(12).fill(null).map((function(t,e){return Object(l["n"])("i",{class:u("line",String(e+1))},null)})),d=Object(l["n"])("svg",{class:u("circular"),viewBox:"25 25 50 50"},[Object(l["n"])("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),b=Object(l["o"])({name:i,props:{size:[Number,String],color:String,vertical:Boolean,textSize:[Number,String],textColor:String,type:{type:String,default:"circular"}},setup:function(t,e){var n=e.slots,c=Object(l["g"])((function(){return Object(o["d"])({color:t.color},Object(o["e"])(t.size))})),r=function(){var e;if(n.default)return Object(l["n"])("span",{class:u("text"),style:{fontSize:Object(o["a"])(t.textSize),color:null!==(e=t.textColor)&&void 0!==e?e:t.color}},[n.default()])};return function(){var e=t.type,n=t.vertical;return Object(l["n"])("div",{class:u([e,{vertical:n}])},[Object(l["n"])("span",{class:u("spinner",e),style:c.value},["spinner"===e?s:d]),r()])}}}),f=Object(o["t"])(b)},"81d5":function(t,e,n){"use strict";var o=n("7b0b"),c=n("23cb"),l=n("50c4");t.exports=function(t){var e=o(this),n=l(e.length),r=arguments.length,a=c(r>1?arguments[1]:void 0,n),i=r>2?arguments[2]:void 0,u=void 0===i?n:c(i,n);while(u>a)e[a++]=t;return e}},"91d4":function(t,e,n){"use strict";n("375e")},cb29:function(t,e,n){var o=n("23e7"),c=n("81d5"),l=n("44d2");o({target:"Array",proto:!0},{fill:c}),l("fill")},d791:function(t,e,n){"use strict";n.d(e,"a",(function(){return Y}));var o=n("7a23"),c=(n("d3b7"),n("20db")),l=n("dca7d"),r=n("ade3"),a=n("2909"),i=n("3835"),u=(n("99af"),n("a9e3"),n("9d06")),s="van-hairline",d="".concat(s,"--top"),b="".concat(s,"--left"),f=("".concat(s,"--bottom"),"".concat(s,"--surround")),O=("".concat(s,"--top-bottom"),"".concat(s,"-unset--top-bottom"),n("c3be")),j=n("98d9"),p=(n("caad"),n("2532"),n("ac1f"),n("5319"),{to:[String,Object],url:String,replace:Boolean});function g(t){var e=t.$router,n=t.to,o=t.url,c=t.replace;n&&e?e[c?"replace":"push"](n):o&&(c?location.replace(o):location.href=o)}function m(){var t=Object(o["p"])().proxy;return function(){return g(t)}}var v,h=n("16b5"),y=n("7b90"),S=Object(c["c"])("button"),w=Object(i["a"])(S,2),C=w[0],k=w[1],B=Object(o["o"])({name:C,props:Object(c["d"])({},p,{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,loadingSize:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},nativeType:{type:String,default:"button"},iconPosition:{type:String,default:"left"}}),emits:["click"],setup:function(t,e){var n=e.emit,c=e.slots,l=m(),a=function(){return c.loading?c.loading():Object(o["n"])(y["a"],{size:t.loadingSize,type:t.loadingType,class:k("loading")},null)},i=function(){return t.loading?a():c.icon?Object(o["n"])("div",{class:k("icon")},[c.icon()]):t.icon?Object(o["n"])(h["a"],{name:t.icon,class:k("icon"),classPrefix:t.iconPrefix},null):void 0},u=function(){var e;if(e=t.loading?t.loadingText:c.default?c.default():t.text,e)return Object(o["n"])("span",{class:k("text")},[e])},s=function(){var e=t.color,n=t.plain;if(e){var o={color:n?e:"white"};return n||(o.background=e),e.includes("gradient")?o.border=0:o.borderColor=e,o}},d=function(e){t.loading?e.preventDefault():t.disabled||(n("click",e),l())};return function(){var e=t.tag,n=t.type,c=t.size,l=t.block,a=t.round,b=t.plain,O=t.square,j=t.loading,p=t.disabled,g=t.hairline,m=t.nativeType,v=t.iconPosition,h=[k([n,c,{plain:b,block:l,round:a,square:O,loading:j,disabled:p,hairline:g}]),Object(r["a"])({},f,g)];return Object(o["n"])(e,{type:m,class:h,style:s(),disabled:p,onClick:d},{default:function(){return[Object(o["n"])("div",{class:k("content")},["left"===v&&i(),u(),"right"===v&&i()])]}})}}}),x=Object(c["t"])(B),V=(n("a4d3"),n("e01a"),n("a6cd")),P=Object(c["c"])("action-bar"),z=Object(i["a"])(P,2),T=z[0],U=z[1],A=Symbol(T),D=Object(o["o"])({name:T,props:{safeAreaInsetBottom:c["r"]},setup:function(t,e){var n=e.slots,c=Object(V["a"])(A),l=c.linkChildren;return l(),function(){var e;return Object(o["n"])("div",{class:U({unfit:!t.safeAreaInsetBottom})},[null===(e=n.default)||void 0===e?void 0:e.call(n)])}}}),_=Object(c["t"])(D),N=n("6ba6"),H=n("55a7"),I=Object(c["c"])("action-bar-button"),q=Object(i["a"])(I,2),E=q[0],L=q[1],Q=Object(o["o"])({name:E,props:Object(c["d"])({},p,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),setup:function(t,e){var n=e.slots,c=m(),l=Object(N["a"])(A),r=l.parent,a=l.index,i=Object(o["g"])((function(){if(r){var t=r.children[a.value-1];return!(t&&"isButton"in t)}})),u=Object(o["g"])((function(){if(r){var t=r.children[a.value+1];return!(t&&"isButton"in t)}}));return Object(H["a"])({isButton:!0}),function(){var e=t.type,l=t.icon,r=t.text,a=t.color,s=t.loading,d=t.disabled;return Object(o["n"])(x,{class:L([e,{last:u.value,first:i.value}]),size:"large",type:e,icon:l,color:a,loading:s,disabled:d,onClick:c},{default:function(){return[n.default?n.default():r]}})}}}),F=Object(c["t"])(Q),J=Object(c["c"])("dialog"),$=Object(i["a"])(J,3),M=$[0],G=$[1],K=$[2],R=[].concat(Object(a["a"])(O["a"]),["transition","closeOnPopstate"]),W=Object(o["o"])({name:M,props:Object(c["d"])({},O["b"],{title:String,theme:String,width:[Number,String],message:[String,Function],callback:Function,allowHtml:Boolean,className:c["s"],messageAlign:String,closeOnPopstate:c["r"],showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showConfirmButton:c["r"],closeOnClickOverlay:Boolean,transition:{type:String,default:"van-dialog-bounce"}}),emits:["confirm","cancel","update:show"],setup:function(t,e){var n=e.emit,l=e.slots,a=Object(o["L"])({confirm:!1,cancel:!1}),i=function(t){return n("update:show",t)},s=function(e){i(!1),t.callback&&t.callback(e)},f=function(e){return function(){t.show&&(n(e),t.beforeClose?(a[e]=!0,Object(u["a"])({interceptor:t.beforeClose,args:[e],done:function(){s(e),a[e]=!1},canceled:function(){a[e]=!1}})):s(e))}},O=f("cancel"),p=f("confirm"),g=function(){var e=l.title?l.title():t.title;if(e)return Object(o["n"])("div",{class:G("header",{isolated:!t.message&&!l.default})},[e])},m=function(e){var n=t.message,l=t.allowHtml,a=t.messageAlign,i=G("message",Object(r["a"])({"has-title":e},a,a)),u=Object(c["i"])(n)?n():n;return l&&"string"===typeof u?Object(o["n"])("div",{class:i,innerHTML:u},null):Object(o["n"])("div",{class:i},[u])},v=function(){if(l.default)return Object(o["n"])("div",{class:G("content")},[l.default()]);var e=t.title,n=t.message,c=t.allowHtml;if(n){var r=!(!e&&!l.title);return Object(o["n"])("div",{key:c?1:0,class:G("content",{isolated:!r})},[m(r)])}},h=function(){return Object(o["n"])("div",{class:[d,G("footer")]},[t.showCancelButton&&Object(o["n"])(x,{size:"large",text:t.cancelButtonText||K("cancel"),class:G("cancel"),style:{color:t.cancelButtonColor},loading:a.cancel,onClick:O},null),t.showConfirmButton&&Object(o["n"])(x,{size:"large",text:t.confirmButtonText||K("confirm"),class:[G("confirm"),Object(r["a"])({},b,t.showCancelButton)],style:{color:t.confirmButtonColor},loading:a.confirm,onClick:p},null)])},y=function(){return Object(o["n"])(_,{class:G("footer")},{default:function(){return[t.showCancelButton&&Object(o["n"])(F,{type:"warning",text:t.cancelButtonText||K("cancel"),class:G("cancel"),color:t.cancelButtonColor,loading:a.cancel,onClick:O},null),t.showConfirmButton&&Object(o["n"])(F,{type:"danger",text:t.confirmButtonText||K("confirm"),class:G("confirm"),color:t.confirmButtonColor,loading:a.confirm,onClick:p},null)]}})},S=function(){return l.footer?l.footer():"round-button"===t.theme?y():h()};return function(){var e=t.width,n=t.title,l=t.theme,r=t.message,a=t.className;return Object(o["n"])(j["a"],Object(o["v"])({role:"dialog",class:[G([l]),a],style:{width:Object(c["a"])(e)},"aria-labelledby":n||r},Object(c["p"])(t,R),{"onUpdate:show":i}),{default:function(){return[g(),v(),S()]}})}}});function X(){var t={setup:function(){var t=Object(l["b"])(),e=t.state,n=t.toggle;return function(){return Object(o["n"])(W,Object(o["v"])(e,{"onUpdate:show":n}),null)}}},e=Object(l["a"])(t);v=e.instance}function Y(t){return c["g"]?new Promise((function(e,n){v||X(),v.open(Object(c["d"])({},Y.currentOptions,t,{callback:function(t){("confirm"===t?e:n)(t)}}))})):Promise.resolve()}Y.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1},Y.currentOptions=Object(c["d"])({},Y.defaultOptions),Y.alert=Y,Y.confirm=function(t){return Y(Object(c["d"])({showCancelButton:!0},t))},Y.close=function(){v&&v.toggle(!1)},Y.setDefaultOptions=function(t){Object(c["d"])(Y.currentOptions,t)},Y.resetDefaultOptions=function(){Y.currentOptions=Object(c["d"])({},Y.defaultOptions)},Y.install=function(t){t.use(Object(c["t"])(W)),t.config.globalProperties.$dialog=Y},Y.Component=Object(c["t"])(W)},dbb4:function(t,e,n){var o=n("23e7"),c=n("83ab"),l=n("56ef"),r=n("fc6a"),a=n("06cf"),i=n("8418");o({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,n,o=r(t),c=a.f,u=l(o),s={},d=0;while(u.length>d)n=c(o,e=u[d++]),void 0!==n&&i(s,e,n);return s}})},e439:function(t,e,n){var o=n("23e7"),c=n("d039"),l=n("fc6a"),r=n("06cf").f,a=n("83ab"),i=c((function(){r(1)})),u=!a||i;o({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(t,e){return r(l(t),e)}})}}]);
//# sourceMappingURL=component-switch.c8c29c9c.js.map