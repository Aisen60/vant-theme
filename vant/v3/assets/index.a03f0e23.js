import{c as E,i as d,f as u,a as $}from"./use-translate.dc7c72f2.js";import{n as l,t as I,m as z,w as B}from"./with-install.eb95b9ca.js";import{I as L}from"./index.c4602e68.js";import{z as D,D as f,I as C,C as U,x as N,O as R,e as n,j as k,U as F,J as y}from"./vue-libs.84090ae0.js";const[J,o]=E("image");var O=D({name:J,props:{src:String,alt:String,fit:String,round:Boolean,width:l,height:l,radius:l,lazyLoad:Boolean,iconSize:l,showError:I,errorIcon:z("photo-fail"),iconPrefix:String,showLoading:I,loadingIcon:z("photo")},emits:["load","error"],setup(e,{emit:g,slots:a}){const i=f(!1),t=f(!0),s=f(),{$Lazyload:c}=C().proxy,P=U(()=>{const r={};return d(e.width)&&(r.width=u(e.width)),d(e.height)&&(r.height=u(e.height)),d(e.radius)&&(r.overflow="hidden",r.borderRadius=u(e.radius)),r});N(()=>e.src,()=>{i.value=!1,t.value=!0});const m=r=>{t.value=!1,g("load",r)},h=r=>{i.value=!0,t.value=!1,g("error",r)},x=()=>a.loading?a.loading():n(L,{size:e.iconSize,name:e.loadingIcon,class:o("loading-icon"),classPrefix:e.iconPrefix},null),S=()=>a.error?a.error():n(L,{size:e.iconSize,name:e.errorIcon,class:o("error-icon"),classPrefix:e.iconPrefix},null),b=()=>{if(t.value&&e.showLoading)return n("div",{class:o("loading")},[x()]);if(i.value&&e.showError)return n("div",{class:o("error")},[S()])},j=()=>{if(i.value||!e.src)return;const r={alt:e.alt,class:o("img"),style:{objectFit:e.fit}};return e.lazyLoad?k(n("img",y({ref:s},r),null),[[F("lazy"),e.src]]):n("img",y({src:e.src,onLoad:m,onError:h},r),null)},v=({el:r})=>{r===s.value&&t.value&&m()},w=({el:r})=>{r===s.value&&!i.value&&h()};return c&&$&&(c.$on("loaded",v),c.$on("error",w),R(()=>{c.$off("loaded",v),c.$off("error",w)})),()=>{var r;return n("div",{class:o({round:e.round}),style:P.value},[j(),b(),(r=a.default)==null?void 0:r.call(a)])}}});const G=B(O);export{G as I};
