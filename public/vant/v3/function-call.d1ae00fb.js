import{c as F,e as f,p as K,h as I,t as k,x as z,d as U}from"./use-translate.5c5bc340.js";import{n as W,u as L,m as M,t as P,w as V}from"./with-install.fb16276a.js";import{m as _,u as $}from"./mount-component.d554f092.js";import{z as j,C as q,H as G,e as o,A as D,W as J}from"./vue-libs.baee7c1f.js";import{e as Q,c as X}from"./constant.80c6de18.js";import{c as Y}from"./interceptor.c431140c.js";import{p as Z,a as ee,P as te}from"./index.cdbdcd62.js";import{B as v}from"./index.8ec72d7b.js";import{b as x,a as ne}from"./index.8bb4eafa.js";const[oe,s,g]=F("dialog"),le=f({},Z,{title:String,theme:String,width:W,message:[String,Function],callback:Function,allowHtml:Boolean,className:L,transition:M("van-dialog-bounce"),messageAlign:String,closeOnPopstate:P,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:P,closeOnClickOverlay:Boolean}),ae=[...ee,"transition","closeOnPopstate"];var S=j({name:oe,props:le,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:i,slots:l}){const d=q(),u=G({confirm:!1,cancel:!1}),b=t=>i("update:show",t),y=t=>{var a;b(!1),(a=e.callback)==null||a.call(e,t)},O=t=>()=>{!e.show||(i(t),e.beforeClose?(u[t]=!0,Y(e.beforeClose,{args:[t],done(){y(t),u[t]=!1},canceled(){u[t]=!1}})):y(t))},C=O("cancel"),w=O("confirm"),T=J(t=>{var r,c;if(t.target!==((c=(r=d.value)==null?void 0:r.popupRef)==null?void 0:c.value))return;({Enter:e.showConfirmButton?w:k,Escape:e.showCancelButton?C:k})[t.key](),i("keydown",t)},["enter","esc"]),p=()=>{const t=l.title?l.title():e.title;if(t)return o("div",{class:s("header",{isolated:!e.message&&!l.default})},[t])},A=t=>{const{message:a,allowHtml:r,messageAlign:c}=e,B=s("message",{"has-title":t,[c]:c}),h=z(a)?a():a;return r&&typeof h=="string"?o("div",{class:B,innerHTML:h},null):o("div",{class:B},[h])},E=()=>{if(l.default)return o("div",{class:s("content")},[l.default()]);const{title:t,message:a,allowHtml:r}=e;if(a){const c=!!(t||l.title);return o("div",{key:r?1:0,class:s("content",{isolated:!c})},[A(c)])}},H=()=>o("div",{class:[X,s("footer")]},[e.showCancelButton&&o(v,{size:"large",text:e.cancelButtonText||g("cancel"),class:s("cancel"),style:{color:e.cancelButtonColor},loading:u.cancel,disabled:e.cancelButtonDisabled,onClick:C},null),e.showConfirmButton&&o(v,{size:"large",text:e.confirmButtonText||g("confirm"),class:[s("confirm"),{[Q]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:u.confirm,disabled:e.confirmButtonDisabled,onClick:w},null)]),N=()=>o(ne,{class:s("footer")},{default:()=>[e.showCancelButton&&o(x,{type:"warning",text:e.cancelButtonText||g("cancel"),class:s("cancel"),color:e.cancelButtonColor,loading:u.cancel,disabled:e.cancelButtonDisabled,onClick:C},null),e.showConfirmButton&&o(x,{type:"danger",text:e.confirmButtonText||g("confirm"),class:s("confirm"),color:e.confirmButtonColor,loading:u.confirm,disabled:e.confirmButtonDisabled,onClick:w},null)]}),R=()=>l.footer?l.footer():e.theme==="round-button"?N():H();return()=>{const{width:t,title:a,theme:r,message:c,className:B}=e;return o(te,D({ref:d,role:"dialog",class:[s([r]),B],style:{width:I(t)},tabindex:0,"aria-labelledby":a||c,onKeydown:T,"onUpdate:show":b},K(e,ae)),{default:()=>[p(),E(),R()]})}}});let m;function se(){({instance:m}=_({setup(){const{state:i,toggle:l}=$();return()=>o(S,D(i,{"onUpdate:show":l}),null)}}))}function n(e){return U?new Promise((i,l)=>{m||se(),m.open(f({},n.currentOptions,e,{callback:d=>{(d==="confirm"?i:l)(d)}}))}):Promise.resolve()}n.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};n.currentOptions=f({},n.defaultOptions);n.alert=n;n.confirm=e=>n(f({showCancelButton:!0},e));n.close=()=>{m&&m.toggle(!1)};n.setDefaultOptions=e=>{f(n.currentOptions,e)};n.resetDefaultOptions=()=>{n.currentOptions=f({},n.defaultOptions)};n.Component=V(S);n.install=e=>{e.use(n.Component),e.config.globalProperties.$dialog=n};export{n as D};
