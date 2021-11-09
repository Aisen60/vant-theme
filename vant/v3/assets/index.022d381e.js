import{c as _,f as x,u as h}from"./use-translate.33b17133.js";import{t as k,n as g,w as C}from"./with-install.d00852e2.js";import{z as m,B as y,e,C as b,r as S,o as w,a as B,w as p,A as t,d as j,F as P}from"./vue-libs.7d3cdfcb.js";import{B as f}from"./index.77211d3e.js";import"./constant.80c6de18.js";import"./use-route.239dc794.js";import"./index.0a08d1ef.js";import"./index.58fe8242.js";const[F,v]=_("progress"),W={color:String,inactive:Boolean,pivotText:String,textColor:String,showPivot:k,pivotColor:String,trackColor:String,strokeWidth:g,percentage:{type:g,default:0,validator:n=>n>=0&&n<=100}};var E=m({name:F,props:W,setup(n){const o=y(()=>n.inactive?void 0:n.color),r=()=>{const{textColor:c,pivotText:i,pivotColor:u,percentage:a}=n,d=i!=null?i:`${a}%`;if(n.showPivot&&d){const s={color:c,left:`${+a}%`,transform:`translate(-${+a}%,-50%)`,background:u||o.value};return e("span",{style:s,class:v("pivot",{inactive:n.inactive})},[d])}};return()=>{const{trackColor:c,percentage:i,strokeWidth:u}=n,a={background:c,height:x(u)},d={width:`${i}%`,background:o.value};return e("div",{class:v(),style:a},[e("span",{class:v("portion",{inactive:n.inactive}),style:d},null),r()])}}});const l=C(E);const z={style:{"margin-top":"15px"}},q=m({setup(n){const o=h({"zh-CN":{title2:"\u7F6E\u7070",title3:"\u6837\u5F0F\u5B9A\u5236",strokeWidth:"\u7EBF\u6761\u7C97\u7EC6",transition:"\u8FC7\u6E21\u6548\u679C"},"en-US":{title2:"Inactive",title3:"Custom Style",strokeWidth:"Stroke Width",transition:"Transition"}}),r=b(50),c=a=>Math.min(Math.max(a,0),100),i=()=>{r.value=c(r.value+20)},u=()=>{r.value=c(r.value-20)};return(a,d)=>{const s=S("demo-block");return w(),B(P,null,[e(s,{title:t(o)("basicUsage")},{default:p(()=>[e(t(l),{percentage:50})]),_:1},8,["title"]),e(s,{title:t(o)("strokeWidth")},{default:p(()=>[e(t(l),{percentage:50,"stroke-width":"8"})]),_:1},8,["title"]),e(s,{title:t(o)("title2")},{default:p(()=>[e(t(l),{inactive:"",percentage:50})]),_:1},8,["title"]),e(s,{title:t(o)("title3")},{default:p(()=>[e(t(l),{color:"#f2826a",percentage:25,"pivot-text":t(o)("orange")},null,8,["pivot-text"]),e(t(l),{color:"#ee0a24",percentage:50,"pivot-text":t(o)("red")},null,8,["pivot-text"]),e(t(l),{percentage:75,"pivot-text":t(o)("purple"),"pivot-color":"#7232dd",color:"linear-gradient(to right, #be99ff, #7232dd)"},null,8,["pivot-text"])]),_:1},8,["title"]),e(s,{title:t(o)("transition")},{default:p(()=>[e(t(l),{percentage:r.value},null,8,["percentage"]),j("div",z,[e(t(f),{text:t(o)("add"),type:"primary",size:"small",onClick:i},null,8,["text"]),e(t(f),{text:t(o)("decrease"),type:"danger",size:"small",onClick:u},null,8,["text"])])]),_:1},8,["title"])],64)}}});export{q as default};
