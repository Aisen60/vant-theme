import{c,a as _}from"./use-translate.7145ee20.js";import{t as h,m as f,w as m}from"./with-install.756837d9.js";import{z as d,e as a,r as p,o as x,a as v,w as n,B as t,h as s,t as l,F as C}from"./vue-libs.84e059bd.js";const[P,w]=c("divider"),y={dashed:Boolean,hairline:h,contentPosition:f("center")};var B=d({name:P,props:y,setup(r,{slots:e}){return()=>{var u;return a("div",{role:"separator",class:w({dashed:r.dashed,hairline:r.hairline,[`content-${r.contentPosition}`]:!!e.default})},[(u=e.default)==null?void 0:u.call(e)])}}});const o=m(B);const T=d({setup(r){const e=_({"zh-CN":{text:"\u6587\u672C",dashed:"\u865A\u7EBF",withText:"\u5C55\u793A\u6587\u672C",contentPosition:"\u5185\u5BB9\u4F4D\u7F6E",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F"},"en-US":{text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style"}});return(u,b)=>{const i=p("demo-block");return x(),v(C,null,[a(i,{title:t(e)("basicUsage")},{default:n(()=>[a(t(o))]),_:1},8,["title"]),a(i,{title:t(e)("withText")},{default:n(()=>[a(t(o),null,{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(i,{title:t(e)("contentPosition")},{default:n(()=>[a(t(o),{"content-position":"left"},{default:n(()=>[s(l(t(e)("text")),1)]),_:1}),a(t(o),{"content-position":"right"},{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(i,{title:t(e)("dashed")},{default:n(()=>[a(t(o),{dashed:"",hairline:!1},{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(i,{title:t(e)("customStyle")},{default:n(()=>[a(t(o),{style:{borderColor:"#1989fa",color:"#1989fa",padding:"0 16px"}},{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"])],64)}}});export{T as default};
