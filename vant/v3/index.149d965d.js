import{c as G,h as K,B as _,T as j,U as L,G as P,l as Q,q as W,D as Z}from"./use-translate.fbf36f21.js";import{c as w,n as z,w as p}from"./with-install.251697cd.js";import{u as ee}from"./use-touch.9de12470.js";import{z as te,D,C as B,e as y}from"./vue-libs.bf80eadf.js";const[ae,f]=G("slider"),ne={min:w(0),max:w(100),step:w(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:z,buttonSize:z,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}};var re=te({name:ae,props:ne,emits:["change","drag-end","drag-start","update:modelValue"],setup(t,{emit:b,slots:V}){let S,o,u;const N=D(),c=D(),g=ee(),m=B(()=>Number(t.max)-Number(t.min)),M=B(()=>{const e=t.vertical?"width":"height";return{background:t.inactiveColor,[e]:K(t.barHeight)}}),s=e=>t.range&&Array.isArray(e),O=()=>{const{modelValue:e,min:a}=t;return s(e)?`${(e[1]-e[0])*100/m.value}%`:`${(e-Number(a))*100/m.value}%`},R=()=>{const{modelValue:e,min:a}=t;return s(e)?`${(e[0]-Number(a))*100/m.value}%`:"0%"},X=B(()=>{const a={[t.vertical?"height":"width"]:O(),background:t.activeColor};c.value&&(a.transition="none");const n=()=>t.vertical?t.reverse?"bottom":"top":t.reverse?"right":"left";return a[n()]=R(),a}),h=e=>{const a=+t.min,n=+t.max,i=+t.step;e=Z(e,a,n);const r=Math.round((e-a)/i)*i;return L(a,r)},T=(e,a)=>JSON.stringify(e)===JSON.stringify(a),Y=e=>{var i,r;const a=(i=e[0])!=null?i:Number(t.min),n=(r=e[1])!=null?r:Number(t.max);return a>n?[n,a]:[a,n]},d=(e,a)=>{s(e)?e=Y(e).map(h):e=h(e),T(e,t.modelValue)||b("update:modelValue",e),a&&!T(e,u)&&b("change",e)},$=e=>{if(e.stopPropagation(),t.disabled||t.readonly)return;const{min:a,reverse:n,vertical:i,modelValue:r}=t,l=P(N),q=()=>i?n?l.bottom-e.clientY:e.clientY-l.top:n?l.right-e.clientX:e.clientX-l.left,E=i?l.height:l.width,v=Number(a)+q()/E*m.value;if(s(r)){const[A,k]=r,F=(A+k)/2;v<=F?d([v,k],!0):d([A,v],!0)}else d(v,!0)},H=e=>{t.disabled||t.readonly||(g.start(e),o=t.modelValue,s(o)?u=o.map(h):u=h(o),c.value="start")},I=e=>{if(t.disabled||t.readonly)return;c.value==="start"&&b("drag-start",e),Q(e,!0),g.move(e),c.value="dragging";const a=P(N),n=t.vertical?g.deltaY.value:g.deltaX.value,i=t.vertical?a.height:a.width;let r=n/i*m.value;if(t.reverse&&(r=-r),s(u)){const l=t.reverse?1-S:S;o[l]=u[l]+r}else o=u+r;d(o)},x=e=>{t.disabled||t.readonly||(c.value==="dragging"&&(d(o,!0),b("drag-end",e)),c.value="")},J=e=>typeof e=="number"?f("button-wrapper",["left","right"][e]):f("button-wrapper",t.reverse?"left":"right"),U=(e,a)=>{if(typeof a=="number"){const n=V[a===0?"left-button":"right-button"];if(n)return n({value:e})}return V.button?V.button({value:e}):y("div",{class:f("button"),style:W(t.buttonSize)},null)},C=e=>{const a=typeof e=="number"?t.modelValue[e]:t.modelValue;return y("div",{role:"slider",class:J(e),tabindex:t.disabled?void 0:0,"aria-valuemin":t.min,"aria-valuenow":a,"aria-valuemax":t.max,"aria-disabled":t.disabled||void 0,"aria-readonly":t.readonly||void 0,"aria-orientation":t.vertical?"vertical":"horizontal",onTouchstart:n=>{typeof e=="number"&&(S=e),H(n)},onTouchmove:I,onTouchend:x,onTouchcancel:x,onClick:j},[U(a,e)])};return d(t.modelValue),_(()=>t.modelValue),()=>y("div",{ref:N,style:M.value,class:f({vertical:t.vertical,disabled:t.disabled}),onClick:$},[y("div",{class:f("bar"),style:X.value},[t.range?[C(0),C(1)]:C()])])}});const ce=p(re);export{ce as S};
