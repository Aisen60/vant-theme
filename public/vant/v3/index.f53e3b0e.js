import{c as S,b as V,l as y}from"./use-translate.8b8ccbb1.js";import{n as A,t as g,m as T,w as C}from"./with-install.994557f3.js";import{F as M}from"./constant.80c6de18.js";import{u as N}from"./use-expose.6f045672.js";import{z as k,e as x}from"./vue-libs.bf80eadf.js";const[I,O]=S("form"),_={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:A,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:g,validateTrigger:T("onBlur"),showErrorMessage:g,errorMessageAlign:String};var j=k({name:I,props:_,emits:["submit","failed"],setup(l,{emit:c,slots:a}){const{children:i,linkChildren:p}=V(M),s=e=>e?i.filter(t=>e.includes(t.name)):i,v=e=>new Promise((t,n)=>{const r=[];s(e).reduce((w,E)=>w.then(()=>{if(!r.length)return E.validate().then(h=>{h&&r.push(h)})}),Promise.resolve()).then(()=>{r.length?n(r):t()})}),b=e=>new Promise((t,n)=>{const r=s(e);Promise.all(r.map(o=>o.validate())).then(o=>{o=o.filter(Boolean),o.length?n(o):t()})}),F=e=>{const t=i.find(n=>n.name===e);return t?new Promise((n,r)=>{t.validate().then(o=>{o?r(o):n()})}):Promise.reject()},d=e=>typeof e=="string"?F(e):l.validateFirst?v(e):b(e),P=e=>{typeof e=="string"&&(e=[e]),s(e).forEach(n=>{n.resetValidation()})},m=(e,t)=>{i.some(n=>n.name===e?(n.$el.scrollIntoView(t),!0):!1)},u=()=>i.reduce((e,t)=>(e[t.name]=t.formValue.value,e),{}),f=()=>{const e=u();d().then(()=>c("submit",e)).catch(t=>{c("failed",{values:e,errors:t}),l.scrollToError&&t[0].name&&m(t[0].name)})},B=e=>{y(e),f()};return p({props:l}),N({submit:f,validate:d,getValues:u,scrollToField:m,resetValidation:P}),()=>{var e;return x("form",{class:O(),onSubmit:B},[(e=a.default)==null?void 0:e.call(a)])}}});const W=C(j);export{W as F};
