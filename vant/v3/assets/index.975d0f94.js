import{c,u as _}from"./use-translate.dc7c72f2.js";import{t as f,m as h,w as m}from"./with-install.eb95b9ca.js";import{z as d,e as a,r as p,o as x,a as v,w as n,B as t,h as s,t as l,F as C}from"./vue-libs.84090ae0.js";const[b,w]=c("divider");var y=d({name:b,props:{dashed:Boolean,hairline:f,contentPosition:h("center")},setup(u,{slots:e}){return()=>{var r;return a("div",{role:"separator",class:w({dashed:u.dashed,hairline:u.hairline,[`content-${u.contentPosition}`]:!!e.default})},[(r=e.default)==null?void 0:r.call(e)])}}});const o=m(y);const S=d({setup(u){const e=_({"zh-CN":{text:"\u6587\u672C",dashed:"\u865A\u7EBF",withText:"\u5C55\u793A\u6587\u672C",contentPosition:"\u5185\u5BB9\u4F4D\u7F6E",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F"},"en-US":{text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style"}});return(r,B)=>{const i=p("demo-block");return x(),v(C,null,[a(i,{title:t(e)("basicUsage")},{default:n(()=>[a(t(o))]),_:1},8,["title"]),a(i,{title:t(e)("withText")},{default:n(()=>[a(t(o),null,{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(i,{title:t(e)("contentPosition")},{default:n(()=>[a(t(o),{"content-position":"left"},{default:n(()=>[s(l(t(e)("text")),1)]),_:1}),a(t(o),{"content-position":"right"},{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(i,{title:t(e)("dashed")},{default:n(()=>[a(t(o),{dashed:"",hairline:!1},{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(i,{title:t(e)("customStyle")},{default:n(()=>[a(t(o),{style:{borderColor:"#1989fa",color:"#1989fa",padding:"0 16px"}},{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"])],64)}}});export{S as default};
