import{c as F,e as f,p as K,h as I,s as p,w as z,d as U}from"./use-translate.fbf36f21.js";import{n as W,u as L,m as M,t as P,w as V}from"./with-install.251697cd.js";import{m as _,u as $}from"./mount-component.985a4079.js";import{z as j,D as q,H as G,e as o,A as x,W as J}from"./vue-libs.bf80eadf.js";import{e as Q,c as X}from"./constant.80c6de18.js";import{c as Y}from"./interceptor.12fa8767.js";import{p as Z,a as ee,P as te}from"./index.6253c32e.js";import{B as v}from"./index.16d2686f.js";import{b,a as ne}from"./index.151c48bc.js";const[oe,s,B]=F("dialog"),le=f({},Z,{title:String,theme:String,width:W,message:[String,Function],callback:Function,allowHtml:Boolean,className:L,transition:M("van-dialog-bounce"),messageAlign:String,closeOnPopstate:P,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showConfirmButton:P,closeOnClickOverlay:Boolean}),ae=[...ee,"transition","closeOnPopstate"];var S=j({name:oe,props:le,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:i,slots:l}){const m=q(),u=G({confirm:!1,cancel:!1}),y=t=>i("update:show",t),O=t=>{var a;y(!1),(a=e.callback)==null||a.call(e,t)},k=t=>()=>{!e.show||(i(t),e.beforeClose?(u[t]=!0,Y(e.beforeClose,{args:[t],done(){O(t),u[t]=!1},canceled(){u[t]=!1}})):O(t))},w=k("cancel"),C=k("confirm"),T=J(t=>{var c,r;if(t.target!==((r=(c=m.value)==null?void 0:c.popupRef)==null?void 0:r.value))return;({Enter:e.showConfirmButton?C:p,Escape:e.showCancelButton?w:p})[t.key](),i("keydown",t)},["enter","esc"]),D=()=>{const t=l.title?l.title():e.title;if(t)return o("div",{class:s("header",{isolated:!e.message&&!l.default})},[t])},A=t=>{const{message:a,allowHtml:c,messageAlign:r}=e,g=s("message",{"has-title":t,[r]:r}),h=z(a)?a():a;return c&&typeof h=="string"?o("div",{class:g,innerHTML:h},null):o("div",{class:g},[h])},E=()=>{if(l.default)return o("div",{class:s("content")},[l.default()]);const{title:t,message:a,allowHtml:c}=e;if(a){const r=!!(t||l.title);return o("div",{key:c?1:0,class:s("content",{isolated:!r})},[A(r)])}},H=()=>o("div",{class:[X,s("footer")]},[e.showCancelButton&&o(v,{size:"large",text:e.cancelButtonText||B("cancel"),class:s("cancel"),style:{color:e.cancelButtonColor},loading:u.cancel,onClick:w},null),e.showConfirmButton&&o(v,{size:"large",text:e.confirmButtonText||B("confirm"),class:[s("confirm"),{[Q]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:u.confirm,onClick:C},null)]),N=()=>o(ne,{class:s("footer")},{default:()=>[e.showCancelButton&&o(b,{type:"warning",text:e.cancelButtonText||B("cancel"),class:s("cancel"),color:e.cancelButtonColor,loading:u.cancel,onClick:w},null),e.showConfirmButton&&o(b,{type:"danger",text:e.confirmButtonText||B("confirm"),class:s("confirm"),color:e.confirmButtonColor,loading:u.confirm,onClick:C},null)]}),R=()=>l.footer?l.footer():e.theme==="round-button"?N():H();return()=>{const{width:t,title:a,theme:c,message:r,className:g}=e;return o(te,x({ref:m,role:"dialog",class:[s([c]),g],style:{width:I(t)},tabindex:0,"aria-labelledby":a||r,onKeydown:T,"onUpdate:show":y},K(e,ae)),{default:()=>[D(),E(),R()]})}}});let d;function se(){({instance:d}=_({setup(){const{state:i,toggle:l}=$();return()=>o(S,x(i,{"onUpdate:show":l}),null)}}))}function n(e){return U?new Promise((i,l)=>{d||se(),d.open(f({},n.currentOptions,e,{callback:m=>{(m==="confirm"?i:l)(m)}}))}):Promise.resolve()}n.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};n.currentOptions=f({},n.defaultOptions);n.alert=n;n.confirm=e=>n(f({showCancelButton:!0},e));n.close=()=>{d&&d.toggle(!1)};n.setDefaultOptions=e=>{f(n.currentOptions,e)};n.resetDefaultOptions=()=>{n.currentOptions=f({},n.defaultOptions)};n.Component=V(S);n.install=e=>{e.use(n.Component),e.config.globalProperties.$dialog=n};export{n as D};
