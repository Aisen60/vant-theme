import{c as b}from"./use-translate.c56bc05e.js";import{t as p,m as S,w as k}from"./with-install.2d06a5b3.js";import{A as B,e as t,T as I}from"./vue-libs.a3cd7f61.js";import{H as P}from"./constant.80c6de18.js";import{I as h}from"./index.e7e14384.js";const[w,s]=b("tag"),x={size:String,mark:Boolean,show:p,type:S("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean},y=B({name:w,props:x,emits:["close"],setup(o,{slots:a,emit:c}){const i=e=>{e.stopPropagation(),c("close",e)},m=()=>o.plain?{color:o.textColor||o.color,borderColor:o.color}:{color:o.textColor,background:o.color},u=()=>{var l;const{type:e,mark:d,plain:f,round:g,size:n,closeable:C}=o,r={mark:d,plain:f,round:g};n&&(r[n]=n);const T=C&&t(h,{name:"cross",class:[s("close"),P],onClick:i},null);return t("span",{style:m(),class:s([r,e])},[(l=a.default)==null?void 0:l.call(a),T])};return()=>t(I,{name:o.closeable?"van-fade":void 0},{default:()=>[o.show?u():null]})}}),A=k(y),_=A;export{A as T,_ as V};
