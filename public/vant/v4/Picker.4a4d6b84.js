import{e as G,i as le,E as $,c as J,u as oe,l as Q,b as ie,F as ue,G as Y}from"./use-translate.00c0a8db.js";import{n as B,d as M,b as F,m as ce,c as I,t as se}from"./with-install.f242061f.js";import{H as L,a as re}from"./constant.80c6de18.js";import{u as W}from"./use-expose.024996fe.js";import{L as me}from"./index.3f188a06.js";import{u as de}from"./use-touch.c1d7ebd1.js";import{A as X,x as N,S as fe,e as d,D as x,y as _}from"./vue-libs.84c45047.js";const Z=e=>e.find(l=>!l.disabled)||e[0];function ve(e,l){const n=e[0];if(n){if(Array.isArray(n))return"multiple";if(l.children in n)return"cascade"}return"default"}function R(e,l){l=$(l,0,e.length);for(let n=l;n<e.length;n++)if(!e[n].disabled)return n;for(let n=l-1;n>=0;n--)if(!e[n].disabled)return n;return 0}const K=(e,l,n)=>l!==void 0&&!!e.find(o=>o[n.value]===l);function U(e,l,n){const o=e.findIndex(f=>f[n.value]===l),r=R(e,o);return e[r]}function he(e,l,n){const o=[];let r={[l.children]:e},f=0;for(;r&&r[l.children];){const c=r[l.children],m=n.value[f];if(r=le(m)?U(c,m,l):void 0,!r&&c.length){const T=Z(c)[l.value];r=U(c,T,l)}f++,o.push(c)}return o}function ge(e){const{transform:l}=window.getComputedStyle(e),n=l.slice(7,l.length-1).split(", ")[5];return Number(n)}function be(e){return G({text:"text",value:"value",children:"children"},e)}const j=200,q=300,Te=15,[ee,A]=J("picker-column"),te=Symbol(ee);var Oe=X({name:ee,props:{value:B,fields:M(Object),options:F(),readonly:Boolean,allowHtml:Boolean,optionHeight:M(Number),swipeDuration:M(B),visibleOptionNum:M(B)},emits:["change"],setup(e,{emit:l,slots:n}){let o,r,f,c,m;const T=N(),s=N(0),v=N(0),h=de(),O=()=>e.options.length,w=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,y=i=>{const t=R(e.options,i),a=-t*e.optionHeight,u=()=>{const b=e.options[t][e.fields.value];b!==e.value&&l("change",b)};o&&a!==s.value?m=u:u(),s.value=a},k=i=>{o||e.readonly||(m=null,v.value=j,y(i))},E=i=>$(Math.round(-i/e.optionHeight),0,O()-1),P=(i,t)=>{const a=Math.abs(i/t);i=s.value+a/.003*(i<0?-1:1);const u=E(i);v.value=+e.swipeDuration,y(u)},H=()=>{o=!1,v.value=0,m&&(m(),m=null)},S=i=>{if(!e.readonly){if(h.start(i),o){const t=ge(T.value);s.value=Math.min(0,t-w())}v.value=0,r=s.value,f=Date.now(),c=r,m=null}},p=i=>{if(e.readonly)return;h.move(i),h.isVertical()&&(o=!0,Q(i,!0)),s.value=$(r+h.deltaY.value,-(O()*e.optionHeight),e.optionHeight);const t=Date.now();t-f>q&&(f=t,c=s.value)},D=()=>{if(e.readonly)return;const i=s.value-c,t=Date.now()-f;if(t<q&&Math.abs(i)>Te){P(i,t);return}const u=E(s.value);v.value=j,y(u),setTimeout(()=>{o=!1},0)},V=()=>{const i={height:`${e.optionHeight}px`};return e.options.map((t,a)=>{const u=t[e.fields.text],{disabled:b}=t,C=t[e.fields.value],ne={role:"button",style:i,tabindex:b?-1:0,class:[A("item",{disabled:b,selected:C===e.value}),t.className],onClick:()=>k(a)},ae={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:u};return d("li",ne,[n.option?n.option(t):d("div",ae,null)])})};return oe(te),W({stopMomentum:H}),fe(()=>{const i=e.options.findIndex(u=>u[e.fields.value]===e.value),a=-R(e.options,i)*e.optionHeight;s.value=a}),()=>d("div",{class:A(),onTouchstart:S,onTouchmove:p,onTouchend:D,onTouchcancel:D},[d("ul",{ref:T,style:{transform:`translate3d(0, ${s.value+w()}px, 0)`,transitionDuration:`${v.value}ms`,transitionProperty:v.value?"all":"none"},class:A("wrapper"),onTransitionend:H},[V()])])}});const[ye,g,z]=J("picker"),xe={title:String,loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:I(44),showToolbar:se,swipeDuration:I(1e3),visibleOptionNum:I(6),cancelButtonText:String,confirmButtonText:String},Ce=G({},xe,{columns:F(),modelValue:F(),toolbarPosition:ce("top"),columnsFieldNames:Object});var ke=X({name:ye,props:Ce,emits:["confirm","cancel","change","update:modelValue"],setup(e,{emit:l,slots:n}){const o=N(e.modelValue),{children:r,linkChildren:f}=ie(te);f();const c=x(()=>be(e.columnsFieldNames)),m=x(()=>ue(e.optionHeight)),T=x(()=>ve(e.columns,c.value)),s=x(()=>{const{columns:t}=e;switch(T.value){case"multiple":return t;case"cascade":return he(t,c.value,o);default:return[t]}}),v=x(()=>s.value.some(t=>t.length)),h=x(()=>s.value.map((t,a)=>U(t,o.value[a],c.value))),O=(t,a)=>{if(o.value[t]!==a){const u=o.value.slice(0);u[t]=a,o.value=u}},w=(t,a)=>{O(a,t),T.value==="cascade"&&o.value.forEach((u,b)=>{const C=s.value[b];K(C,u,c.value)||O(b,C.length?C[0][c.value.value]:void 0)}),l("change",{columnIndex:a,selectedValues:o.value,selectedOptions:h.value})},y=()=>{r.forEach(t=>t.stopMomentum()),l("confirm",{selectedValues:o.value,selectedOptions:h.value})},k=()=>l("cancel",{selectedValues:o.value,selectedOptions:h.value}),E=()=>{if(n.title)return n.title();if(e.title)return d("div",{class:[g("title"),"van-ellipsis"]},[e.title])},P=()=>{const t=e.cancelButtonText||z("cancel");return d("button",{type:"button",class:[g("cancel"),L],onClick:k},[n.cancel?n.cancel():t])},H=()=>{const t=e.confirmButtonText||z("confirm");return d("button",{type:"button",class:[g("confirm"),L],onClick:y},[n.confirm?n.confirm():t])},S=()=>{if(e.showToolbar)return d("div",{class:g("toolbar")},[n.toolbar?n.toolbar():[P(),E(),H()]])},p=()=>s.value.map((t,a)=>d(Oe,{value:o.value[a],fields:c.value,options:t,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:m.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:u=>w(u,a)},{option:n.option})),D=t=>{if(v.value){const a={height:`${m.value}px`},u={backgroundSize:`100% ${(t-m.value)/2}px`};return[d("div",{class:g("mask"),style:u},null),d("div",{class:[re,g("frame")],style:a},null)]}},V=()=>{const t=m.value*+e.visibleOptionNum,a={height:`${t}px`};return d("div",{class:g("columns"),style:a,onTouchmove:Q},[p(),D(t)])};return _(s,t=>{t.forEach((a,u)=>{a.length&&!K(a,o.value[u],c.value)&&O(u,Z(a)[c.value.value])})},{immediate:!0}),_(()=>e.modelValue,t=>{Y(t,o.value)||(o.value=t)},{deep:!0}),_(o,t=>{Y(t,e.modelValue)||l("update:modelValue",t)},{immediate:!0}),W({confirm:y,getSelectedOptions:()=>h.value}),()=>{var t,a;return d("div",{class:g()},[e.toolbarPosition==="top"?S():null,e.loading?d(me,{class:g("loading")},null):null,(t=n["columns-top"])==null?void 0:t.call(n),V(),(a=n["columns-bottom"])==null?void 0:a.call(n),e.toolbarPosition==="bottom"?S():null])}}});export{ke as _,xe as p};
