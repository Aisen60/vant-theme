import{c,e as d,j as u,f as m}from"./use-translate.3147781c.js";import{n as l,m as f,w as p}from"./with-install.6d6d29d8.js";import{e as n,z as S,B as x}from"./vue-libs.4d090e76.js";const[g,a]=c("loading"),v=Array(12).fill(null).map((e,r)=>n("i",{class:a("line",String(r+1))},null)),y=n("svg",{class:a("circular"),viewBox:"25 25 50 50"},[n("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]);var z=S({name:g,props:{size:l,type:f("circular"),color:String,vertical:Boolean,textSize:l,textColor:String},setup(e,{slots:r}){const s=x(()=>d({color:e.color},u(e.size))),i=()=>{var t;if(r.default)return n("span",{class:a("text"),style:{fontSize:m(e.textSize),color:(t=e.textColor)!=null?t:e.color}},[r.default()])};return()=>{const{type:t,vertical:o}=e;return n("div",{class:a([t,{vertical:o}])},[n("span",{class:a("spinner",t),style:s.value},[t==="spinner"?v:y]),i()])}}});const B=p(z);export{B as L};
