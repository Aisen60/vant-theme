import{C as i}from"./index.e988085b.js";import{I as g}from"./index.72703c04.js";import{N as s}from"./function-call.8c8c6957.js";import{a as E}from"./use-translate.d627ebf3.js";import{z as w,D as A,r as B,o as N,a as D,e as n,w as l,B as t,d as v,t as F,F as b}from"./vue-libs.bf80eadf.js";import"./with-install.9724bc72.js";import"./use-route.9fd68ea8.js";import"./mount-component.18fa5b79.js";import"./use-expose.36b4c9ee.js";import"./index.80eefc7f.js";import"./constant.80c6de18.js";import"./interceptor.5b737db1.js";import"./use-touch.b6ff7b52.js";import"./use-lazy-render.d79b7d1e.js";import"./on-popup-reopen.e08ee506.js";import"./index.b391be49.js";const J=w({setup(P){const p=s.Component,o=E({"zh-CN":{primary:"\u4E3B\u8981\u901A\u77E5",success:"\u6210\u529F\u901A\u77E5",danger:"\u5371\u9669\u901A\u77E5",warning:"\u8B66\u544A\u901A\u77E5",content:"\u901A\u77E5\u5185\u5BB9",notifyType:"\u901A\u77E5\u7C7B\u578B",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customNotify:"\u81EA\u5B9A\u4E49\u914D\u7F6E",componentCall:"\u7EC4\u4EF6\u8C03\u7528",customDuration:"\u81EA\u5B9A\u4E49\u65F6\u957F",customPosition:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"},"en-US":{primary:"Primary",success:"Success",danger:"Danger",warning:"Warning",content:"Notify Message",notifyType:"Notify Type",customColor:"Custom Color",customNotify:"Custom Notify",componentCall:"Component Call",customDuration:"Custom Duration",customPosition:"Custom Position"}}),r=A(!1),C=()=>{s(o("content"))},f=()=>{s({color:"#ad0000",message:o("customColor"),background:"#ffe1e1"})},y=()=>{s({message:o("customDuration"),duration:1e3})},d=()=>{s({message:o("customPosition"),position:"bottom"})},a=c=>{s({message:o("content"),type:c})},k=()=>{r.value=!0,setTimeout(()=>{r.value=!1},2e3)};return(c,e)=>{const m=B("demo-block");return N(),D(b,null,[n(m,{card:"",title:t(o)("basicUsage")},{default:l(()=>[n(t(i),{"is-link":"",title:t(o)("basicUsage"),onClick:C},null,8,["title"])]),_:1},8,["title"]),n(m,{card:"",title:t(o)("notifyType")},{default:l(()=>[n(t(i),{"is-link":"",title:t(o)("primary"),onClick:e[0]||(e[0]=u=>a("primary"))},null,8,["title"]),n(t(i),{"is-link":"",title:t(o)("success"),onClick:e[1]||(e[1]=u=>a("success"))},null,8,["title"]),n(t(i),{"is-link":"",title:t(o)("danger"),onClick:e[2]||(e[2]=u=>a("danger"))},null,8,["title"]),n(t(i),{"is-link":"",title:t(o)("warning"),onClick:e[3]||(e[3]=u=>a("warning"))},null,8,["title"])]),_:1},8,["title"]),n(m,{card:"",title:t(o)("customNotify")},{default:l(()=>[n(t(i),{"is-link":"",title:t(o)("customColor"),onClick:f},null,8,["title"]),n(t(i),{"is-link":"",title:t(o)("customPosition"),onClick:d},null,8,["title"]),n(t(i),{"is-link":"",title:t(o)("customDuration"),onClick:y},null,8,["title"])]),_:1},8,["title"]),n(m,{card:"",title:t(o)("componentCall")},{default:l(()=>[n(t(i),{"is-link":"",title:t(o)("componentCall"),onClick:k},null,8,["title"]),n(t(p),{show:r.value,"onUpdate:show":e[4]||(e[4]=u=>r.value=u),type:"success"},{default:l(()=>[n(t(g),{name:"bell",style:{"margin-right":"4px"}}),v("span",null,F(t(o)("content")),1)]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{J as default};
