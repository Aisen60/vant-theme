import{d as S,o as k,c as P,L as I,E as $,e as R,t as T,n as B,N,G as u,K as O}from"./use-translate.8b8ccbb1.js";import{n as z,m as C,c as p,w as E}from"./with-install.994557f3.js";import{M as H,J as D,z as L,D as M,H as V,C as m,x as j,e as x}from"./vue-libs.bf80eadf.js";function A(o,f){if(!S||!window.IntersectionObserver)return;const a=new IntersectionObserver(e=>{f(e[0].intersectionRatio>0)},{root:document.body}),n=()=>{o.value&&a.observe(o.value)},l=()=>{o.value&&a.unobserve(o.value)};H(l),D(l),k(n)}const[F,G]=P("sticky"),J={zIndex:z,position:C("top"),container:Object,offsetTop:p(0),offsetBottom:p(0)};var K=L({name:F,props:J,emits:["scroll","change"],setup(o,{emit:f,slots:a}){const n=M(),l=I(n),e=V({fixed:!1,width:0,height:0,transform:0}),i=m(()=>$(o.position==="top"?o.offsetTop:o.offsetBottom)),w=m(()=>{const{fixed:t,height:d,width:s}=e;if(t)return{width:`${s}px`,height:`${d}px`}}),b=m(()=>{if(!e.fixed)return;const t=R(T(o.zIndex),{width:`${e.width}px`,height:`${e.height}px`,[o.position]:`${i.value}px`});return e.transform&&(t.transform=`translate3d(0, ${e.transform}px, 0)`),t}),g=t=>f("scroll",{scrollTop:t,isFixed:e.fixed}),h=()=>{if(!n.value||N(n))return;const{container:t,position:d}=o,s=u(n),y=O(window);if(e.width=s.width,e.height=s.height,d==="top")if(t){const r=u(t),c=r.bottom-i.value-e.height;e.fixed=i.value>s.top&&r.bottom>0,e.transform=c<0?c:0}else e.fixed=i.value>s.top;else{const{clientHeight:r}=document.documentElement;if(t){const c=u(t),v=r-c.top-i.value-e.height;e.fixed=r-i.value<s.bottom&&r>c.top,e.transform=v<0?-v:0}else e.fixed=r-i.value<s.bottom}g(y)};return j(()=>e.fixed,t=>f("change",t)),B("scroll",h,{target:l}),A(n,h),()=>{var t;return x("div",{ref:n,style:w.value},[x("div",{class:G({fixed:e.fixed}),style:b.value},[(t=a.default)==null?void 0:t.call(a)])])}}});const q=E(K);export{q as S};
