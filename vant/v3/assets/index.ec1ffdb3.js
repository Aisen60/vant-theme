import{C as i}from"./index.5a14a991.js";import{a as C}from"./use-translate.e667ce10.js";import{T as u}from"./function-call.deede8ba.js";import{z as T,r as A,o as j,a as B,e as o,w as a,B as t,F}from"./vue-libs.1dda7261.js";import"./with-install.feb19484.js";import"./use-route.dfb37f70.js";import"./index.472ff4df.js";import"./mount-component.553013ae.js";import"./use-expose.9b0dd301.js";import"./index.13873f42.js";import"./interceptor.b759bdc5.js";import"./use-touch.b0c07ae6.js";import"./index.904c4b4d.js";import"./utils.39620306.js";import"./index.0749451f.js";import"./use-lazy-render.e44d61c0.js";import"./on-popup-reopen.1b0dc8ad.js";import"./index.57f9d610.js";import"./index.ae867a8e.js";const H=T({setup(b){const e=C({"zh-CN":{fail:"\u5931\u8D25\u63D0\u793A",text:"\u63D0\u793A\u5185\u5BB9",text2:"\u6210\u529F\u6587\u6848",text3:"\u5931\u8D25\u6587\u6848",text4:l=>`\u5012\u8BA1\u65F6 ${l} \u79D2`,title1:"\u6587\u5B57\u63D0\u793A",title2:"\u52A0\u8F7D\u63D0\u793A",title3:"\u6210\u529F/\u5931\u8D25\u63D0\u793A",success:"\u6210\u529F\u63D0\u793A",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customImage:"\u81EA\u5B9A\u4E49\u56FE\u7247",loadingType:"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807",positionTop:"\u9876\u90E8\u5C55\u793A",updateMessage:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A",positionBottom:"\u5E95\u90E8\u5C55\u793A",customPosition:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"},"en-US":{fail:"Fail",text:"Some messages",text2:"Success",text3:"Fail",text4:l=>`${l} seconds`,title1:"Text",title2:"Loading",title3:"Success/Fail",success:"Success",customIcon:"Custom Icon",customImage:"Custom Image",loadingType:"Loading Type",positionTop:"Top",updateMessage:"Update Message",positionBottom:"Bottom",customPosition:"Custom Position"}}),c=l=>{u.loading({forbidClick:!0,message:e("loading"),loadingType:l})},p=()=>{u.success(e("text2"))},r=()=>{u.fail(e("text3"))},d=()=>{u({message:e("positionTop"),position:"top"})},g=()=>{u({message:e("positionBottom"),position:"bottom"})},f=()=>{u({message:e("customIcon"),icon:"like-o"})},k=()=>{u({message:e("customImage"),icon:"https://img.yzcdn.cn/vant/logo.png"})},x=()=>{const l=u.loading({duration:0,forbidClick:!0,message:e("text4",3)});let s=3;const n=setInterval(()=>{s--,s?l.message=e("text4",s):(clearInterval(n),u.clear())},1e3)};return(l,s)=>{const n=A("demo-block");return j(),B(F,null,[o(n,{card:"",title:t(e)("basicUsage")},{default:a(()=>[o(t(i),{"is-link":"",title:t(e)("title1"),onClick:s[0]||(s[0]=m=>t(u)(t(e)("text")))},null,8,["title"]),o(t(i),{"is-link":"",title:t(e)("title2"),onClick:s[1]||(s[1]=m=>c())},null,8,["title"]),o(t(i),{"is-link":"",title:t(e)("success"),onClick:p},null,8,["title"]),o(t(i),{"is-link":"",title:t(e)("fail"),onClick:r},null,8,["title"])]),_:1},8,["title"]),o(n,{card:"",title:t(e)("customIcon")},{default:a(()=>[o(t(i),{"is-link":"",title:t(e)("customIcon"),onClick:f},null,8,["title"]),o(t(i),{"is-link":"",title:t(e)("customImage"),onClick:k},null,8,["title"]),o(t(i),{"is-link":"",title:t(e)("loadingType"),onClick:s[2]||(s[2]=m=>c("spinner"))},null,8,["title"])]),_:1},8,["title"]),o(n,{card:"",title:t(e)("customPosition")},{default:a(()=>[o(t(i),{"is-link":"",title:t(e)("positionTop"),onClick:d},null,8,["title"]),o(t(i),{"is-link":"",title:t(e)("positionBottom"),onClick:g},null,8,["title"])]),_:1},8,["title"]),o(n,{card:"",title:t(e)("updateMessage")},{default:a(()=>[o(t(i),{"is-link":"",title:t(e)("updateMessage"),onClick:x},null,8,["title"])]),_:1},8,["title"])],64)}}});export{H as default};