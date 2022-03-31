import{c as R,e as w,p as A,l as L,a as O}from"./use-translate.d627ebf3.js";import{m as F,t as z,w as K}from"./with-install.9724bc72.js";import{f as I,F as j}from"./index.5b58b6f5.js";import{u as q}from"./use-id.139c5032.js";import{u as $}from"./use-expose.36b4c9ee.js";import{z as S,D as s,e as t,A as G,r as H,o as J,a as M,w as i,B as o,d as D,t as Q,F as W}from"./vue-libs.bf80eadf.js";import{T as B}from"./function-call.74fb28dc.js";import"./constant.80c6de18.js";import"./index.e988085b.js";import"./use-route.9fd68ea8.js";import"./index.72703c04.js";import"./mount-component.18fa5b79.js";import"./index.80eefc7f.js";import"./interceptor.5b737db1.js";import"./use-touch.b6ff7b52.js";import"./use-lazy-render.d79b7d1e.js";import"./on-popup-reopen.e08ee506.js";import"./index.b391be49.js";import"./index.4414d46f.js";const[X,h,Y]=R("search"),Z=w({},I,{label:String,shape:F("square"),leftIcon:F("search"),clearable:z,actionText:String,background:String,showAction:Boolean});var ee=S({name:X,props:Z,emits:["blur","focus","clear","search","cancel","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(c,{emit:l,slots:n,attrs:b}){const k=q(),d=s(),v=()=>{n.action||(l("update:modelValue",""),l("cancel"))},m=e=>{e.keyCode===13&&(L(e),l("search",c.modelValue))},f=()=>c.id||`${k}-input`,g=()=>{if(n.label||c.label)return t("label",{class:h("label"),for:f()},[n.label?n.label():c.label])},V=()=>{if(c.showAction){const e=c.actionText||Y("cancel");return t("div",{class:h("action"),role:"button",tabindex:0,onClick:v},[n.action?n.action():e])}},C=()=>{var e;return(e=d.value)==null?void 0:e.blur()},a=()=>{var e;return(e=d.value)==null?void 0:e.focus()},r=e=>l("blur",e),u=e=>l("focus",e),T=e=>l("clear",e),x=e=>l("click-input",e),U=e=>l("click-left-icon",e),_=e=>l("click-right-icon",e),y=Object.keys(I),N=()=>{const e=w({},b,A(c,y),{id:f()}),E=P=>l("update:modelValue",P);return t(j,G({ref:d,type:"search",class:h("field"),border:!1,onBlur:r,onFocus:u,onClear:T,onKeypress:m,"onClick-input":x,"onClick-left-icon":U,"onClick-right-icon":_,"onUpdate:modelValue":E},e),A(n,["left-icon","right-icon"]))};return $({focus:a,blur:C}),()=>{var e;return t("div",{class:h({"show-action":c.showAction}),style:{background:c.background}},[(e=n.left)==null?void 0:e.call(n),t("div",{class:h("content",c.shape)},[g(),N()]),V()])}}});const p=K(ee),le={action:"/"},Ve=S({setup(c){const l=O({"zh-CN":{label:"\u5730\u5740",disabled:"\u7981\u7528\u641C\u7D22\u6846",inputAlign:"\u641C\u7D22\u6846\u5185\u5BB9\u5BF9\u9F50",background:"\u81EA\u5B9A\u4E49\u80CC\u666F\u8272",placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5173\u952E\u8BCD",customButton:"\u81EA\u5B9A\u4E49\u6309\u94AE",listenToEvents:"\u4E8B\u4EF6\u76D1\u542C"},"en-US":{label:"Address",disabled:"Disabled",inputAlign:"Input Align",background:"Custom Background Color",placeholder:"Placeholder",customButton:"Custom Action Button",listenToEvents:"Listen to Events"}}),n=s(""),b=s(""),k=s(""),d=s(""),v=s(""),m=s(""),f=C=>B(C),g=()=>B(l("cancel")),V=()=>B(m.value);return(C,a)=>{const r=H("demo-block");return J(),M(W,null,[t(r,{title:o(l)("basicUsage")},{default:i(()=>[t(o(p),{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=u=>n.value=u),placeholder:o(l)("placeholder")},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),t(r,{title:o(l)("listenToEvents")},{default:i(()=>[D("form",le,[t(o(p),{modelValue:v.value,"onUpdate:modelValue":a[1]||(a[1]=u=>v.value=u),placeholder:o(l)("placeholder"),"show-action":"",onSearch:f,onCancel:g},null,8,["modelValue","placeholder"])])]),_:1},8,["title"]),t(r,{title:o(l)("inputAlign")},{default:i(()=>[t(o(p),{modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=u=>d.value=u),placeholder:o(l)("placeholder"),"input-align":"center"},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),t(r,{title:o(l)("disabled")},{default:i(()=>[t(o(p),{modelValue:k.value,"onUpdate:modelValue":a[3]||(a[3]=u=>k.value=u),placeholder:o(l)("placeholder"),disabled:""},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),t(r,{title:o(l)("background")},{default:i(()=>[t(o(p),{modelValue:b.value,"onUpdate:modelValue":a[4]||(a[4]=u=>b.value=u),placeholder:o(l)("placeholder"),shape:"round",background:"#4fc08d"},null,8,["modelValue","placeholder"])]),_:1},8,["title"]),t(r,{title:o(l)("customButton")},{default:i(()=>[t(o(p),{modelValue:m.value,"onUpdate:modelValue":a[5]||(a[5]=u=>m.value=u),"show-action":"",label:o(l)("label"),placeholder:o(l)("placeholder"),onSearch:f},{action:i(()=>[D("div",{onClick:V},Q(o(l)("search")),1)]),_:1},8,["modelValue","label","placeholder"])]),_:1},8,["title"])],64)}}});export{Ve as default};
