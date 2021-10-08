import{c as e,e as t,q as a,a as l}from"./use-translate.91889477.js";import{w as s}from"./with-install.c9eedd0e.js";import{C as o}from"./index.5d323f2c.js";import{F as n}from"./index.4f11e80f.js";import{F as i}from"./index.69c5a5bd.js";import{B as d}from"./index.60661b5f.js";import{D as r}from"./function-call.1456f37b.js";import{S as c}from"./index.954014f6.js";import{z as m,E as u,x as f,e as p,D as b,r as j,o as x,c as g,w as h,B as v}from"./vue-libs.71fdcafc.js";import{T as D}from"./function-call.470433b8.js";import"./use-route.913efdd2.js";import"./index.d38d9435.js";import"./constant.4d85ecb9.js";import"./use-expose.5ea79906.js";import"./useChildren.edf9a3d1.js";import"./index.a16d08bc.js";import"./useParent.e4fd6deb.js";import"./index.6e9dbec3.js";import"./mount-component.d3f8f39a.js";import"./interceptor.fd551ac3.js";import"./index.b58615a3.js";import"./use-touch.30351383.js";import"./index.94f7437a.js";import"./utils.b0356070.js";import"./index.9e2e36ca.js";import"./use-lazy-render.3dcfda58.js";import"./on-popup-reopen.d7054786.js";import"./index.38991bce.js";import"./index.f84002e0.js";const[S,V,w]=e("contact-edit"),y={tel:"",name:""};const B=s(m({name:S,props:{isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>t({},y)},telValidator:{type:Function,default:a}},emits:["save","delete","change-default"],setup(e,{emit:a}){const l=u(t({},y,e.contactInfo)),s=()=>{e.isSaving||a("save",l)},m=()=>r.confirm({title:w("confirmDelete")}).then((()=>a("delete",l))),b=()=>p(c,{modelValue:l.isDefault,"onUpdate:modelValue":e=>l.isDefault=e,size:24,onChange:e=>a("change-default",e)},null),j=()=>{if(e.showSetDefault)return p(o,{title:e.setDefaultLabel,class:V("switch-cell"),border:!1},{"right-icon":b})};return f((()=>e.contactInfo),(e=>t(l,y,e))),()=>p(n,{class:V(),onSubmit:s},{default:()=>[p("div",{class:V("fields")},[p(i,{modelValue:l.name,"onUpdate:modelValue":e=>l.name=e,clearable:!0,label:w("name"),rules:[{required:!0,message:w("nameEmpty")}],maxlength:"30",placeholder:w("name")},null),p(i,{modelValue:l.tel,"onUpdate:modelValue":e=>l.tel=e,clearable:!0,type:"tel",label:w("tel"),rules:[{validator:e.telValidator,message:w("telInvalid")}],placeholder:w("tel")},null)]),j(),p("div",{class:V("buttons")},[p(d,{block:!0,round:!0,type:"danger",text:w("save"),class:V("button"),loading:e.isSaving,nativeType:"submit"},null),e.isEdit&&p(d,{block:!0,round:!0,text:w("delete"),class:V("button"),loading:e.isDeleting,onClick:m},null)])]})}}));const C=m({setup(e){const t=l({"zh-CN":{defaultLabel:"设为默认联系人"},"en-US":{defaultLabel:"Set as the default contact"}}),a=b({}),s=()=>D(t("save")),o=()=>D(t("delete"));return(e,l)=>{const n=j("demo-block");return x(),g(n,{title:v(t)("basicUsage")},{default:h((()=>[p(v(B),{"is-edit":"","show-set-default":"","contact-info":a.value,"set-default-label":v(t)("defaultLabel"),onSave:s,onDelete:o},null,8,["contact-info","set-default-label"])])),_:1},8,["title"])}}});export{C as default};