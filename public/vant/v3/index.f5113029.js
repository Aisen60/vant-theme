var x=Object.defineProperty;var d=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(u,l,e)=>l in u?x(u,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[l]=e,w=(u,l)=>{for(var e in l||(l={}))B.call(l,e)&&g(u,e,l[e]);if(d)for(var e of d(l))I.call(l,e)&&g(u,e,l[e]);return u};import{C as a}from"./index.e988085b.js";import{I as E}from"./function-call.3bf1629b.js";import{a as h,F as C}from"./use-translate.d627ebf3.js";import{T as $}from"./function-call.74fb28dc.js";import{z as S,D as k,r as T,o as j,a as U,e as n,w as m,B as o,h as A,t as N,F as V}from"./vue-libs.bf80eadf.js";import"./with-install.9724bc72.js";import"./use-route.9fd68ea8.js";import"./index.72703c04.js";import"./mount-component.18fa5b79.js";import"./use-expose.36b4c9ee.js";import"./constant.80c6de18.js";import"./interceptor.5b737db1.js";import"./index.1e01fa70.js";import"./use-touch.b6ff7b52.js";import"./on-popup-reopen.e08ee506.js";import"./index.80eefc7f.js";import"./use-lazy-render.d79b7d1e.js";import"./index.b391be49.js";import"./index.0b323c1e.js";import"./index.4414d46f.js";const se=S({setup(u){const l=E.Component,e=h({"zh-CN":{closed:"\u5173\u95ED",showClose:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",showImages:"\u9884\u89C8\u56FE\u7247",beforeClose:"\u5F02\u6B65\u5173\u95ED",closeEvent:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",customConfig:"\u4F20\u5165\u914D\u7F6E\u9879",startPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",componentCall:"\u7EC4\u4EF6\u8C03\u7528",index:s=>`\u7B2C${s+1}\u9875`},"en-US":{closed:"closed",showClose:"Show Close Icon",showImages:"Show Images",beforeClose:"Before Close",closeEvent:"Close Event",customConfig:"Custom Config",startPosition:"Set Start Position",componentCall:"Component Call",index:s=>`Page: ${s}`}}),c=[C("apple-1.jpeg"),C("apple-2.jpeg"),C("apple-3.jpeg"),C("apple-4.jpeg")],v=k(!1),f=k(0),F=()=>$(e("closed")),b=()=>new Promise(s=>{setTimeout(()=>{s(!0)},1e3)}),D=()=>{v.value=!0},P=s=>{f.value=s},r=(s={})=>{const t=E(w({images:c},s));s.beforeClose&&setTimeout(()=>{t==null||t.close()},2e3)};return(s,t)=>{const p=T("demo-block");return j(),U(V,null,[n(p,{card:"",title:o(e)("basicUsage")},{default:m(()=>[n(o(a),{"is-link":"",value:o(e)("showImages"),onClick:t[0]||(t[0]=i=>r())},null,8,["value"])]),_:1},8,["title"]),n(p,{card:"",title:o(e)("customConfig")},{default:m(()=>[n(o(a),{"is-link":"",value:o(e)("startPosition"),onClick:t[1]||(t[1]=i=>r({startPosition:1}))},null,8,["value"]),n(o(a),{"is-link":"",value:o(e)("showClose"),onClick:t[2]||(t[2]=i=>r({closeable:!0}))},null,8,["value"]),n(o(a),{"is-link":"",value:o(e)("closeEvent"),onClick:t[3]||(t[3]=i=>r({onClose:F}))},null,8,["value"])]),_:1},8,["title"]),n(p,{card:"",title:o(e)("beforeClose")},{default:m(()=>[n(o(a),{"is-link":"",value:o(e)("beforeClose"),onClick:t[4]||(t[4]=i=>r({beforeClose:b}))},null,8,["value"])]),_:1},8,["title"]),n(p,{card:"",title:o(e)("componentCall")},{default:m(()=>[n(o(a),{"is-link":"",value:o(e)("componentCall"),onClick:D},null,8,["value"]),n(o(l),{show:v.value,"onUpdate:show":t[5]||(t[5]=i=>v.value=i),images:c,onChange:P},{index:m(()=>[A(N(o(e)("index",f.value)),1)]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{se as default};
