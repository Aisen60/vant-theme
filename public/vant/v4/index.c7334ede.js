import{c as g,e as d,w as C,a as D}from"./use-translate.85b7fc27.js";import{w as S}from"./with-install.d26e13af.js";import{C as B}from"./index.e53f50c0.js";import{F as w}from"./index.4d456e19.js";import{F as b}from"./index.f13d42f6.js";import{B as _}from"./index.b8ee6b0a.js";import{S as x}from"./index.87340293.js";import{A as h,H as E,y,e as a,x as V,r as k,o as F,c as A,w as L,C as u}from"./vue-libs.a3cd7f61.js";import{s as v}from"./index.bf09c1cb.js";import"./use-route.7a9317f3.js";import"./index.33ef0a36.js";import"./constant.80c6de18.js";import"./use-expose.b85ae184.js";import"./use-id.5b8801cd.js";import"./index.4d0d76f2.js";import"./index.c08165fc.js";import"./interceptor.de8ff612.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.754c99d2.js";import"./mount-component.a164bc7b.js";const[T,s,n]=g("contact-edit"),m={tel:"",name:""},U={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>d({},m)},telValidator:{type:Function,default:C}};var I=h({name:T,props:U,emits:["save","delete","changeDefault"],setup(t,{emit:l}){const e=E(d({},m,t.contactInfo)),i=()=>{t.isSaving||l("save",e)},c=()=>l("delete",e),f=()=>a("div",{class:s("buttons")},[a(_,{block:!0,round:!0,type:"primary",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(_,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:c},null)]),p=()=>a(x,{modelValue:e.isDefault,"onUpdate:modelValue":o=>e.isDefault=o,onChange:o=>l("changeDefault",o)},null),r=()=>{if(t.showSetDefault)return a(B,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return y(()=>t.contactInfo,o=>d(e,m,o)),()=>a(w,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":o=>e.tel=o,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),r(),f()]})}});const N=S(I);const ne=h({__name:"index",setup(t){const l=D({"zh-CN":{defaultLabel:"\u8BBE\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA"},"en-US":{defaultLabel:"Set as the default contact"}}),e=V({tel:"",name:""}),i=()=>v(l("save")),c=()=>v(l("delete"));return(f,p)=>{const r=k("demo-block");return F(),A(r,{title:u(l)("basicUsage")},{default:L(()=>[a(u(N),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(l)("defaultLabel"),onSave:i,onDelete:c},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{ne as default};
