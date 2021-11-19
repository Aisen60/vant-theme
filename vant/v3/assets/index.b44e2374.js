import{V as f,c as v,W as y,a as b}from"./use-translate.c431c781.js";import{c as k,m as w,t as B,w as H}from"./with-install.6654422d.js";import{u as E}from"./use-expose.cd1f8e82.js";import{z as x,B as A,x as g,e as o,C as F,r as N,o as P,a as W,w as r,A as t,d as _,t as S,F as z}from"./vue-libs.cab43f37.js";import{G,a as D}from"./index.3fe72f5a.js";import{T as V}from"./function-call.c0e76344.js";import"./constant.80c6de18.js";import"./use-route.1ad21ca2.js";import"./index.73431c4d.js";import"./mount-component.3889b323.js";import"./index.949f0f09.js";import"./interceptor.17973404.js";import"./use-touch.0cf4a6e6.js";import"./use-lazy-render.c492e2a8.js";import"./on-popup-reopen.6de6ab9a.js";import"./index.c2bf76af.js";import"./index.7c2cb6fe.js";function I(e,s){const{days:l}=s;let{hours:a,minutes:i,seconds:u,milliseconds:c}=s;if(e.includes("DD")?e=e.replace("DD",f(l)):a+=l*24,e.includes("HH")?e=e.replace("HH",f(a)):i+=a*60,e.includes("mm")?e=e.replace("mm",f(i)):u+=i*60,e.includes("ss")?e=e.replace("ss",f(u)):c+=u*1e3,e.includes("S")){const m=f(c,3);e.includes("SSS")?e=e.replace("SSS",m):e.includes("SS")?e=e.replace("SS",m.slice(0,2)):e=e.replace("S",m.charAt(0))}return e}const[M,T]=v("count-down"),U={time:k(0),format:w("HH:mm:ss"),autoStart:B,millisecond:Boolean};var R=x({name:M,props:U,emits:["change","finish"],setup(e,{emit:s,slots:l}){const{start:a,pause:i,reset:u,current:c}=y({time:+e.time,millisecond:e.millisecond,onChange:C=>s("change",C),onFinish:()=>s("finish")}),m=A(()=>I(e.format,c.value)),n=()=>{u(+e.time),e.autoStart&&a()};return g(()=>e.time,n,{immediate:!0}),E({start:a,pause:i,reset:n}),()=>o("div",{role:"timer",class:T()},[l.default?l.default(c.value):m.value])}});const h=H(R);const Z={class:"block"},q=_("span",{class:"colon"},":",-1),J={class:"block"},K=_("span",{class:"colon"},":",-1),L={class:"block"},de=x({setup(e){const s=b({"zh-CN":{reset:"\u91CD\u7F6E",pause:"\u6682\u505C",start:"\u5F00\u59CB",finished:"\u5012\u8BA1\u65F6\u7ED3\u675F",millisecond:"\u6BEB\u79D2\u7EA7\u6E32\u67D3",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",formatWithDay:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2"},"en-US":{reset:"Reset",pause:"Pause",start:"Start",finished:"Finished",millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss"}}),l=F(30*60*60*1e3),a=F(),i=()=>{var n;(n=a.value)==null||n.start()},u=()=>{var n;(n=a.value)==null||n.pause()},c=()=>{var n;(n=a.value)==null||n.reset()},m=()=>V(s("finished"));return(n,C)=>{const p=N("demo-block");return P(),W(z,null,[o(p,{title:t(s)("basicUsage")},{default:r(()=>[o(t(h),{time:l.value},null,8,["time"])]),_:1},8,["title"]),o(p,{title:t(s)("customFormat")},{default:r(()=>[o(t(h),{time:l.value,format:t(s)("formatWithDay")},null,8,["time","format"])]),_:1},8,["title"]),o(p,{title:t(s)("millisecond")},{default:r(()=>[o(t(h),{millisecond:"",time:l.value,format:"HH:mm:ss:SS"},null,8,["time"])]),_:1},8,["title"]),o(p,{title:t(s)("customStyle")},{default:r(()=>[o(t(h),{time:l.value},{default:r(d=>[_("span",Z,S(d.hours),1),q,_("span",J,S(d.minutes),1),K,_("span",L,S(d.seconds),1)]),_:1},8,["time"])]),_:1},8,["title"]),o(p,{title:t(s)("manualControl")},{default:r(()=>[o(t(h),{ref:(d,j)=>{j.countDown=d,a.value=d},millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS",onFinish:m},null,512),o(t(G),{clickable:"","column-num":3},{default:r(()=>[o(t(D),{icon:"play-circle-o",text:t(s)("start"),onClick:i},null,8,["text"]),o(t(D),{icon:"pause-circle-o",text:t(s)("pause"),onClick:u},null,8,["text"]),o(t(D),{icon:"replay",text:t(s)("reset"),onClick:c},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{de as default};
