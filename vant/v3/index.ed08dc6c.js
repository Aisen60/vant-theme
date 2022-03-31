import{c as M,T,K as F,q as W,f as b,a as D}from"./use-translate.d627ebf3.js";import{n as N,m as B,c as w,t as U,a as L,w as G}from"./with-install.9724bc72.js";import{z as $,C as S,x as I,e as o,D as x,r as O,o as j,a as V,w as P,B as e,d as q,F as H}from"./vue-libs.bf80eadf.js";import{B as _}from"./index.11b1af40.js";import"./constant.80c6de18.js";import"./use-route.9fd68ea8.js";import"./index.72703c04.js";import"./index.4414d46f.js";const[K,y]=M("circle");let J=0;const A=r=>Math.min(Math.max(+r,0),100);function Q(r,n){const s=r?1:0;return`M ${n/2} ${n/2} m 0, -500 a 500, 500 0 1, ${s} 0, 1000 a 500, 500 0 1, ${s} 0, -1000`}const X={text:String,size:N,fill:B("none"),rate:w(100),speed:w(0),color:[String,Object],clockwise:U,layerColor:String,currentRate:L(0),strokeWidth:w(40),strokeLinecap:String,startPosition:B("top")};var Y=$({name:K,props:X,emits:["update:currentRate"],setup(r,{emit:n,slots:s}){const m=`van-circle-${J++}`,f=S(()=>+r.strokeWidth+1e3),d=S(()=>Q(r.clockwise,f.value)),p=S(()=>{const t={top:0,right:90,bottom:180,left:270}[r.startPosition];if(t)return{transform:`rotate(${t}deg)`}});I(()=>r.rate,l=>{let t;const u=Date.now(),a=r.currentRate,i=A(l),g=Math.abs((a-i)*1e3/+r.speed),k=()=>{const z=Date.now(),E=Math.min((z-u)/g,1)*(i-a)+a;n("update:currentRate",A(parseFloat(E.toFixed(1)))),(i>a?E<i:E>i)&&(t=F(k))};r.speed?(t&&T(t),t=F(k)):n("update:currentRate",i)},{immediate:!0});const C=()=>{const{strokeWidth:t,currentRate:u,strokeLinecap:a}=r,i=3140*u/100,g=b(r.color)?`url(#${m})`:r.color,k={stroke:g,strokeWidth:`${+t+1}px`,strokeLinecap:a,strokeDasharray:`${i}px ${3140}px`};return o("path",{d:d.value,style:k,class:y("hover"),stroke:g},null)},v=()=>{const l={fill:r.fill,stroke:r.layerColor,strokeWidth:`${r.strokeWidth}px`};return o("path",{class:y("layer"),style:l,d:d.value},null)},h=()=>{const{color:l}=r;if(!b(l))return;const t=Object.keys(l).sort((u,a)=>parseFloat(u)-parseFloat(a)).map((u,a)=>o("stop",{key:a,offset:u,"stop-color":l[u]},null));return o("defs",null,[o("linearGradient",{id:m,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[t])])},R=()=>{if(s.default)return s.default();if(r.text)return o("div",{class:y("text")},[r.text])};return()=>o("div",{class:y(),style:W(r.size)},[o("svg",{viewBox:`0 0 ${f.value} ${f.value}`,style:p.value},[h(),v(),C()]),R()])}});const c=G(Y);const Z={style:{"margin-top":"15px"}},ct=$({setup(r){const n=D({"zh-CN":{left:"\u5DE6\u4FA7",right:"\u53F3\u4FA7",bottom:"\u5E95\u90E8",gradient:"\u6E10\u53D8\u8272",customSize:"\u5927\u5C0F\u5B9A\u5236",customStyle:"\u6837\u5F0F\u5B9A\u5236",customColor:"\u989C\u8272\u5B9A\u5236",customWidth:"\u5BBD\u5EA6\u5B9A\u5236",startPosition:"\u8D77\u59CB\u4F4D\u7F6E",counterClockwise:"\u9006\u65F6\u9488"},"en-US":{left:"Left",right:"Right",bottom:"Bottom",gradient:"Gradient",customSize:"Custom Size",customStyle:"Custom Style",customColor:"Custom Color",customWidth:"Custom Width",startPosition:"Start Position",counterClockwise:"Counter Clockwise"}}),s=x(70),m=x(70),f=x(70),d=x(70),p=x(70),C={"0%":"#3fecff","100%":"#6149f6"},v=l=>Math.min(Math.max(l,0),100),h=()=>{s.value=v(s.value+20)},R=()=>{s.value=v(s.value-20)};return(l,t)=>{const u=O("demo-block");return j(),V(H,null,[o(u,{title:e(n)("basicUsage")},{default:P(()=>[o(e(c),{"current-rate":m.value,"onUpdate:current-rate":t[0]||(t[0]=a=>m.value=a),rate:s.value,speed:100,text:m.value.toFixed(0)+"%"},null,8,["current-rate","rate","text"])]),_:1},8,["title"]),o(u,{title:e(n)("customStyle")},{default:P(()=>[o(e(c),{"current-rate":d.value,"onUpdate:current-rate":t[1]||(t[1]=a=>d.value=a),rate:s.value,speed:100,"stroke-width":60,text:e(n)("customWidth")},null,8,["current-rate","rate","text"]),o(e(c),{"current-rate":d.value,"onUpdate:current-rate":t[2]||(t[2]=a=>d.value=a),color:"#ee0a24",rate:s.value,"layer-color":"#ebedf0",speed:100,text:e(n)("customColor")},null,8,["current-rate","rate","text"]),o(e(c),{"current-rate":f.value,"onUpdate:current-rate":t[3]||(t[3]=a=>f.value=a),rate:s.value,speed:100,color:C,text:e(n)("gradient")},null,8,["current-rate","rate","text"]),o(e(c),{"current-rate":p.value,"onUpdate:current-rate":t[4]||(t[4]=a=>p.value=a),color:"#07c160",rate:s.value,speed:100,clockwise:!1,text:e(n)("counterClockwise"),style:{"margin-top":"15px"}},null,8,["current-rate","rate","text"]),o(e(c),{"current-rate":p.value,"onUpdate:current-rate":t[5]||(t[5]=a=>p.value=a),color:"#7232dd",rate:s.value,speed:100,size:"120px",clockwise:!1,text:e(n)("customSize"),style:{"margin-top":"15px"}},null,8,["current-rate","rate","text"])]),_:1},8,["title"]),q("div",Z,[o(e(_),{text:e(n)("add"),type:"primary",size:"small",onClick:h},null,8,["text"]),o(e(_),{text:e(n)("decrease"),type:"danger",size:"small",onClick:R},null,8,["text"])]),o(u,{title:e(n)("startPosition")},{default:P(()=>[o(e(c),{"current-rate":75,rate:s.value,text:e(n)("left"),"start-position":"left"},null,8,["rate","text"]),o(e(c),{"current-rate":75,rate:s.value,text:e(n)("right"),"start-position":"right"},null,8,["rate","text"]),o(e(c),{"current-rate":75,rate:s.value,text:e(n)("bottom"),"start-position":"bottom"},null,8,["rate","text"])]),_:1},8,["title"])],64)}}});export{ct as default};
