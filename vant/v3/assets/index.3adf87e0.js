import{c as y,h as L,a as M}from"./use-translate.55dc92d8.js";import{t as U,m as C,n as E,c as P,w as D}from"./with-install.c8955fea.js";import{B as G,e as x}from"./constant.80c6de18.js";import{z as F,e as o,D as i,x as R,r as S,o as j,a as A,w as g,B as u,F as N}from"./vue-libs.b1f02cae.js";import{N as $}from"./index.f2d18347.js";import"./use-touch.491278bc.js";import"./index.64be35d3.js";const[T,h]=y("password-input"),O={info:String,mask:U,value:C(""),gutter:E,length:P(6),focused:Boolean,errorInfo:String};var V=F({name:T,props:O,emits:["focus"],setup(f,{emit:a}){const B=e=>{e.stopPropagation(),a("focus",e)},s=()=>{const e=[],{mask:v,value:d,length:p,gutter:c,focused:k}=f;for(let r=0;r<p;r++){const I=d[r],_=r!==0&&!c,b=k&&r===d.length;let l;r!==0&&c&&(l={marginLeft:L(c)}),e.push(o("li",{class:[{[x]:_},h("item",{focus:b})],style:l},[v?o("i",{style:{visibility:I?"visible":"hidden"}},null):I,b&&o("div",{class:h("cursor")},null)]))}return e};return()=>{const e=f.errorInfo||f.info;return o("div",{class:h()},[o("ul",{class:[h("security"),{[G]:!f.gutter}],onTouchstart:B},[s()]),e&&o("div",{class:h(f.errorInfo?"error-info":"info")},[e])])}}});const w=D(V);const W=F({setup(f){const a=M({"zh-CN":{info:"\u5BC6\u7801\u4E3A 6 \u4F4D\u6570\u5B57",showInfo:"\u63D0\u793A\u4FE1\u606F",addGutter:"\u683C\u5B50\u95F4\u8DDD",errorInfo:"\u5BC6\u7801\u9519\u8BEF",removeMask:"\u660E\u6587\u5C55\u793A",customLength:"\u81EA\u5B9A\u4E49\u957F\u5EA6"},"en-US":{info:"Some tips",showInfo:"Show Info",addGutter:"Add Gutter",errorInfo:"Password Mistake",removeMask:"Remove Mask",customLength:"Custom Length"}}),s=i({showInfo:"123",addGutter:"123",basicUsage:"123",removeMask:"123",customLength:"123"}),e=i("basicUsage"),v=i(""),d=i(),p=i(),c=i(),k=i(),r=i(),I={showInfo:d,addGutter:p,basicUsage:c,removeMask:k,customLength:r},_=l=>{if(!e.value)return;const t=e.value==="customLength"?4:6,n=(s.value[e.value]+l).slice(0,t);s.value[e.value]=n,e.value==="showInfo"&&n.length===6&&n!=="123456"&&(v.value=a("errorInfo"))},b=()=>{!e.value||(s.value[e.value]=s.value[e.value].slice(0,s.value[e.value].length-1),e.value==="showInfo"&&(v.value=""))};return R(e,l=>{if(l){const t=I[l].value;if(t){const{top:n}=t.$el.getBoundingClientRect();window.scrollTo(0,window.pageYOffset+n)}}}),(l,t)=>{const n=S("demo-block");return j(),A(N,null,[o(n,{ref_key:"basicUsage",ref:c,title:u(a)("basicUsage")},{default:g(()=>[o(u(w),{value:s.value.basicUsage,focused:e.value==="basicUsage",onFocus:t[0]||(t[0]=m=>e.value="basicUsage")},null,8,["value","focused"])]),_:1},8,["title"]),o(n,{ref_key:"customLength",ref:r,title:u(a)("customLength")},{default:g(()=>[o(u(w),{value:s.value.customLength,length:4,focused:e.value==="customLength",onFocus:t[1]||(t[1]=m=>e.value="customLength")},null,8,["value","focused"])]),_:1},8,["title"]),o(n,{ref_key:"addGutter",ref:p,title:u(a)("addGutter")},{default:g(()=>[o(u(w),{value:s.value.addGutter,gutter:10,focused:e.value==="addGutter",onFocus:t[2]||(t[2]=m=>e.value="addGutter")},null,8,["value","focused"])]),_:1},8,["title"]),o(n,{ref_key:"removeMask",ref:k,title:u(a)("removeMask")},{default:g(()=>[o(u(w),{mask:!1,value:s.value.removeMask,focused:e.value==="removeMask",onFocus:t[3]||(t[3]=m=>e.value="removeMask")},null,8,["value","focused"])]),_:1},8,["title"]),o(n,{ref_key:"showInfo",ref:d,title:u(a)("showInfo")},{default:g(()=>[o(u(w),{info:u(a)("info"),value:s.value.showInfo,"error-info":v.value,focused:e.value==="showInfo",onFocus:t[4]||(t[4]=m=>e.value="showInfo")},null,8,["info","value","error-info","focused"])]),_:1},8,["title"]),o(u($),{show:!!e.value,onBlur:t[5]||(t[5]=m=>e.value=null),onInput:_,onDelete:b},null,8,["show"])],64)}}});export{W as default};