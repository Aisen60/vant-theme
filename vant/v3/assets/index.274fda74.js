import{C as i}from"./index.c58eb23d.js";import{a as x}from"./use-translate.c431c781.js";import{T as u}from"./function-call.c0e76344.js";import{z as A,r as T,o as F,a as j,e,w as a,A as t,F as B}from"./vue-libs.cab43f37.js";import"./with-install.6654422d.js";import"./use-route.1ad21ca2.js";import"./index.73431c4d.js";import"./mount-component.3889b323.js";import"./use-expose.cd1f8e82.js";import"./index.949f0f09.js";import"./constant.80c6de18.js";import"./interceptor.17973404.js";import"./use-touch.0cf4a6e6.js";import"./use-lazy-render.c492e2a8.js";import"./on-popup-reopen.6de6ab9a.js";import"./index.c2bf76af.js";import"./index.7c2cb6fe.js";const q=A({setup(E){const o=x({"zh-CN":{fail:"\u5931\u8D25\u63D0\u793A",text:"\u63D0\u793A\u5185\u5BB9",text2:"\u6210\u529F\u6587\u6848",text3:"\u5931\u8D25\u6587\u6848",text4:n=>`\u5012\u8BA1\u65F6 ${n} \u79D2`,title1:"\u6587\u5B57\u63D0\u793A",title2:"\u52A0\u8F7D\u63D0\u793A",title3:"\u6210\u529F/\u5931\u8D25\u63D0\u793A",success:"\u6210\u529F\u63D0\u793A",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customImage:"\u81EA\u5B9A\u4E49\u56FE\u7247",loadingType:"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807",positionTop:"\u9876\u90E8\u5C55\u793A",updateMessage:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A",positionBottom:"\u5E95\u90E8\u5C55\u793A",customPosition:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"},"en-US":{fail:"Fail",text:"Some messages",text2:"Success",text3:"Fail",text4:n=>`${n} seconds`,title1:"Text",title2:"Loading",title3:"Success/Fail",success:"Success",customIcon:"Custom Icon",customImage:"Custom Image",loadingType:"Loading Type",positionTop:"Top",updateMessage:"Update Message",positionBottom:"Bottom",customPosition:"Custom Position"}}),c=n=>{u.loading({forbidClick:!0,message:o("loading"),loadingType:n})},p=()=>{u.success(o("text2"))},r=()=>{u.fail(o("text3"))},d=()=>{u({message:o("positionTop"),position:"top"})},g=()=>{u({message:o("positionBottom"),position:"bottom"})},f=()=>{u({message:o("customIcon"),icon:"like-o"})},k=()=>{u({message:o("customImage"),icon:"https://img.yzcdn.cn/vant/logo.png"})},C=()=>{const n=u.loading({duration:0,forbidClick:!0,message:o("text4",3)});let s=3;const l=setInterval(()=>{s--,s?n.message=o("text4",s):(clearInterval(l),u.clear())},1e3)};return(n,s)=>{const l=T("demo-block");return F(),j(B,null,[e(l,{card:"",title:t(o)("basicUsage")},{default:a(()=>[e(t(i),{"is-link":"",title:t(o)("title1"),onClick:s[0]||(s[0]=m=>t(u)(t(o)("text")))},null,8,["title"]),e(t(i),{"is-link":"",title:t(o)("title2"),onClick:s[1]||(s[1]=m=>c())},null,8,["title"]),e(t(i),{"is-link":"",title:t(o)("success"),onClick:p},null,8,["title"]),e(t(i),{"is-link":"",title:t(o)("fail"),onClick:r},null,8,["title"])]),_:1},8,["title"]),e(l,{card:"",title:t(o)("customIcon")},{default:a(()=>[e(t(i),{"is-link":"",title:t(o)("customIcon"),onClick:f},null,8,["title"]),e(t(i),{"is-link":"",title:t(o)("customImage"),onClick:k},null,8,["title"]),e(t(i),{"is-link":"",title:t(o)("loadingType"),onClick:s[2]||(s[2]=m=>c("spinner"))},null,8,["title"])]),_:1},8,["title"]),e(l,{card:"",title:t(o)("customPosition")},{default:a(()=>[e(t(i),{"is-link":"",title:t(o)("positionTop"),onClick:d},null,8,["title"]),e(t(i),{"is-link":"",title:t(o)("positionBottom"),onClick:g},null,8,["title"])]),_:1},8,["title"]),e(l,{card:"",title:t(o)("updateMessage")},{default:a(()=>[e(t(i),{"is-link":"",title:t(o)("updateMessage"),onClick:C},null,8,["title"])]),_:1},8,["title"])],64)}}});export{q as default};
