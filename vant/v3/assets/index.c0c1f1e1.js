import{S as i}from"./index.e8ab8b03.js";import{C as v}from"./index.f669a479.js";import{a as V}from"./use-translate.43484c14.js";import{D as j}from"./function-call.9f246e4e.js";import{z as b,C as d,r as x,o as g,a as _,e as t,w as a,A as e,F}from"./vue-libs.f710b8ed.js";import"./with-install.d47ea1a2.js";import"./index.da11a5bc.js";import"./use-route.600bd02b.js";import"./index.2cac46c1.js";import"./mount-component.3a687679.js";import"./use-expose.f4ec549a.js";import"./constant.80c6de18.js";import"./interceptor.bbea64df.js";import"./index.26ad4b0e.js";import"./use-touch.8e5a0907.js";import"./use-lazy-render.c4d421a8.js";import"./on-popup-reopen.4b166a39.js";import"./index.bd0fe4b9.js";import"./index.fbdfcd01.js";import"./index.07740735.js";const O=b({setup(U){const u=V({"zh-CN":{title:"\u6807\u9898",confirm:"\u63D0\u9192",message:"\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F",withCell:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",customSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",asyncControl:"\u5F02\u6B65\u63A7\u5236"},"en-US":{title:"Title",confirm:"Confirm",message:"Are you sure to toggle switch?",withCell:"Inside a Cell",customSize:"Custom Size",customColor:"Custom Color",asyncControl:"Async Control"}}),n=d(!0),m=d(!0),r=d(!0),p=d(!0),c=d(!0),C=f=>{j.confirm({title:u("title"),message:u("message")}).then(()=>{p.value=f})};return(f,l)=>{const s=x("demo-block");return g(),_(F,null,[t(s,{title:e(u)("basicUsage")},{default:a(()=>[t(e(i),{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=o=>n.value=o)},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("disabled")},{default:a(()=>[t(e(i),{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=o=>n.value=o),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("loadingStatus")},{default:a(()=>[t(e(i),{modelValue:n.value,"onUpdate:modelValue":l[2]||(l[2]=o=>n.value=o),loading:""},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("customSize")},{default:a(()=>[t(e(i),{modelValue:m.value,"onUpdate:modelValue":l[3]||(l[3]=o=>m.value=o),size:"24px"},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("customColor")},{default:a(()=>[t(e(i),{modelValue:r.value,"onUpdate:modelValue":l[4]||(l[4]=o=>r.value=o),"active-color":"#ee0a24","inactive-color":"#dcdee0"},null,8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(u)("asyncControl")},{default:a(()=>[t(e(i),{"model-value":p.value,"onUpdate:modelValue":C},null,8,["model-value"])]),_:1},8,["title"]),t(s,{title:e(u)("withCell")},{default:a(()=>[t(e(v),{center:"",title:e(u)("title")},{"right-icon":a(()=>[t(e(i),{modelValue:c.value,"onUpdate:modelValue":l[5]||(l[5]=o=>c.value=o),size:"24"},null,8,["modelValue"])]),_:1},8,["title"])]),_:1},8,["title"])],64)}}});export{O as default};
