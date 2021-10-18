import{I as r}from"./index.c4602e68.js";import{a as f,T as x}from"./index.0c87b8cc.js";import{R as u,C as c}from"./index.1950a0b0.js";import{u as z}from"./use-translate.dc7c72f2.js";import{N as F}from"./function-call.2bda93d8.js";import{z as B,D as E,r as A,o as p,c as b,w as l,e as t,B as e,a as g,b as v,d as y,t as k,F as h}from"./vue-libs.84090ae0.js";import"./with-install.eb95b9ca.js";import"./use-route.c396a838.js";import"./index.816d5fea.js";import"./use-touch.89cea093.js";import"./use-expose.5b468dfd.js";import"./on-popup-reopen.6401152e.js";import"./utils.39620306.js";import"./index.5c401e78.js";import"./useChildren.adf766a6.js";import"./useParent.b8372ce7.js";import"./constant.4d85ecb9.js";import"./interceptor.388efbea.js";import"./use-refs.af7a4653.js";import"./index.9d1c3513.js";import"./index.1b2e67e6.js";import"./mount-component.21d1f7e5.js";import"./index.87835e2a.js";import"./use-lazy-render.98b46970.js";import"./index.78843199.js";var C={name:"vant-icon",basic:["arrow","arrow-left","arrow-up","arrow-down","success","cross","plus","minus","fail","circle"],outline:["location-o","like-o","star-o","phone-o","setting-o","fire-o","coupon-o","cart-o","shopping-cart-o","cart-circle-o","friends-o","comment-o","gem-o","gift-o","point-gift-o","send-gift-o","service-o","bag-o","todo-list-o","balance-list-o","close","clock-o","question-o","passed","add-o","gold-coin-o","info-o","play-circle-o","pause-circle-o","stop-circle-o","warning-o","phone-circle-o","music-o","smile-o","thumb-circle-o","comment-circle-o","browsing-history-o","underway-o","more-o","video-o","shop-o","shop-collect-o","share-o","chat-o","smile-comment-o","vip-card-o","award-o","diamond-o","volume-o","cluster-o","wap-home-o","photo-o","gift-card-o","expand-o","medal-o","good-job-o","manager-o","label-o","bookmark-o","bill-o","hot-o","hot-sale-o","new-o","new-arrival-o","goods-collect-o","eye-o","delete-o","font-o","balance-o","refund-o","birthday-cake-o","user-o","orders-o","tv-o","envelop-o","flag-o","flower-o","filter-o","bar-chart-o","chart-trending-o","brush-o","bullhorn-o","hotel-o","cashier-o","newspaper-o","warn-o","notes-o","calendar-o","bulb-o","user-circle-o","desktop-o","apps-o","home-o","back-top","search","points","edit","qr","qr-invalid","closed-eye","down","scan","revoke","free-postage","certificate","logistics","contact","cash-back-record","after-sale","exchange","upgrade","ellipsis","description","records","sign","completed","failure","ecard-pay","peer-pay","balance-pay","credit-pay","debit-pay","cash-on-deliver","other-pay","tosend","pending-payment","paid","aim","discount","idcard","replay","shrink","shield-o","guide-o"],filled:["location","like","star","phone","setting","fire","coupon","cart","shopping-cart","cart-circle","friends","comment","gem","gift","point-gift","send-gift","service","bag","todo-list","balance-list","clear","clock","question","checked","add","gold-coin","info","play-circle","pause-circle","stop-circle","warning","phone-circle","music","smile","thumb-circle","comment-circle","browsing-history","underway","more","video","shop","shop-collect","share","chat","smile-comment","vip-card","award","diamond","volume","cluster","wap-home","photo","gift-card","expand","medal","good-job","manager","label","bookmark","bill","hot","hot-sale","new","new-arrival","goods-collect","eye","delete","font","wechat","wechat-pay","alipay","photograph","youzan-shield","umbrella-circle","bell","printer","map-marked","card","add-square","live","lock","audio","graphic","column","invitation","play","pause","stop","weapp-nav","ascending","descending","bars","wap-nav","enlarge","photo-fail","sort"]};const le=B({setup(D){function $(m){const o=document.createElement("textarea");o.value=m,o.setAttribute("readonly",""),o.style.position="absolute",o.style.left="-9999px",document.body.appendChild(o);const n=document.getSelection();if(!n)return;const a=n.rangeCount>0?n.getRangeAt(0):!1;o.select(),document.execCommand("copy"),document.body.removeChild(o),a&&(n.removeAllRanges(),n.addRange(a))}const d=z({"zh-CN":{title:"\u56FE\u6807\u5217\u8868",badge:"\u5FBD\u6807\u63D0\u793A",basic:"\u57FA\u7840\u56FE\u6807",copied:"\u590D\u5236\u6210\u529F",outline:"\u7EBF\u6846\u98CE\u683C",filled:"\u5B9E\u5E95\u98CE\u683C",demo:"\u7528\u6CD5\u793A\u4F8B",color:"\u56FE\u6807\u989C\u8272",size:"\u56FE\u6807\u5927\u5C0F"},"en-US":{title:"Icon List",badge:"Show Badge",basic:"Basic",copied:"Copied",outline:"Outline",filled:"Filled",demo:"Demo",color:"Icon Color",size:"Icon Size"}}),w=E(0),i="chat-o",j="https://b.yzcdn.cn/vant/icon-demo-1126.png",s=(m,o={})=>{let n=`<van-icon name="${m}"`;"dot"in o&&(n=`${n} ${o.dot?"dot":""}`),"badge"in o&&(n=`${n} badge="${o.badge}"`),"color"in o&&(n=`${n} color="${o.color}"`),"size"in o&&(n=`${n} size="${o.size}"`),n=`${n} />`,$(n),F({type:"success",duration:1500,className:"demo-icon-notify",message:`${d("copied")}\uFF1A${n}`})};return(m,o)=>{const n=A("demo-block");return p(),b(e(x),{active:w.value,"onUpdate:active":o[9]||(o[9]=a=>w.value=a),sticky:""},{default:l(()=>[t(e(f),{title:e(d)("demo")},{default:l(()=>[t(n,{title:e(d)("basicUsage")},{default:l(()=>[t(e(u),null,{default:l(()=>[t(e(c),{span:"6",onClick:o[0]||(o[0]=a=>s(i))},{default:l(()=>[t(e(r),{name:i})]),_:1}),t(e(c),{span:"6",onClick:o[1]||(o[1]=a=>s(j))},{default:l(()=>[t(e(r),{name:j})]),_:1})]),_:1})]),_:1},8,["title"]),t(n,{title:e(d)("badge")},{default:l(()=>[t(e(u),null,{default:l(()=>[t(e(c),{span:"6",onClick:o[2]||(o[2]=a=>s(i,{dot:!0}))},{default:l(()=>[t(e(r),{name:i,dot:""})]),_:1}),t(e(c),{span:"6",onClick:o[3]||(o[3]=a=>s(i,{badge:"9"}))},{default:l(()=>[t(e(r),{name:i,badge:"9"})]),_:1}),t(e(c),{span:"6",onClick:o[4]||(o[4]=a=>s(i,{badge:"99+"}))},{default:l(()=>[t(e(r),{name:i,badge:"99+"})]),_:1})]),_:1})]),_:1},8,["title"]),t(n,{title:e(d)("color")},{default:l(()=>[t(e(u),null,{default:l(()=>[t(e(c),{span:"6",onClick:o[5]||(o[5]=a=>s(i,{color:"#1989fa"}))},{default:l(()=>[t(e(r),{name:"cart-o",color:"#1989fa"})]),_:1}),t(e(c),{span:"6",onClick:o[6]||(o[6]=a=>s(i,{color:"#ee0a24"}))},{default:l(()=>[t(e(r),{name:"fire-o",color:"#ee0a24"})]),_:1})]),_:1})]),_:1},8,["title"]),t(n,{title:e(d)("size")},{default:l(()=>[t(e(u),null,{default:l(()=>[t(e(c),{span:"6",onClick:o[7]||(o[7]=a=>s(i,{size:"40"}))},{default:l(()=>[t(e(r),{name:i,size:"40"})]),_:1}),t(e(c),{span:"6",onClick:o[8]||(o[8]=a=>s(i,{size:"3rem"}))},{default:l(()=>[t(e(r),{name:i,size:"3rem"})]),_:1})]),_:1})]),_:1},8,["title"])]),_:1},8,["title"]),t(e(f),{title:e(d)("basic")},{default:l(()=>[t(e(u),null,{default:l(()=>[(p(!0),g(h,null,v(e(C).basic,a=>(p(),b(e(c),{key:a,span:"6",onClick:_=>s(a)},{default:l(()=>[t(e(r),{name:a},null,8,["name"]),y("span",null,k(a),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["title"]),t(e(f),{title:e(d)("outline")},{default:l(()=>[t(e(u),null,{default:l(()=>[(p(!0),g(h,null,v(e(C).outline,a=>(p(),b(e(c),{key:a,span:"6",onClick:_=>s(a)},{default:l(()=>[t(e(r),{name:a},null,8,["name"]),y("span",null,k(a),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["title"]),t(e(f),{title:e(d)("filled")},{default:l(()=>[t(e(u),null,{default:l(()=>[(p(!0),g(h,null,v(e(C).filled,a=>(p(),b(e(c),{key:a,span:"6",onClick:_=>s(a)},{default:l(()=>[t(e(r),{name:a},null,8,["name"]),y("span",null,k(a),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["title"])]),_:1},8,["active"])}}});export{le as default};
