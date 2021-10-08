import{c as L,e as S,n as o,t as j,u,i}from"./use-translate.39547e32.js";import{w as I}from"./with-install.cc9696bc.js";import{r as y,u as B}from"./use-route.913efdd2.js";import{I as m}from"./index.5e447543.js";import{z as D,e as t}from"./vue-libs.71fdcafc.js";const[V,a]=L("cell"),z={icon:String,size:String,title:o,value:o,label:o,center:Boolean,isLink:Boolean,border:j,required:Boolean,iconPrefix:String,valueClass:u,labelClass:u,titleClass:u,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}};var q=D({name:V,props:S({},z,y),setup(e,{slots:n}){const v=B(),h=()=>{if(n.label||i(e.label))return t("div",{class:[a("label"),e.labelClass]},[n.label?n.label():e.label])},w=()=>{if(n.title||i(e.title))return t("div",{class:[a("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():t("span",null,[e.title]),h()])},C=()=>{const l=n.value||n.default;if(l||i(e.value)){const r=n.title||i(e.title);return t("div",{class:[a("value",{alone:!r}),e.valueClass]},[l?l():t("span",null,[e.value])])}},g=()=>{if(n.icon)return n.icon();if(e.icon)return t(m,{name:e.icon,class:a("left-icon"),classPrefix:e.iconPrefix},null)},k=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const l=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return t(m,{name:l,class:a("right-icon")},null)}};return()=>{var f,b;const{size:l,center:s,border:r,isLink:x,required:P}=e,c=(f=e.clickable)!=null?f:x,d={center:s,required:P,clickable:c,borderless:!r};return l&&(d[l]=!!l),t("div",{class:a(d),role:c?"button":void 0,tabindex:c?0:void 0,onClick:v},[g(),w(),C(),k(),(b=n.extra)==null?void 0:b.call(n)])}}});const A=I(q);export{A as C,z as c};