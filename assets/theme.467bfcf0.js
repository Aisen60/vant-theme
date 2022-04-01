import{A as V,p as O,V as W,a as X,b as Y,c as Z,d as ee,e as te,f as se}from"./index.ae33ee3b.js";import{d as $,r as F,w as M,o as _,c as T,a as n,b as i,u as t,N as k,e as ae,f as z,g as I,h as oe,i as ue,j as E,s as U,k as le,l as ne,m as b,n as s,p as P,F as x,t as w,q as j,v as q,x as ie,y as ce,R as re,z as de,A as _e,B as me,C as H,D as ve,E as pe,G as he}from"./vendor.20d57b1a.js";import{u as G,_ as fe}from"./index.cca0458d.js";const Fe=E("\u53D6\u6D88"),Ee=E("\u786E\u5B9A"),be=$({props:{type:null,show:{type:Boolean}},emits:["close","confirm"],setup(N,{emit:c}){const r=N,f=F(r.show),h=F(),C=F(),u=F({name:"",describe:""}),g={name:{required:!0,message:"\u8981\u8F93\u5165\u4E3B\u9898\u540D\u79F0\u54E6~",trigger:["input"]}},y=()=>{c("close")};async function d(){await C.value.validate(),c("confirm",u.value),y()}return M(()=>{const l={add:"\u65B0\u589E\u4E3B\u9898",edit:"\u4FEE\u6539\u4E3B\u9898",copy:"\u590D\u5236\u4E3B\u9898"};h.value=l[r.type]||void 0,f.value=r.show,u.value.name="",u.value.describe=""}),(l,m)=>(_(),T(t(ue),{show:f.value,"onUpdate:show":m[2]||(m[2]=B=>f.value=B),title:h.value,style:{width:"600px"},preset:"card","mask-closable":!1,onAfterLeave:y},{footer:n(()=>[i(t(ae),{justify:"end"},{default:n(()=>[i(t(k),{onClick:y},{default:n(()=>[Fe]),_:1}),i(t(k),{type:"info",onClick:d},{default:n(()=>[Ee]),_:1})]),_:1})]),default:n(()=>[i(t(oe),{"label-placement":"left","label-width":80,model:u.value,rules:g,ref_key:"formRef",ref:C},{default:n(()=>[i(t(z),{label:"\u4E3B\u9898\u540D\u8BCD",path:"name"},{default:n(()=>[i(t(I),{value:u.value.name,"onUpdate:value":m[0]||(m[0]=B=>u.value.name=B),placeholder:"",maxlength:"30","show-count":"",clearable:""},null,8,["value"])]),_:1}),i(t(z),{label:"\u4E3B\u9898\u63CF\u8FF0"},{default:n(()=>[i(t(I),{placeholder:"",value:u.value.describe,"onUpdate:value":m[1]||(m[1]=B=>u.value.describe=B),type:"textarea",size:"small",autosize:{minRows:3,maxRows:5},clearable:""},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show","title"]))}}),Ce={class:"vant-theme-theme"},ye={class:"vant-theme-theme__container"},Be={key:0,class:"vant-theme-theme__empty"},we=s("div",{class:"vant-theme-theme__empty-bg"},null,-1),ke=s("div",{class:"vant-theme-theme__empty-title"},"\u6B22\u8FCE\u4F7F\u7528 vant-theme",-1),ge=s("div",{class:"vant-theme-theme__empty-subtitle"}," \u4E00\u4E2A vant \u7EC4\u4EF6\u5E93\u5728\u7EBF\u4E3B\u9898\u9884\u89C8\u5DE5\u5177\uFF0C\u5728\u8FD9\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4F60\u7684 vant \u4E3B\u9898\u98CE\u683C\u3002 ",-1),Ae={class:"vant-theme-theme__empty-btn"},De=E(" \u521B\u5EFA\u4E3B\u9898 "),Te=E(" \u5BFC\u5165\u4E3B\u9898 "),Ne={class:"vant-theme-theme__header"},Le={class:"vant-theme-theme__header-title"},$e={class:"vant-theme-theme__header-btn"},xe=E(" \u521B\u5EFA\u4E3B\u9898 "),Re=E(" \u5BFC\u5165\u4E3B\u9898 "),Se={class:"vant-theme-theme__list"},Ve=["onClick"],Oe={class:"theme-item__info"},Me={class:"theme-item__info-name"},ze=s("span",null,"\u540D\u79F0\uFF1A",-1),Ie={key:0,class:"theme-item__info-describe"},Ue=s("span",null,"\u63CF\u8FF0\uFF1A",-1),Pe={class:"theme-item__info-time"},je=s("span",null,"\u521B\u5EFA\u65F6\u95F4\uFF1A",-1),qe={class:"theme-item__info-time"},He=s("span",null,"\u4FEE\u6539\u65F6\u95F4\uFF1A",-1),Ge={class:"theme-item__table"},Je=s("div",{class:"theme-item__table-row theme-item__table-header"},[s("p",{class:"theme-item__table-row__name"},"\u53D8\u91CF\u540D"),s("p",{class:"theme-item__table-row__value"},"\u53D8\u91CF\u503C"),s("p",{class:"theme-item__table-row__demo"},"\u793A\u4F8B")],-1),Ke={class:"theme-item__table-row__name"},Qe=E(" \u5F53\u524D vant \u7248\u672C\u4E3B\u8C03\u8272 "),We={class:"theme-item__table-row__value"},Xe={class:"theme-item__table-row__demo"},Ye=$({setup(N){const c=G(),{versionInfo:r,versionAllTheme:f}=U(c),h=F(),C=F(),u=le(),g=ne(),y=[{label:"\u67E5\u770B\u4E3B\u9898",key:"see"},{label:"\u7F16\u8F91\u4FE1\u606F",key:"edit"},{label:"\u590D\u5236\u4E3B\u9898",key:"copy"},{label:"\u5220\u9664\u4E3B\u9898",key:"delete"},{label:"\u4E0B\u8F7D\u4E3B\u9898\u6587\u4EF6",key:"download"}],d=F({visible:!1,optionType:"add",origin:{}}),l=F(!1),m=()=>{const{key:o}=r.value,a={v2:W,v3:X,v4:Y};h.value=a[o]},B=()=>{const{key:o}=r.value,a={v2:Z,v3:ee,v4:te};C.value=a[o]},R=(o,a,e)=>{var p;const v=(p=o==null?void 0:o.config)==null?void 0:p[a];return v||e},A=(o,a,e)=>{d.value.visible=o,d.value.optionType=a,e&&(d.value.origin=e)},D=async(o,a)=>{switch(o){case"see":{const e=a.id;c.useTheme(e),window.location.href=`${V}src/page/console/index.html`;break}case"add":{A(!0,o,a);break}case"edit":{A(!0,o,a);break}case"copy":{A(!0,o,a);break}case"delete":{g.info({title:"\u63D0\u793A",content:"\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u4E3B\u9898\u561B\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",maskClosable:!1,onPositiveClick:async()=>{const{id:e}=a;e&&c.deleteTheme(e),u.success("\u5220\u9664\u6210\u529F")}});break}case"download":{const{id:e}=a;e&&c.downloadTheme(e).then(()=>{u.success("\u4E0B\u8F7D\u6210\u529F")});break}}},K=o=>{const a=d.value.optionType,e=d.value.origin;switch(a){case"add":{c.addTheme(o),u.success("\u521B\u5EFA\u6210\u529F");break}case"edit":{c.editTheme(e,o),u.success("\u7F16\u8F91\u6210\u529F");break}case"copy":{c.copyTheme(e,o),u.success("\u590D\u5236\u6210\u529F");break}}},S=o=>{l.value=!0;const{file:a}=o;var e=new FileReader;e.onload=function(v){var p;try{const L=JSON.parse((p=v.target)==null?void 0:p.result),{version:Q}=L;if(Q)c.importTheme(L),u.success(`\u5BFC\u5165\u6210\u529F\uFF0C\u8BF7\u5728 ${L.version} \u4E2D\u67E5\u770B\u3002`);else throw new Error}catch{u.error("\u5BFC\u5165\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u5185\u5BB9\u683C\u5F0F\u662F\u5426\u6B63\u786E\u3002",{keepAliveOnHover:!0})}finally{l.value=!1}},e.readAsText(a.file,"UTF-8")};return M(()=>{B(),m()}),(o,a)=>(_(),b("div",Ce,[s("div",ye,[t(f).length===0?(_(),b("div",Be,[we,ke,ge,s("div",Ae,[i(t(k),{size:"small",type:"info",onClick:a[0]||(a[0]=e=>D("add",{}))},{default:n(()=>[De]),_:1}),i(t(P),{accept:"application/json","show-file-list":!1,onChange:S,disabled:l.value,style:{width:"auto"}},{default:n(()=>[i(t(k),{size:"small",quaternary:"",type:"info",loading:l.value},{default:n(()=>[Te]),_:1},8,["loading"])]),_:1},8,["disabled"])])])):(_(),b(x,{key:1},[s("div",Ne,[s("div",Le," \u6240\u6709\u4E3B\u9898\uFF08"+w(t(r).title)+"\uFF09 ",1),s("div",$e,[i(t(k),{size:"small",type:"info",onClick:a[1]||(a[1]=e=>D("add",{}))},{default:n(()=>[xe]),_:1}),i(t(P),{accept:"application/json","show-file-list":!1,onChange:S,disabled:l.value},{default:n(()=>[i(t(k),{size:"small",quaternary:"",type:"info",loading:l.value},{default:n(()=>[Re]),_:1},8,["loading"])]),_:1},8,["disabled"])])]),s("div",Se,[(_(!0),b(x,null,j(t(f),e=>(_(),b("div",{class:"theme-item",key:e.id,onClick:v=>D("see",e)},[s("div",Oe,[s("p",Me,[ze,s("span",null,w(e.name),1)]),e.describe?(_(),b("p",Ie,[Ue,s("span",null,w(e.describe),1)])):q("",!0),s("p",Pe,[je,s("span",null,w(t(O)(e.create)),1)]),s("p",qe,[He,s("span",null,w(t(O)(e.update)),1)])]),s("div",Ge,[Je,(_(!0),b(x,null,j(h.value,(v,p)=>(_(),b("div",{class:"theme-item__table-row",key:v},[s("p",Ke,[E(w(p)+" ",1),C.value===p?(_(),T(t(ie),{key:0,type:"success",size:"small",round:"",color:{color:t(r).key==="v3"||t(r).key==="v2"?"var(--vant-theme-red)":"var(--vant-theme-blue)",borderColor:t(r).key==="v3"||t(r).key==="v2"?"var(--vant-theme-red)":"var(--vant-theme-blue)",textColor:"#ffffff"}},{default:n(()=>[Qe]),_:2},1032,["color"])):q("",!0)]),s("p",We,w(R(e,p,v)),1),s("p",Xe,[s("span",{class:"theme-item__table-row__demo-color",style:ce({backgroundColor:R(e,p,v)})},null,4)])]))),128))]),i(t(me),{trigger:"hover",options:y,placement:"bottom-start",onSelect:v=>{D(v,e)}},{default:n(()=>[(_(),T(t(_e),{class:"theme-item__more",size:"24",key:e.id,onClick:a[2]||(a[2]=de(()=>{},["stop"]))},{default:n(()=>[i(t(re))]),_:2},1024))]),_:2},1032,["onSelect"])],8,Ve))),128))])],64)),i(be,{type:d.value.optionType,show:d.value.visible,onConfirm:K,onClose:a[3]||(a[3]=e=>A(!1,d.value.optionType))},null,8,["type","show"])])]))}}),Ze=$({setup(N){const c=G(),{schemeColor:r,language:f,versionInfo:h,versionList:C}=U(c),u=H(()=>({schemeColor:r.value,language:f.value})),g=H(()=>({title:h.value.title,subtitle:h.value.subtitle,links:se,schemeColor:r.value,version:h.value.key,versionList:C.value})),y=()=>{const l=r.value==="dark"?"light":"dark";c.setSchemeColor(l)},d=l=>{l.disabled||(c.setVersion(l),window.location.href=`${V}`)};return ve(()=>r.value,(l,m)=>{c.setSchemeColor(l),document.body.classList.remove(`vant-theme-${m}`),document.body.classList.add(`vant-theme-${l}`)},{immediate:!0}),c.init(),(l,m)=>(_(),T(fe,{app:t(u),header:t(g),router:!1,onSwitchSchemeColor:y,onSwitchVersion:d},{default:n(()=>[i(Ye)]),_:1},8,["app","header"]))}}),J=pe(Ze);J.use(he());J.mount("#app");
