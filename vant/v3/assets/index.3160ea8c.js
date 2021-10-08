import{c as e,e as l,t as a,o,p as t,a as n}from"./use-translate.91889477.js";import{w as d}from"./with-install.c9eedd0e.js";import{f as s,F as r}from"./index.69c5a5bd.js";import{u}from"./use-expose.5ea79906.js";import{z as c,D as i,e as p,I as m,r as b,o as h,a as f,w as v,B as j,d as V,t as g,F as x}from"./vue-libs.71fdcafc.js";import{T as k}from"./function-call.470433b8.js";import"./constant.4d85ecb9.js";import"./index.5d323f2c.js";import"./use-route.913efdd2.js";import"./index.d38d9435.js";import"./index.a16d08bc.js";import"./useParent.e4fd6deb.js";import"./mount-component.d3f8f39a.js";import"./index.b58615a3.js";import"./interceptor.fd551ac3.js";import"./use-touch.30351383.js";import"./index.94f7437a.js";import"./utils.b0356070.js";import"./index.9e2e36ca.js";import"./use-lazy-render.3dcfda58.js";import"./on-popup-reopen.d7054786.js";import"./index.38991bce.js";import"./index.6e9dbec3.js";const[w,A,U]=e("search");const y=d(c({name:w,props:l({},s,{label:String,clearable:a,actionText:String,background:String,showAction:Boolean,shape:{type:String,default:"square"},leftIcon:{type:String,default:"search"}}),emits:["search","cancel","update:modelValue"],setup(e,{emit:a,slots:n,attrs:d}){const c=i(),b=()=>{n.action||(a("update:modelValue",""),a("cancel"))},h=l=>{13===l.keyCode&&(t(l),a("search",e.modelValue))},f=()=>{if(n.label||e.label)return p("label",{class:A("label"),for:e.id},[n.label?n.label():e.label])},v=()=>{if(e.showAction){const l=e.actionText||U("cancel");return p("div",{class:A("action"),role:"button",tabindex:0,onClick:b},[n.action?n.action():l])}},j=Object.keys(s),V=()=>{const t=l({},d,o(e,j));return p(r,m({ref:c,type:"search",class:A("field"),border:!1,onKeypress:h},t,{"onUpdate:modelValue":e=>a("update:modelValue",e)}),o(n,["left-icon","right-icon"]))};return u({focus:()=>{var e;return null==(e=c.value)?void 0:e.focus()},blur:()=>{var e;return null==(e=c.value)?void 0:e.blur()}}),()=>{var l;return p("div",{class:A({"show-action":e.showAction}),style:{background:e.background}},[null==(l=n.left)?void 0:l.call(n),p("div",{class:A("content",e.shape)},[f(),V()]),v()])}}})),C={action:"/"},S=c({setup(e){const l=n({"zh-CN":{label:"地址",disabled:"禁用搜索框",inputAlign:"搜索框内容对齐",background:"自定义背景色",placeholder:"请输入搜索关键词",customButton:"自定义按钮",listenToEvents:"事件监听"},"en-US":{label:"Address",disabled:"Disabled",inputAlign:"Input Align",background:"Custom Background Color",placeholder:"Placeholder",customButton:"Custom Action Button",listenToEvents:"Listen to Events"}}),a=i(""),o=i(""),t=i(""),d=i(""),s=i(""),r=i(""),u=e=>k(e),c=()=>k(l("cancel"));return(e,n)=>{const i=b("demo-block");return h(),f(x,null,[p(i,{title:j(l)("basicUsage")},{default:v((()=>[p(j(y),{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e),placeholder:j(l)("placeholder")},null,8,["modelValue","placeholder"])])),_:1},8,["title"]),p(i,{title:j(l)("listenToEvents")},{default:v((()=>[V("form",C,[p(j(y),{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=e=>s.value=e),placeholder:j(l)("placeholder"),"show-action":"",onSearch:u,onCancel:c},null,8,["modelValue","placeholder"])])])),_:1},8,["title"]),p(i,{title:j(l)("inputAlign")},{default:v((()=>[p(j(y),{modelValue:d.value,"onUpdate:modelValue":n[2]||(n[2]=e=>d.value=e),placeholder:j(l)("placeholder"),"input-align":"center"},null,8,["modelValue","placeholder"])])),_:1},8,["title"]),p(i,{title:j(l)("disabled")},{default:v((()=>[p(j(y),{modelValue:t.value,"onUpdate:modelValue":n[3]||(n[3]=e=>t.value=e),placeholder:j(l)("placeholder"),disabled:""},null,8,["modelValue","placeholder"])])),_:1},8,["title"]),p(i,{title:j(l)("background")},{default:v((()=>[p(j(y),{modelValue:o.value,"onUpdate:modelValue":n[4]||(n[4]=e=>o.value=e),placeholder:j(l)("placeholder"),shape:"round",background:"#4fc08d"},null,8,["modelValue","placeholder"])])),_:1},8,["title"]),p(i,{title:j(l)("customButton")},{default:v((()=>[p(j(y),{modelValue:r.value,"onUpdate:modelValue":n[5]||(n[5]=e=>r.value=e),"show-action":"",label:j(l)("label"),placeholder:j(l)("placeholder"),onSearch:u},{action:v((()=>[V("div",{onClick:u},g(j(l)("search")),1)])),_:1},8,["modelValue","label","placeholder"])])),_:1},8,["title"])],64)}}});export{S as default};