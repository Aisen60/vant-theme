import{a as V,T as ct}from"./index.f48a8e82.js";import{c as q,O as rt,b as at,i as lt,n as ut,l as dt,Q as ft,M as R,I as L,y as ht,x as K,u as mt,e as pt,t as xt,a as gt}from"./use-translate.00c0a8db.js";import{t as vt,n as Z,a as yt,w as G}from"./with-install.f242061f.js";import{u as Tt}from"./use-touch.c1d7ebd1.js";import{u as J}from"./use-expose.024996fe.js";import{A as B,x as A,D as O,N as Ct,y as j,e as c,R as It,Q as St,q as kt,H as At,o as _,c as bt,w as C,C as o,a as F,b as H,d as U,F as Q,h as _t,t as wt}from"./vue-libs.84c45047.js";import{f as Rt}from"./constant.80c6de18.js";import{C as I}from"./index.44f2ddab.js";import"./use-id.e5fd672f.js";import"./use-route.7c55373a.js";import"./index.b3b8cc4c.js";import"./on-popup-reopen.e7b96e14.js";import"./interceptor.f340ca2d.js";import"./use-refs.e65104ff.js";import"./index.e23617c6.js";import"./index.2879154d.js";function Lt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!St(e)}function Ot(){const e="A".charCodeAt(0);return Array(26).fill("").map((n,f)=>String.fromCharCode(e+f))}const[W,w]=q("index-bar"),Bt={sticky:vt,zIndex:Z,teleport:[String,Object],highlightColor:String,stickyOffsetTop:yt(0),indexList:{type:Array,default:Ot}},tt=Symbol(W);var Et=B({name:W,props:Bt,emits:["select","change"],setup(e,{emit:r,slots:n}){const f=A(),h=A(""),x=Tt(),a=rt(f),{children:g,linkChildren:s}=at(tt);let m;s({props:e});const S=O(()=>{if(lt(e.zIndex))return{zIndex:+e.zIndex+1}}),et=O(()=>{if(e.highlightColor)return{color:e.highlightColor}}),E=(t,i)=>{for(let l=g.length-1;l>=0;l--){const d=l>0?i[l-1].height:0,u=e.sticky?d+e.stickyOffsetTop:0;if(t+u>=i[l].top)return l}return-1},N=t=>g.find(i=>String(i.index)===t),b=()=>{if(ft(f))return;const{sticky:t,indexList:i}=e,l=R(a.value),d=L(a),u=g.map(T=>T.getRect(a.value,d));let v=-1;if(m){const T=N(m);if(T){const y=T.getRect(a.value,d);v=E(y.top,u)}}else v=E(l,u);h.value=i[v],t&&g.forEach((T,y)=>{const{state:p,$el:st}=T;if(y===v||y===v-1){const k=st.getBoundingClientRect();p.left=k.left,p.width=k.width}else p.left=null,p.width=null;if(y===v)p.active=!0,p.top=Math.max(e.stickyOffsetTop,u[y].top-l)+d.top;else if(y===v-1&&m===""){const k=u[v].top-l;p.active=k>0,p.top=k+d.top-u[y].height}else p.active=!1}),m=""},P=()=>{kt(b)};ut("scroll",b,{target:a}),Ct(P),j(()=>e.indexList,P),j(h,t=>{t&&r("change",t)});const ot=()=>e.indexList.map(t=>{const i=t===h.value;return c("span",{class:w("index",{active:i}),style:i?et.value:void 0,"data-index":t},[t])}),$=t=>{m=String(t);const i=N(m);if(i){const l=R(a.value),d=L(a),{offsetHeight:u}=document.documentElement;if(l===u-d.height){b();return}i.$el.scrollIntoView(),e.sticky&&e.stickyOffsetTop&&ht(K()-e.stickyOffsetTop),r("select",i.index)}},D=t=>{const{index:i}=t.dataset;i&&$(i)},nt=t=>{D(t.target)};let z;const it=t=>{if(x.move(t),x.isVertical()){dt(t);const{clientX:i,clientY:l}=t.touches[0],d=document.elementFromPoint(i,l);if(d){const{index:u}=d.dataset;u&&z!==u&&(z=u,D(d))}}},M=()=>c("div",{class:w("sidebar"),style:S.value,onClick:nt,onTouchstart:x.start,onTouchmove:it},[ot()]);return J({scrollTo:$}),()=>{var i;let t;return c("div",{ref:f,class:w()},[e.teleport?c(It,{to:e.teleport},Lt(t=M())?t:{default:()=>[t]}):M(),(i=n.default)==null?void 0:i.call(n)])}}});const X=G(Et),[Nt,Pt]=q("index-anchor"),$t={index:Z};var Dt=B({name:Nt,props:$t,setup(e,{slots:r}){const n=At({top:0,left:null,rect:{top:0,height:0},width:null,active:!1}),f=A(),{parent:h}=mt(tt);if(!h)return;const x=()=>n.active&&h.props.sticky,a=O(()=>{const{zIndex:s,highlightColor:m}=h.props;if(x())return pt(xt(s),{left:n.left?`${n.left}px`:void 0,width:n.width?`${n.width}px`:void 0,transform:n.top?`translate3d(0, ${n.top}px, 0)`:void 0,color:m})});return J({state:n,getRect:(s,m)=>{const S=L(f);return n.rect.height=S.height,s===window||s===document.body?n.rect.top=S.top+K():n.rect.top=S.top+R(s)-m.top,n.rect}}),()=>{const s=x();return c("div",{ref:f,style:{height:s?`${n.rect.height}px`:void 0}},[c("div",{style:a.value,class:[Pt({sticky:s}),{[Rt]:s}]},[r.default?r.default():e.index])])}}});const Y=G(Dt),te=B({setup(e){const r=gt({"zh-CN":{text:"\u6587\u672C",customIndexList:"\u81EA\u5B9A\u4E49\u7D22\u5F15\u5217\u8868"},"en-US":{text:"Text",customIndexList:"Custom Index List"}}),n=A(0),f=[],h=[1,2,3,4,5,6,8,9,10],x="A".charCodeAt(0);for(let a=0;a<26;a++)f.push(String.fromCharCode(x+a));return(a,g)=>(_(),bt(o(ct),{active:n.value,"onUpdate:active":g[0]||(g[0]=s=>n.value=s)},{default:C(()=>[c(o(V),{title:o(r)("basicUsage")},{default:C(()=>[c(o(X),null,{default:C(()=>[(_(),F(Q,null,H(f,s=>U("div",{key:s},[c(o(Y),{index:s},null,8,["index"]),c(o(I),{title:o(r)("text")},null,8,["title"]),c(o(I),{title:o(r)("text")},null,8,["title"]),c(o(I),{title:o(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"]),c(o(V),{title:o(r)("customIndexList")},{default:C(()=>[c(o(X),{"index-list":h},{default:C(()=>[(_(),F(Q,null,H(h,s=>U("div",{key:s},[c(o(Y),{index:s},{default:C(()=>[_t(wt(o(r)("title")+s),1)]),_:2},1032,["index"]),c(o(I),{title:o(r)("text")},null,8,["title"]),c(o(I),{title:o(r)("text")},null,8,["title"]),c(o(I),{title:o(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"])]),_:1},8,["active"]))}});export{te as default};