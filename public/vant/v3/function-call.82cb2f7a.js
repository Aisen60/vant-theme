import{c as p,e as a,d as m,f as g}from"./use-translate.5c5bc340.js";import{m as s,n as w,u as k,w as y}from"./with-install.fb16276a.js";import{m as O,u as P}from"./mount-component.d554f092.js";import{p as S,P as h}from"./index.cdbdcd62.js";import{z as N,e as l,A as b}from"./vue-libs.baee7c1f.js";const[C,D]=p("notify"),v=a({},S,{type:s("danger"),color:String,message:w,position:s("top"),className:k,background:String,lockScroll:Boolean});var u=N({name:C,props:v,emits:["update:show"],setup(e,{emit:t,slots:r}){const d=f=>t("update:show",f);return()=>l(h,{show:e.show,class:[D([e.type]),e.className],style:{color:e.color,background:e.background},overlay:!1,position:e.position,duration:.2,lockScroll:e.lockScroll,"onUpdate:show":d},{default:()=>[r.default?r.default():e.message]})}});let i,n;const x=e=>g(e)?e:{message:e};function B(){({instance:n}=O({setup(){const{state:e,toggle:t}=P();return()=>l(u,b(e,{"onUpdate:show":t}),null)}}))}function o(e){if(!!m)return n||B(),e=a({},o.currentOptions,x(e)),n.open(e),clearTimeout(i),e.duration>0&&(i=window.setTimeout(o.clear,e.duration)),n}const c=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});o.clear=()=>{n&&n.toggle(!1)};o.currentOptions=c();o.setDefaultOptions=e=>{a(o.currentOptions,e)};o.resetDefaultOptions=()=>{o.currentOptions=c()};o.Component=y(u);o.install=e=>{e.use(o.Component),e.config.globalProperties.$notify=o};export{o as N};
