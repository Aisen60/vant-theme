import{c,e as h}from"./use-translate.dc7c72f2.js";import{b as j,w as d,n as k}from"./with-install.eb95b9ca.js";import{z as l,e as n}from"./vue-libs.84090ae0.js";import{u as A}from"./useChildren.adf766a6.js";import{r as C,u as x}from"./use-route.c396a838.js";import{B}from"./index.c4602e68.js";import{u as P}from"./useParent.b8372ce7.js";const[m,V]=c("sidebar"),u=Symbol(m);var I=l({name:m,props:{modelValue:j(0)},emits:["change","update:modelValue"],setup(s,{emit:r,slots:t}){const{linkChildren:o}=A(u),a=()=>+s.modelValue;return o({getActive:a,setActive:e=>{e!==a()&&(r("update:modelValue",e),r("change",e))}}),()=>{var e;return n("div",{class:V()},[(e=t.default)==null?void 0:e.call(t)])}}});const K=d(I),[w,p]=c("sidebar-item");var N=l({name:w,props:h({},C,{dot:Boolean,title:String,badge:k,disabled:Boolean}),emits:["click"],setup(s,{emit:r,slots:t}){const o=x(),{parent:a,index:i}=P(u);if(!a)return;const e=()=>{s.disabled||(r("click",i.value),a.setActive(i.value),o())};return()=>{const{dot:b,badge:f,title:v,disabled:g}=s,S=i.value===a.getActive();return n("a",{class:p({select:S,disabled:g}),onClick:e},[n(B,{dot:b,content:f,class:p("text")},{default:()=>[t.title?t.title():v]})])}}});const Y=d(N);export{K as S,Y as a};
