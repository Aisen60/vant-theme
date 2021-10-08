import{c as $,g as fe,n as Q,r as q,E as de,m as ae,t as j,s as me,F as re,G as he}from"./use-translate.e667ce10.js";import{w as ge}from"./with-install.feb19484.js";import{u as ye}from"./use-refs.2bafdad1.js";import{u as ie}from"./use-expose.9b0dd301.js";import{P as ve}from"./index.13873f42.js";import{B as be}from"./index.d91601ec.js";import{T as le}from"./function-call.deede8ba.js";import{g as De}from"./utils.92b4626d.js";import{u as we}from"./use-height.65d0b52b.js";import{D as H,z as _,C as x,e as c,x as X,A as ke,I as se}from"./vue-libs.1dda7261.js";import{r as Z}from"./utils.39620306.js";import{o as Se}from"./index.904c4b4d.js";import{u as Te}from"./index.eddf1708.js";function xe(e=!1){var i=H(e),l=(u=!i.value)=>{i.value=u};return[i,l]}const[Ce,d,I]=$("calendar"),Me=e=>I("monthTitle",e.getFullYear(),e.getMonth()+1);function p(e,i){const l=e.getFullYear(),u=i.getFullYear();if(l===u){const v=e.getMonth(),C=i.getMonth();return v===C?0:v>C?1:-1}return l>u?1:-1}function R(e,i){const l=p(e,i);if(l===0){const u=e.getDate(),v=i.getDate();return u===v?0:u>v?1:-1}return l}const U=e=>new Date(e),ce=e=>Array.isArray(e)?e.map(U):U(e);function ee(e,i){const l=U(e);return l.setDate(l.getDate()+i),l}const te=e=>ee(e,-1),ue=e=>ee(e,1),ne=()=>{const e=new Date;return e.setHours(0,0,0,0),e};function Re(e){const i=e[0].getTime();return(e[1].getTime()-i)/(1e3*60*60*24)+1}const[Oe]=$("calendar-day");var Be=_({name:Oe,props:{color:String,index:Number,rowHeight:String,offset:{type:Number,default:0},item:{type:Object,required:!0}},emits:["click"],setup(e,{emit:i,slots:l}){const u=x(()=>{const{item:o,index:h,color:S,offset:P,rowHeight:M}=e,w={height:M};if(o.type==="placeholder")return w.width="100%",w;if(h===0&&(w.marginLeft=`${100*P/7}%`),S)switch(o.type){case"end":case"start":case"start-end":case"multiple-middle":case"multiple-selected":w.background=S;break;case"middle":w.color=S;break}return w}),v=()=>{e.item.type!=="disabled"&&i("click",e.item)},C=()=>{const{topInfo:o}=e.item;if(o||l["top-info"])return c("div",{class:d("top-info")},[l["top-info"]?l["top-info"](e.item):o])},k=()=>{const{bottomInfo:o}=e.item;if(o||l["bottom-info"])return c("div",{class:d("bottom-info")},[l["bottom-info"]?l["bottom-info"](e.item):o])},b=()=>{const{item:o,color:h,rowHeight:S}=e,{type:P,text:M}=o,w=[C(),M,k()];return P==="selected"?c("div",{class:d("selected-day"),style:{width:S,height:S,background:h}},[w]):w};return()=>{const{type:o,className:h}=e.item;return o==="placeholder"?c("div",{class:d("day"),style:u.value},null):c("div",{role:"gridcell",style:u.value,class:[d("day",o),h],tabindex:o==="disabled"?void 0:-1,onClick:v},[b()])}}});const[je]=$("calendar-month"),Pe={type:String,color:String,showMark:Boolean,rowHeight:Q,formatter:Function,lazyRender:Boolean,currentDate:[Date,Array],allowSameDay:Boolean,showSubtitle:Boolean,showMonthTitle:Boolean,firstDayOfWeek:Number,date:{type:Date,required:!0},minDate:{type:Date,required:!0},maxDate:{type:Date,required:!0}};var Ae=_({name:je,props:Pe,emits:["click","update-height"],setup(e,{emit:i,slots:l}){const[u,v]=xe(),C=H(),k=H(),b=we(k),o=x(()=>Me(e.date)),h=x(()=>fe(e.rowHeight)),S=x(()=>{const a=e.date.getDay();return e.firstDayOfWeek?(a+7-e.firstDayOfWeek)%7:a}),P=x(()=>De(e.date.getFullYear(),e.date.getMonth()+1)),M=x(()=>u.value||!e.lazyRender),w=()=>o.value,N=a=>{const f=e.showSubtitle?C.value:k.value;if(f){const g=f.getBoundingClientRect().top-a.getBoundingClientRect().top+a.scrollTop;de(a,g)}},F=a=>{const f=g=>e.currentDate.some(m=>R(m,g)===0);if(f(a)){const g=te(a),m=ue(a),t=f(g),n=f(m);return t&&n?"multiple-middle":t?"end":n?"start":"multiple-selected"}return""},W=a=>{const[f,g]=e.currentDate;if(!f)return"";const m=R(a,f);if(!g)return m===0?"start":"";const t=R(a,g);return e.allowSameDay&&m===0&&t===0?"start-end":m===0?"start":t===0?"end":m>0&&t<0?"middle":""},V=a=>{const{type:f,minDate:g,maxDate:m,currentDate:t}=e;if(R(a,g)<0||R(a,m)>0)return"disabled";if(t===null)return"";if(Array.isArray(t)){if(f==="multiple")return F(a);if(f==="range")return W(a)}else if(f==="single")return R(a,t)===0?"selected":"";return""},E=a=>{if(e.type==="range"){if(a==="start"||a==="end")return I(a);if(a==="start-end")return I("startEnd")}},G=()=>{if(e.showMonthTitle)return c("div",{class:d("month-title")},[o.value])},Y=()=>{if(e.showMark&&M.value)return c("div",{class:d("month-mark")},[e.date.getMonth()+1])},O=x(()=>{const a=Math.ceil((P.value+S.value)/7);return Array(a).fill({type:"placeholder"})}),z=x(()=>{const a=[],f=e.date.getFullYear(),g=e.date.getMonth();for(let m=1;m<=P.value;m++){const t=new Date(f,g,m),n=V(t);let r={date:t,type:n,text:m,bottomInfo:E(n)};e.formatter&&(r=e.formatter(r)),a.push(r)}return a}),L=x(()=>z.value.filter(a=>a.type==="disabled")),J=(a,f)=>c(Be,{item:a,index:f,color:e.color,offset:S.value,rowHeight:h.value,onClick:g=>i("click",g)},q(l,["top-info","bottom-info"])),K=()=>c("div",{ref:C,role:"grid",class:d("days")},[Y(),(M.value?z:O).value.map(J)]);return ie({getTitle:w,getHeight:()=>b.value,setVisible:v,scrollIntoView:N,disabledDays:L}),()=>c("div",{class:d("month"),ref:k},[G(),K()])}});const[Ie]=$("calendar-header");var He=_({name:Ie,props:{title:String,subtitle:String,showTitle:Boolean,showSubtitle:Boolean,firstDayOfWeek:Number},emits:["click-subtitle"],setup(e,{slots:i,emit:l}){const u=()=>{if(e.showTitle){const b=e.title||I("title"),o=i.title?i.title():b;return c("div",{class:d("header-title")},[o])}},v=b=>{l("click-subtitle",b)},C=()=>{if(e.showSubtitle){const b=i.subtitle?i.subtitle():e.subtitle;return c("div",{class:d("header-subtitle"),onClick:v},[b])}},k=()=>{const{firstDayOfWeek:b}=e,o=I("weekdays"),h=[...o.slice(b,7),...o.slice(0,b)];return c("div",{class:d("weekdays")},[h.map(S=>c("span",{class:d("weekday")},[S]))])};return()=>c("div",{class:d("header")},[u(),C(),k()])}});function Ne(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ke(e)}const We={show:Boolean,type:ae("single"),title:String,color:String,round:j,readonly:Boolean,poppable:j,maxRange:me(null),position:ae("bottom"),teleport:[String,Object],showMark:j,showTitle:j,formatter:Function,rowHeight:Q,confirmText:String,rangePrompt:String,lazyRender:j,showConfirm:j,defaultDate:[Date,Array],allowSameDay:Boolean,showSubtitle:j,closeOnPopstate:j,confirmDisabledText:String,closeOnClickOverlay:j,safeAreaInsetBottom:j,minDate:{type:Date,validator:re,default:ne},maxDate:{type:Date,validator:re,default:()=>{const e=ne();return new Date(e.getFullYear(),e.getMonth()+6,e.getDate())}},firstDayOfWeek:{type:Q,default:0,validator:e=>e>=0&&e<=6},showRangePrompt:{type:Boolean,default:!0}};var Fe=_({name:Ce,props:We,emits:["select","confirm","unselect","month-show","over-range","update:show","click-subtitle"],setup(e,{emit:i,slots:l}){const u=(t,n=e.minDate,r=e.maxDate)=>R(t,n)===-1?n:R(t,r)===1?r:t,v=(t=e.defaultDate)=>{const{type:n,minDate:r,maxDate:s}=e;if(t===null)return t;const y=ne();if(n==="range"){Array.isArray(t)||(t=[]);const D=u(t[0]||y,r,te(s)),A=u(t[1]||y,ue(r));return[D,A]}return n==="multiple"?Array.isArray(t)?t.map(D=>u(D)):[u(y)]:((!t||Array.isArray(t))&&(t=y),u(t))};let C;const k=H(),b=H(""),o=H(v()),[h,S]=ye(),P=x(()=>e.firstDayOfWeek?+e.firstDayOfWeek%7:0),M=x(()=>{const t=[],n=new Date(e.minDate);n.setDate(1);do t.push(new Date(n)),n.setMonth(n.getMonth()+1);while(p(n,e.maxDate)!==1);return t}),w=x(()=>{if(o.value){if(e.type==="range")return!o.value[0]||!o.value[1];if(e.type==="multiple")return!o.value.length}return!o.value}),N=()=>{const t=he(k.value),n=t+C,r=M.value.map((T,B)=>h.value[B].getHeight()),s=r.reduce((T,B)=>T+B,0);if(n>s&&t>0)return;let y=0,D;const A=[-1,-1];for(let T=0;T<M.value.length;T++){const B=h.value[T];y<=n&&y+r[T]>=t&&(A[1]=T,D||(D=B,A[0]=T),h.value[T].showed||(h.value[T].showed=!0,i("month-show",{date:B.date,title:B.getTitle()}))),y+=r[T]}M.value.forEach((T,B)=>{const oe=B>=A[0]-1&&B<=A[1]+1;h.value[B].setVisible(oe)}),D&&(b.value=D.getTitle())},F=t=>{Z(()=>{M.value.some((n,r)=>p(n,t)===0?(k.value&&h.value[r].scrollIntoView(k.value),!0):!1),N()})},W=()=>{if(!(e.poppable&&!e.show))if(o.value){const t=e.type==="single"?o.value:o.value[0];F(t)}else Z(N)},V=()=>{e.poppable&&!e.show||Z(()=>{C=Math.floor(Te(k).height),W()})},E=(t=v())=>{o.value=t,W()},G=t=>{const{maxRange:n,rangePrompt:r,showRangePrompt:s}=e;return n&&Re(t)>n?(s&&le(r||I("rangePrompt",n)),i("over-range"),!1):!0},Y=()=>{var t;return i("confirm",(t=o.value)!=null?t:ce(o.value))},O=(t,n)=>{const r=s=>{o.value=s,i("select",ce(s))};if(n&&e.type==="range"&&!G(t)){e.showConfirm?r([t[0],ee(t[0],+e.maxRange-1)]):r(t);return}r(t),n&&!e.showConfirm&&Y()},z=(t,n,r)=>{var s;return(s=t.find(y=>R(n,y.date)===-1&&R(y.date,r)===-1))==null?void 0:s.date},L=x(()=>h.value.reduce((t,n)=>{var r,s;return t.push(...(s=(r=n.disabledDays)==null?void 0:r.value)!=null?s:[]),t},[])),J=t=>{if(e.readonly||!t.date)return;const{date:n}=t,{type:r}=e;if(r==="range"){if(!o.value){O([n]);return}const[s,y]=o.value;if(s&&!y){const D=R(n,s);if(D===1){const A=z(L.value,s,n);A?O([s,te(A)]):O([s,n],!0)}else D===-1?O([n]):e.allowSameDay&&O([n,n],!0)}else O([n])}else if(r==="multiple"){if(!o.value){O([n]);return}const s=o.value,y=s.findIndex(D=>R(D,n)===0);if(y!==-1){const[D]=s.splice(y,1);i("unselect",U(D))}else e.maxRange&&s.length>=e.maxRange?le(e.rangePrompt||I("rangePrompt",e.maxRange)):O([...s,n])}else O(n,!0)},K=t=>i("update:show",t),a=(t,n)=>{const r=n!==0||!e.showSubtitle;return c(Ae,se({ref:S(n),date:t,currentDate:o.value,showMonthTitle:r,firstDayOfWeek:P.value},q(e,["type","color","minDate","maxDate","showMark","formatter","rowHeight","lazyRender","showSubtitle","allowSameDay"]),{onClick:J}),q(l,["top-info","bottom-info"]))},f=()=>{if(l.footer)return l.footer();if(e.showConfirm){const t=w.value?e.confirmDisabledText:e.confirmText;return c(be,{round:!0,block:!0,type:"danger",color:e.color,class:d("confirm"),disabled:w.value,nativeType:"button",onClick:Y},{default:()=>[t||I("confirm")]})}},g=()=>c("div",{class:[d("footer"),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[f()]),m=()=>c("div",{class:d()},[c(He,{title:e.title,subtitle:b.value,showTitle:e.showTitle,showSubtitle:e.showSubtitle,firstDayOfWeek:P.value,"onClick-subtitle":t=>i("click-subtitle",t)},q(l,["title","subtitle"])),c("div",{ref:k,class:d("body"),onScroll:N},[M.value.map(a)]),g()]);return X(()=>e.show,V),X(()=>[e.type,e.minDate,e.maxDate],()=>E(v(o.value))),X(()=>e.defaultDate,(t=null)=>{o.value=t,W()}),ie({reset:E,scrollToDate:F}),Se(V),()=>{if(e.poppable){let t;return c(ve,se({show:e.show,class:d("popup"),round:e.round,position:e.position,closeable:e.showTitle||e.showSubtitle,teleport:e.teleport,closeOnPopstate:e.closeOnPopstate,closeOnClickOverlay:e.closeOnClickOverlay},{"onUpdate:show":K}),Ne(t=m())?t:{default:()=>[t]})}return m()}}});const Xe=ge(Fe);export{Xe as C};