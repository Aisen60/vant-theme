import{c as u,e as m,t as d,i as v,s as y,l as f}from"./use-translate.fbf36f21.js";import{n as o,u as h,t as r,w}from"./with-install.251697cd.js";import{z,e as s,T as S,j as x,v as O}from"./vue-libs.bf80eadf.js";import{u as D}from"./use-lazy-render.d79b7d1e.js";const[I,N]=u("overlay"),P={show:Boolean,zIndex:o,duration:o,className:h,lockScroll:r,lazyRender:r,customStyle:Object};var R=z({name:I,props:P,setup(e,{slots:t}){const c=D(()=>e.show||!e.lazyRender),l=a=>{f(a,!0)},i=c(()=>{var n;const a=m(d(e.zIndex),e.customStyle);return v(e.duration)&&(a.animationDuration=`${e.duration}s`),x(s("div",{style:a,class:[N(),e.className],onTouchmove:e.lockScroll?l:y},[(n=t.default)==null?void 0:n.call(t)]),[[O,e.show]])});return()=>s(S,{name:"van-fade",appear:!0},{default:i})}});const j=w(R);export{j as O};
