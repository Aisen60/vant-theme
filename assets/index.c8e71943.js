var Y=Object.defineProperty;var U=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var F=(e,t,s)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,b=(e,t)=>{for(var s in t||(t={}))Z.call(t,s)&&F(e,s,t[s]);if(U)for(var s of U(t))ee.call(t,s)&&F(e,s,t[s]);return e};import{g as x,h as te,i as se,j as L,k as ne,l as k,m as P,n as R,o as oe,q as re,r as j,s as ie,t as ae,u as N,v as w,w as ce,x as le,A as C}from"./index.e3eb1b72.js";import{J as ue,K as v,d as O,r as T,w as de,L as he,M as _e,O as ve,o as h,c as D,a as f,b as p,u as m,P as fe,Q as me,S as ge,T as G,U as pe,V as Ee,m as _,n as u,t as V,F as q,q as B,j as Ce,v as M,W as Te,X as Ie,Y as ye}from"./vendor.5b1e10fa.js";function be(e){let t;try{t=JSON.parse(e)}catch{t=t||null}return t}function we(e){let t;try{t=JSON.stringify(e)}catch{t=t||null}return t}function z(){function e(o){const r=window.localStorage.getItem(o);return r&&be(r)}function t(o,r){const i=we(r);window.localStorage.setItem(o,i)}function s(o){window.localStorage.removeItem(o)}function n(){window.localStorage.clear()}return{getItem:e,setItem:t,removeItem:s,clear:n}}const Ve=z();let H=[],W=!1;function I(e){W?e():H.push(e)}function et(){window.top===window&&window.addEventListener("message",e=>{e.data.type==="iframeReady"&&(W=!0,H.forEach(t=>t()),H=[])})}function tt(e){window.addEventListener("message",t=>{var n,o;if(((n=t.data)==null?void 0:n.type)!==x)return;const s=((o=t.data)==null?void 0:o.value)||"";e.currentRoute.value.path!==s&&e.replace(s).catch(()=>{})})}function st(){const e=document.querySelector("iframe");e&&I(()=>{var t;(t=e==null?void 0:e.contentWindow)==null||t.postMessage({type:x,value:Se()},"*")})}function nt(e){window.localStorage.setItem("vantTheme",e);const t=document.querySelector("iframe");t&&I(()=>{var s;(s=t==null?void 0:t.contentWindow)==null||s.postMessage({type:"updateTheme",value:e},"*")})}function ot(e,t){const s=document.querySelector("iframe");s&&I(()=>{var n;(n=s==null?void 0:s.contentWindow)==null||n.postMessage({type:ne,value:JSON.stringify(e),version:t},"*")})}function rt(e,t){const s=document.querySelector("iframe");s&&I(()=>{var n;(n=s==null?void 0:s.contentWindow)==null||n.postMessage({type:te,value:JSON.stringify(e),version:t},"*")})}function it(e){const t=document.querySelector("iframe");t&&I(()=>{var s;(s=t==null?void 0:t.contentWindow)==null||s.postMessage({type:se,version:e},"*")})}function Ae(){const e=Ve.getItem(L);return e||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}function Se(){const e=window.vueRouter,{path:t}=e.currentRoute.value;return t}const Le="modulepreload",J={},ke="/vant-theme/",c=function(t,s){return!s||s.length===0?t():Promise.all(s.map(n=>{if(n=`${ke}${n}`,n in J)return;J[n]=!0;const o=n.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${r}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":Le,o||(i.as="script",i.crossOrigin=""),i.href=n,document.head.appendChild(i),o)return new Promise((l,g)=>{i.addEventListener("load",l),i.addEventListener("error",g)})})).then(()=>t())};function Pe(e){switch(e){case"./styles/en-us/base-v2.json":return c(()=>import("./base-v2.6e2cf420.js"),[]);case"./styles/en-us/base-v3.json":return c(()=>import("./base-v3.d69772a7.js"),[]);case"./styles/en-us/base-v4.json":return c(()=>import("./base-v4.22c45f3d.js"),[]);case"./styles/en-us/v2.json":return c(()=>import("./v2.d22e0160.js"),[]);case"./styles/en-us/v3.json":return c(()=>import("./v3.cdebf5d2.js"),[]);case"./styles/en-us/v4.json":return c(()=>import("./v4.ebe54d01.js"),[]);case"./styles/zh-cn/base-v2.json":return c(()=>import("./base-v2.502fefe1.js"),[]);case"./styles/zh-cn/base-v3.json":return c(()=>import("./base-v3.ec06435c.js"),[]);case"./styles/zh-cn/base-v4.json":return c(()=>import("./base-v4.ce7f6f1d.js"),[]);case"./styles/zh-cn/v2.json":return c(()=>import("./v2.23c6ec58.js"),[]);case"./styles/zh-cn/v3.json":return c(()=>import("./v3.199963e7.js"),[]);case"./styles/zh-cn/v4.json":return c(()=>import("./v4.d3191734.js"),[]);default:return new Promise(function(t,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function Re(e){switch(e){case"./styles/en-us/base-v2.json":return c(()=>import("./base-v2.6e2cf420.js"),[]);case"./styles/en-us/base-v3.json":return c(()=>import("./base-v3.d69772a7.js"),[]);case"./styles/en-us/base-v4.json":return c(()=>import("./base-v4.22c45f3d.js"),[]);case"./styles/zh-cn/base-v2.json":return c(()=>import("./base-v2.502fefe1.js"),[]);case"./styles/zh-cn/base-v3.json":return c(()=>import("./base-v3.ec06435c.js"),[]);case"./styles/zh-cn/base-v4.json":return c(()=>import("./base-v4.ce7f6f1d.js"),[]);default:return new Promise(function(t,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const K=async(e,t)=>{const s=e,n=t.toLocaleLowerCase(),{default:o}=await Re(`./styles/${n}/base-${s}.json`);return o},at=async(e,t)=>{const s=e,n=t.toLocaleLowerCase(),o=await K(e,t),{default:r}=await Pe(`./styles/${n}/${s}.json`);return[o,...r]},a=z(),je={v2:[],v3:[],v4:[]},$="";function Q(e){const t=le();return{version:e.version,id:t,name:e.name,describe:e.describe,config:b({},e.config),create:t,update:t}}const ct=ue("main",{state:()=>({needBackups:!1,appVersion:a.getItem(k)||P.version,schemeColor:Ae(),version:a.getItem(R)||oe,versionList:re,language:a.getItem(j)||ie,languageList:ae,userConfig:a.getItem(N)||je,currentConfigId:a.getItem(w)||$,loadVantCssState:!1,iframeState:!1,createRouteState:!1,listenSyncPathState:!1}),getters:{versionInfo(e){const t=e.version,s=v(e.versionList);return s.forEach(n=>{n.key==="v2"?n.disabled=!0:n.disabled=t===n.key}),s.filter(n=>n.key===t)[0]},versionAllTheme(e){const t=e.version;return e.userConfig[t]},versionCurrentTheme(e){const t=e.version,s=e.userConfig,n=e.currentConfigId;return s[t].filter(o=>o.id===n)[0]}},actions:{async init(){const e=this.appVersion,t=this.schemeColor,s=this.version,n=this.language,o=this.userConfig,r=this.currentConfigId;a.setItem(k,e),a.setItem(L,t),a.setItem(R,s),a.setItem(j,n),a.setItem(N,o),a.setItem(w,r)},handleOldVersionConfig(){const e=a.getItem("VANT_THEME_USER_CONFIG"),t={v2:[],v3:[],v4:[]};e&&Object.keys(e).forEach(s=>{t[s]=[];const n=e[s];n&&n.length>0&&n.forEach(o=>{t[s].push({version:s,id:o.id,name:o.name,describe:"",config:o.theme,create:o.update,update:o.update})})}),console.log(t),a.removeItem("base"),a.removeItem("VANT_THEME_PREVIEW_CONFIG"),a.removeItem("VANT_THEME_PREVIEW_ID")},setAppVersion(){this.appVersion=P.version,a.setItem(k,P.version)},setSchemeColor(e){this.schemeColor=e,a.setItem(L,e)},setVersion(e){const{key:t}=e;this.version!==t&&(this.version=t,a.setItem(R,t))},setLanguage(e){this.language=e,a.setItem(j,e)},importTheme(e){const{version:t}=e;t&&this.updateUserConfigHandler("add",t,{index:0,theme:e})},addTheme(e){const{name:t,describe:s}=e,n=this.version,o=Q({version:n,name:t,describe:s});this.updateUserConfigHandler("add",n,{index:0,theme:o})},editTheme(e,t){const s=this.version,o=this.userConfig[s],r=v(e),{name:i,describe:l}=t;r.name=i,r.describe=l;const g=o.findIndex(A=>A.id===r.id);this.updateUserConfigHandler("update",s,{index:g,theme:r})},copyTheme(e,t){const s=this.version,n=v(e),{name:o,describe:r}=t,i=Q({version:s,name:o,describe:r});i.config=v(n.config),this.updateUserConfigHandler("add",s,{index:0,theme:i})},deleteTheme(e){const t=this.version,o=v(this.userConfig)[t].findIndex(r=>r.id===e);o!==void 0&&o!==-1&&this.updateUserConfigHandler("delete",t,{index:o})},async downloadTheme(e){var i;const t=this.version,s=this.language,n=await K(t,s),o=v(this.userConfig)[t].filter(l=>l.id===e)[0],r=(i=n.children)==null?void 0:i.map(l=>l.label);return ce(t,o,r)},updateUserConfigHandler(e,t,s){const n=this.userConfig,{index:o,theme:r}=s;e==="add"&&r&&n[t].push(r),e==="update"&&(n[t][o].name=r==null?void 0:r.name,n[t][o].describe=r==null?void 0:r.describe,n[t][o].config=r==null?void 0:r.config,n[t][o].update=r==null?void 0:r.update),e==="delete"&&n[t].splice(o,1),a.setItem(N,n)},useTheme(e){this.currentConfigId=e,a.setItem(w,e)},clearCurrentConfigId(){this.currentConfigId=$,a.setItem(w,$)},setLoadVantCssState(e){this.loadVantCssState=e},setIframeState(e){this.iframeState=e},setCreateRouteState(e){this.createRouteState=e},setListenSyncPathState(e){this.listenSyncPathState=e},setVariables(e){const t=this.version,n=this.userConfig[t],o=v(this.versionCurrentTheme),r=n.findIndex(i=>i.id===o.id);o.config=b(b({},o.config),e),this.updateUserConfigHandler("update",t,{index:r,theme:o})},clearVariables(e){const t=this.version,n=this.userConfig[t],o=v(this.versionCurrentTheme),r=n.findIndex(i=>i.id===e);o.config={},this.updateUserConfigHandler("update",t,{index:r,theme:o})}}}),Ne=O({props:{schemeColor:null,language:null},setup(e){const t=e,s=T(),n={Button:{colorInfo:"#1989FAFF",borderInfo:"1px solid #1989FAFF",colorError:"#ee0a24FF",borderError:"1px solid #ee0a24"}},o=T(null),r=T(null);return de(()=>{s.value=t.schemeColor==="dark"?he:null,o.value=t.language==="en-US"?null:_e,r.value=t.language==="en-US"?null:ve}),(i,l)=>(h(),D(m(Ee),{theme:s.value,"theme-overrides":n,locale:o.value,"date-locale":r.value},{default:f(()=>[p(m(pe),null,{default:f(()=>[p(m(fe),null,{default:f(()=>[p(m(me),null,{default:f(()=>[p(m(ge),null,{default:f(()=>[G(i.$slots,"default")]),_:3})]),_:3})]),_:3})]),_:3})]),_:3},8,["theme","locale","date-locale"]))}}),Oe={class:"vant-theme-header"},De={class:"vant-theme-header__top"},Me=["href"],He=["src"],$e={class:"vant-theme-header__title"},Ue={class:"vant-theme-header__subtitle"},Fe={class:"vant-theme-header__top-nav"},xe=["href"],Ge=["src"],qe={class:"vant-theme-header__link",target:"_blank"},Be={key:0,class:"vant-theme-header__version-pop"},ze=["onClick"],We=O({props:{title:null,subtitle:null,links:null,schemeColor:null,version:null,versionList:null},emits:["switch-scheme-color","switch-version"],setup(e,{emit:t}){const s=e,n=`${C}logo.png`,o=`${C}logo-dark.png`,r=`${C}light-theme.png`,i=`${C}dark-theme.png`,l=T(!1),g=T(),A=()=>{const E=!l.value,y=E?"add":"remove";document.body[`${y}EventListener`]("click",X),l.value=E},X=E=>{g.value.contains(E.target)||(l.value=!1)};return(E,y)=>(h(),_("div",Oe,[u("div",De,[u("a",{class:"vant-theme-header__logo",href:m(C)},[u("img",{src:s.schemeColor==="dark"?o:n},null,8,He),u("span",$e,V(s.title),1),u("span",Ue," \uFF08"+V(s.subtitle)+"\uFF09 ",1)],8,Me),u("ul",Fe,[(h(!0),_(q,null,B(s.links,(d,S)=>(h(),_("li",{key:S,class:"vant-theme-header__top-nav-item"},[u("a",{class:"vant-theme-header__link",target:"_blank",href:d.url},[d.lightLogo?(h(),_("img",{key:0,src:s.schemeColor==="dark"?d.lightLogo:d.darkLogo},null,8,Ge)):M("",!0)],8,xe)]))),128)),u("li",{class:"vant-theme-header__top-nav-item",onClick:y[0]||(y[0]=d=>t("switch-scheme-color"))},[u("a",qe,[s.schemeColor==="dark"?(h(),_("img",{key:0,src:r})):(h(),_("img",{key:1,src:i}))])]),u("li",{ref_key:"versionRef",ref:g,class:"vant-theme-header__top-nav-item"},[u("span",{class:"vant-theme-header__cube vant-theme-header__version",onClick:A},[Ce(V(e.version)+" ",1),p(Te,{name:"vant-theme-dropdown"},{default:f(()=>[l.value?(h(),_("div",Be,[(h(!0),_(q,null,B(s.versionList,(d,S)=>(h(),_("div",{key:S,class:Ie(["vant-theme-header__version-pop-item",{disabled:d.disabled&&e.version!==d.key,active:e.version===d.key}]),onClick:Qe=>t("switch-version",d)},V(`${d.title}\uFF08${d.subtitle}\uFF09`),11,ze))),128))])):M("",!0)]),_:1})])],512)])])]))}}),Je={class:"vant-theme-app"},Ke={class:"vant-theme-container"},lt=O({props:{app:null,header:null,router:{type:Boolean,default:!0}},emits:["switch-scheme-color","switch-version"],setup(e,{emit:t}){const s=e;return(n,o)=>(h(),D(Ne,{"scheme-color":s.app.schemeColor,language:s.app.language},{default:f(()=>[u("div",Je,[p(We,{links:s.header.links,title:s.header.title,subtitle:s.header.subtitle,"scheme-color":s.header.schemeColor,version:s.header.version,versionList:s.header.versionList,onSwitchSchemeColor:o[0]||(o[0]=r=>t("switch-scheme-color")),onSwitchVersion:o[1]||(o[1]=r=>t("switch-version",r))},null,8,["links","title","subtitle","scheme-color","version","versionList"]),u("div",Ke,[s.router?(h(),D(m(ye),{key:0})):M("",!0),G(n.$slots,"default")])])]),_:3},8,["scheme-color","language"]))}});export{lt as _,it as a,nt as b,ot as c,tt as d,c as e,st as f,at as g,z as h,et as l,rt as s,ct as u};
