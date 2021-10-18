import{c as he,m as we,e as ye,u as be}from"./use-translate.dc7c72f2.js";import{m as V,c as ge,n as xe,t as W,u as Oe,w as Ee}from"./with-install.eb95b9ca.js";import{f as Ce}from"./constant.4d85ecb9.js";import{I as ke}from"./index.c4602e68.js";import{P as ee}from"./index.87835e2a.js";import{z as te,D as R,G as je,O as Pe,x as Ae,e as d,J as Se,F as Y,q as Te,r as De,o as oe,a as ne,w as h,B as f,h as F,t as I,d as re,b as Le}from"./vue-libs.84090ae0.js";import{u as Me}from"./index.aa1c87b2.js";import{B as N}from"./index.2c966ebf.js";import{F as Be}from"./index.f4f8e2bf.js";import{P as Re}from"./index.9c0c9d9a.js";import{G as Fe,a as Ie}from"./index.236f5617.js";import{T as Ne}from"./function-call.aae93e7f.js";import"./interceptor.388efbea.js";import"./use-expose.5b468dfd.js";import"./use-touch.89cea093.js";import"./index.5c401e78.js";import"./utils.39620306.js";import"./index.1b2e67e6.js";import"./use-lazy-render.98b46970.js";import"./on-popup-reopen.6401152e.js";import"./index.78843199.js";import"./use-route.c396a838.js";import"./index.5c5fe2f2.js";import"./index.e5928329.js";import"./index.e89b0366.js";import"./useParent.b8372ce7.js";import"./Picker.6189bd10.js";import"./deep-clone.a3611cb8.js";import"./useChildren.adf766a6.js";import"./mount-component.21d1f7e5.js";function $(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function C(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ae(e){var t=C(e),o=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:o,scrollTop:n}}function ie(e){var t=C(e).Element;return e instanceof t||e instanceof Element}function j(e){var t=C(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ue(e){if(typeof ShadowRoot=="undefined")return!1;var t=C(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function We(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function $e(e){return e===C(e)||!j(e)?ae(e):We(e)}function P(e){return e?(e.nodeName||"").toLowerCase():null}function _(e){return((ie(e)?e.ownerDocument:e.document)||window.document).documentElement}function _e(e){return $(_(e)).left+ae(e).scrollLeft}function T(e){return C(e).getComputedStyle(e)}function G(e){var t=T(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function ze(e,t,o){o===void 0&&(o=!1);var n=_(t),r=$(e),a=j(t),l={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(a||!a&&!o)&&((P(t)!=="body"||G(n))&&(l=$e(t)),j(t)?(i=$(t),i.x+=t.clientLeft,i.y+=t.clientTop):n&&(i.x=_e(n))),{x:r.left+l.scrollLeft-i.x,y:r.top+l.scrollTop-i.y,width:r.width,height:r.height}}function Xe(e){var t=$(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function J(e){return P(e)==="html"?e:e.assignedSlot||e.parentNode||(Ue(e)?e.host:null)||_(e)}function se(e){return["html","body","#document"].indexOf(P(e))>=0?e.ownerDocument.body:j(e)&&G(e)?e:se(J(e))}function z(e,t){var o;t===void 0&&(t=[]);var n=se(e),r=n===((o=e.ownerDocument)==null?void 0:o.body),a=C(n),l=r?[a].concat(a.visualViewport||[],G(n)?n:[]):n,i=t.concat(l);return r?i:i.concat(z(J(l)))}function qe(e){return["table","td","th"].indexOf(P(e))>=0}function ce(e){return!j(e)||T(e).position==="fixed"?null:e.offsetParent}function He(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&j(e)){var n=T(e);if(n.position==="fixed")return null}for(var r=J(e);j(r)&&["html","body"].indexOf(P(r))<0;){var a=T(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function ue(e){for(var t=C(e),o=ce(e);o&&qe(o)&&T(o).position==="static";)o=ce(o);return o&&(P(o)==="html"||P(o)==="body"&&T(o).position==="static")?t:o||He(e)||t}var U="top",K="bottom",X="right",M="left",Ve="auto",Ye=[U,K,X,M],le="start",fe="end",Ge=[].concat(Ye,[Ve]).reduce(function(e,t){return e.concat([t,t+"-"+le,t+"-"+fe])},[]),Je="beforeRead",Ke="read",Qe="afterRead",Ze="beforeMain",et="main",tt="afterMain",ot="beforeWrite",nt="write",rt="afterWrite",at=[Je,Ke,Qe,Ze,et,tt,ot,nt,rt];function it(e){var t=new Map,o=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function r(a){o.add(a.name);var l=[].concat(a.requires||[],a.requiresIfExists||[]);l.forEach(function(i){if(!o.has(i)){var u=t.get(i);u&&r(u)}}),n.push(a)}return e.forEach(function(a){o.has(a.name)||r(a)}),n}function st(e){var t=it(e);return at.reduce(function(o,n){return o.concat(t.filter(function(r){return r.phase===n}))},[])}function ct(e){var t;return function(){return t||(t=new Promise(function(o){Promise.resolve().then(function(){t=void 0,o(e())})})),t}}function Q(e){return e.split("-")[0]}function ut(e){var t=e.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(t).map(function(o){return t[o]})}var q=Math.round;function lt(e){return e.split("-")[1]}function ft(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function pt(e){var t=e.reference,o=e.element,n=e.placement,r=n?Q(n):null,a=n?lt(n):null,l=t.x+t.width/2-o.width/2,i=t.y+t.height/2-o.height/2,u;switch(r){case U:u={x:l,y:t.y-o.height};break;case K:u={x:l,y:t.y+t.height};break;case X:u={x:t.x+t.width,y:i};break;case M:u={x:t.x-o.width,y:i};break;default:u={x:t.x,y:t.y}}var s=r?ft(r):null;if(s!=null){var c=s==="y"?"height":"width";switch(a){case le:u[s]=u[s]-(t[c]/2-o[c]/2);break;case fe:u[s]=u[s]+(t[c]/2-o[c]/2);break}}return u}var pe={placement:"bottom",modifiers:[],strategy:"absolute"};function de(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function dt(e){e===void 0&&(e={});var t=e,o=t.defaultModifiers,n=o===void 0?[]:o,r=t.defaultOptions,a=r===void 0?pe:r;return function(i,u,s){s===void 0&&(s=a);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},pe,a),modifiersData:{},elements:{reference:i,popper:u},attributes:{},styles:{}},p=[],g=!1,x={state:c,setOptions:function(y){m(),c.options=Object.assign({},a,c.options,y),c.scrollParents={reference:ie(i)?z(i):i.contextElement?z(i.contextElement):[],popper:z(u)};var b=st(ut([].concat(n,c.options.modifiers)));return c.orderedModifiers=b.filter(function(O){return O.enabled}),k(),x.update()},forceUpdate:function(){if(!g){var y=c.elements,b=y.reference,O=y.popper;if(!!de(b,O)){c.rects={reference:ze(b,ue(O),c.options.strategy==="fixed"),popper:Xe(O)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(Z){return c.modifiersData[Z.name]=Object.assign({},Z.data)});for(var w=0;w<c.orderedModifiers.length;w++){if(c.reset===!0){c.reset=!1,w=-1;continue}var E=c.orderedModifiers[w],A=E.fn,L=E.options,S=L===void 0?{}:L,ve=E.name;typeof A=="function"&&(c=A({state:c,options:S,name:ve,instance:x})||c)}}}},update:ct(function(){return new Promise(function(v){x.forceUpdate(),v(c)})}),destroy:function(){m(),g=!0}};if(!de(i,u))return x;x.setOptions(s).then(function(v){!g&&s.onFirstUpdate&&s.onFirstUpdate(v)});function k(){c.orderedModifiers.forEach(function(v){var y=v.name,b=v.options,O=b===void 0?{}:b,w=v.effect;if(typeof w=="function"){var E=w({state:c,name:y,instance:x,options:O}),A=function(){};p.push(E||A)}})}function m(){p.forEach(function(v){return v()}),p=[]}return x}}var H={passive:!0};function mt(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,a=r===void 0?!0:r,l=n.resize,i=l===void 0?!0:l,u=C(t.elements.popper),s=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&s.forEach(function(c){c.addEventListener("scroll",o.update,H)}),i&&u.addEventListener("resize",o.update,H),function(){a&&s.forEach(function(c){c.removeEventListener("scroll",o.update,H)}),i&&u.removeEventListener("resize",o.update,H)}}var vt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:mt,data:{}};function ht(e){var t=e.state,o=e.name;t.modifiersData[o]=pt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var wt={name:"popperOffsets",enabled:!0,phase:"read",fn:ht,data:{}},yt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function bt(e){var t=e.x,o=e.y,n=window,r=n.devicePixelRatio||1;return{x:q(q(t*r)/r)||0,y:q(q(o*r)/r)||0}}function me(e){var t,o=e.popper,n=e.popperRect,r=e.placement,a=e.offsets,l=e.position,i=e.gpuAcceleration,u=e.adaptive,s=e.roundOffsets,c=s===!0?bt(a):typeof s=="function"?s(a):a,p=c.x,g=p===void 0?0:p,x=c.y,k=x===void 0?0:x,m=a.hasOwnProperty("x"),v=a.hasOwnProperty("y"),y=M,b=U,O=window;if(u){var w=ue(o),E="clientHeight",A="clientWidth";w===C(o)&&(w=_(o),T(w).position!=="static"&&(E="scrollHeight",A="scrollWidth")),w=w,r===U&&(b=K,k-=w[E]-n.height,k*=i?1:-1),r===M&&(y=X,g-=w[A]-n.width,g*=i?1:-1)}var L=Object.assign({position:l},u&&yt);if(i){var S;return Object.assign({},L,(S={},S[b]=v?"0":"",S[y]=m?"0":"",S.transform=(O.devicePixelRatio||1)<2?"translate("+g+"px, "+k+"px)":"translate3d("+g+"px, "+k+"px, 0)",S))}return Object.assign({},L,(t={},t[b]=v?k+"px":"",t[y]=m?g+"px":"",t.transform="",t))}function gt(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=n===void 0?!0:n,a=o.adaptive,l=a===void 0?!0:a,i=o.roundOffsets,u=i===void 0?!0:i,s={placement:Q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,me(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:u})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,me(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:u})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var xt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:gt,data:{}};function Ot(e){var t=e.state;Object.keys(t.elements).forEach(function(o){var n=t.styles[o]||{},r=t.attributes[o]||{},a=t.elements[o];!j(a)||!P(a)||(Object.assign(a.style,n),Object.keys(r).forEach(function(l){var i=r[l];i===!1?a.removeAttribute(l):a.setAttribute(l,i===!0?"":i)}))})}function Et(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(n){var r=t.elements[n],a=t.attributes[n]||{},l=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:o[n]),i=l.reduce(function(u,s){return u[s]="",u},{});!j(r)||!P(r)||(Object.assign(r.style,i),Object.keys(a).forEach(function(u){r.removeAttribute(u)}))})}}var Ct={name:"applyStyles",enabled:!0,phase:"write",fn:Ot,effect:Et,requires:["computeStyles"]},kt=[vt,wt,xt,Ct],jt=dt({defaultModifiers:kt});function Pt(e,t,o){var n=Q(e),r=[M,U].indexOf(n)>=0?-1:1,a=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,l=a[0],i=a[1];return l=l||0,i=(i||0)*r,[M,X].indexOf(n)>=0?{x:i,y:l}:{x:l,y:i}}function At(e){var t=e.state,o=e.options,n=e.name,r=o.offset,a=r===void 0?[0,0]:r,l=Ge.reduce(function(c,p){return c[p]=Pt(p,t.rects,a),c},{}),i=l[t.placement],u=i.x,s=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=u,t.modifiersData.popperOffsets.y+=s),t.modifiersData[n]=l}var St={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:At};const[Tt,D]=he("popover"),Dt=["show","overlay","duration","teleport","overlayStyle","overlayClass","closeOnClickOverlay"];var Lt=te({name:Tt,props:{show:Boolean,theme:V("light"),overlay:Boolean,actions:ge(),trigger:V("click"),duration:xe,showArrow:W,placement:V("bottom"),iconPrefix:String,overlayClass:Oe,overlayStyle:Object,closeOnClickAction:W,closeOnClickOverlay:W,closeOnClickOutside:W,offset:{type:Array,default:()=>[0,8]},teleport:{type:[String,Object],default:"body"}},emits:["select","touchstart","update:show"],setup(e,{emit:t,slots:o,attrs:n}){let r;const a=R(),l=R(),i=()=>a.value&&l.value?jt(a.value,l.value.popupRef.value,{placement:e.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},ye({},St,{options:{offset:e.offset}})]}):null,u=()=>{Te(()=>{!e.show||(r?r.setOptions({placement:e.placement}):r=i())})},s=m=>t("update:show",m),c=()=>{e.trigger==="click"&&s(!e.show)},p=m=>{m.stopPropagation(),t("touchstart",m)},g=(m,v)=>{m.disabled||(t("select",m,v),e.closeOnClickAction&&s(!1))},x=()=>{e.closeOnClickOutside&&(!e.overlay||e.closeOnClickOverlay)&&s(!1)},k=(m,v)=>{const{icon:y,text:b,color:O,disabled:w,className:E}=m;return d("div",{role:"menuitem",class:[D("action",{disabled:w,"with-icon":y}),E],style:{color:O},onClick:()=>g(m,v)},[y&&d(ke,{name:y,classPrefix:e.iconPrefix,class:D("action-icon")},null),d("div",{class:[D("action-text"),Ce]},[b])])};return je(u),Pe(()=>{r&&(r.destroy(),r=null)}),Ae(()=>[e.show,e.placement],u),Me(a,x,{eventName:"touchstart"}),()=>{var m;return d(Y,null,[d("span",{ref:a,class:D("wrapper"),onClick:c},[(m=o.reference)==null?void 0:m.call(o)]),d(ee,Se({ref:l,class:D([e.theme]),position:"",transition:"van-popover-zoom",lockScroll:!1,onTouchstart:p,"onUpdate:show":s},n,we(e,Dt)),{default:()=>[e.showArrow&&d("div",{class:D("arrow")},null),d("div",{role:"menu",class:D("content")},[o.default?o.default():e.actions.map(k)])]})])}}});const B=Ee(Lt);const Mt={class:"demo-popover-box"},Bt=re("div",{class:"demo-popover-refer"},null,-1),fo=te({setup(e){const t=be({"zh-CN":{actions:[{text:"\u9009\u9879\u4E00"},{text:"\u9009\u9879\u4E8C"},{text:"\u9009\u9879\u4E09"}],shortActions:[{text:"\u9009\u9879\u4E00"},{text:"\u9009\u9879\u4E8C"}],actionsWithIcon:[{text:"\u9009\u9879\u4E00",icon:"add-o"},{text:"\u9009\u9879\u4E8C",icon:"music-o"},{text:"\u9009\u9879\u4E09",icon:"more-o"}],actionsDisabled:[{text:"\u9009\u9879\u4E00",disabled:!0},{text:"\u9009\u9879\u4E8C",disabled:!0},{text:"\u9009\u9879\u4E09"}],showIcon:"\u5C55\u793A\u56FE\u6807",placement:"\u5F39\u51FA\u4F4D\u7F6E",darkTheme:"\u6DF1\u8272\u98CE\u683C",lightTheme:"\u6D45\u8272\u98CE\u683C",showPopover:"\u70B9\u51FB\u5F39\u51FA\u6C14\u6CE1",actionOptions:"\u9009\u9879\u914D\u7F6E",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",disableAction:"\u7981\u7528\u9009\u9879",choosePlacement:"\u9009\u62E9\u5F39\u51FA\u4F4D\u7F6E"},"en-US":{actions:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"}],shortActions:[{text:"Option 1"},{text:"Option 2"}],actionsWithIcon:[{text:"Option 1",icon:"add-o"},{text:"Option 2",icon:"music-o"},{text:"Option 3",icon:"more-o"}],actionsDisabled:[{text:"Option 1",disabled:!0},{text:"Option 2",disabled:!0},{text:"Option 3"}],showIcon:"Show Icon",placement:"Placement",darkTheme:"Dark Theme",lightTheme:"Light Theme",showPopover:"Show Popover",actionOptions:"Action Options",customContent:"Custom Content",disableAction:"Disable Action",choosePlacement:"Placement"}}),o=["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"],n=R({showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,customContent:!1,disableAction:!1}),r=R(!1),a=R("top"),l=u=>{setTimeout(()=>{n.value.placement=!0,a.value=u})},i=u=>Ne(u.text);return(u,s)=>{const c=De("demo-block");return oe(),ne(Y,null,[d(c,{title:f(t)("basicUsage")},{default:h(()=>[d(f(B),{show:n.value.lightTheme,"onUpdate:show":s[0]||(s[0]=p=>n.value.lightTheme=p),actions:f(t)("actions"),placement:"bottom-start",onSelect:i},{reference:h(()=>[d(f(N),{type:"primary"},{default:h(()=>[F(I(f(t)("lightTheme")),1)]),_:1})]),_:1},8,["show","actions"]),d(f(B),{show:n.value.darkTheme,"onUpdate:show":s[1]||(s[1]=p=>n.value.darkTheme=p),theme:"dark",actions:f(t)("actions"),onSelect:i},{reference:h(()=>[d(f(N),{type:"primary"},{default:h(()=>[F(I(f(t)("darkTheme")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),d(c,{title:f(t)("placement")},{default:h(()=>[d(f(Be),{"is-link":"",readonly:"",name:"picker",label:f(t)("choosePlacement"),onClick:s[2]||(s[2]=p=>r.value=!0)},null,8,["label"]),d(f(ee),{show:r.value,"onUpdate:show":s[4]||(s[4]=p=>r.value=p),round:"",position:"bottom","get-container":"body"},{default:h(()=>[re("div",Mt,[d(f(B),{show:n.value.placement,"onUpdate:show":s[3]||(s[3]=p=>n.value.placement=p),theme:"dark",actions:f(t)("shortActions"),placement:a.value,onSelect:i},{reference:h(()=>[Bt]),_:1},8,["show","actions","placement"])]),d(f(Re),{columns:o,"show-toolbar":!1,onChange:l})]),_:1},8,["show"])]),_:1},8,["title"]),d(c,{title:f(t)("actionOptions")},{default:h(()=>[d(f(B),{show:n.value.showIcon,"onUpdate:show":s[5]||(s[5]=p=>n.value.showIcon=p),actions:f(t)("actionsWithIcon"),placement:"bottom-start",onSelect:i},{reference:h(()=>[d(f(N),{type:"primary"},{default:h(()=>[F(I(f(t)("showIcon")),1)]),_:1})]),_:1},8,["show","actions"]),d(f(B),{show:n.value.disableAction,"onUpdate:show":s[6]||(s[6]=p=>n.value.disableAction=p),actions:f(t)("actionsDisabled"),onSelect:i},{reference:h(()=>[d(f(N),{type:"primary"},{default:h(()=>[F(I(f(t)("disableAction")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),d(c,{title:f(t)("customContent")},{default:h(()=>[d(f(B),{show:n.value.customContent,"onUpdate:show":s[8]||(s[8]=p=>n.value.customContent=p),placement:"top-start",onSelect:i},{reference:h(()=>[d(f(N),{type:"primary"},{default:h(()=>[F(I(f(t)("customContent")),1)]),_:1})]),default:h(()=>[d(f(Fe),{square:"",clickable:"",border:!1,"column-num":"3",style:{width:"240px"}},{default:h(()=>[(oe(),ne(Y,null,Le(6,p=>d(f(Ie),{key:p,icon:"photo-o",text:f(t)("option"),onClick:s[7]||(s[7]=g=>n.value.customContent=!1)},null,8,["text"])),64))]),_:1})]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{fo as default};
