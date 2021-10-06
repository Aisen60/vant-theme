import{c as t,i as e,a as l}from"./use-translate.91889477.js";import{w as o}from"./with-install.c9eedd0e.js";import{z as a,D as s,E as r,x as n,k as i,v as c,e as u,r as d,o as f,a as m,w as p,B as b,h as x,t as h,F as w}from"./vue-libs.71fdcafc.js";import{u as S}from"./use-expose.5ea79906.js";import{o as v}from"./on-popup-reopen.d7054786.js";import{I as g}from"./index.d38d9435.js";import{o as y,u as j}from"./index.94f7437a.js";import{r as _,d as T}from"./utils.b0356070.js";import{u as k}from"./index.43faf238.js";import{S as C,a as I}from"./index.0a6905cd.js";import"./use-touch.30351383.js";import"./useChildren.edf9a3d1.js";import"./useParent.e4fd6deb.js";const[B,N]=t("notice-bar");const z=o(a({name:B,props:{text:String,mode:String,color:String,leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null},delay:{type:[Number,String],default:1},speed:{type:[Number,String],default:60}},emits:["close","replay"],setup(t,{emit:l,slots:o}){let a,d=0,f=0;const m=s(),p=s(),b=r({show:!0,offset:0,duration:0}),x=e=>{"closeable"===t.mode&&(b.show=!1,l("close",e))},h=()=>{if(o["right-icon"])return o["right-icon"]();const e="closeable"===t.mode?"cross":"link"===t.mode?"arrow":void 0;return e?u(g,{name:e,class:N("right-icon"),onClick:x},null):void 0},w=()=>{b.offset=d,b.duration=0,_((()=>{T((()=>{b.offset=-f,b.duration=(f+d)/+t.speed,l("replay")}))}))},C=()=>{const e=!1===t.scrollable&&!t.wrapable,l={transform:b.offset?`translateX(${b.offset}px)`:"",transitionDuration:`${b.duration}s`};return u("div",{ref:m,role:"marquee",class:N("wrap")},[u("div",{ref:p,style:l,class:[N("content"),{"van-ellipsis":e}],onTransitionend:w},[o.default?o.default():t.text])])},I=()=>{const{delay:l,speed:o,scrollable:s}=t,r=e(l)?1e3*+l:0;d=0,f=0,b.offset=0,b.duration=0,clearTimeout(a),a=setTimeout((()=>{if(!m.value||!p.value||!1===s)return;const t=k(m).width,e=k(p).width;(s||e>t)&&T((()=>{d=t,f=e,b.offset=-f,b.duration=f/+o}))}),r)};return v(I),y(I),j("pageshow",I),S({reset:I}),n((()=>[t.text,t.scrollable]),I),()=>{const{color:e,wrapable:l,background:a}=t;return i(u("div",{role:"alert",class:N({wrapable:l}),style:{color:e,background:a}},[o["left-icon"]?o["left-icon"]():t.leftIcon?u(g,{class:N("left-icon"),name:t.leftIcon},null):void 0,C(),h()]),[[c,b.show]])}}}));const D=a({setup(t){const e=l({"zh-CN":{text:"在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",mode:"通知栏模式",content:"内容",wrapable:"多行展示",shortText:"技术是开发它的人的共同灵魂。",scrollable:"滚动播放",customStyle:"自定义样式",verticalScroll:"垂直滚动"},"en-US":{text:"Technology is the common soul of the people who developed it.",mode:"Mode",content:"Content",wrapable:"Wrapable",shortText:"Some short text.",customStyle:"Custom Style",scrollable:"Scrollable",verticalScroll:"Vertical Scroll"}});return(t,l)=>{const o=d("demo-block");return f(),m(w,null,[u(o,{title:b(e)("basicUsage")},{default:p((()=>[u(b(z),{text:b(e)("text"),scrollable:"","left-icon":"volume-o"},null,8,["text"])])),_:1},8,["title"]),u(o,{title:b(e)("scrollable")},{default:p((()=>[u(b(z),{scrollable:"",text:b(e)("shortText")},null,8,["text"]),u(b(z),{scrollable:!1,text:b(e)("text")},null,8,["text"])])),_:1},8,["title"]),u(o,{title:b(e)("wrapable")},{default:p((()=>[u(b(z),{wrapable:"",scrollable:!1,text:b(e)("text")},null,8,["text"])])),_:1},8,["title"]),u(o,{title:b(e)("mode")},{default:p((()=>[u(b(z),{mode:"closeable",text:b(e)("shortText")},null,8,["text"]),u(b(z),{mode:"link",text:b(e)("shortText")},null,8,["text"])])),_:1},8,["title"]),u(o,{title:b(e)("customStyle")},{default:p((()=>[u(b(z),{text:b(e)("shortText"),color:"#1989fa",background:"#ecf9ff","left-icon":"info-o"},null,8,["text"])])),_:1},8,["title"]),u(o,{title:b(e)("verticalScroll")},{default:p((()=>[u(b(z),{"left-icon":"volume-o",scrollable:!1},{default:p((()=>[u(b(C),{vertical:"",class:"notice-swipe",autoplay:3e3,"show-indicators":!1},{default:p((()=>[u(b(I),null,{default:p((()=>[x(h(b(e)("content"))+" 1",1)])),_:1}),u(b(I),null,{default:p((()=>[x(h(b(e)("content"))+" 2",1)])),_:1}),u(b(I),null,{default:p((()=>[x(h(b(e)("content"))+" 3",1)])),_:1})])),_:1})])),_:1})])),_:1},8,["title"])],64)}}});export{D as default};
