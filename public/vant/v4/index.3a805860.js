import{c as m}from"./use-translate.22943ac9.js";import{t as c,w as s}from"./with-install.c6b01ca2.js";import{b as u}from"./constant.80c6de18.js";import{A as d,e as r,B as f,F as p}from"./vue-libs.df86f395.js";const[b,a]=m("cell-group"),g={title:String,inset:Boolean,border:c};var B=d({name:b,inheritAttrs:!1,props:g,setup(e,{slots:t,attrs:l}){const i=()=>{var n;return r("div",f({class:[a({inset:e.inset}),{[u]:e.border&&!e.inset}]},l),[(n=t.default)==null?void 0:n.call(t)])},o=()=>r("div",{class:a("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?r(p,null,[o(),i()]):i()}});const T=s(B);export{T as C};
