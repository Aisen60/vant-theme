import{c as T,m as C,u as A}from"./use-translate.3147781c.js";import{n as S,t as F,w as I}from"./with-install.6d6d29d8.js";import{f as R}from"./constant.bdedcaa1.js";import{u as z}from"./use-placeholder.ab17ba27.js";import{I as h}from"./index.b95a2b81.js";import{z as x,C as E,e,r as N,o as D,a as y,w as c,A as r,F as L}from"./vue-libs.4d090e76.js";import{T as p}from"./function-call.1b38f07f.js";import"./use-height.841e765f.js";import"./mount-component.564fff32.js";import"./use-expose.89c20f56.js";import"./index.2607c55c.js";import"./interceptor.d5bd5ad2.js";import"./use-touch.66e4202e.js";import"./index.4a4661ca.js";import"./utils.39620306.js";import"./index.cbbbdc40.js";import"./use-lazy-render.a4eed0b1.js";import"./on-popup-reopen.8d8043ad.js";import"./index.7f881137.js";import"./index.25dd8ae6.js";const[P,i]=T("nav-bar");var O=x({name:P,props:{title:String,fixed:Boolean,zIndex:S,border:F,leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean},emits:["click-left","click-right"],setup(a,{emit:t,slots:l}){const o=E(),u=z(o,i),d=s=>t("click-left",s),n=s=>t("click-right",s),g=()=>l.left?l.left():[a.leftArrow&&e(h,{class:i("arrow"),name:"arrow-left"},null),a.leftText&&e("span",{class:i("text")},[a.leftText])],b=()=>l.right?l.right():e("span",{class:i("text")},[a.rightText]),m=()=>{const{title:s,fixed:k,border:j,zIndex:B}=a,w=C(B),_=a.leftArrow||a.leftText||l.left,v=a.rightText||l.right;return e("div",{ref:o,style:w,class:[i({fixed:k,"safe-area-inset-top":a.safeAreaInsetTop}),{[R]:j}]},[e("div",{class:i("content")},[_&&e("div",{class:i("left"),onClick:d},[g()]),e("div",{class:[i("title"),"van-ellipsis"]},[l.title?l.title():s]),v&&e("div",{class:i("right"),onClick:n},[b()])])])};return()=>a.fixed&&a.placeholder?u(m):m()}});const f=I(O),nt=x({setup(a){const t=A({"zh-CN":{useSlot:"\u4F7F\u7528\u63D2\u69FD",showBack:"\u8FD4\u56DE\u4E0A\u7EA7",rightButton:"\u53F3\u4FA7\u6309\u94AE"},"en-US":{useSlot:"Use Slot",showBack:"Back",rightButton:"Right Button"}}),l=()=>p(t("back")),o=()=>p(t("button"));return(u,d)=>{const n=N("demo-block");return D(),y(L,null,[e(n,{title:r(t)("basicUsage")},{default:c(()=>[e(r(f),{title:r(t)("title")},null,8,["title"])]),_:1},8,["title"]),e(n,{title:r(t)("showBack")},{default:c(()=>[e(r(f),{title:r(t)("title"),"left-text":r(t)("back"),"left-arrow":"",onClickRight:o},null,8,["title","left-text"])]),_:1},8,["title"]),e(n,{title:r(t)("rightButton")},{default:c(()=>[e(r(f),{title:r(t)("title"),"left-text":r(t)("back"),"right-text":r(t)("button"),"left-arrow":"",onClickLeft:l,onClickRight:o},null,8,["title","left-text","right-text"])]),_:1},8,["title"]),e(n,{title:r(t)("useSlot")},{default:c(()=>[e(r(f),{title:r(t)("title"),"left-text":r(t)("back"),"left-arrow":""},{right:c(()=>[e(r(h),{name:"search",size:"18"})]),_:1},8,["title","left-text"])]),_:1},8,["title"])],64)}}});export{nt as default};