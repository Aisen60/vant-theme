import{G as k,a as S}from"./index.e5c7074b.js";import{N as p,c as w,Y as y,a as F}from"./use-translate.9f14972f.js";import{c as g,m as b,t as H,w as B}from"./with-install.74763816.js";import{u as E}from"./use-expose.b4c33459.js";import{A as x,D as A,y as N,e as o,x as C,r as P,o as G,a as W,w as m,C as t,d as f,t as v,F as z}from"./vue-libs.a3cd7f61.js";import{s as I}from"./index.c88a663f.js";import"./constant.80c6de18.js";import"./use-route.7a9317f3.js";import"./index.b817fd06.js";import"./index.6ecb02f5.js";import"./interceptor.2ffde640.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.663d05d1.js";import"./index.ccf6f928.js";import"./mount-component.21851ecf.js";function M(e,s){const{days:l}=s;let{hours:a,minutes:i,seconds:u,milliseconds:c}=s;if(e.includes("DD")?e=e.replace("DD",p(l)):a+=l*24,e.includes("HH")?e=e.replace("HH",p(a)):i+=a*60,e.includes("mm")?e=e.replace("mm",p(i)):u+=i*60,e.includes("ss")?e=e.replace("ss",p(u)):c+=u*1e3,e.includes("S")){const r=p(c,3);e.includes("SSS")?e=e.replace("SSS",r):e.includes("SS")?e=e.replace("SS",r.slice(0,2)):e=e.replace("S",r.charAt(0))}return e}const[U,V]=w("count-down"),R={time:g(0),format:b("HH:mm:ss"),autoStart:H,millisecond:Boolean};var T=x({name:U,props:R,emits:["change","finish"],setup(e,{emit:s,slots:l}){const{start:a,pause:i,reset:u,current:c}=y({time:+e.time,millisecond:e.millisecond,onChange:D=>s("change",D),onFinish:()=>s("finish")}),r=A(()=>M(e.format,c.value)),n=()=>{u(+e.time),e.autoStart&&a()};return N(()=>e.time,n,{immediate:!0}),E({start:a,pause:i,reset:n}),()=>o("div",{role:"timer",class:V()},[l.default?l.default(c.value):r.value])}});const _=B(T);const Y={class:"block"},Z=f("span",{class:"colon"},":",-1),j={class:"block"},q=f("span",{class:"colon"},":",-1),J={class:"block"},me=x({__name:"index",setup(e){const s=F({"zh-CN":{reset:"\u91CD\u7F6E",pause:"\u6682\u505C",start:"\u5F00\u59CB",finished:"\u5012\u8BA1\u65F6\u7ED3\u675F",millisecond:"\u6BEB\u79D2\u7EA7\u6E32\u67D3",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",formatWithDay:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2"},"en-US":{reset:"Reset",pause:"Pause",start:"Start",finished:"Finished",millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss"}}),l=C(30*60*60*1e3),a=C(),i=()=>{var n;(n=a.value)==null||n.start()},u=()=>{var n;(n=a.value)==null||n.pause()},c=()=>{var n;(n=a.value)==null||n.reset()},r=()=>I(s("finished"));return(n,D)=>{const d=P("demo-block");return G(),W(z,null,[o(d,{title:t(s)("basicUsage")},{default:m(()=>[o(t(_),{time:l.value},null,8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("customFormat")},{default:m(()=>[o(t(_),{time:l.value,format:t(s)("formatWithDay")},null,8,["time","format"])]),_:1},8,["title"]),o(d,{title:t(s)("millisecond")},{default:m(()=>[o(t(_),{millisecond:"",time:l.value,format:"HH:mm:ss:SS"},null,8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("customStyle")},{default:m(()=>[o(t(_),{time:l.value},{default:m(h=>[f("span",Y,v(h.hours),1),Z,f("span",j,v(h.minutes),1),q,f("span",J,v(h.seconds),1)]),_:1},8,["time"])]),_:1},8,["title"]),o(d,{title:t(s)("manualControl")},{default:m(()=>[o(t(_),{ref_key:"countDown",ref:a,millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS",onFinish:r},null,512),o(t(k),{clickable:"","column-num":3},{default:m(()=>[o(t(S),{icon:"play-circle-o",text:t(s)("start"),onClick:i},null,8,["text"]),o(t(S),{icon:"pause-circle-o",text:t(s)("pause"),onClick:u},null,8,["text"]),o(t(S),{icon:"replay",text:t(s)("reset"),onClick:c},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{me as default};
