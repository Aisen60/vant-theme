import{F}from"./index.23d405e4.js";import{P as y}from"./index.13873f42.js";import{c as $,t as D,m as P,n as H,e as J,a as X}from"./use-translate.e667ce10.js";import{w as K}from"./with-install.feb19484.js";import{T as L,a as W}from"./index.b5503e09.js";import{I as k}from"./index.472ff4df.js";import{z as B,E as j,x as T,e as n,A as Z,q as N,C as q,r as G,o as Q,a as Y,w as C,B as e,F as I}from"./vue-libs.1dda7261.js";import{d as M}from"./deep-clone.2dde0880.js";import"./constant.4d85ecb9.js";import"./index.5a14a991.js";import"./use-route.dfb37f70.js";import"./use-expose.9b0dd301.js";import"./index.5b10c1d9.js";import"./useParent.5e3d1dfb.js";import"./interceptor.b759bdc5.js";import"./use-touch.b0c07ae6.js";import"./index.904c4b4d.js";import"./utils.39620306.js";import"./index.0749451f.js";import"./use-lazy-render.e44d61c0.js";import"./on-popup-reopen.1b0dc8ad.js";import"./index.57f9d610.js";import"./index.d7333b46.js";import"./useChildren.ed284d59.js";import"./use-refs.2bafdad1.js";import"./index.99c6f483.js";import"./index.eddf1708.js";function S(r){return typeof r=="function"||Object.prototype.toString.call(r)==="[object Object]"&&!Z(r)}const[R,b,_]=$("cascader");var ee=B({name:R,props:{title:String,closeable:D,swipeable:D,closeIcon:P("cross"),modelValue:H,fieldNames:Object,placeholder:String,activeColor:String,options:{type:Array,default:()=>[]}},emits:["close","change","finish","update:modelValue","click-tab"],setup(r,{slots:a,emit:v}){const s=j({tabs:[],activeTab:0}),{text:x,value:c,children:h}=J({text:"text",value:"value",children:"children"},r.fieldNames),V=(o,u)=>{for(let p=0;p<o.length;p++){const d=o[p];if(d[c]===u)return[d];if(d[h]){const m=V(d[h],u);if(m)return[d,...m]}}},w=()=>{if(r.modelValue||r.modelValue===0){const o=V(r.options,r.modelValue);if(o){let u=r.options;s.tabs=o.map(p=>{const d={options:u,selected:p},m=u.find(A=>A[c]===p[c]);return m&&(u=m[h]),d}),u&&s.tabs.push({options:u,selected:null}),N(()=>{s.activeTab=s.tabs.length-1});return}}s.tabs=[{options:r.options,selected:null}]},E=(o,u)=>{if(o.disabled)return;if(s.tabs[u].selected=o,s.tabs.length>u+1&&(s.tabs=s.tabs.slice(0,u+1)),o[h]){const m={options:o[h],selected:null};s.tabs[u+1]?s.tabs[u+1]=m:s.tabs.push(m),N(()=>{s.activeTab++})}const p=s.tabs.map(m=>m.selected).filter(Boolean),d={value:o[c],tabIndex:u,selectedOptions:p};v("update:modelValue",o[c]),v("change",d),o[h]||v("finish",d)},f=()=>v("close"),t=({name:o,title:u})=>v("click-tab",o,u),i=()=>n("div",{class:b("header")},[n("h2",{class:b("title")},[a.title?a.title():r.title]),r.closeable?n(k,{name:r.closeIcon,class:b("close-icon"),onClick:f},null):null]),l=(o,u,p)=>{const d=u&&o[c]===u[c],m=o.color||(d?r.activeColor:void 0),A=a.option?a.option({option:o,selected:d}):n("span",null,[o[x]]);return n("li",{class:[b("option",{selected:d,disabled:o.disabled}),o.className],style:{color:m},onClick:()=>E(o,p)},[A,d?n(k,{name:"success",class:b("selected-icon")},null):null])},g=(o,u,p)=>n("ul",{class:b("options")},[o.map(d=>l(d,u,p))]),U=(o,u)=>{let p;const{options:d,selected:m}=o,A=m?m[x]:r.placeholder||_("select");return n(W,{title:A,titleClass:b("tab",{unselected:!m})},S(p=g(d,m,u))?p:{default:()=>[p]})},z=()=>{let o;return n(L,{active:s.activeTab,"onUpdate:active":u=>s.activeTab=u,animated:!0,class:b("tabs"),color:r.activeColor,swipeThreshold:0,swipeable:r.swipeable,"onClick-tab":t},S(o=s.tabs.map(U))?o:{default:()=>[o]})};return w(),T(()=>r.options,w,{deep:!0}),T(()=>r.modelValue,o=>{(o||o===0)&&s.tabs.map(p=>{var d;return(d=p.selected)==null?void 0:d[c]}).includes(o)||w()}),()=>n("div",{class:b()},[i(),z()])}});const O=K(ee);var te=[{text:"\u6D59\u6C5F\u7701",value:"330000",children:[{text:"\u676D\u5DDE\u5E02",value:"330100",children:[{text:"\u4E0A\u57CE\u533A",value:"330102"},{text:"\u4E0B\u57CE\u533A",value:"330103"},{text:"\u6C5F\u5E72\u533A",value:"330104"}]},{text:"\u5B81\u6CE2\u5E02",value:"330200",children:[{text:"\u6D77\u66D9\u533A",value:"330203"},{text:"\u6C5F\u5317\u533A",value:"330205"},{text:"\u5317\u4ED1\u533A",value:"330206"}]},{text:"\u6E29\u5DDE\u5E02",value:"330300",children:[{text:"\u9E7F\u57CE\u533A",value:"330302"},{text:"\u9F99\u6E7E\u533A",value:"330303"},{text:"\u74EF\u6D77\u533A",value:"330304"}]}]},{text:"\u6C5F\u82CF\u7701",value:"320000",children:[{text:"\u5357\u4EAC\u5E02",value:"320100",children:[{text:"\u7384\u6B66\u533A",value:"320102"},{text:"\u79E6\u6DEE\u533A",value:"320104"},{text:"\u5EFA\u90BA\u533A",value:"320105"}]},{text:"\u65E0\u9521\u5E02",value:"320200",children:[{text:"\u9521\u5C71\u533A",value:"320205"},{text:"\u60E0\u5C71\u533A",value:"320206"},{text:"\u6EE8\u6E56\u533A",value:"320211"}]},{text:"\u5F90\u5DDE\u5E02",value:"320300",children:[{text:"\u9F13\u697C\u533A",value:"320302"},{text:"\u4E91\u9F99\u533A",value:"320303"},{text:"\u8D3E\u6C6A\u533A",value:"320305"}]}]}],le=[{text:"Zhejiang",value:"330000",children:[{text:"Hangzhou",value:"330100",children:[{text:"Shangcheng",value:"330102"},{text:"Xiacheng",value:"330103"},{text:"Jianggan",value:"330104"}]},{text:"Ningbo",value:"330200",children:[{text:"Haishu",value:"330203"},{text:"Jiangbei",value:"330205"},{text:"Beilun",value:"330206"}]},{text:"Wenzhou",value:"330300",children:[{text:"Lucheng",value:"330302"},{text:"Longwan",value:"330303"},{text:"Ouhai",value:"330304"}]}]},{text:"Jiangsu",value:"320000",children:[{text:"Nanjing",value:"320100",children:[{text:"Xuanwu",value:"320102"},{text:"Qinghuai",value:"320104"},{text:"Jianye",value:"320105"}]},{text:"Wuxi",value:"320200",children:[{text:"Xishan",value:"320205"},{text:"Huishan",value:"320206"},{text:"Binhu",value:"320211"}]},{text:"Xuzhou",value:"320300",children:[{text:"Gulou",value:"320302"},{text:"Yunlong",value:"320303"},{text:"Jiawang",value:"320305"}]}]}];const ke=B({setup(r){const a=X({"zh-CN":{area:"\u5730\u533A",options:te,selectArea:"\u8BF7\u9009\u62E9\u5730\u533A",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",asyncOptions:"\u5F02\u6B65\u52A0\u8F7D\u9009\u9879",asyncOptions1:[{text:"\u6D59\u6C5F\u7701",value:"330000",children:[]}],asyncOptions2:[{text:"\u676D\u5DDE\u5E02",value:"330100"},{text:"\u5B81\u6CE2\u5E02",value:"330200"}],customFieldNames:"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D"},"en-US":{area:"Area",options:le,selectArea:"Select Area",customColor:"Custom Color",asyncOptions:"Async Options",asyncOptions1:[{text:"Zhejiang",value:"330000",children:[]}],asyncOptions2:[{text:"Hangzhou",value:"330100"},{text:"Ningbo",value:"330200"}],customFieldNames:"Custom Field Names"}}),v=j({show:!1,value:"",result:""}),s=j({show:!1,value:null,result:""}),x=j({show:!1,value:null,result:"",options:a("asyncOptions1")}),c=j({show:!1,value:null,result:""}),h={text:"name",value:"code",children:"items"},V=q(()=>{const f=M(a("options")),t=i=>{"text"in i&&(i.name=i.text,delete i.text),"value"in i&&(i.code=i.value,delete i.value),"children"in i&&(i.items=i.children,delete i.children,i.items.forEach(t))};return f.forEach(t),f}),w=({value:f})=>{f==="330000"&&setTimeout(()=>{x.options[0].children=a("asyncOptions2")},500)},E=(f,{value:t,selectedOptions:i})=>{const l=i.map(g=>g.text||g.name).join("/");f.show=!1,f.value=t,f.result=l};return(f,t)=>{const i=G("demo-block");return Q(),Y(I,null,[n(i,{card:"",title:e(a)("basicUsage")},{default:C(()=>[n(e(F),{modelValue:e(v).result,"onUpdate:modelValue":t[0]||(t[0]=l=>e(v).result=l),"is-link":"",readonly:"",label:e(a)("area"),placeholder:e(a)("selectArea"),onClick:t[1]||(t[1]=l=>e(v).show=!0)},null,8,["modelValue","label","placeholder"]),n(e(y),{show:e(v).show,"onUpdate:show":t[5]||(t[5]=l=>e(v).show=l),round:"",teleport:"body",position:"bottom"},{default:C(()=>[n(e(O),{modelValue:e(v).value,"onUpdate:modelValue":t[2]||(t[2]=l=>e(v).value=l),title:e(a)("selectArea"),options:e(a)("options"),onClose:t[3]||(t[3]=l=>e(v).show=!1),onFinish:t[4]||(t[4]=l=>E(e(v),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),n(i,{card:"",title:e(a)("customColor")},{default:C(()=>[n(e(F),{modelValue:e(s).result,"onUpdate:modelValue":t[6]||(t[6]=l=>e(s).result=l),"is-link":"",readonly:"",label:e(a)("area"),placeholder:e(a)("selectArea"),onClick:t[7]||(t[7]=l=>e(s).show=!0)},null,8,["modelValue","label","placeholder"]),n(e(y),{show:e(s).show,"onUpdate:show":t[11]||(t[11]=l=>e(s).show=l),round:"",teleport:"body",position:"bottom"},{default:C(()=>[n(e(O),{modelValue:e(s).value,"onUpdate:modelValue":t[8]||(t[8]=l=>e(s).value=l),title:e(a)("selectArea"),options:e(a)("options"),"active-color":"#1989fa",onClose:t[9]||(t[9]=l=>e(s).show=!1),onFinish:t[10]||(t[10]=l=>E(e(s),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),n(i,{card:"",title:e(a)("asyncOptions")},{default:C(()=>[n(e(F),{modelValue:e(x).result,"onUpdate:modelValue":t[12]||(t[12]=l=>e(x).result=l),"is-link":"",readonly:"",label:e(a)("area"),placeholder:e(a)("selectArea"),onClick:t[13]||(t[13]=l=>e(x).show=!0)},null,8,["modelValue","label","placeholder"]),n(e(y),{show:e(x).show,"onUpdate:show":t[17]||(t[17]=l=>e(x).show=l),round:"",teleport:"body",position:"bottom"},{default:C(()=>[n(e(O),{modelValue:e(x).value,"onUpdate:modelValue":t[14]||(t[14]=l=>e(x).value=l),title:e(a)("selectArea"),options:e(x).options,onClose:t[15]||(t[15]=l=>e(x).show=!1),onChange:w,onFinish:t[16]||(t[16]=l=>E(e(x),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"]),n(i,{card:"",title:e(a)("customFieldNames")},{default:C(()=>[n(e(F),{modelValue:e(c).result,"onUpdate:modelValue":t[18]||(t[18]=l=>e(c).result=l),"is-link":"",readonly:"",label:e(a)("area"),placeholder:e(a)("selectArea"),onClick:t[19]||(t[19]=l=>e(c).show=!0)},null,8,["modelValue","label","placeholder"]),n(e(y),{show:e(c).show,"onUpdate:show":t[23]||(t[23]=l=>e(c).show=l),round:"",teleport:"body",position:"bottom","safe-area-inset-bottom":""},{default:C(()=>[n(e(O),{modelValue:e(c).value,"onUpdate:modelValue":t[20]||(t[20]=l=>e(c).value=l),title:e(a)("selectArea"),options:e(V),"field-names":h,onClose:t[21]||(t[21]=l=>e(c).show=!1),onFinish:t[22]||(t[22]=l=>E(e(c),l))},null,8,["modelValue","title","options"])]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{ke as default};