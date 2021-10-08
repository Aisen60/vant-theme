import{c as v,e as c,v as g,a as _}from"./use-translate.e667ce10.js";import{w as D}from"./with-install.feb19484.js";import{C as B}from"./index.5a14a991.js";import{F as C}from"./index.c08784e7.js";import{F as b}from"./index.23d405e4.js";import{B as j}from"./index.d91601ec.js";import{D as S}from"./function-call.87b8fe0f.js";import{S as w}from"./index.408eb0fd.js";import{z as x,E,x as y,e as a,D as V,r as k,o as F,c as T,w as L,B as u}from"./vue-libs.1dda7261.js";import{T as h}from"./function-call.deede8ba.js";import"./use-route.dfb37f70.js";import"./index.472ff4df.js";import"./constant.4d85ecb9.js";import"./use-expose.9b0dd301.js";import"./useChildren.ed284d59.js";import"./index.5b10c1d9.js";import"./useParent.5e3d1dfb.js";import"./index.ae867a8e.js";import"./mount-component.553013ae.js";import"./interceptor.b759bdc5.js";import"./index.13873f42.js";import"./use-touch.b0c07ae6.js";import"./index.904c4b4d.js";import"./utils.39620306.js";import"./index.0749451f.js";import"./use-lazy-render.e44d61c0.js";import"./on-popup-reopen.1b0dc8ad.js";import"./index.57f9d610.js";import"./index.bc27da8f.js";const[U,s,l]=v("contact-edit"),m={tel:"",name:""};var A=x({name:U,props:{isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>c({},m)},telValidator:{type:Function,default:g}},emits:["save","delete","change-default"],setup(t,{emit:n}){const e=E(c({},m,t.contactInfo)),i=()=>{t.isSaving||n("save",e)},d=()=>S.confirm({title:l("confirmDelete")}).then(()=>n("delete",e)),f=()=>a("div",{class:s("buttons")},[a(j,{block:!0,round:!0,type:"danger",text:l("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(j,{block:!0,round:!0,text:l("delete"),class:s("button"),loading:t.isDeleting,onClick:d},null)]),p=()=>a(w,{modelValue:e.isDefault,"onUpdate:modelValue":o=>e.isDefault=o,size:24,onChange:o=>n("change-default",o)},null),r=()=>{if(t.showSetDefault)return a(B,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return y(()=>t.contactInfo,o=>c(e,m,o)),()=>a(C,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,clearable:!0,label:l("name"),rules:[{required:!0,message:l("nameEmpty")}],maxlength:"30",placeholder:l("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":o=>e.tel=o,clearable:!0,type:"tel",label:l("tel"),rules:[{validator:t.telValidator,message:l("telInvalid")}],placeholder:l("tel")},null)]),r(),f()]})}});const I=D(A);const me=x({setup(t){const n=_({"zh-CN":{defaultLabel:"\u8BBE\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA"},"en-US":{defaultLabel:"Set as the default contact"}}),e=V({}),i=()=>h(n("save")),d=()=>h(n("delete"));return(f,p)=>{const r=k("demo-block");return F(),T(r,{title:u(n)("basicUsage")},{default:L(()=>[a(u(I),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(n)("defaultLabel"),onSave:i,onDelete:d},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{me as default};