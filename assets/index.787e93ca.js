import"./modulepreload-polyfill.b7f2da20.js";import{d as p,o as l,c as h,u as d,R as f,a as v,b as E,e as R,f as P}from"./vendor.d369e1fc.js";const L=p({setup(c){return(s,r)=>(l(),h(d(f)))}}),k="modulepreload",i={},w="/vant-theme/",n=function(s,r){return!r||r.length===0?s():Promise.all(r.map(e=>{if(e=`${w}${e}`,e in i)return;i[e]=!0;const o=e.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${u}`))return;const t=document.createElement("link");if(t.rel=o?"stylesheet":k,o||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),o)return new Promise((m,_)=>{t.addEventListener("load",m),t.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())},y=v({history:E("/vant-theme/"),routes:[{path:"/",redirect:"/",component:()=>n(()=>import("./index.36d7f26d.js"),["assets/index.36d7f26d.js","assets/vendor.d369e1fc.js","assets/constant.150fe093.js","assets/Space.37d7facd.js","assets/context.cd400238.js","assets/Button.e1b1c885.js","assets/Layout.37cb8844.js"]),children:[{path:"",component:()=>n(()=>import("./index.c7bb033e.js"),["assets/index.c7bb033e.js","assets/vendor.d369e1fc.js","assets/constant.150fe093.js","assets/Button.e1b1c885.js"])},{path:"theme",name:"ThemeRouter",component:()=>n(()=>import("./theme.ccf8c125.js"),["assets/theme.ccf8c125.js","assets/vendor.d369e1fc.js","assets/Button.e1b1c885.js","assets/index.2f49c993.js","assets/context.cd400238.js","assets/constant.150fe093.js","assets/index.22238fa8.js","assets/Space.37d7facd.js"])},{path:"preview",name:"PreviewRouter",component:()=>n(()=>import("./preview.bebadc0e.js"),["assets/preview.bebadc0e.js","assets/preview.56d6f599.css","assets/vendor.d369e1fc.js","assets/index.2f49c993.js","assets/Button.e1b1c885.js","assets/context.cd400238.js","assets/constant.150fe093.js","assets/index.22238fa8.js","assets/Layout.37cb8844.js"])}]}]});const a=R(L);a.use(P());a.use(y);a.mount("#app");
