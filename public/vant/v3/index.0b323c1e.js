import{c as $,h as u,i as b,d as B}from"./use-translate.d627ebf3.js";import{n as d,t as L,m as P,w as D}from"./with-install.9724bc72.js";import{I as j}from"./index.72703c04.js";import{z as k,D as f,P as C,C as U,x as N,J as R,e as a,j as q,U as A,A as z,q as F}from"./vue-libs.bf80eadf.js";const[J,o]=$("image"),T={src:String,alt:String,fit:String,position:String,round:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:L,errorIcon:P("photo-fail"),iconPrefix:String,showLoading:L,loadingIcon:P("photo")};var V=k({name:J,props:T,emits:["load","error"],setup(e,{emit:g,slots:n}){const i=f(!1),t=f(!0),c=f(),{$Lazyload:s}=C().proxy,S=U(()=>{const r={width:u(e.width),height:u(e.height)};return b(e.radius)&&(r.overflow="hidden",r.borderRadius=u(e.radius)),r});N(()=>e.src,()=>{i.value=!1,t.value=!0});const m=r=>{t.value=!1,g("load",r)},h=r=>{i.value=!0,t.value=!1,g("error",r)},v=(r,l,y)=>y?y():a(j,{name:r,size:e.iconSize,class:l,classPrefix:e.iconPrefix},null),x=()=>{if(t.value&&e.showLoading)return a("div",{class:o("loading")},[v(e.loadingIcon,o("loading-icon"),n.loading)]);if(i.value&&e.showError)return a("div",{class:o("error")},[v(e.errorIcon,o("error-icon"),n.error)])},E=()=>{if(i.value||!e.src)return;const r={alt:e.alt,class:o("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?q(a("img",z({ref:c},r),null),[[A("lazy"),e.src]]):a("img",z({src:e.src,onLoad:m,onError:h},r),null)},w=({el:r})=>{const l=()=>{r===c.value&&t.value&&m()};c.value?l():F(l)},I=({el:r})=>{r===c.value&&!i.value&&h()};return s&&B&&(s.$on("loaded",w),s.$on("error",I),R(()=>{s.$off("loaded",w),s.$off("error",I)})),()=>{var r;return a("div",{class:o({round:e.round}),style:S.value},[E(),x(),(r=n.default)==null?void 0:r.call(n)])}}});const M=D(V);export{M as I};
