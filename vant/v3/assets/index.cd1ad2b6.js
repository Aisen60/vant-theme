import{c,b as h,e as k,u as A}from"./use-translate.43484c14.js";import{c as P,w as d,n as j}from"./with-install.d47ea1a2.js";import{z as l,e as n}from"./vue-libs.f710b8ed.js";import{r as x,u as B}from"./use-route.600bd02b.js";import{B as C}from"./index.2cac46c1.js";const[m,I]=c("sidebar"),u=Symbol(m),V={modelValue:P(0)};var w=l({name:m,props:V,emits:["change","update:modelValue"],setup(s,{emit:r,slots:t}){const{linkChildren:i}=h(u),a=()=>+s.modelValue;return i({getActive:a,setActive:e=>{e!==a()&&(r("update:modelValue",e),r("change",e))}}),()=>{var e;return n("div",{class:I()},[(e=t.default)==null?void 0:e.call(t)])}}});const K=d(w),[N,b]=c("sidebar-item"),_=k({},x,{dot:Boolean,title:String,badge:j,disabled:Boolean});var E=l({name:N,props:_,emits:["click"],setup(s,{emit:r,slots:t}){const i=B(),{parent:a,index:o}=A(u);if(!a)return;const e=()=>{s.disabled||(r("click",o.value),a.setActive(o.value),i())};return()=>{const{dot:p,badge:f,title:v,disabled:g}=s,S=o.value===a.getActive();return n("a",{class:b({select:S,disabled:g}),onClick:e},[n(C,{dot:p,content:f,class:b("text")},{default:()=>[t.title?t.title():v]})])}}});const Y=d(E);export{K as S,Y as a};
