import{Y as g,G as $,s as H,m as R,f as B,a as j}from"./use-translate.8b8ccbb1.js";import{q as b,X as W,z as F,r as O,U as N,o as v,a as L,e as w,w as y,F as E,b as A,j as z,d as I,B as C}from"./vue-libs.bf80eadf.js";import{c as p}from"./index.65398435.js";const _=g&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,f={event:"event",observer:"observer"};function m(r,t){if(!r.length)return;const e=r.indexOf(t);if(e>-1)return r.splice(e,1)}function S(r,t){if(r.tagName!=="IMG"||!r.getAttribute("data-srcset"))return;let e=r.getAttribute("data-srcset");const i=r.parentNode.offsetWidth*t;let o,n,a;e=e.trim().split(",");const c=e.map(h=>(h=h.trim(),o=h.lastIndexOf(" "),o===-1?(n=h,a=999998):(n=h.substr(0,o),a=parseInt(h.substr(o+1,h.length-o-2),10)),[a,n]));c.sort((h,u)=>{if(h[0]<u[0])return 1;if(h[0]>u[0])return-1;if(h[0]===u[0]){if(u[1].indexOf(".webp",u[1].length-5)!==-1)return 1;if(h[1].indexOf(".webp",h[1].length-5)!==-1)return-1}return 0});let d="",l;for(let h=0;h<c.length;h++){l=c[h],d=l[1];const u=c[h+1];if(u&&u[0]<i){d=l[1];break}else if(!u){d=l[1];break}}return d}const U=(r=1)=>g&&window.devicePixelRatio||r;function q(){if(!g)return!1;let r=!0;try{const t=document.createElement("canvas");t.getContext&&t.getContext("2d")&&(r=t.toDataURL("image/webp").indexOf("data:image/webp")===0)}catch{r=!1}return r}function V(r,t){let e=null,s=0;return function(...i){if(e)return;const o=Date.now()-s,n=()=>{s=Date.now(),e=!1,r.apply(this,i)};o>=t?n():e=setTimeout(n,t)}}function P(r,t,e){r.addEventListener(t,e,{capture:!1,passive:!0})}function G(r,t,e){r.removeEventListener(t,e,!1)}const x=(r,t,e)=>{const s=new Image;if(!r||!r.src)return e(new Error("image src is required"));s.src=r.src,r.cors&&(s.crossOrigin=r.cors),s.onload=()=>t({naturalHeight:s.naturalHeight,naturalWidth:s.naturalWidth,src:s.src}),s.onerror=i=>e(i)};class Q{constructor({max:t}){this.options={max:t||100},this.caches=[]}has(t){return this.caches.indexOf(t)>-1}add(t){this.has(t)||(this.caches.push(t),this.caches.length>this.options.max&&this.free())}free(){this.caches.shift()}}class X{constructor({el:t,src:e,error:s,loading:i,bindType:o,$parent:n,options:a,cors:c,elRenderer:d,imageCache:l}){this.el=t,this.src=e,this.error=s,this.loading=i,this.bindType=o,this.attempt=0,this.cors=c,this.naturalHeight=0,this.naturalWidth=0,this.options=a,this.$parent=n,this.elRenderer=d,this.imageCache=l,this.performanceData={loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}initState(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}record(t){this.performanceData[t]=Date.now()}update({src:t,loading:e,error:s}){const i=this.src;this.src=t,this.loading=e,this.error=s,this.filter(),i!==this.src&&(this.attempt=0,this.initState())}checkInView(){const t=$(this.el);return t.top<window.innerHeight*this.options.preLoad&&t.bottom>this.options.preLoadTop&&t.left<window.innerWidth*this.options.preLoad&&t.right>0}filter(){Object.keys(this.options.filter).forEach(t=>{this.options.filter[t](this,this.options)})}renderLoading(t){this.state.loading=!0,x({src:this.loading,cors:this.cors},()=>{this.render("loading",!1),this.state.loading=!1,t()},()=>{t(),this.state.loading=!1})}load(t=H){if(this.attempt>this.options.attempt-1&&this.state.error){t();return}if(!(this.state.rendered&&this.state.loaded)){if(this.imageCache.has(this.src))return this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,t();this.renderLoading(()=>{var e,s;this.attempt++,(s=(e=this.options.adapter).beforeLoad)==null||s.call(e,this,this.options),this.record("loadStart"),x({src:this.src,cors:this.cors},i=>{this.naturalHeight=i.naturalHeight,this.naturalWidth=i.naturalWidth,this.state.loaded=!0,this.state.error=!1,this.record("loadEnd"),this.render("loaded",!1),this.state.rendered=!0,this.imageCache.add(this.src),t()},i=>{!this.options.silent&&console.error(i),this.state.error=!0,this.state.loaded=!1,this.render("error",!1)})})}}render(t,e){this.elRenderer(this,t,e)}performance(){let t="loading",e=0;return this.state.loaded&&(t="loaded",e=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:e}}$destroy(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}const T="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Y=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],J={rootMargin:"0px",threshold:0};function K(){return class{constructor({preLoad:t,error:e,throttleWait:s,preLoadTop:i,dispatchEvent:o,loading:n,attempt:a,silent:c=!0,scale:d,listenEvents:l,filter:h,adapter:u,observer:k,observerOptions:D}){this.mode=f.event,this.listeners=[],this.targetIndex=0,this.targets=[],this.options={silent:c,dispatchEvent:!!o,throttleWait:s||200,preLoad:t||1.3,preLoadTop:i||0,error:e||T,loading:n||T,attempt:a||3,scale:d||U(d),ListenEvents:l||Y,supportWebp:q(),filter:h||{},adapter:u||{},observer:!!k,observerOptions:D||J},this.initEvent(),this.imageCache=new Q({max:200}),this.lazyLoadHandler=V(this.lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?f.observer:f.event)}config(t={}){Object.assign(this.options,t)}performance(){return this.listeners.map(t=>t.performance())}addLazyBox(t){this.listeners.push(t),g&&(this.addListenerTarget(window),this.observer&&this.observer.observe(t.el),t.$el&&t.$el.parentNode&&this.addListenerTarget(t.$el.parentNode))}add(t,e,s){if(this.listeners.some(n=>n.el===t))return this.update(t,e),b(this.lazyLoadHandler);const i=this.valueFormatter(e.value);let{src:o}=i;b(()=>{o=S(t,this.options.scale)||o,this.observer&&this.observer.observe(t);const n=Object.keys(e.modifiers)[0];let a;n&&(a=s.context.$refs[n],a=a?a.$el||a:document.getElementById(n)),a||(a=R(t));const c=new X({bindType:e.arg,$parent:a,el:t,src:o,loading:i.loading,error:i.error,cors:i.cors,elRenderer:this.elRenderer.bind(this),options:this.options,imageCache:this.imageCache});this.listeners.push(c),g&&(this.addListenerTarget(window),this.addListenerTarget(a)),this.lazyLoadHandler(),b(()=>this.lazyLoadHandler())})}update(t,e,s){const i=this.valueFormatter(e.value);let{src:o}=i;o=S(t,this.options.scale)||o;const n=this.listeners.find(a=>a.el===t);n?n.update({src:o,error:i.error,loading:i.loading}):this.add(t,e,s),this.observer&&(this.observer.unobserve(t),this.observer.observe(t)),this.lazyLoadHandler(),b(()=>this.lazyLoadHandler())}remove(t){if(!t)return;this.observer&&this.observer.unobserve(t);const e=this.listeners.find(s=>s.el===t);e&&(this.removeListenerTarget(e.$parent),this.removeListenerTarget(window),m(this.listeners,e),e.$destroy())}removeComponent(t){!t||(m(this.listeners,t),this.observer&&this.observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this.removeListenerTarget(t.$el.parentNode),this.removeListenerTarget(window))}setMode(t){!_&&t===f.observer&&(t=f.event),this.mode=t,t===f.event?(this.observer&&(this.listeners.forEach(e=>{this.observer.unobserve(e.el)}),this.observer=null),this.targets.forEach(e=>{this.initListen(e.el,!0)})):(this.targets.forEach(e=>{this.initListen(e.el,!1)}),this.initIntersectionObserver())}addListenerTarget(t){if(!t)return;let e=this.targets.find(s=>s.el===t);return e?e.childrenCount++:(e={el:t,id:++this.targetIndex,childrenCount:1,listened:!0},this.mode===f.event&&this.initListen(e.el,!0),this.targets.push(e)),this.targetIndex}removeListenerTarget(t){this.targets.forEach((e,s)=>{e.el===t&&(e.childrenCount--,e.childrenCount||(this.initListen(e.el,!1),this.targets.splice(s,1),e=null))})}initListen(t,e){this.options.ListenEvents.forEach(s=>(e?P:G)(t,s,this.lazyLoadHandler))}initEvent(){this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=(t,e)=>{this.Event.listeners[t]||(this.Event.listeners[t]=[]),this.Event.listeners[t].push(e)},this.$once=(t,e)=>{const s=(...i)=>{this.$off(t,s),e.apply(this,i)};this.$on(t,s)},this.$off=(t,e)=>{if(!e){if(!this.Event.listeners[t])return;this.Event.listeners[t].length=0;return}m(this.Event.listeners[t],e)},this.$emit=(t,e,s)=>{!this.Event.listeners[t]||this.Event.listeners[t].forEach(i=>i(e,s))}}lazyLoadHandler(){const t=[];this.listeners.forEach(e=>{(!e.el||!e.el.parentNode)&&t.push(e),!!e.checkInView()&&e.load()}),t.forEach(e=>{m(this.listeners,e),e.$destroy()})}initIntersectionObserver(){!_||(this.observer=new IntersectionObserver(this.observerHandler.bind(this),this.options.observerOptions),this.listeners.length&&this.listeners.forEach(t=>{this.observer.observe(t.el)}))}observerHandler(t){t.forEach(e=>{e.isIntersecting&&this.listeners.forEach(s=>{if(s.el===e.target){if(s.state.loaded)return this.observer.unobserve(s.el);s.load()}})})}elRenderer(t,e,s){if(!t.el)return;const{el:i,bindType:o}=t;let n;switch(e){case"loading":n=t.loading;break;case"error":n=t.error;break;default:({src:n}=t);break}if(o?i.style[o]='url("'+n+'")':i.getAttribute("src")!==n&&i.setAttribute("src",n),i.setAttribute("lazy",e),this.$emit(e,t,s),this.options.adapter[e]&&this.options.adapter[e](t,this.options),this.options.dispatchEvent){const a=new CustomEvent(e,{detail:t});i.dispatchEvent(a)}}valueFormatter(t){let e=t,{loading:s,error:i}=this.options;return B(t)&&({src:e}=t,s=t.loading||this.options.loading,i=t.error||this.options.error),{src:e,loading:s,error:i}}}}var Z=r=>({props:{tag:{type:String,default:"div"}},emits:["show"],render(){return W(this.tag,this.show&&this.$slots.default?this.$slots.default():null)},data(){return{el:null,state:{loaded:!1},show:!1}},mounted(){this.el=this.$el,r.addLazyBox(this),r.lazyLoadHandler()},beforeUnmount(){r.removeComponent(this)},methods:{checkInView(){const t=$(this.$el);return g&&t.top<window.innerHeight*r.options.preLoad&&t.bottom>0&&t.left<window.innerWidth*r.options.preLoad&&t.right>0},load(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)},destroy(){return this.$destroy}}});const M={selector:"img"};class tt{constructor({el:t,binding:e,vnode:s,lazy:i}){this.el=null,this.vnode=s,this.binding=e,this.options={},this.lazy=i,this.queue=[],this.update({el:t,binding:e})}update({el:t,binding:e}){this.el=t,this.options=Object.assign({},M,e.value),this.getImgs().forEach(i=>{this.lazy.add(i,Object.assign({},this.binding,{value:{src:"dataset"in i?i.dataset.src:i.getAttribute("data-src"),error:("dataset"in i?i.dataset.error:i.getAttribute("data-error"))||this.options.error,loading:("dataset"in i?i.dataset.loading:i.getAttribute("data-loading"))||this.options.loading}}),this.vnode)})}getImgs(){return Array.from(this.el.querySelectorAll(this.options.selector))}clear(){this.getImgs().forEach(e=>this.lazy.remove(e)),this.vnode=null,this.binding=null,this.lazy=null}}class et{constructor({lazy:t}){this.lazy=t,this.queue=[]}bind(t,e,s){const i=new tt({el:t,binding:e,vnode:s,lazy:this.lazy});this.queue.push(i)}update(t,e,s){const i=this.queue.find(o=>o.el===t);!i||i.update({el:t,binding:e,vnode:s})}unbind(t){const e=this.queue.find(s=>s.el===t);!e||(e.clear(),m(this.queue,e))}}var st=r=>({props:{src:[String,Object],tag:{type:String,default:"img"}},render(t){return t(this.tag,{attrs:{src:this.renderSrc}},this.$slots.default)},data(){return{el:null,options:{src:"",error:"",loading:"",attempt:r.options.attempt},state:{loaded:!1,error:!1,attempt:0},renderSrc:""}},watch:{src(){this.init(),r.addLazyBox(this),r.lazyLoadHandler()}},created(){this.init(),this.renderSrc=this.options.loading},mounted(){this.el=this.$el,r.addLazyBox(this),r.lazyLoadHandler()},beforeUnmount(){r.removeComponent(this)},methods:{init(){const{src:t,loading:e,error:s}=r.valueFormatter(this.src);this.state.loaded=!1,this.options.src=t,this.options.error=s,this.options.loading=e,this.renderSrc=this.options.loading},checkInView(){const t=$(this.$el);return t.top<window.innerHeight*r.options.preLoad&&t.bottom>0&&t.left<window.innerWidth*r.options.preLoad&&t.right>0},load(t=H){if(this.state.attempt>this.options.attempt-1&&this.state.error){t();return}const{src:e}=this.options;x({src:e},({src:s})=>{this.renderSrc=s,this.state.loaded=!0},()=>{this.state.attempt++,this.renderSrc=this.options.error,this.state.error=!0})}}});const it={install(r,t={}){const e=K(),s=new e(t),i=new et({lazy:s});r.config.globalProperties.$Lazyload=s,t.lazyComponent&&r.component("LazyComponent",Z(s)),t.lazyImage&&r.component("LazyImage",st(s)),r.directive("lazy",{beforeMount:s.add.bind(s),updated:s.update.bind(s),unmounted:s.remove.bind(s)}),r.directive("lazy-container",{beforeMount:i.bind.bind(i),updated:i.update.bind(i),unmounted:i.unbind.bind(i)})}};const ht=F({setup(r){window.app&&window.app.use(it,{lazyComponent:!0});const t=j({"zh-CN":{title2:"\u80CC\u666F\u56FE\u61D2\u52A0\u8F7D",title3:"\u61D2\u52A0\u8F7D\u6A21\u5757"},"en-US":{title2:"Lazyload Background Image",title3:"Lazyload Component"}}),e=[p("apple-1.jpeg"),p("apple-2.jpeg"),p("apple-3.jpeg"),p("apple-4.jpeg")],s=[p("apple-5.jpeg"),p("apple-6.jpeg")],i=[p("apple-8.jpeg"),p("apple-7.jpeg")];return(o,n)=>{const a=O("demo-block"),c=O("lazy-component"),d=N("lazy");return v(),L(E,null,[w(a,{title:C(t)("basicUsage")},{default:y(()=>[(v(),L(E,null,A(e,l=>z(I("img",{key:l}),[[d,l]])),64))]),_:1},8,["title"]),w(a,{title:C(t)("title2")},{default:y(()=>[(v(),L(E,null,A(s,l=>z(I("div",{key:l}),[[d,l,"background-image"]])),64))]),_:1},8,["title"]),w(a,{title:C(t)("title3")},{default:y(()=>[w(c,null,{default:y(()=>[(v(),L(E,null,A(i,l=>z(I("img",{key:l}),[[d,l]])),64))]),_:1})]),_:1},8,["title"])],64)}}});export{ht as default};
