import{c as x,e as C,a as k}from"./use-translate.d627ebf3.js";import{d as v,b as g,n as B,t as F,w as _}from"./with-install.9724bc72.js";import{B as h}from"./index.11b1af40.js";import{R as S,a as w}from"./index.7e9a3dbc.js";import{T as A}from"./index.73eea5d7.js";import{I as L}from"./index.72703c04.js";import{C as y}from"./index.e988085b.js";import{z as T,e as i,Q as E,D as V,r as I,o as j,c as $,w as P,B as n}from"./vue-libs.bf80eadf.js";import{T as p}from"./function-call.74fb28dc.js";import"./constant.80c6de18.js";import"./use-route.9fd68ea8.js";import"./index.4414d46f.js";import"./Checker.95d60910.js";import"./mount-component.18fa5b79.js";import"./use-expose.36b4c9ee.js";import"./index.80eefc7f.js";import"./interceptor.5b737db1.js";import"./use-touch.b6ff7b52.js";import"./use-lazy-render.d79b7d1e.js";import"./on-popup-reopen.e08ee506.js";import"./index.b391be49.js";function N(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!E(e)}const[O,c]=x("address-item");var R=T({name:O,props:{address:v(Object),disabled:Boolean,switchable:Boolean,defaultTagText:String},emits:["edit","click","select"],setup(e,{slots:t,emit:s}){const m=()=>{e.switchable&&s("select"),s("click")},l=()=>i(L,{name:"edit",class:c("edit"),onClick:d=>{d.stopPropagation(),s("edit"),s("click")}},null),f=()=>{if(t.tag)return t.tag(e.address);if(e.address.isDefault&&e.defaultTagText)return i(A,{type:"danger",round:!0,class:c("tag")},{default:()=>[e.defaultTagText]})},a=()=>{const{address:d,disabled:u,switchable:r}=e,o=[i("div",{class:c("name")},[`${d.name} ${d.tel}`,f()]),i("div",{class:c("address")},[d.address])];return r&&!u?i(S,{name:d.id,iconSize:18},N(o)?o:{default:()=>[o]}):o};return()=>{var u;const{disabled:d}=e;return i("div",{class:c({disabled:d}),onClick:m},[i(y,{border:!1,valueClass:c("value")},{value:a,"right-icon":l}),(u=t.bottom)==null?void 0:u.call(t,C({},e.address,{disabled:d}))])}}});function z(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!E(e)}const[U,b,q]=x("address-list"),G={list:g(),modelValue:B,switchable:F,disabledText:String,disabledList:g(),addButtonText:String,defaultTagText:String};var J=T({name:U,props:G,emits:["add","edit","select","click-item","edit-disabled","select-disabled","update:modelValue"],setup(e,{slots:t,emit:s}){const m=(a,d,u)=>{const r=()=>s(u?"edit-disabled":"edit",a,d),o=()=>s("click-item",a,d),D=()=>{s(u?"select-disabled":"select",a,d),u||s("update:modelValue",a.id)};return i(R,{key:a.id,address:a,disabled:u,switchable:e.switchable,defaultTagText:e.defaultTagText,onEdit:r,onClick:o,onSelect:D},{bottom:t["item-bottom"],tag:t.tag})},l=(a,d)=>{if(a)return a.map((u,r)=>m(u,r,d))},f=()=>i("div",{class:[b("bottom"),"van-safe-area-bottom"]},[i(h,{round:!0,block:!0,type:"danger",text:e.addButtonText||q("add"),class:b("add"),onClick:()=>s("add")},null)]);return()=>{var r,o;const a=l(e.list),d=l(e.disabledList,!0),u=e.disabledText&&i("div",{class:b("disabled-text")},[e.disabledText]);return i("div",{class:b()},[(r=t.top)==null?void 0:r.call(t),i(w,{modelValue:e.modelValue},z(a)?a:{default:()=>[a]}),u,d,(o=t.default)==null?void 0:o.call(t),f()])}}});const Q=_(J);const be=T({setup(e){const t=k({"zh-CN":{list:[{id:"1",name:"\u5F20\u4E09",tel:"13000000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u6587\u4E09\u8DEF 138 \u53F7\u4E1C\u65B9\u901A\u4FE1\u5927\u53A6 7 \u697C 501 \u5BA4",isDefault:!0},{id:"2",name:"\u674E\u56DB",tel:"1310000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A\u83AB\u5E72\u5C71\u8DEF 50 \u53F7"}],disabledList:[{id:"3",name:"\u738B\u4E94",tel:"1320000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u6EE8\u6C5F\u533A\u6C5F\u5357\u5927\u9053 15 \u53F7"}],add:"\u65B0\u589E\u5730\u5740",edit:"\u7F16\u8F91\u5730\u5740",disabledText:"\u4EE5\u4E0B\u5730\u5740\u8D85\u51FA\u914D\u9001\u8303\u56F4",defaultTagText:"\u9ED8\u8BA4"},"en-US":{list:[{id:"1",name:"John Snow",tel:"13000000000",address:"Somewhere",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000",address:"Somewhere"}],disabledList:[{id:"3",name:"Tywin",tel:"1320000000",address:"Somewhere"}],add:"Add",edit:"Edit",disabledText:"The following address is out of range",defaultTagText:"Default"}}),s=V("1"),m=()=>{p(t("add"))},l=(f,a)=>{p(`${t("edit")}:${a}`)};return(f,a)=>{const d=I("demo-block");return j(),$(d,{title:n(t)("basicUsage")},{default:P(()=>[i(n(Q),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=u=>s.value=u),list:n(t)("list"),"disabled-list":n(t)("disabledList"),"disabled-text":n(t)("disabledText"),"default-tag-text":n(t)("defaultTagText"),onAdd:m,onEdit:l},null,8,["modelValue","list","disabled-list","disabled-text","default-tag-text"])]),_:1},8,["title"])}}});export{be as default};
