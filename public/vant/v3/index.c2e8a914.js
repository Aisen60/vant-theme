import{c as p,b as N,h as g,e as q,u as z}from"./use-translate.fbf36f21.js";import{t as b,n as f,c as O,w as x}from"./with-install.251697cd.js";import{c as T,d as _}from"./constant.80c6de18.js";import{z as v,e as i,C as P,A as D}from"./vue-libs.bf80eadf.js";import{r as E,u as V}from"./use-route.9fd68ea8.js";import{B as $,I as w}from"./index.f1bbf430.js";const[S,j]=p("grid"),A={square:Boolean,center:b,border:b,gutter:f,reverse:Boolean,iconSize:f,direction:String,clickable:Boolean,columnNum:O(4)},h=Symbol(S);var K=v({name:S,props:A,setup(e,{slots:t}){const{linkChildren:o}=N(h);return o({props:e}),()=>{var s;return i("div",{style:{paddingLeft:g(e.gutter)},class:[j(),{[T]:e.border&&!e.gutter}]},[(s=t.default)==null?void 0:s.call(t)])}}});const X=x(K),[L,l]=p("grid-item"),U=q({},E,{dot:Boolean,text:String,icon:String,badge:f,iconColor:String,iconPrefix:String,badgeProps:Object});var Y=v({name:L,props:U,setup(e,{slots:t}){const{parent:o,index:s}=z(h),B=V();if(!o)return;const C=P(()=>{const{square:c,gutter:r,columnNum:n}=o.props,d=`${100/+n}%`,a={flexBasis:d};if(c)a.paddingTop=d;else if(r){const u=g(r);a.paddingRight=u,s.value>=n&&(a.marginTop=u)}return a}),I=P(()=>{const{square:c,gutter:r}=o.props;if(c&&r){const n=g(r);return{right:n,bottom:n,height:"auto"}}}),y=()=>{if(t.icon)return i($,D({dot:e.dot,content:e.badge},e.badgeProps),{default:t.icon});if(e.icon)return i(w,{dot:e.dot,name:e.icon,size:o.props.iconSize,badge:e.badge,class:l("icon"),color:e.iconColor,badgeProps:e.badgeProps,classPrefix:e.iconPrefix},null)},R=()=>{if(t.text)return t.text();if(e.text)return i("span",{class:l("text")},[e.text])},G=()=>t.default?t.default():[y(),R()];return()=>{const{center:c,border:r,square:n,gutter:d,reverse:a,direction:u,clickable:m}=o.props,k=[l("content",[u,{center:c,square:n,reverse:a,clickable:m,surround:r&&d}]),{[_]:r}];return i("div",{class:[l({square:n})],style:C.value},[i("div",{role:m?"button":void 0,class:k,style:I.value,tabindex:m?0:void 0,onClick:B},[G()])])}}});const Z=x(Y);export{X as G,Z as a};
