import{c as e,e as i}from"./use-translate.91889477.js";import{w as o}from"./with-install.c9eedd0e.js";import{B as n}from"./constant.4d85ecb9.js";import{r as t,u as a}from"./use-route.913efdd2.js";import{I as l}from"./index.d38d9435.js";import{L as r}from"./index.6e9dbec3.js";import{z as s,e as d}from"./vue-libs.71fdcafc.js";const[c,u]=e("button");const g=o(s({name:c,props:i({},t,{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,loadingSize:[Number,String],loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},nativeType:{type:String,default:"button"},iconPosition:{type:String,default:"left"}}),emits:["click"],setup(e,{emit:i,slots:o}){const t=a(),s=()=>e.loading?o.loading?o.loading():d(r,{size:e.loadingSize,type:e.loadingType,class:u("loading")},null):o.icon?d("div",{class:u("icon")},[o.icon()]):e.icon?d(l,{name:e.icon,class:u("icon"),classPrefix:e.iconPrefix},null):void 0,c=()=>{let i;if(i=e.loading?e.loadingText:o.default?o.default():e.text,i)return d("span",{class:u("text")},[i])},g=()=>{const{color:i,plain:o}=e;if(i){const e={color:o?i:"white"};return o||(e.background=i),i.includes("gradient")?e.border=0:e.borderColor=i,e}},p=o=>{e.loading?o.preventDefault():e.disabled||(i("click",o),t())};return()=>{const{tag:i,type:o,size:t,block:a,round:l,plain:r,square:f,loading:m,disabled:b,hairline:y,nativeType:S,iconPosition:x}=e,B=[u([o,t,{plain:r,block:a,round:l,square:f,loading:m,disabled:b,hairline:y}]),{[n]:y}];return d(i,{type:S,class:B,style:g(),disabled:b,onClick:p},{default:()=>[d("div",{class:u("content")},["left"===x&&s(),c(),"right"===x&&s()])]})}}}));export{g as B};