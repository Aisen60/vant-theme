import{c as f,e as a,a as m,b as p}from"./use-translate.dc7c72f2.js";import{m as g,n as w,u as b,w as k}from"./with-install.eb95b9ca.js";import{m as h,u as O}from"./mount-component.21d1f7e5.js";import{a as S,P as y}from"./index.87835e2a.js";import{z as P,e as r,J as N}from"./vue-libs.84090ae0.js";const[j,C]=f("notify");var i=P({name:j,props:a({},S,{type:g("danger"),color:String,message:w,className:b,background:String,lockScroll:Boolean}),emits:["update:show"],setup(e,{emit:n,slots:s}){const c=d=>n("update:show",d);return()=>r(y,{show:e.show,class:[C([e.type]),e.className],style:{color:e.color,background:e.background},overlay:!1,position:"top",duration:.2,lockScroll:e.lockScroll,"onUpdate:show":c},{default:()=>[s.default?s.default():e.message]})}});let l,o;const v=e=>p(e)?e:{message:e};function x(){({instance:o}=h({setup(){const{state:e,toggle:n}=O();return()=>r(i,N(e,{"onUpdate:show":n}),null)}}))}function t(e){if(!!m)return o||x(),e=a({},t.currentOptions,v(e)),o.open(e),clearTimeout(l),e.duration>0&&(l=window.setTimeout(t.clear,e.duration)),o}const u=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,className:"",lockScroll:!1,background:void 0});t.clear=()=>{o&&o.toggle(!1)};t.currentOptions=u();t.setDefaultOptions=e=>{a(t.currentOptions,e)};t.resetDefaultOptions=()=>{t.currentOptions=u()};t.Component=k(i);t.install=e=>{e.use(t.Component),e.config.globalProperties.$notify=t};export{t as N};
