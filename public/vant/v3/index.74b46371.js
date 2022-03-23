import{c as _,e as d,v as B,a as S}from"./use-translate.fbf36f21.js";import{w as C}from"./with-install.251697cd.js";import{C as D}from"./index.e9ec9dce.js";import{F as w}from"./index.19e17622.js";import{F as b}from"./index.c5d91945.js";import{B as v}from"./index.16d2686f.js";import{S as E}from"./index.7e42192d.js";import{z as h,H as x,x as V,e as a,D as y,r as k,o as F,c as T,w as L,B as u}from"./vue-libs.bf80eadf.js";import{T as g}from"./function-call.a70e3069.js";import"./use-route.9fd68ea8.js";import"./index.f1bbf430.js";import"./constant.80c6de18.js";import"./use-expose.8d47dba2.js";import"./use-id.139c5032.js";import"./index.d99a07cf.js";import"./mount-component.985a4079.js";import"./index.b25dcbf6.js";import"./interceptor.12fa8767.js";import"./use-touch.9de12470.js";import"./use-lazy-render.d79b7d1e.js";import"./on-popup-reopen.e08ee506.js";import"./index.c2caac4e.js";const[U,s,n]=_("contact-edit"),m={tel:"",name:""},A={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>d({},m)},telValidator:{type:Function,default:B}};var I=h({name:U,props:A,emits:["save","delete","change-default"],setup(t,{emit:o}){const e=x(d({},m,t.contactInfo)),i=()=>{t.isSaving||o("save",e)},r=()=>o("delete",e),f=()=>a("div",{class:s("buttons")},[a(v,{block:!0,round:!0,type:"danger",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(v,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:r},null)]),p=()=>a(E,{modelValue:e.isDefault,"onUpdate:modelValue":l=>e.isDefault=l,size:24,onChange:l=>o("change-default",l)},null),c=()=>{if(t.showSetDefault)return a(D,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return V(()=>t.contactInfo,l=>d(e,m,l)),()=>a(w,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":l=>e.tel=l,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),c(),f()]})}});const N=C(I);const ne=h({setup(t){const o=S({"zh-CN":{defaultLabel:"\u8BBE\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA"},"en-US":{defaultLabel:"Set as the default contact"}}),e=y({tel:"",name:""}),i=()=>g(o("save")),r=()=>g(o("delete"));return(f,p)=>{const c=k("demo-block");return F(),T(c,{title:u(o)("basicUsage")},{default:L(()=>[a(u(N),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(o)("defaultLabel"),onSave:i,onDelete:r},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{ne as default};
