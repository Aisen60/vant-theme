import{c as A,t as S,a as F}from"./use-translate.d627ebf3.js";import{n as I,t as E,w as R}from"./with-install.9724bc72.js";import{H as d,f as D}from"./constant.80c6de18.js";import{u as N}from"./use-placeholder.a262ad07.js";import{I as x}from"./index.72703c04.js";import{z as B,D as P,e as r,r as z,o as L,a as y,w as s,B as e,F as O}from"./vue-libs.bf80eadf.js";import{T as g}from"./function-call.74fb28dc.js";import"./use-height.9b188b29.js";import"./mount-component.18fa5b79.js";import"./use-expose.36b4c9ee.js";import"./index.80eefc7f.js";import"./interceptor.5b737db1.js";import"./use-touch.b6ff7b52.js";import"./use-lazy-render.d79b7d1e.js";import"./on-popup-reopen.e08ee506.js";import"./index.b391be49.js";import"./index.4414d46f.js";const[U,i]=A("nav-bar"),H={title:String,fixed:Boolean,zIndex:I,border:E,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var K=B({name:U,props:H,emits:["click-left","click-right"],setup(l,{emit:t,slots:a}){const n=P(),u=N(n,i),m=c=>t("click-left",c),o=c=>t("click-right",c),k=()=>a.left?a.left():[l.leftArrow&&r(x,{class:i("arrow"),name:"arrow-left"},null),l.leftText&&r("span",{class:i("text")},[l.leftText])],p=()=>a.right?a.right():r("span",{class:i("text")},[l.rightText]),h=()=>{const{title:c,fixed:_,border:v,zIndex:w}=l,T=S(w),b=l.leftArrow||l.leftText||a.left,C=l.rightText||a.right;return r("div",{ref:n,style:T,class:[i({fixed:_}),{[D]:v,"van-safe-area-top":l.safeAreaInsetTop}]},[r("div",{class:i("content")},[b&&r("div",{class:[i("left"),d],onClick:m},[k()]),r("div",{class:[i("title"),"van-ellipsis"]},[a.title?a.title():c]),C&&r("div",{class:[i("right"),d],onClick:o},[p()])])])};return()=>l.fixed&&l.placeholder?u(h):h()}});const f=R(K),it=B({setup(l){const t=F({"zh-CN":{useSlot:"\u4F7F\u7528\u63D2\u69FD",showBack:"\u8FD4\u56DE\u4E0A\u7EA7",rightButton:"\u53F3\u4FA7\u6309\u94AE"},"en-US":{useSlot:"Use Slot",showBack:"Back",rightButton:"Right Button"}}),a=()=>g(t("back")),n=()=>g(t("button"));return(u,m)=>{const o=z("demo-block");return L(),y(O,null,[r(o,{title:e(t)("basicUsage")},{default:s(()=>[r(e(f),{title:e(t)("title")},null,8,["title"])]),_:1},8,["title"]),r(o,{title:e(t)("showBack")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"left-arrow":"",onClickRight:n},null,8,["title","left-text"])]),_:1},8,["title"]),r(o,{title:e(t)("rightButton")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"right-text":e(t)("button"),"left-arrow":"",onClickLeft:a,onClickRight:n},null,8,["title","left-text","right-text"])]),_:1},8,["title"]),r(o,{title:e(t)("useSlot")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"left-arrow":""},{right:s(()=>[r(e(x),{name:"search",size:"18"})]),_:1},8,["title","left-text"])]),_:1},8,["title"])],64)}}});export{it as default};
