import{c,e as a,m as u,n as d,u as f,b as m,d as p}from"./use-translate.39547e32.js";import{w as g}from"./with-install.cc9696bc.js";import{m as b,u as k}from"./mount-component.a2b5841e.js";import{p as w,P as O}from"./index.760aa272.js";import{z as y,e as r,I as P}from"./vue-libs.71fdcafc.js";const[S,N]=c("notify");var s=y({name:S,props:a({},w,{type:u("danger"),color:String,message:d,className:f,background:String,lockScroll:Boolean}),setup(e,{slots:o}){return()=>r(O,{show:e.show,class:[N([e.type]),e.className],style:{color:e.color,background:e.background},overlay:!1,position:"top",duration:.2,lockScroll:e.lockScroll},{default:()=>[o.default?o.default():e.message]})}});let i,t;const h=e=>p(e)?e:{message:e};function j(){({instance:t}=b({setup(){const{state:e,toggle:o}=k();return()=>r(s,P(e,{"onUpdate:show":o}),null)}}))}function n(e){if(!!m)return t||j(),e=a({},n.currentOptions,h(e)),t.open(e),clearTimeout(i),e.duration>0&&(i=window.setTimeout(n.clear,e.duration)),t}const l=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,className:"",lockScroll:!1,background:void 0});n.clear=()=>{t&&t.toggle(!1)};n.currentOptions=l();n.setDefaultOptions=e=>{a(n.currentOptions,e)};n.resetDefaultOptions=()=>{n.currentOptions=l()};n.Component=g(s);n.install=e=>{e.use(n.Component),e.config.globalProperties.$notify=n};export{n as N};