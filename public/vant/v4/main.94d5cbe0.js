import{_ as v,a as U,g as R,p as M,s as D,c as Q,b as p,d as W,i as z,e as j,l as Z,f as w,h as N,j as T,k as H}from"./locales.cb654619.js";import{c as S,n as b,a as c,r as g,o as r,F as x,b as A,d as s,t as m,e as f,f as h,g as O,h as G,w as _,T as J,i as y,j as P,v as K,p as q,k as Y,l as X,m as $,q as oo,s as ao}from"./vue-libs.a3cd7f61.js";const eo={name:"VanDocNavLink",props:{base:String,item:Object},computed:{itemName(){const o=(this.item.title||this.item.name).split(" ");return`${o[0]} <span>${o.slice(1).join(" ")}</span>`},path(){return`${this.base}${this.item.path}`},active(){return this.$route.path===this.path?!0:this.item.path==="home"?this.$route.path===this.base:!1}},watch:{active(){this.scrollIntoView()}},mounted(){this.scrollIntoView()},methods:{scrollIntoView(){this.active&&this.$el&&this.$el.scrollIntoViewIfNeeded&&this.$el.scrollIntoViewIfNeeded()}}},no=["href","innerHTML"],to=["innerHTML"];function ro(o,e,a,i,t,n){const l=g("router-link");return a.item.path?(r(),S(l,{key:0,class:b({active:n.active}),to:n.path,innerHTML:n.itemName},null,8,["class","to","innerHTML"])):a.item.link?(r(),c("a",{key:1,href:a.item.link,innerHTML:n.itemName},null,8,no)):(r(),c("a",{key:2,innerHTML:n.itemName},null,8,to))}var B=v(eo,[["render",ro]]);const io={name:"VanDocNav",components:{[B.name]:B},props:{lang:String,navConfig:Array},data(){return{top:64,bottom:0}},computed:{style(){return{top:this.top+"px",bottom:this.bottom+"px"}},base(){return this.lang?`/${this.lang}/`:"/"}},created(){window.addEventListener("scroll",this.onScroll),this.onScroll()},methods:{onScroll(){const{pageYOffset:o}=window;this.top=Math.max(0,64-o)}}},co={class:"van-doc-nav__title"};function so(o,e,a,i,t,n){const l=g("van-doc-nav-link");return r(),c("div",{class:"van-doc-nav",style:O(n.style)},[(r(!0),c(x,null,A(a.navConfig,(d,u)=>(r(),c("div",{class:"van-doc-nav__group",key:u},[s("div",co,m(d.title),1),d.items?(r(!0),c(x,{key:0},A(d.items,(k,E)=>(r(),c("div",{key:E,class:"van-doc-nav__item"},[f(l,{item:k,base:n.base},null,8,["item","base"])]))),128)):h("",!0)]))),128))],4)}var lo=v(io,[["render",so]]);const po={name:"VanDocSearch",props:{lang:String,searchConfig:Object},watch:{lang(){this.initDocsearch()}},mounted(){this.initDocsearch()},methods:{initDocsearch(){this.searchConfig&&(U(()=>Promise.resolve({}),["assets/style.07d69422.css"]),U(()=>import("./index.9c94ac91.js"),[]).then(o=>{o.default({...this.searchConfig,container:"#docsearch"})}))}}},ho={id:"docsearch"};function go(o,e,a,i,t,n){return r(),c("div",ho)}var vo=v(po,[["render",go]]);const uo={name:"VanDocHeader",components:{SearchInput:vo},props:{lang:String,config:Object,versions:Array,langConfigs:Array,darkModeClass:String},data(){return{currentTheme:R(),packageVersion:M,showVersionPop:!1}},computed:{langLink(){return`#${this.$route.path.replace(this.lang,this.anotherLang.lang)}`},langLabel(){return this.anotherLang.label},anotherLang(){const o=this.langConfigs.filter(e=>e.lang!==this.lang);return o.length?o[0]:{}},searchConfig(){return this.config.searchConfig},themeImg(){return this.currentTheme==="light"?"https://b.yzcdn.cn/vant/dark-theme.svg":"https://b.yzcdn.cn/vant/light-theme.svg"}},watch:{currentTheme:{handler(o,e){window.localStorage.setItem("vantTheme",o),document.body.classList.remove(`van-doc-theme-${e}`),document.body.classList.add(`van-doc-theme-${o}`),D(o)},immediate:!0}},methods:{toggleTheme(){this.currentTheme=this.currentTheme==="light"?"dark":"light"},toggleVersionPop(){const o=!this.showVersionPop,e=o?"add":"remove";document.body[`${e}EventListener`]("click",this.checkHideVersionPop),this.showVersionPop=o},checkHideVersionPop(o){this.$refs.version.contains(o.target)||(this.showVersionPop=!1)},onSwitchLang(o){this.$router.push(this.$route.path.replace(o.from,o.to))},onSwitchVersion(o){o.link&&(location.href=o.link)}}},mo={class:"van-doc-header"},fo={class:"van-doc-row"},bo={class:"van-doc-header__top"},xo={class:"van-doc-header__logo"},yo=["src"],ko={class:"van-doc-header__title"},wo={key:0,class:"van-doc-header__subtitle"},Ao={class:"van-doc-header__top-nav"},_o=["href"],So=["src"],Co={key:1},Eo={key:0,class:"van-doc-header__top-nav-item"},Uo=["src"],To={key:1,ref:"version",class:"van-doc-header__top-nav-item"},Bo={key:0,class:"van-doc-header__version-pop"},Io=["onClick"],Fo={key:2,class:"van-doc-header__top-nav-item"},Qo=["href"];function Oo(o,e,a,i,t,n){const l=g("search-input");return r(),c("div",mo,[s("div",fo,[s("div",bo,[s("a",xo,[s("img",{src:a.config.logo},null,8,yo),s("span",ko,m(a.config.title),1),a.config.subtitle?(r(),c("span",wo,m(a.config.subtitle),1)):h("",!0)]),s("ul",Ao,[(r(!0),c(x,null,A(a.config.links,(d,u)=>(r(),c("li",{key:u,class:"van-doc-header__top-nav-item"},[s("a",{class:"van-doc-header__link",target:"_blank",href:d.url},[d.logo?(r(),c("img",{key:0,src:d.logo},null,8,So)):d.text?(r(),c("span",Co,m(d.text),1)):h("",!0)],8,_o)]))),128)),a.darkModeClass?(r(),c("li",Eo,[s("a",{class:"van-doc-header__link",target:"_blank",onClick:e[0]||(e[0]=(...d)=>n.toggleTheme&&n.toggleTheme(...d))},[s("img",{src:n.themeImg},null,8,Uo)])])):h("",!0),a.versions?(r(),c("li",To,[s("span",{class:"van-doc-header__cube van-doc-header__version",onClick:e[1]||(e[1]=(...d)=>n.toggleVersionPop&&n.toggleVersionPop(...d))},[G(m(t.packageVersion)+" ",1),f(J,{name:"van-doc-dropdown"},{default:_(()=>[t.showVersionPop?(r(),c("div",Bo,[(r(!0),c(x,null,A(a.versions,(d,u)=>(r(),c("div",{key:u,class:"van-doc-header__version-pop-item",onClick:k=>n.onSwitchVersion(d)},m(d.label),9,Io))),128))])):h("",!0)]),_:1})])],512)):h("",!0),n.langLabel&&n.langLink?(r(),c("li",Fo,[s("a",{class:"van-doc-header__cube",href:n.langLink},m(n.langLabel),9,Qo)])):h("",!0),n.searchConfig?(r(),S(l,{key:3,lang:a.lang,"search-config":n.searchConfig},null,8,["lang","search-config"])):h("",!0)])])])])}var Vo=v(uo,[["render",Oo]]);const Lo={name:"VanDocContent",computed:{currentPage(){const{path:o}=this.$route;return o?o.split("/").slice(-1)[0]:this.$route.name}},watch:{$route(o,e){e.path!==o.path&&setTimeout(()=>{this.copyAction()})}},mounted(){this.copyAction()},methods:{onClick({target:o}){["H2","H3","H4","H5"].includes(o.tagName)&&this.scrollToAnchor(o)},scrollToAnchor(o){o.id&&this.$router.push({name:this.$route.name,hash:"#"+o.id})},copyAction(){const o=document.querySelectorAll(".van-doc-card pre code");if(!(!o||!o.length))for(let e=0;e<o.length;e++){const a=o[e];let i=null;a.addEventListener("click",()=>{if(i)return;const t=a.innerText;Q(t),a.classList.add("code-copy-success"),i=setTimeout(()=>{a.classList.remove("code-copy-success"),i=null},1400)})}}}};function Ro(o,e,a,i,t,n){return r(),c("div",{class:b(["van-doc-content",`van-doc-content--${n.currentPage}`]),onClick:e[0]||(e[0]=(...l)=>n.onClick&&n.onClick(...l))},[y(o.$slots,"default")],2)}var Mo=v(Lo,[["render",Ro]]);const Do={name:"VanDocContainer",props:{hasSimulator:Boolean}};function Wo(o,e,a,i,t,n){return r(),c("div",{class:b(["van-doc-container van-doc-row",{"van-doc-container--with-simulator":a.hasSimulator}])},[y(o.$slots,"default")],2)}var zo=v(Do,[["render",Wo]]);const jo={name:"VanDocSimulator",props:{src:String},data(){return{scrollTop:window.scrollY,windowHeight:window.innerHeight}},computed:{isFixed(){return this.scrollTop>60},simulatorStyle(){return{height:Math.min(640,this.windowHeight-90)+"px"}}},mounted(){window.addEventListener("scroll",()=>{this.scrollTop=window.scrollY}),window.addEventListener("resize",()=>{this.windowHeight=window.innerHeight})}},Zo=["src"];function No(o,e,a,i,t,n){return r(),c("div",{class:b(["van-doc-simulator",{"van-doc-simulator-fixed":n.isFixed}])},[s("iframe",{ref:"iframe",src:a.src,style:O(n.simulatorStyle),frameborder:"0"},null,12,Zo)],2)}var Ho=v(jo,[["render",No]]);const Go={name:"VanDoc",components:{DocNav:lo,DocHeader:Vo,DocContent:Mo,DocContainer:zo,DocSimulator:Ho},props:{lang:String,versions:Array,simulator:String,langConfigs:Array,hasSimulator:Boolean,darkModeClass:String,config:{type:Object,required:!0},base:{type:String,default:""}},emits:["switch-version"],watch:{$route(){this.setNav()}},created(){this.setNav(),this.keyboardHandler()},methods:{setNav(){const{nav:o}=this.config,e=o.reduce((t,n)=>t.concat(n.items),[]),a=this.$route.path.split("/").pop();let i;for(let t=0,n=e.length;t<n;t++)if(e[t].path===a){i=t;break}this.leftNav=e[i-1],this.rightNav=e[i+1]},keyboardNav(o){if(/win(32|64)/.test(navigator.userAgent.toLocaleLowerCase()))return;const e=o==="prev"?this.leftNav:this.rightNav;e.path&&this.$router.push(this.base+e.path)},keyboardHandler(){window.addEventListener("keyup",o=>{switch(o.keyCode){case 37:this.keyboardNav("prev");break;case 39:this.keyboardNav("next");break}})}}},Jo={class:"van-doc"};function Po(o,e,a,i,t,n){const l=g("doc-header"),d=g("doc-nav"),u=g("doc-content"),k=g("doc-container"),E=g("doc-simulator");return r(),c("div",Jo,[f(l,{lang:a.lang,config:a.config,versions:a.versions,"lang-configs":a.langConfigs,"dark-mode-class":a.darkModeClass,onSwitchVersion:e[0]||(e[0]=L=>o.$emit("switch-version",L))},null,8,["lang","config","versions","lang-configs","dark-mode-class"]),f(d,{lang:a.lang,"nav-config":a.config.nav},null,8,["lang","nav-config"]),f(k,{"has-simulator":a.hasSimulator},{default:_(()=>[f(u,null,{default:_(()=>[y(o.$slots,"default")]),_:3})]),_:3},8,["has-simulator"]),a.hasSimulator?(r(),S(E,{key:0,src:a.simulator},null,8,["src"])):h("",!0)])}var Ko=v(Go,[["render",Po]]);const qo={components:{VanDoc:Ko},data(){return{hasSimulator:!0,darkModeClass:p.site.darkModeClass}},computed:{simulator(){var e,a;return(e=p.site.simulator)!=null&&e.url?(a=p.site.simulator)==null?void 0:a.url:`${location.pathname.replace(/\/index(\.html)?/,"/")}mobile.html${location.hash}`},lang(){const{lang:o}=this.$route.meta;return o||""},langConfigs(){const{locales:o={}}=p.site;return Object.keys(o).map(e=>({lang:e,label:o[e].langLabel||""}))},config(){const{locales:o}=p.site;return o?o[this.lang]:p.site},versions(){return p.site.versions||null}},watch:{"$route.path"(){this.setTitleAndToggleSimulator()},lang(o){W(o),this.setTitleAndToggleSimulator()},config:{handler(o){o&&this.setTitleAndToggleSimulator()},immediate:!0}},mounted(){this.$route.hash&&this.$nextTick(()=>{const o=document.querySelector(this.$route.hash);o&&o.scrollIntoView()})},methods:{setTitleAndToggleSimulator(){let{title:o}=this.config;const a=this.config.nav.reduce((i,t)=>[...i,...t.items],[]).find(i=>i.path===this.$route.meta.name);a&&a.title?o=a.title+" - "+o:this.config.description&&(o+=` - ${this.config.description}`),document.title=o,this.hasSimulator=!(p.site.hideSimulator||this.config.hideSimulator||a&&a.hideSimulator)}}},Yo={class:"app"};function Xo(o,e,a,i,t,n){const l=g("router-view"),d=g("van-doc");return r(),c("div",Yo,[n.config?(r(),S(d,{key:0,lang:n.lang,config:n.config,versions:n.versions,simulator:n.simulator,"has-simulator":t.hasSimulator,"lang-configs":n.langConfigs,"dark-mode-class":t.darkModeClass},{default:_(()=>[f(l)]),_:1},8,["lang","config","versions","simulator","has-simulator","lang-configs","dark-mode-class"])):h("",!0)])}var $o=v(qo,[["render",Xo]]);const oa={name:"DemoPlayground",props:{originCode:String,codeSnippet:String,transform:Boolean,compact:Boolean,inline:Boolean},data(){return{showSource:!1,copyStatus:"ready"}},methods:{unescape,toggleSource(){this.showSource=!this.showSource},copySourceCode(){Q(unescape(this.originCode)),this.copyStatus="copied",setTimeout(()=>{this.copyStatus="ready"},2e3)}}},aa=o=>(q("data-v-356bb874"),o=o(),Y(),o),ea={class:"demo-playground--code"},na={class:"demo-playground--code--actions"},ta=aa(()=>s("span",null,null,-1)),ra=["data-status"],ia=["innerHTML"];function ca(o,e,a,i,t,n){return r(),c("div",{class:b({"demo-playground":!a.inline,transform:a.transform})},[a.inline?y(o.$slots,"default",{key:0},void 0,!0):(r(),c(x,{key:1},[s("div",{class:b(["demo-playground--previewer",{compact:a.compact}])},[y(o.$slots,"default",{},void 0,!0)],2),s("div",ea,[s("div",na,[ta,s("button",{title:"Copy source code",class:"action-icon",role:"copy","data-status":t.copyStatus,onClick:e[0]||(e[0]=(...l)=>n.copySourceCode&&n.copySourceCode(...l))},null,8,ra),s("button",{title:"Toggle source code panel",class:"action-icon",role:"source",onClick:e[1]||(e[1]=(...l)=>n.toggleSource&&n.toggleSource(...l))})]),P(s("div",{innerHTML:n.unescape(a.codeSnippet),class:"demo-playground--code--content"},null,8,ia),[[K,t.showSource]])])],64))],2)}var I=v(oa,[["render",ca],["__scopeId","data-v-356bb874"]]);z&&location.replace("mobile.html"+location.hash);const{locales:V,defaultLang:da}=p.site;j(da);function sa(o){if(o.indexOf("_")!==-1){const e=o.split("_"),a=e.shift();return{component:`${T(a)}`,lang:e.join("-")}}return{component:`${T(o)}`,lang:""}}function la(o){const e=o.path.split("/")[1];return Object.keys(V).indexOf(e)!==-1?e:H()}function pa(){const o=[],e=Object.keys(w);V?o.push({name:"notFound",path:"/:path(.*)+",redirect:i=>({name:la(i)})}):o.push({name:"notFound",path:"/:path(.*)+",redirect:{name:"home"}});function a(i,t){o.push({name:t||"home",path:`/${t||""}`,component:i,meta:{lang:t}})}return e.forEach(i=>{const{component:t,lang:n}=sa(i);t==="home"&&a(w[i],n),n?o.push({name:`${n}/${t}`,path:`/${n}/${t}`,component:w[i],meta:{lang:n,name:t}}):o.push({name:`${t}`,path:`/${t}`,component:w[i],meta:{name:t}})}),o}const C=X({history:$(),routes:pa(),scrollBehavior(o){return o.hash?{el:o.hash}:{top:0}}});C.afterEach(()=>{oo(N)});var F;((F=p.site.simulator)==null?void 0:F.syncPathFromSimulator)!==!1&&Z(C);window.vueRouter=C;window.app=ao($o).use(C).component(I.name,I);setTimeout(()=>{window.app.mount("#app")},0);
