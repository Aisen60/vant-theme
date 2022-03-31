import{C as w}from"./index.b5574021.js";import{c as g,e as D,p as I,a as P}from"./use-translate.94d81043.js";import{t as E,b as x,w as Q}from"./with-install.dd5596ee.js";import{H as L}from"./constant.80c6de18.js";import{a as T,p as U,P as y}from"./index.21ae1060.js";import{A as b,e as s,B as O,x as f,D as v,r as M,o as N,a as W,w as C,C as o,F as $}from"./vue-libs.84c45047.js";import{T as j}from"./function-call.e64b64cf.js";import"./use-route.7c55373a.js";import"./index.63869abe.js";import"./interceptor.e76ee8d4.js";import"./use-expose.771ababc.js";import"./use-touch.c1d7ebd1.js";import"./use-lazy-render.20e241a7.js";import"./on-popup-reopen.e7b96e14.js";import"./index.9c372815.js";import"./mount-component.725b707e.js";import"./index.a750e74d.js";const H=["qq","link","weibo","wechat","poster","qrcode","weapp-qrcode","wechat-moments"],K=[...T,"round","closeOnPopstate","safeAreaInsetBottom"];function R(c){return H.includes(c)?`https://img.yzcdn.cn/vant/share-sheet-${c}.png`:c}const[z,r,V]=g("share-sheet"),G=D({},U,{title:String,round:E,options:x(),cancelText:String,description:String,closeOnPopstate:E,safeAreaInsetBottom:E});var J=b({name:z,props:G,emits:["cancel","select","update:show"],setup(c,{emit:e,slots:a}){const u=n=>e("update:show",n),p=()=>{u(!1),e("cancel")},m=(n,t)=>e("select",n,t),k=()=>{const n=a.title?a.title():c.title,t=a.description?a.description():c.description;if(n||t)return s("div",{class:r("header")},[n&&s("h2",{class:r("title")},[n]),t&&s("span",{class:r("description")},[t])])},A=(n,t)=>{const{name:l,icon:i,className:B,description:q}=n;return s("div",{role:"button",tabindex:0,class:[r("option"),B,L],onClick:()=>m(n,t)},[s("img",{src:R(i),class:r("icon")},null),l&&s("span",{class:r("name")},[l]),q&&s("span",{class:r("option-description")},[q])])},h=(n,t)=>s("div",{class:r("options",{border:t})},[n.map(A)]),F=()=>{const{options:n}=c;return Array.isArray(n[0])?n.map((t,l)=>h(t,l!==0)):h(n)},d=()=>{var t;const n=(t=c.cancelText)!=null?t:V("cancel");if(a.cancel||n)return s("button",{type:"button",class:r("cancel"),onClick:p},[a.cancel?a.cancel():n])};return()=>s(y,O({class:r(),position:"bottom","onUpdate:show":u},I(c,K)),{default:()=>[k(),F(),d()]})}});const S=Q(J),de=b({setup(c){const e=P({"zh-CN":{qq:"QQ",name:"\u540D\u79F0",link:"\u590D\u5236\u94FE\u63A5",title:"\u7ACB\u5373\u5206\u4EAB\u7ED9\u597D\u53CB",weibo:"\u5FAE\u535A",wechat:"\u5FAE\u4FE1",poster:"\u5206\u4EAB\u6D77\u62A5",qrcode:"\u4E8C\u7EF4\u7801",multiLine:"\u5C55\u793A\u591A\u884C\u9009\u9879",showSheet:"\u663E\u793A\u5206\u4EAB\u9762\u677F",withDesc:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",description:"\u63CF\u8FF0\u4FE1\u606F",weappQrcode:"\u5C0F\u7A0B\u5E8F\u7801",wechatMoments:"\u670B\u53CB\u5708"},"en-US":{qq:"QQ",name:"Name",link:"Link",title:"Share",weibo:"Weibo",wechat:"Wechat",poster:"Poster",qrcode:"Qrcode",multiLine:"Multi Line",showSheet:"Show ShareSheet",withDesc:"Show Description",customIcon:"Custom Icon",description:"Description",weappQrcode:"Weapp Qrcode",wechatMoments:"Wechat Moments"}}),a=f(!1),u=f(!1),p=f(!1),m=f(!1),k=v(()=>[{name:e("wechat"),icon:"wechat"},{name:e("weibo"),icon:"weibo"},{name:e("link"),icon:"link"},{name:e("poster"),icon:"poster"},{name:e("qrcode"),icon:"qrcode"}]),A=v(()=>[[{name:e("wechat"),icon:"wechat"},{name:e("wechatMoments"),icon:"wechat-moments"},{name:e("weibo"),icon:"weibo"},{name:e("qq"),icon:"qq"}],[{name:e("link"),icon:"link"},{name:e("poster"),icon:"poster"},{name:e("qrcode"),icon:"qrcode"},{name:e("weappQrcode"),icon:"weapp-qrcode"}]]),h=v(()=>[{name:e("name"),icon:"https://cdn.jsdelivr.net/npm/@vant/assets/custom-icon-fire.png"},{name:e("name"),icon:"https://cdn.jsdelivr.net/npm/@vant/assets/custom-icon-light.png"},{name:e("name"),icon:"https://cdn.jsdelivr.net/npm/@vant/assets/custom-icon-water.png"}]),F=v(()=>[{name:e("wechat"),icon:"wechat"},{name:e("weibo"),icon:"weibo"},{name:e("link"),icon:"link",description:e("description")},{name:e("poster"),icon:"poster"},{name:e("qrcode"),icon:"qrcode"}]),d=n=>{j(n.name),a.value=!1,u.value=!1,p.value=!1,m.value=!1};return(n,t)=>{const l=M("demo-block");return N(),W($,null,[s(l,{card:"",title:o(e)("basicUsage")},{default:C(()=>[s(o(w),{"is-link":"",title:o(e)("showSheet"),onClick:t[0]||(t[0]=i=>a.value=!0)},null,8,["title"]),s(o(S),{show:a.value,"onUpdate:show":t[1]||(t[1]=i=>a.value=i),title:o(e)("title"),options:o(k),onSelect:d},null,8,["show","title","options"])]),_:1},8,["title"]),s(l,{card:"",title:o(e)("multiLine")},{default:C(()=>[s(o(w),{"is-link":"",title:o(e)("showSheet"),onClick:t[2]||(t[2]=i=>p.value=!0)},null,8,["title"]),s(o(S),{show:p.value,"onUpdate:show":t[3]||(t[3]=i=>p.value=i),title:o(e)("title"),options:o(A),onSelect:d},null,8,["show","title","options"])]),_:1},8,["title"]),s(l,{card:"",title:o(e)("customIcon")},{default:C(()=>[s(o(w),{"is-link":"",title:o(e)("showSheet"),onClick:t[4]||(t[4]=i=>m.value=!0)},null,8,["title"]),s(o(S),{show:m.value,"onUpdate:show":t[5]||(t[5]=i=>m.value=i),options:o(h),onSelect:d},null,8,["show","options"])]),_:1},8,["title"]),s(l,{card:"",title:o(e)("withDesc")},{default:C(()=>[s(o(w),{"is-link":"",title:o(e)("showSheet"),onClick:t[6]||(t[6]=i=>u.value=!0)},null,8,["title"]),s(o(S),{show:u.value,"onUpdate:show":t[7]||(t[7]=i=>u.value=i),title:o(e)("title"),options:o(F),description:o(e)("description"),onSelect:d},null,8,["show","title","options","description"])]),_:1},8,["title"])],64)}}});export{de as default};
