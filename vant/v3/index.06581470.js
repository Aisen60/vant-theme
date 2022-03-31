import{u as I,a as k,T as N}from"./index.8cadc908.js";import{c as A,M as V,n as _,H as b,O as $,a as q}from"./use-translate.d627ebf3.js";import{c as z,m as H,t as M,w as O}from"./with-install.9724bc72.js";import{u as Y}from"./use-expose.36b4c9ee.js";import{L as j}from"./index.4414d46f.js";import{z as U,D as p,x as E,Y as G,N as J,e as l,q as K,o as g,c as x,w as f,B as n,a as C,b as B,F as L}from"./vue-libs.bf80eadf.js";import{C as R}from"./index.e988085b.js";import{P as Q}from"./index.c9a5fff1.js";import"./use-id.139c5032.js";import"./use-route.9fd68ea8.js";import"./index.1e01fa70.js";import"./use-touch.b6ff7b52.js";import"./on-popup-reopen.e08ee506.js";import"./constant.80c6de18.js";import"./interceptor.5b737db1.js";import"./use-refs.1bd4ff6f.js";import"./index.48ae2e59.js";import"./index.72703c04.js";const[W,h,X]=A("list"),Z={error:Boolean,offset:z(300),loading:Boolean,finished:Boolean,errorText:String,direction:H("down"),loadingText:String,finishedText:String,immediateCheck:M};var ee=U({name:W,props:Z,emits:["load","update:error","update:loading"],setup(i,{emit:a,slots:t}){const s=p(!1),c=p(),u=p(),e=I(),r=V(c),d=()=>{K(()=>{if(s.value||i.finished||i.error||(e==null?void 0:e.value)===!1)return;const{offset:o,direction:v}=i,m=b(r);if(!m.height||$(c))return;let T=!1;const P=b(u);v==="up"?T=m.top-P.top<=o:T=P.bottom-m.bottom<=o,T&&(s.value=!0,a("update:loading",!0),a("load"))})},w=()=>{if(i.finished){const o=t.finished?t.finished():i.finishedText;if(o)return l("div",{class:h("finished-text")},[o])}},S=()=>{a("update:error",!1),d()},y=()=>{if(i.error){const o=t.error?t.error():i.errorText;if(o)return l("div",{role:"button",class:h("error-text"),tabindex:0,onClick:S},[o])}},D=()=>{if(s.value&&!i.finished)return l("div",{class:h("loading")},[t.loading?t.loading():l(j,{class:h("loading-icon")},{default:()=>[i.loadingText||X("loading")]})])};return E(()=>[i.loading,i.finished,i.error],d),e&&E(e,o=>{o&&d()}),G(()=>{s.value=i.loading}),J(()=>{i.immediateCheck&&d()}),Y({check:d}),_("scroll",d,{target:r}),()=>{var m;const o=(m=t.default)==null?void 0:m.call(t),v=l("div",{ref:u,class:h("placeholder")},null);return l("div",{ref:c,role:"feed",class:h(),"aria-busy":s.value},[i.direction==="down"?o:v,D(),w(),y(),i.direction==="up"?o:v])}}});const F=O(ee);const Te=U({setup(i){const a=q({"zh-CN":{errorInfo:"\u9519\u8BEF\u63D0\u793A",errorText:"\u8BF7\u6C42\u5931\u8D25\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D",pullRefresh:"\u4E0B\u62C9\u5237\u65B0",finishedText:"\u6CA1\u6709\u66F4\u591A\u4E86"},"en-US":{errorInfo:"Error Info",errorText:"Request failed. Click to reload",pullRefresh:"PullRefresh",finishedText:"Finished"}}),t=p([{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1},{items:[],refreshing:!1,loading:!1,error:!1,finished:!1}]),s=u=>{const e=t.value[u];e.loading=!0,setTimeout(()=>{e.refreshing&&(e.items=[],e.refreshing=!1);for(let r=0;r<10;r++){const d=e.items.length+1;e.items.push(d<10?"0"+d:String(d))}e.loading=!1,e.refreshing=!1,u===1&&e.items.length===10&&!e.error?e.error=!0:e.error=!1,e.items.length>=40&&(e.finished=!0)},1e3)},c=u=>{t.value[u].finished=!1,s(u)};return(u,e)=>(g(),x(n(N),null,{default:f(()=>[l(n(k),{title:n(a)("basicUsage")},{default:f(()=>[l(n(F),{loading:t.value[0].loading,"onUpdate:loading":e[0]||(e[0]=r=>t.value[0].loading=r),finished:t.value[0].finished,"finished-text":n(a)("finishedText"),onLoad:e[1]||(e[1]=r=>s(0))},{default:f(()=>[(g(!0),C(L,null,B(t.value[0].items,r=>(g(),x(n(R),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["title"]),l(n(k),{title:n(a)("errorInfo")},{default:f(()=>[l(n(F),{loading:t.value[1].loading,"onUpdate:loading":e[2]||(e[2]=r=>t.value[1].loading=r),error:t.value[1].error,"onUpdate:error":e[3]||(e[3]=r=>t.value[1].error=r),finished:t.value[1].finished,"error-text":n(a)("errorText"),onLoad:e[4]||(e[4]=r=>s(1))},{default:f(()=>[(g(!0),C(L,null,B(t.value[1].items,r=>(g(),x(n(R),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","error","finished","error-text"])]),_:1},8,["title"]),l(n(k),{title:n(a)("pullRefresh")},{default:f(()=>[l(n(Q),{modelValue:t.value[2].refreshing,"onUpdate:modelValue":e[7]||(e[7]=r=>t.value[2].refreshing=r),onRefresh:e[8]||(e[8]=r=>c(2))},{default:f(()=>[l(n(F),{loading:t.value[2].loading,"onUpdate:loading":e[5]||(e[5]=r=>t.value[2].loading=r),finished:t.value[2].finished,"finished-text":n(a)("finishedText"),onLoad:e[6]||(e[6]=r=>s(2))},{default:f(()=>[(g(!0),C(L,null,B(t.value[2].items,r=>(g(),x(n(R),{key:r,title:r},null,8,["title"]))),128))]),_:1},8,["loading","finished","finished-text"])]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{Te as default};
