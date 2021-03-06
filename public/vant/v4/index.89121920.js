import{c as A,t as R,a as S}from"./use-translate.48fbbaf5.js";import{n as F,t as I,w as E}from"./with-install.685b3f2d.js";import{H as d,f as D}from"./constant.80c6de18.js";import{u as L}from"./use-placeholder.bea9c79d.js";import{I as g}from"./index.fa826fe1.js";import{A as k,x as N,e as r,r as P,o as z,a as y,w as s,C as e,F as O}from"./vue-libs.84c45047.js";import{T as x}from"./function-call.fcc6f74b.js";import"./use-height.4b634193.js";import"./mount-component.946bc88b.js";import"./use-expose.af01e405.js";import"./index.f99722a6.js";import"./interceptor.a485b929.js";import"./use-touch.c1d7ebd1.js";import"./use-lazy-render.20e241a7.js";import"./on-popup-reopen.e7b96e14.js";import"./index.7c0fb95e.js";import"./index.4fee12b7.js";const[U,i]=A("nav-bar"),H={title:String,fixed:Boolean,zIndex:F,border:I,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean};var K=k({name:U,props:H,emits:["clickLeft","clickRight"],setup(l,{emit:t,slots:a}){const n=N(),u=L(n,i),m=c=>t("clickLeft",c),o=c=>t("clickRight",c),B=()=>a.left?a.left():[l.leftArrow&&r(g,{class:i("arrow"),name:"arrow-left"},null),l.leftText&&r("span",{class:i("text")},[l.leftText])],p=()=>a.right?a.right():r("span",{class:i("text")},[l.rightText]),h=()=>{const{title:c,fixed:_,border:v,zIndex:w}=l,T=R(w),b=l.leftArrow||l.leftText||a.left,C=l.rightText||a.right;return r("div",{ref:n,style:T,class:[i({fixed:_}),{[D]:v,"van-safe-area-top":l.safeAreaInsetTop}]},[r("div",{class:i("content")},[b&&r("div",{class:[i("left"),d],onClick:m},[B()]),r("div",{class:[i("title"),"van-ellipsis"]},[a.title?a.title():c]),C&&r("div",{class:[i("right"),d],onClick:o},[p()])])])};return()=>l.fixed&&l.placeholder?u(h):h()}});const f=E(K),it=k({setup(l){const t=S({"zh-CN":{useSlot:"\u4F7F\u7528\u63D2\u69FD",showBack:"\u8FD4\u56DE\u4E0A\u7EA7",rightButton:"\u53F3\u4FA7\u6309\u94AE"},"en-US":{useSlot:"Use Slot",showBack:"Back",rightButton:"Right Button"}}),a=()=>x(t("back")),n=()=>x(t("button"));return(u,m)=>{const o=P("demo-block");return z(),y(O,null,[r(o,{title:e(t)("basicUsage")},{default:s(()=>[r(e(f),{title:e(t)("title")},null,8,["title"])]),_:1},8,["title"]),r(o,{title:e(t)("showBack")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"left-arrow":"",onClickRight:n},null,8,["title","left-text"])]),_:1},8,["title"]),r(o,{title:e(t)("rightButton")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"right-text":e(t)("button"),"left-arrow":"",onClickLeft:a,onClickRight:n},null,8,["title","left-text","right-text"])]),_:1},8,["title"]),r(o,{title:e(t)("useSlot")},{default:s(()=>[r(e(f),{title:e(t)("title"),"left-text":e(t)("back"),"left-arrow":""},{right:s(()=>[r(e(g),{name:"search",size:"18"})]),_:1},8,["title","left-text"])]),_:1},8,["title"])],64)}}});export{it as default};
