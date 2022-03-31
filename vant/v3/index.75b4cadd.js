import{c as K,e as S,p as j,W as f,D as E,J as N}from"./use-translate.d627ebf3.js";import{c as O,m as te,w as ae}from"./with-install.9724bc72.js";import{u as q}from"./use-expose.36b4c9ee.js";import{s as L,t as Q,p as R,a as U,g as _,b as ne}from"./utils.4ca3fa4d.js";import{P as X}from"./index.c79d8c0a.js";import{z,D as w,C,N as A,q as g,x as y,e as B,A as J}from"./vue-libs.bf80eadf.js";const[ue]=K("time-picker");var W=z({name:ue,props:S({},L,{minHour:O(0),maxHour:O(23),minMinute:O(0),maxMinute:O(59),modelValue:String}),emits:["confirm","cancel","change","update:modelValue"],setup(t,{emit:s,slots:$}){const d=u=>{const{minHour:e,maxHour:a,maxMinute:n,minMinute:r}=t;u||(u=`${f(e)}:${f(r)}`);let[i,l]=u.split(":");return i=f(E(+i,+e,+a)),l=f(E(+l,+r,+n)),`${i}:${l}`},m=w(),o=w(d(t.modelValue)),M=C(()=>[{type:"hour",range:[+t.minHour,+t.maxHour]},{type:"minute",range:[+t.minMinute,+t.maxMinute]}]),Y=C(()=>M.value.map(({type:u,range:e})=>{let a=Q(e[1]-e[0]+1,n=>f(e[0]+n));return t.filter&&(a=t.filter(u,a)),{type:u,values:a}})),x=C(()=>Y.value.map(u=>({values:u.values.map(e=>t.formatter(u.type,e))}))),k=()=>{const u=o.value.split(":"),e=[t.formatter("hour",u[0]),t.formatter("minute",u[1])];g(()=>{var a;(a=m.value)==null||a.setValues(e)})},D=()=>{const[u,e]=m.value.getIndexes(),[a,n]=Y.value,r=a.values[u]||a.values[0],i=n.values[e]||n.values[0];o.value=d(`${r}:${i}`),k()},P=()=>s("confirm",o.value),I=()=>s("cancel"),T=()=>{D(),g(()=>{g(()=>s("change",o.value))})};return A(()=>{k(),g(D)}),y(x,k),y(()=>[t.filter,t.maxHour,t.minMinute,t.maxMinute],D),y(()=>t.minHour,()=>{g(D)}),y(o,u=>s("update:modelValue",u)),y(()=>t.modelValue,u=>{u=d(u),u!==o.value&&(o.value=u,k())}),q({getPicker:()=>m.value&&U(m.value,D)}),()=>B(X,J({ref:m,columns:x.value,onChange:T,onCancel:I,onConfirm:P},j(t,R)),$)}});const G=new Date().getFullYear(),[oe]=K("date-picker");var Z=z({name:oe,props:S({},L,{type:te("datetime"),modelValue:Date,minDate:{type:Date,default:()=>new Date(G-10,0,1),validator:N},maxDate:{type:Date,default:()=>new Date(G+10,11,31),validator:N}}),emits:["confirm","cancel","change","update:modelValue"],setup(t,{emit:s,slots:$}){const d=e=>{if(N(e)){const a=E(e.getTime(),t.minDate.getTime(),t.maxDate.getTime());return new Date(a)}},m=w(),o=w(d(t.modelValue)),M=(e,a)=>{const n=t[`${e}Date`],r=n.getFullYear();let i=1,l=1,h=0,v=0;return e==="max"&&(i=12,l=_(a.getFullYear(),a.getMonth()+1),h=23,v=59),a.getFullYear()===r&&(i=n.getMonth()+1,a.getMonth()+1===i&&(l=n.getDate(),a.getDate()===l&&(h=n.getHours(),a.getHours()===h&&(v=n.getMinutes())))),{[`${e}Year`]:r,[`${e}Month`]:i,[`${e}Date`]:l,[`${e}Hour`]:h,[`${e}Minute`]:v}},Y=C(()=>{const{maxYear:e,maxDate:a,maxMonth:n,maxHour:r,maxMinute:i}=M("max",o.value||t.minDate),{minYear:l,minDate:h,minMonth:v,minHour:b,minMinute:p}=M("min",o.value||t.minDate);let c=[{type:"year",range:[l,e]},{type:"month",range:[v,n]},{type:"day",range:[h,a]},{type:"hour",range:[b,r]},{type:"minute",range:[p,i]}];switch(t.type){case"date":c=c.slice(0,3);break;case"year-month":c=c.slice(0,2);break;case"month-day":c=c.slice(1,3);break;case"datehour":c=c.slice(0,4);break}if(t.columnsOrder){const V=t.columnsOrder.concat(c.map(H=>H.type));c.sort((H,F)=>V.indexOf(H.type)-V.indexOf(F.type))}return c}),x=C(()=>Y.value.map(({type:e,range:a})=>{let n=Q(a[1]-a[0]+1,r=>f(a[0]+r));return t.filter&&(n=t.filter(e,n)),{type:e,values:n}})),k=C(()=>x.value.map(e=>({values:e.values.map(a=>t.formatter(e.type,a))}))),D=()=>{const e=o.value||t.minDate,{formatter:a}=t,n=x.value.map(r=>{switch(r.type){case"year":return a("year",`${e.getFullYear()}`);case"month":return a("month",f(e.getMonth()+1));case"day":return a("day",f(e.getDate()));case"hour":return a("hour",f(e.getHours()));case"minute":return a("minute",f(e.getMinutes()));default:return""}});g(()=>{var r;(r=m.value)==null||r.setValues(n)})},P=()=>{const{type:e}=t,a=m.value.getIndexes(),n=c=>{let V=0;x.value.forEach((F,ee)=>{c===F.type&&(V=ee)});const{values:H}=x.value[V];return ne(H[a[V]])};let r,i,l;e==="month-day"?(r=(o.value||t.minDate).getFullYear(),i=n("month"),l=n("day")):(r=n("year"),i=n("month"),l=e==="year-month"?1:n("day"));const h=_(r,i);l=l>h?h:l;let v=0,b=0;e==="datehour"&&(v=n("hour")),e==="datetime"&&(v=n("hour"),b=n("minute"));const p=new Date(r,i-1,l,v,b);o.value=d(p)},I=()=>{s("update:modelValue",o.value),s("confirm",o.value)},T=()=>s("cancel"),u=()=>{P(),g(()=>{g(()=>s("change",o.value))})};return A(()=>{D(),g(P)}),y(k,D),y(o,(e,a)=>s("update:modelValue",a?e:null)),y(()=>[t.filter,t.minDate,t.maxDate],()=>{g(P)}),y(()=>t.modelValue,e=>{var a;e=d(e),e&&e.valueOf()!==((a=o.value)==null?void 0:a.valueOf())&&(o.value=e)}),q({getPicker:()=>m.value&&U(m.value,P)}),()=>B(X,J({ref:m,columns:k.value,onChange:u,onCancel:T,onConfirm:I},j(t,R)),$)}});const[re,me]=K("datetime-picker"),ie=Object.keys(W.props),le=Object.keys(Z.props),ce=S({},W.props,Z.props,{modelValue:[String,Date]});var se=z({name:re,props:ce,setup(t,{attrs:s,slots:$}){const d=w();return q({getPicker:()=>{var m;return(m=d.value)==null?void 0:m.getPicker()}}),()=>{const m=t.type==="time",o=m?W:Z,M=j(t,m?ie:le);return B(o,J({ref:d,class:me()},M,s),$)}}});const De=ae(se);export{De as D};
