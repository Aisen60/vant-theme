import{c as N,b as W,N as j,i as H,Y as K,n as Y,H as L,R as Q,u as Z,t as q,a as G}from"./use-translate.94d81043.js";import{t as A,n as J,c as X,m as ee,w as F,b as te,u as _}from"./with-install.dd5596ee.js";import{H as oe}from"./constant.80c6de18.js";import{u as le}from"./use-id.e5fd672f.js";import{A as U,x as b,D as B,e as o,H as ne,j as ae,v as ue,Q as ie,R as se,r as re,o as de,a as pe,w as p,C as t,d as ce,h as me,t as ve,F as fe}from"./vue-libs.84c45047.js";import{u as Ce}from"./use-expose.771ababc.js";import{C as I}from"./index.172b9149.js";import{I as we}from"./index.9326a531.js";import{P as Ve}from"./index.cae7cbae.js";import{S as z}from"./index.c3cce590.js";import{B as xe}from"./index.d0d913b5.js";import"./use-route.7c55373a.js";import"./interceptor.e76ee8d4.js";import"./use-touch.109c1035.js";import"./use-lazy-render.20e241a7.js";import"./on-popup-reopen.e7b96e14.js";import"./index.9c372815.js";import"./index.a750e74d.js";const[R,E]=N("dropdown-menu"),be={overlay:A,zIndex:J,duration:X(.2),direction:ee("down"),activeColor:String,closeOnClickOutside:A,closeOnClickOverlay:A},$=Symbol(R);var ye=U({name:R,props:be,setup(a,{slots:u}){const v=le(),i=b(),c=b(),r=b(0),{children:s,linkChildren:w}=W($),V=j(i),y=B(()=>s.some(e=>e.state.showWrapper)),g=B(()=>{if(y.value&&H(a.zIndex))return{zIndex:+a.zIndex+1}}),l=()=>{a.closeOnClickOutside&&s.forEach(e=>{e.toggle(!1)})},f=()=>{if(c.value){const e=L(c);a.direction==="down"?r.value=e.bottom:r.value=Q.value-e.top}},n=()=>{y.value&&f()},T=e=>{s.forEach((d,m)=>{m===e?(f(),d.toggle()):d.state.showPopup&&d.toggle(!1,{immediate:!0})})},P=(e,d)=>{const{showPopup:m}=e.state,{disabled:x,titleClass:O}=e;return o("div",{id:`${v}-${d}`,role:"button",tabindex:x?void 0:0,class:[E("item",{disabled:x}),{[oe]:!x}],onClick:()=>{x||T(d)}},[o("span",{class:[E("title",{down:m===(a.direction==="down"),active:m}),O],style:{color:m?a.activeColor:""}},[o("div",{class:"van-ellipsis"},[e.renderTitle()])])])};return w({id:v,props:a,offset:r}),K(i,l),Y("scroll",n,{target:V}),()=>{var e;return o("div",{ref:i,class:E()},[o("div",{ref:c,style:g.value,class:E("bar",{opened:y.value})},[s.map(P)]),(e=u.default)==null?void 0:e.call(u)])}}});const k=F(ye);function ge(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!ie(a)}const[Oe,h]=N("dropdown-item"),ke={title:String,options:te(),disabled:Boolean,teleport:[String,Object],lazyRender:A,modelValue:_,titleClass:_};var Pe=U({name:Oe,props:ke,emits:["open","opened","close","closed","change","update:modelValue"],setup(a,{emit:u,slots:v}){const i=ne({showPopup:!1,transition:!0,showWrapper:!1}),{parent:c,index:r}=Z($);if(!c)return;const s=e=>()=>u(e),w=s("open"),V=s("close"),y=s("opened"),g=()=>{i.showWrapper=!1,u("closed")},l=e=>{a.teleport&&e.stopPropagation()},f=(e=!i.showPopup,d={})=>{e!==i.showPopup&&(i.showPopup=e,i.transition=!d.immediate,e&&(i.showWrapper=!0))},n=()=>{if(v.title)return v.title();if(a.title)return a.title;const e=a.options.find(d=>d.value===a.modelValue);return e?e.text:""},T=e=>{const{activeColor:d}=c.props,m=e.value===a.modelValue,x=()=>{i.showPopup=!1,e.value!==a.modelValue&&(u("update:modelValue",e.value),u("change",e.value))},O=()=>{if(m)return o(we,{class:h("icon"),color:d,name:"success"},null)};return o(I,{role:"menuitem",key:e.value,icon:e.icon,title:e.text,class:h("option",{active:m}),style:{color:m?d:""},tabindex:m?0:-1,clickable:!0,onClick:x},{value:O})},P=()=>{const{offset:e}=c,{zIndex:d,overlay:m,duration:x,direction:O,closeOnClickOverlay:M}=c.props,S=q(d);return O==="down"?S.top=`${e.value}px`:S.bottom=`${e.value}px`,ae(o("div",{style:S,class:h([O]),onClick:l},[o(Ve,{show:i.showPopup,"onUpdate:show":D=>i.showPopup=D,role:"menu",class:h("content"),overlay:m,position:O==="down"?"top":"bottom",duration:i.transition?x:0,lazyRender:a.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":`${c.id}-${r.value}`,closeOnClickOverlay:M,onOpen:w,onClose:V,onOpened:y,onClosed:g},{default:()=>{var D;return[a.options.map(T),(D=v.default)==null?void 0:D.call(v)]}})]),[[ue,i.showWrapper]])};return Ce({state:i,toggle:f,renderTitle:n}),()=>{if(a.teleport){let e;return o(se,{to:a.teleport},ge(e=P())?e:{default:()=>[e]})}return P()}}});const C=F(Pe),De={style:{padding:"5px 16px"}},Ke=U({setup(a){const u=G({"zh-CN":{disableMenu:"\u7981\u7528\u83DC\u5355",switchTitle1:"\u5305\u90AE",switchTitle2:"\u56E2\u8D2D",itemTitle:"\u7B5B\u9009",expandDirection:"\u5411\u4E0A\u5C55\u5F00",customContent:"\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9",customActiveColor:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u6001\u989C\u8272",option1:[{text:"\u5168\u90E8\u5546\u54C1",value:0},{text:"\u65B0\u6B3E\u5546\u54C1",value:1},{text:"\u6D3B\u52A8\u5546\u54C1",value:2}],option2:[{text:"\u9ED8\u8BA4\u6392\u5E8F",value:"a"},{text:"\u597D\u8BC4\u6392\u5E8F",value:"b"},{text:"\u9500\u91CF\u6392\u5E8F",value:"c"}]},"en-US":{disableMenu:"Disable Menu",switchTitle1:"Title",switchTitle2:"Title",itemTitle:"Title",expandDirection:"Expand Direction",customContent:"Custom Content",customActiveColor:"Custom Active Color",option1:[{text:"Option1",value:0},{text:"Option2",value:1},{text:"Option3",value:2}],option2:[{text:"Option A",value:"a"},{text:"Option B",value:"b"},{text:"Option C",value:"c"}]}}),v=b(),i=b(!0),c=b(!1),r=b(0),s=b("a"),w=B(()=>u("option1")),V=B(()=>u("option2")),y=()=>{var g;(g=v.value)==null||g.toggle()};return(g,l)=>{const f=re("demo-block");return de(),pe(fe,null,[o(f,{title:t(u)("basicUsage")},{default:p(()=>[o(t(k),null,{default:p(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=n=>r.value=n),options:t(w)},null,8,["modelValue","options"]),o(t(C),{modelValue:s.value,"onUpdate:modelValue":l[1]||(l[1]=n=>s.value=n),options:t(V)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("customContent")},{default:p(()=>[o(t(k),null,{default:p(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=n=>r.value=n),options:t(w)},null,8,["modelValue","options"]),o(t(C),{title:t(u)("itemTitle"),ref_key:"item",ref:v},{default:p(()=>[o(t(I),{center:"",title:t(u)("switchTitle1")},{"right-icon":p(()=>[o(t(z),{modelValue:i.value,"onUpdate:modelValue":l[3]||(l[3]=n=>i.value=n)},null,8,["modelValue"])]),_:1},8,["title"]),o(t(I),{center:"",title:t(u)("switchTitle2")},{"right-icon":p(()=>[o(t(z),{modelValue:c.value,"onUpdate:modelValue":l[4]||(l[4]=n=>c.value=n)},null,8,["modelValue"])]),_:1},8,["title"]),ce("div",De,[o(t(xe),{type:"primary",block:"",round:"",style:{height:"40px"},onClick:y},{default:p(()=>[me(ve(t(u)("confirm")),1)]),_:1})])]),_:1},8,["title"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("customActiveColor")},{default:p(()=>[o(t(k),{"active-color":"#ee0a24"},{default:p(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[5]||(l[5]=n=>r.value=n),options:t(w)},null,8,["modelValue","options"]),o(t(C),{modelValue:s.value,"onUpdate:modelValue":l[6]||(l[6]=n=>s.value=n),options:t(V)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("expandDirection")},{default:p(()=>[o(t(k),{direction:"up"},{default:p(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[7]||(l[7]=n=>r.value=n),options:t(w)},null,8,["modelValue","options"]),o(t(C),{modelValue:s.value,"onUpdate:modelValue":l[8]||(l[8]=n=>s.value=n),options:t(V)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),o(f,{title:t(u)("disableMenu")},{default:p(()=>[o(t(k),null,{default:p(()=>[o(t(C),{modelValue:r.value,"onUpdate:modelValue":l[9]||(l[9]=n=>r.value=n),disabled:"",options:t(w)},null,8,["modelValue","options"]),o(t(C),{modelValue:s.value,"onUpdate:modelValue":l[10]||(l[10]=n=>s.value=n),disabled:"",options:t(V)},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"])],64)}}});export{Ke as default};
