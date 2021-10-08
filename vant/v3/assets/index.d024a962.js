import{a as $,T as it}from"./index.4fa5674d.js";import{c as z,i as ct,t as rt,n as D,p as at,H as lt,G as P,y as ut,x as V,e as dt,q as ft,a as ht}from"./use-translate.39547e32.js";import{w as F}from"./with-install.cc9696bc.js";import{u as pt}from"./use-touch.30351383.js";import{u as M}from"./use-expose.877c018b.js";import{z as I,D as S,C as A,G as mt,x as H,e as c,Q as xt,A as gt,q as vt,E as yt,o as _,c as Tt,w as y,B as o,a as U,b as q,d as G,F as X,h as Ct,t as bt}from"./vue-libs.71fdcafc.js";import{u as jt}from"./index.c1e8d10d.js";import{u as St}from"./useChildren.edf9a3d1.js";import{u as kt}from"./index.92de2fdc.js";import{u as Y}from"./index.43faf238.js";import{f as It}from"./constant.4d85ecb9.js";import{u as At}from"./useParent.e4fd6deb.js";import{C as T}from"./index.f7946dd6.js";import"./use-route.913efdd2.js";import"./index.51c98a99.js";import"./on-popup-reopen.d7054786.js";import"./utils.39620306.js";import"./interceptor.33314343.js";import"./use-refs.6c094865.js";import"./index.5645eda4.js";import"./index.5e447543.js";function _t(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!gt(e)}function wt(){const e="A".charCodeAt(0);return Array(26).fill("").map((n,u)=>String.fromCharCode(e+u))}const[K,w]=z("index-bar"),Lt={sticky:rt,zIndex:D,teleport:[String,Object],highlightColor:String,stickyOffsetTop:{type:Number,default:0},indexList:{type:Array,default:wt}},Q=Symbol(K);var Rt=I({name:K,props:Lt,emits:["select","change"],setup(e,{emit:r,slots:n}){const u=S(),d=S(""),m=pt(),l=jt(u),{children:x,linkChildren:s}=St(Q);s({props:e});const C=A(()=>{if(ct(e.zIndex))return{zIndex:+e.zIndex+1}}),b=A(()=>{if(e.highlightColor)return{color:e.highlightColor}}),W=()=>"getBoundingClientRect"in l.value?Y(l):{top:0,left:0},tt=(t,i)=>{for(let a=x.length-1;a>=0;a--){const h=a>0?i[a-1].height:0,f=e.sticky?h+e.stickyOffsetTop:0;if(t+f>=i[a].top)return a}return-1},L=()=>{if(lt(u))return;const{sticky:t,indexList:i}=e,a=P(l.value),h=W(),f=x.map(k=>k.getRect(l.value,h)),g=tt(a,f);d.value=i[g],t&&x.forEach((k,v)=>{const{state:p,$el:st}=k;if(v===g||v===g-1){const j=st.getBoundingClientRect();p.left=j.left,p.width=j.width}else p.left=null,p.width=null;if(v===g)p.active=!0,p.top=Math.max(e.stickyOffsetTop,f[v].top-a)+h.top;else if(v===g-1){const j=f[g].top-a;p.active=j>0,p.top=j+h.top-f[v].height}else p.active=!1})},R=()=>vt(L);kt("scroll",L,{target:l}),mt(R),H(()=>e.indexList,R),H(d,t=>{t&&r("change",t)});const et=()=>e.indexList.map(t=>{const i=t===d.value;return c("span",{class:w("index",{active:i}),style:i?b.value:void 0,"data-index":t},[t])}),B=t=>{t=String(t);const i=x.find(a=>String(a.index)===t);i&&(i.$el.scrollIntoView(),e.sticky&&e.stickyOffsetTop&&ut(V()-e.stickyOffsetTop),r("select",i.index))},O=t=>{const{index:i}=t.dataset;i&&B(i)},ot=t=>{O(t.target)};let E;const nt=t=>{if(m.move(t),m.isVertical()){at(t);const{clientX:i,clientY:a}=t.touches[0],h=document.elementFromPoint(i,a);if(h){const{index:f}=h.dataset;f&&E!==f&&(E=f,O(h))}}},N=()=>c("div",{class:w("sidebar"),style:C.value,onClick:ot,onTouchstart:m.start,onTouchmove:nt},[et()]);return M({scrollTo:B}),()=>{var i;let t;return c("div",{ref:u,class:w()},[e.teleport?c(xt,{to:e.teleport},_t(t=N())?t:{default:()=>[t]}):N(),(i=n.default)==null?void 0:i.call(n)])}}});const Z=F(Rt),[Bt,Ot]=z("index-anchor");var Et=I({name:Bt,props:{index:D},setup(e,{slots:r}){const n=yt({top:0,left:null,rect:{top:0,height:0},width:null,active:!1}),u=S(),{parent:d}=At(Q);if(!d)return;const m=()=>n.active&&d.props.sticky,l=A(()=>{const{zIndex:s,highlightColor:C}=d.props;if(m())return dt(ft(s),{left:n.left?`${n.left}px`:void 0,width:n.width?`${n.width}px`:void 0,transform:n.top?`translate3d(0, ${n.top}px, 0)`:void 0,color:C})});return M({state:n,getRect:(s,C)=>{const b=Y(u);return n.rect.height=b.height,s===window||s===document.body?n.rect.top=b.top+V():n.rect.top=b.top+P(s)-C.top,n.rect}}),()=>{const s=m();return c("div",{ref:u,style:{height:s?`${n.rect.height}px`:void 0}},[c("div",{style:l.value,class:[Ot({sticky:s}),{[It]:s}]},[r.default?r.default():e.index])])}}});const J=F(Et),oe=I({setup(e){const r=ht({"zh-CN":{text:"\u6587\u672C",customIndexList:"\u81EA\u5B9A\u4E49\u7D22\u5F15\u5217\u8868"},"en-US":{text:"Text",customIndexList:"Custom Index List"}}),n=S(0),u=[],d=[1,2,3,4,5,6,8,9,10],m="A".charCodeAt(0);for(let l=0;l<26;l++)u.push(String.fromCharCode(m+l));return(l,x)=>(_(),Tt(o(it),{active:n.value,"onUpdate:active":x[0]||(x[0]=s=>n.value=s)},{default:y(()=>[c(o($),{title:o(r)("basicUsage")},{default:y(()=>[c(o(Z),null,{default:y(()=>[(_(),U(X,null,q(u,s=>G("div",{key:s},[c(o(J),{index:s},null,8,["index"]),c(o(T),{title:o(r)("text")},null,8,["title"]),c(o(T),{title:o(r)("text")},null,8,["title"]),c(o(T),{title:o(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"]),c(o($),{title:o(r)("customIndexList")},{default:y(()=>[c(o(Z),{"index-list":d},{default:y(()=>[(_(),U(X,null,q(d,s=>G("div",{key:s},[c(o(J),{index:s},{default:y(()=>[Ct(bt(o(r)("title")+s),1)]),_:2},1032,["index"]),c(o(T),{title:o(r)("text")},null,8,["title"]),c(o(T),{title:o(r)("text")},null,8,["title"]),c(o(T),{title:o(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"])]),_:1},8,["active"]))}});export{oe as default};