import{a as c,T}from"./index.042acfa5.js";import{P as f}from"./index.3415c404.js";import{c as i}from"./index.8be6aef3.js";import{T as _}from"./function-call.bdfdb02d.js";import{a as x}from"./use-translate.813c82b8.js";import{z as B,D as v,C as V,N as y,o as R,c as C,w as o,e as r,B as e,d as a,t as g,g as D}from"./vue-libs.e99ed056.js";import"./with-install.ed706383.js";import"./use-id.ae1b43c7.js";import"./use-expose.f2ccb00a.js";import"./use-route.ffc287bb.js";import"./index.4eb76732.js";import"./use-touch.1aeb3848.js";import"./on-popup-reopen.8597ae62.js";import"./constant.80c6de18.js";import"./interceptor.ffa245cd.js";import"./use-refs.903a0488.js";import"./index.e35ccbbe.js";import"./index.b854190e.js";import"./index.04ba88cf.js";import"./mount-component.852f8ebd.js";import"./index.a230d5bc.js";import"./use-lazy-render.925a18cc.js";import"./index.9efe88fe.js";const U=["src"],$=["src"],w=["src"],ee=B({name:"index",setup(h){const u=x({"zh-CN":{try:"\u4E0B\u62C9\u8BD5\u8BD5",text:"\u5237\u65B0\u6B21\u6570",success:"\u5237\u65B0\u6210\u529F",successTip:"\u6210\u529F\u63D0\u793A",customTips:"\u81EA\u5B9A\u4E49\u63D0\u793A"},"en-US":{try:"Try it down",text:"Refresh Count",success:"Refresh success",successTip:"Success Tip",customTips:"Custom Tips"}}),m=v(0),l=v(!1),p=V(()=>m.value?`${u("text")}: ${m.value}`:u("try")),d=n=>{setTimeout(()=>{n&&_(u("success")),l.value=!1,m.value++},1e3)};return y(()=>{const n=new Image,s=new Image;n.src=i("doge.png"),s.src=i("doge-fire.jpeg")}),(n,s)=>(R(),C(e(T),null,{default:o(()=>[r(e(c),{title:e(u)("basicUsage")},{default:o(()=>[r(e(f),{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=t=>l.value=t),onRefresh:s[1]||(s[1]=t=>d(!0))},{default:o(()=>[a("p",null,g(e(p)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),r(e(c),{title:e(u)("successTip")},{default:o(()=>[r(e(f),{modelValue:l.value,"onUpdate:modelValue":s[2]||(s[2]=t=>l.value=t),"success-text":e(u)("success"),onRefresh:s[3]||(s[3]=t=>d(!1))},{default:o(()=>[a("p",null,g(e(p)),1)]),_:1},8,["modelValue","success-text"])]),_:1},8,["title"]),r(e(c),{title:e(u)("customTips")},{default:o(()=>[r(e(f),{modelValue:l.value,"onUpdate:modelValue":s[4]||(s[4]=t=>l.value=t),"head-height":"80",onRefresh:s[5]||(s[5]=t=>d(!0))},{pulling:o(({distance:t})=>[a("img",{class:"doge",src:e(i)("doge.png"),style:D({transform:`scale(${t/80})`})},null,12,U)]),loosing:o(()=>[a("img",{src:e(i)("doge.png"),class:"doge"},null,8,$)]),loading:o(()=>[a("img",{src:e(i)("doge-fire.jpeg"),class:"doge"},null,8,w)]),default:o(()=>[a("p",null,g(e(p)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{ee as default};
