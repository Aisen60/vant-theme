(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["component-dialog"],{2909:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var o=e("6b75");function l(t){if(Array.isArray(t))return Object(o["a"])(t)}e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0"),e("a630");function c(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var i=e("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t){return l(t)||c(t)||Object(i["a"])(t)||r()}},"377c":function(t,n,e){},"7b90":function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var o=e("20db"),l=e("3835"),c=e("7a23"),i=(e("d81d"),e("cb29"),e("a9e3"),Object(o["c"])("loading")),r=Object(l["a"])(i,2),a=r[0],u=r[1],s=Array(12).fill(null).map((function(t,n){return Object(c["n"])("i",{class:u("line",String(n+1))},null)})),f=Object(c["n"])("svg",{class:u("circular"),viewBox:"25 25 50 50"},[Object(c["n"])("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),b=Object(c["o"])({name:a,props:{size:[Number,String],color:String,vertical:Boolean,textSize:[Number,String],textColor:String,type:{type:String,default:"circular"}},setup:function(t,n){var e=n.slots,l=Object(c["g"])((function(){return Object(o["d"])({color:t.color},Object(o["e"])(t.size))})),i=function(){var n;if(e.default)return Object(c["n"])("span",{class:u("text"),style:{fontSize:Object(o["a"])(t.textSize),color:null!==(n=t.textColor)&&void 0!==n?n:t.color}},[e.default()])};return function(){var n=t.type,e=t.vertical;return Object(c["n"])("div",{class:u([n,{vertical:e}])},[Object(c["n"])("span",{class:u("spinner",n),style:l.value},["spinner"===n?s:f]),i()])}}}),d=Object(o["t"])(b)},"81d5":function(t,n,e){"use strict";var o=e("7b0b"),l=e("23cb"),c=e("50c4");t.exports=function(t){var n=o(this),e=c(n.length),i=arguments.length,r=l(i>1?arguments[1]:void 0,e),a=i>2?arguments[2]:void 0,u=void 0===a?e:l(a,e);while(u>r)n[r++]=t;return n}},be23:function(t,n,e){"use strict";e("377c")},cb29:function(t,n,e){var o=e("23e7"),l=e("81d5"),c=e("44d2");o({target:"Array",proto:!0},{fill:l}),c("fill")},d791:function(t,n,e){"use strict";e.d(n,"a",(function(){return Y}));var o=e("7a23"),l=(e("d3b7"),e("20db")),c=e("dca7d"),i=e("ade3"),r=e("2909"),a=e("3835"),u=(e("99af"),e("a9e3"),e("9d06")),s="van-hairline",f="".concat(s,"--top"),b="".concat(s,"--left"),d=("".concat(s,"--bottom"),"".concat(s,"--surround")),O=("".concat(s,"--top-bottom"),"".concat(s,"-unset--top-bottom"),e("c3be")),g=e("98d9"),j=(e("caad"),e("2532"),e("ac1f"),e("5319"),{to:[String,Object],url:String,replace:Boolean});function p(t){var n=t.$router,e=t.to,o=t.url,l=t.replace;e&&n?n[l?"replace":"push"](e):o&&(l?location.replace(o):location.href=o)}function m(){var t=Object(o["p"])().proxy;return function(){return p(t)}}var v,C=e("16b5"),k=e("7b90"),h=Object(l["c"])("button"),y=Object(a["a"])(h,2),B=y[0],S=y[1],w=Object(o["o"])({name:B,props:Object(l["d"])({},j,{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,loadingSize:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},nativeType:{type:String,default:"button"},iconPosition:{type:String,default:"left"}}),emits:["click"],setup:function(t,n){var e=n.emit,l=n.slots,c=m(),r=function(){return l.loading?l.loading():Object(o["n"])(k["a"],{size:t.loadingSize,type:t.loadingType,class:S("loading")},null)},a=function(){return t.loading?r():l.icon?Object(o["n"])("div",{class:S("icon")},[l.icon()]):t.icon?Object(o["n"])(C["a"],{name:t.icon,class:S("icon"),classPrefix:t.iconPrefix},null):void 0},u=function(){var n;if(n=t.loading?t.loadingText:l.default?l.default():t.text,n)return Object(o["n"])("span",{class:S("text")},[n])},s=function(){var n=t.color,e=t.plain;if(n){var o={color:e?n:"white"};return e||(o.background=n),n.includes("gradient")?o.border=0:o.borderColor=n,o}},f=function(n){t.loading?n.preventDefault():t.disabled||(e("click",n),c())};return function(){var n=t.tag,e=t.type,l=t.size,c=t.block,r=t.round,b=t.plain,O=t.square,g=t.loading,j=t.disabled,p=t.hairline,m=t.nativeType,v=t.iconPosition,C=[S([e,l,{plain:b,block:c,round:r,square:O,loading:g,disabled:j,hairline:p}]),Object(i["a"])({},d,p)];return Object(o["n"])(n,{type:m,class:C,style:s(),disabled:j,onClick:f},{default:function(){return[Object(o["n"])("div",{class:S("content")},["left"===v&&a(),u(),"right"===v&&a()])]}})}}}),x=Object(l["t"])(w),T=(e("a4d3"),e("e01a"),e("a6cd")),z=Object(l["c"])("action-bar"),A=Object(a["a"])(z,2),P=A[0],N=A[1],H=Symbol(P),R=Object(o["o"])({name:P,props:{safeAreaInsetBottom:l["r"]},setup:function(t,n){var e=n.slots,l=Object(T["a"])(H),c=l.linkChildren;return c(),function(){var n;return Object(o["n"])("div",{class:N({unfit:!t.safeAreaInsetBottom})},[null===(n=e.default)||void 0===n?void 0:n.call(e)])}}}),U=Object(l["t"])(R),_=e("6ba6"),I=e("55a7"),q=Object(l["c"])("action-bar-button"),D=Object(a["a"])(q,2),Q=D[0],F=D[1],J=Object(o["o"])({name:Q,props:Object(l["d"])({},j,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),setup:function(t,n){var e=n.slots,l=m(),c=Object(_["a"])(H),i=c.parent,r=c.index,a=Object(o["g"])((function(){if(i){var t=i.children[r.value-1];return!(t&&"isButton"in t)}})),u=Object(o["g"])((function(){if(i){var t=i.children[r.value+1];return!(t&&"isButton"in t)}}));return Object(I["a"])({isButton:!0}),function(){var n=t.type,c=t.icon,i=t.text,r=t.color,s=t.loading,f=t.disabled;return Object(o["n"])(x,{class:F([n,{last:u.value,first:a.value}]),size:"large",type:n,icon:c,color:r,loading:s,disabled:f,onClick:l},{default:function(){return[e.default?e.default():i]}})}}}),L=Object(l["t"])(J),$=Object(l["c"])("dialog"),E=Object(a["a"])($,3),M=E[0],G=E[1],K=E[2],V=[].concat(Object(r["a"])(O["a"]),["transition","closeOnPopstate"]),W=Object(o["o"])({name:M,props:Object(l["d"])({},O["b"],{title:String,theme:String,width:[Number,String],message:[String,Function],callback:Function,allowHtml:Boolean,className:l["s"],messageAlign:String,closeOnPopstate:l["r"],showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showConfirmButton:l["r"],closeOnClickOverlay:Boolean,transition:{type:String,default:"van-dialog-bounce"}}),emits:["confirm","cancel","update:show"],setup:function(t,n){var e=n.emit,c=n.slots,r=Object(o["L"])({confirm:!1,cancel:!1}),a=function(t){return e("update:show",t)},s=function(n){a(!1),t.callback&&t.callback(n)},d=function(n){return function(){t.show&&(e(n),t.beforeClose?(r[n]=!0,Object(u["a"])({interceptor:t.beforeClose,args:[n],done:function(){s(n),r[n]=!1},canceled:function(){r[n]=!1}})):s(n))}},O=d("cancel"),j=d("confirm"),p=function(){var n=c.title?c.title():t.title;if(n)return Object(o["n"])("div",{class:G("header",{isolated:!t.message&&!c.default})},[n])},m=function(n){var e=t.message,c=t.allowHtml,r=t.messageAlign,a=G("message",Object(i["a"])({"has-title":n},r,r)),u=Object(l["i"])(e)?e():e;return c&&"string"===typeof u?Object(o["n"])("div",{class:a,innerHTML:u},null):Object(o["n"])("div",{class:a},[u])},v=function(){if(c.default)return Object(o["n"])("div",{class:G("content")},[c.default()]);var n=t.title,e=t.message,l=t.allowHtml;if(e){var i=!(!n&&!c.title);return Object(o["n"])("div",{key:l?1:0,class:G("content",{isolated:!i})},[m(i)])}},C=function(){return Object(o["n"])("div",{class:[f,G("footer")]},[t.showCancelButton&&Object(o["n"])(x,{size:"large",text:t.cancelButtonText||K("cancel"),class:G("cancel"),style:{color:t.cancelButtonColor},loading:r.cancel,onClick:O},null),t.showConfirmButton&&Object(o["n"])(x,{size:"large",text:t.confirmButtonText||K("confirm"),class:[G("confirm"),Object(i["a"])({},b,t.showCancelButton)],style:{color:t.confirmButtonColor},loading:r.confirm,onClick:j},null)])},k=function(){return Object(o["n"])(U,{class:G("footer")},{default:function(){return[t.showCancelButton&&Object(o["n"])(L,{type:"warning",text:t.cancelButtonText||K("cancel"),class:G("cancel"),color:t.cancelButtonColor,loading:r.cancel,onClick:O},null),t.showConfirmButton&&Object(o["n"])(L,{type:"danger",text:t.confirmButtonText||K("confirm"),class:G("confirm"),color:t.confirmButtonColor,loading:r.confirm,onClick:j},null)]}})},h=function(){return c.footer?c.footer():"round-button"===t.theme?k():C()};return function(){var n=t.width,e=t.title,c=t.theme,i=t.message,r=t.className;return Object(o["n"])(g["a"],Object(o["v"])({role:"dialog",class:[G([c]),r],style:{width:Object(l["a"])(n)},"aria-labelledby":e||i},Object(l["p"])(t,V),{"onUpdate:show":a}),{default:function(){return[p(),v(),h()]}})}}});function X(){var t={setup:function(){var t=Object(c["b"])(),n=t.state,e=t.toggle;return function(){return Object(o["n"])(W,Object(o["v"])(n,{"onUpdate:show":e}),null)}}},n=Object(c["a"])(t);v=n.instance}function Y(t){return l["g"]?new Promise((function(n,e){v||X(),v.open(Object(l["d"])({},Y.currentOptions,t,{callback:function(t){("confirm"===t?n:e)(t)}}))})):Promise.resolve()}Y.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:"van-dialog-bounce",beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1},Y.currentOptions=Object(l["d"])({},Y.defaultOptions),Y.alert=Y,Y.confirm=function(t){return Y(Object(l["d"])({showCancelButton:!0},t))},Y.close=function(){v&&v.toggle(!1)},Y.setDefaultOptions=function(t){Object(l["d"])(Y.currentOptions,t)},Y.resetDefaultOptions=function(){Y.currentOptions=Object(l["d"])({},Y.defaultOptions)},Y.install=function(t){t.use(Object(l["t"])(W)),t.config.globalProperties.$dialog=Y},Y.Component=Object(l["t"])(W)},dc65:function(t,n,e){"use strict";e.r(n);var o=e("7a23"),l=["src"];function c(t,n,e,c,i,r){var a=Object(o["Q"])("van-cell"),u=Object(o["Q"])("demo-block"),s=Object(o["Q"])("van-dialog");return Object(o["H"])(),Object(o["k"])(o["b"],null,[Object(o["n"])(u,{card:"",title:c.t("basicUsage")},{default:Object(o["ab"])((function(){return[Object(o["n"])(a,{"is-link":"",title:c.t("alert1"),onClick:c.onClickAlert},null,8,["title","onClick"]),Object(o["n"])(a,{"is-link":"",title:c.t("alert2"),onClick:c.onClickAlert2},null,8,["title","onClick"]),Object(o["n"])(a,{"is-link":"",title:c.t("confirm"),onClick:c.onClickConfirm},null,8,["title","onClick"])]})),_:1},8,["title"]),Object(o["n"])(u,{card:"",title:c.t("roundButton")},{default:Object(o["ab"])((function(){return[Object(o["n"])(a,{"is-link":"",title:c.t("alert1"),onClick:c.onClickRound},null,8,["title","onClick"]),Object(o["n"])(a,{"is-link":"",title:c.t("alert2"),onClick:c.onClickRound2},null,8,["title","onClick"])]})),_:1},8,["title"]),Object(o["n"])(u,{card:"",title:c.t("beforeClose")},{default:Object(o["ab"])((function(){return[Object(o["n"])(a,{"is-link":"",title:c.t("beforeClose"),onClick:c.onClickBeforeClose},null,8,["title","onClick"])]})),_:1},8,["title"]),Object(o["n"])(u,{card:"",title:c.t("componentCall")},{default:Object(o["ab"])((function(){return[Object(o["n"])(a,{"is-link":"",title:c.t("componentCall"),onClick:n[0]||(n[0]=function(t){return c.show=!0})},null,8,["title"]),Object(o["n"])(s,{show:c.show,"onUpdate:show":n[1]||(n[1]=function(t){return c.show=t}),title:c.t("title"),"show-cancel-button":"","lazy-render":!1},{default:Object(o["ab"])((function(){return[Object(o["l"])("img",{src:c.image},null,8,l)]})),_:1},8,["show","title"])]})),_:1},8,["title"])],64)}e("d3b7");var i=e("dee8"),r=e("d791"),a={"zh-CN":{alert1:"提示弹窗",alert2:"提示弹窗（无标题）",confirm:"确认弹窗",beforeClose:"异步关闭",roundButton:"圆角按钮样式",componentCall:"组件调用",content:"代码是写出来给人看的，附带能在机器上运行"},"en-US":{alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",beforeClose:"Before Close",roundButton:"Round Button Style",componentCall:"Component Call"}},u={setup:function(){var t=Object(i["a"])(a),n=Object(o["N"])(!1),e=function(){r["a"].alert({title:t("title"),message:t("content")})},l=function(){r["a"].alert({message:t("content")})},c=function(){r["a"].alert({theme:"round-button",title:t("title"),message:t("content")})},u=function(){r["a"].alert({theme:"round-button",message:t("content")})},s=function(){r["a"].confirm({title:t("title"),message:t("content")})},f=function(){var n=function(t){return new Promise((function(n){setTimeout((function(){return n("confirm"===t)}),1e3)}))};r["a"].confirm({title:t("title"),message:t("content"),beforeClose:n})};return{t:t,show:n,image:"https://img.yzcdn.cn/vant/apple-3.jpg",onClickAlert:e,onClickAlert2:l,onClickRound:c,onClickRound2:u,onClickConfirm:s,onClickBeforeClose:f}}};e("be23");u.render=c;n["default"]=u}}]);
//# sourceMappingURL=component-dialog.42f5e5a2.js.map