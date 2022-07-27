import{A as _,a,b as u}from"./index.b3814e6a.js";import{c as I,e as k,u as A,a as E}from"./use-translate.82d1675a.js";import{n as F,u as P,w as h}from"./with-install.1e1e6f3a.js";import{r as D,u as v}from"./use-route.e59fb0a1.js";import{B as y,I as w}from"./index.1aafb839.js";import{z as b,e as n,A as S,r as N,o as T,a as z,w as c,B as t,F as O}from"./vue-libs.d483629c.js";import{T as B}from"./function-call.67aa4b4e.js";import"./use-placeholder.aeeff3ae.js";import"./use-height.65a2922d.js";import"./use-expose.0b7af251.js";import"./index.228fc332.js";import"./constant.80c6de18.js";import"./index.185a61a8.js";import"./mount-component.55786c8c.js";import"./index.d942910e.js";import"./interceptor.693bb092.js";import"./use-touch.2a7e3be3.js";import"./use-lazy-render.13317edf.js";import"./on-popup-reopen.27c65306.js";import"./index.a7d685e6.js";const[R,p]=I("action-bar-icon"),U=k({},D,{dot:Boolean,text:String,icon:String,color:String,badge:F,iconClass:P,badgeProps:Object,iconPrefix:String});var j=b({name:R,props:U,setup(r,{slots:o}){const i=v();A(_);const s=()=>{const{dot:d,badge:m,icon:l,color:C,iconClass:f,badgeProps:x,iconPrefix:g}=r;return o.icon?n(y,S({dot:d,class:p("icon"),content:m},x),{default:o.icon}):n(w,{tag:"div",dot:d,name:l,badge:m,color:C,class:[p("icon"),f],badgeProps:x,classPrefix:g},null)};return()=>n("div",{role:"button",class:p(),tabindex:0,onClick:i},[s(),o.default?o.default():r.text])}});const e=h(j);const lt=b({__name:"index",setup(r){const o=E({"zh-CN":{icon1:"\u5BA2\u670D",icon2:"\u8D2D\u7269\u8F66",icon3:"\u5E97\u94FA",button1:"\u52A0\u5165\u8D2D\u7269\u8F66",button2:"\u7ACB\u5373\u8D2D\u4E70",iconBadge:"\u5FBD\u6807\u63D0\u793A",collected:"\u5DF2\u6536\u85CF",clickIcon:"\u70B9\u51FB\u56FE\u6807",clickButton:"\u70B9\u51FB\u6309\u94AE",customIconColor:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",customButtonColor:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"},"en-US":{icon1:"Icon1",icon2:"Icon2",icon3:"Icon3",button1:"Button",button2:"Button",iconBadge:"Icon Badge",collected:"Collected",clickIcon:"Click Icon",clickButton:"Click Button",customIconColor:"Custom Icon Color",customButtonColor:"Custom Button Color"}}),i=()=>B(o("clickIcon")),s=()=>B(o("clickButton"));return(d,m)=>{const l=N("demo-block");return T(),z(O,null,[n(l,{title:t(o)("basicUsage")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),onClick:i},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2"),onClick:i},null,8,["text"]),n(t(e),{icon:"shop-o",text:t(o)("icon3"),onClick:i},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2"),onClick:s},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("iconBadge")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",dot:"",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",badge:"5",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"shop-o",badge:"12",text:t(o)("icon3")},null,8,["text"]),n(t(u),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("customIconColor")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),color:"#ee0a24"},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"star",text:t(o)("collected"),color:"#ff5000"},null,8,["text"]),n(t(u),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("customButtonColor")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(u),{color:"#be99ff",type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{color:"#7232dd",type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{lt as default};
