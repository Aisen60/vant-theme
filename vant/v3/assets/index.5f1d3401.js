var h=Object.defineProperty;var f=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var v=(i,s,e)=>s in i?h(i,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[s]=e,j=(i,s)=>{for(var e in s||(s={}))P.call(s,e)&&v(i,e,s[e]);if(f)for(var e of f(s))D.call(s,e)&&v(i,e,s[e]);return i};import{C as a}from"./index.5a14a991.js";import{I as g}from"./function-call.de02bd03.js";import{a as F}from"./use-translate.e667ce10.js";import{T as B}from"./function-call.deede8ba.js";import{z as I,D as b,r as z,o as $,a as y,e as l,w as m,B as o,h as S,t as T,F as A}from"./vue-libs.1dda7261.js";import"./with-install.feb19484.js";import"./use-route.dfb37f70.js";import"./index.472ff4df.js";import"./mount-component.553013ae.js";import"./use-expose.9b0dd301.js";import"./interceptor.b759bdc5.js";import"./index.d7333b46.js";import"./use-touch.b0c07ae6.js";import"./on-popup-reopen.1b0dc8ad.js";import"./utils.39620306.js";import"./index.904c4b4d.js";import"./useChildren.ed284d59.js";import"./useParent.5e3d1dfb.js";import"./index.13873f42.js";import"./index.0749451f.js";import"./use-lazy-render.e44d61c0.js";import"./index.57f9d610.js";import"./index.b7f6e1af.js";import"./index.ae867a8e.js";const ue=I({setup(i){const s=g.Component,e=F({"zh-CN":{closed:"\u5173\u95ED",showClose:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",showImages:"\u9884\u89C8\u56FE\u7247",beforeClose:"\u5F02\u6B65\u5173\u95ED",closeEvent:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",customConfig:"\u4F20\u5165\u914D\u7F6E\u9879",startPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",componentCall:"\u7EC4\u4EF6\u8C03\u7528",index:n=>`\u7B2C${n+1}\u9875`},"en-US":{closed:"closed",showClose:"Show Close Icon",showImages:"Show Images",beforeClose:"Before Close",closeEvent:"Close Event",customConfig:"Custom Config",startPosition:"Set Start Position",componentCall:"Component Call",index:n=>`Page: ${n}`}}),c=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg","https://img.yzcdn.cn/vant/apple-4.jpg"],d=b(!1),C=b(0),w=()=>B(e("closed")),x=()=>new Promise(n=>{setTimeout(()=>{n(!0)},1e3)}),E=()=>{d.value=!0},k=n=>{C.value=n},r=(n={})=>{const t=g(j({images:c},n));n.beforeClose&&setTimeout(()=>{t==null||t.close()},2e3)};return(n,t)=>{const p=z("demo-block");return $(),y(A,null,[l(p,{card:"",title:o(e)("basicUsage")},{default:m(()=>[l(o(a),{"is-link":"",value:o(e)("showImages"),onClick:t[0]||(t[0]=u=>r())},null,8,["value"])]),_:1},8,["title"]),l(p,{card:"",title:o(e)("customConfig")},{default:m(()=>[l(o(a),{"is-link":"",value:o(e)("startPosition"),onClick:t[1]||(t[1]=u=>r({startPosition:1}))},null,8,["value"]),l(o(a),{"is-link":"",value:o(e)("showClose"),onClick:t[2]||(t[2]=u=>r({closeable:!0}))},null,8,["value"]),l(o(a),{"is-link":"",value:o(e)("closeEvent"),onClick:t[3]||(t[3]=u=>r({onClose:w}))},null,8,["value"])]),_:1},8,["title"]),l(p,{card:"",title:o(e)("beforeClose")},{default:m(()=>[l(o(a),{"is-link":"",value:o(e)("beforeClose"),onClick:t[4]||(t[4]=u=>r({beforeClose:x}))},null,8,["value"])]),_:1},8,["title"]),l(p,{card:"",title:o(e)("componentCall")},{default:m(()=>[l(o(a),{"is-link":"",value:o(e)("componentCall"),onClick:E},null,8,["value"]),l(o(s),{show:d.value,"onUpdate:show":t[5]||(t[5]=u=>d.value=u),images:c,onChange:k},{index:m(()=>[S(T(o(e)("index",C.value)),1)]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{ue as default};