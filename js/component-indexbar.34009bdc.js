(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["component-indexbar"],{"0764":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n("0f4b"),i=n("22e8"),u=n("7e83"),r=n("6440");function a(t){var e=Object(i["a"])(t)+".";return function(t){for(var n=r["a"].messages(),i=Object(c["b"])(n,e+t)||Object(c["b"])(n,t),a=arguments.length,b=new Array(a>1?a-1:0),l=1;l<a;l++)b[l-1]=arguments[l];return Object(u["b"])(i)?i.apply(void 0,b):i}}},"22e8":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));n("ac1f"),n("5319");var c=/-(\w)/g;function i(t){return t.replace(c,(function(t,e){return e.toUpperCase()}))}function u(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"")}},"7ae0":function(t,e,n){"use strict";n.r(e);var c=n("7a23");function i(t,e,n,i,u,r){var a=Object(c["Q"])("van-index-anchor"),b=Object(c["Q"])("van-cell"),l=Object(c["Q"])("van-index-bar"),o=Object(c["Q"])("van-tab"),O=Object(c["Q"])("van-tabs");return Object(c["H"])(),Object(c["i"])(O,{active:i.activeTab,"onUpdate:active":e[0]||(e[0]=function(t){return i.activeTab=t})},{default:Object(c["ab"])((function(){return[Object(c["n"])(o,{title:i.t("basicUsage")},{default:Object(c["ab"])((function(){return[Object(c["n"])(l,null,{default:Object(c["ab"])((function(){return[(Object(c["H"])(!0),Object(c["k"])(c["b"],null,Object(c["O"])(i.indexList,(function(t){return Object(c["H"])(),Object(c["k"])("div",{key:t},[Object(c["n"])(a,{index:t},null,8,["index"]),Object(c["n"])(b,{title:i.t("text")},null,8,["title"]),Object(c["n"])(b,{title:i.t("text")},null,8,["title"]),Object(c["n"])(b,{title:i.t("text")},null,8,["title"])])})),128))]})),_:1})]})),_:1},8,["title"]),Object(c["n"])(o,{title:i.t("customIndexList")},{default:Object(c["ab"])((function(){return[Object(c["n"])(l,{"index-list":i.customIndexList},{default:Object(c["ab"])((function(){return[(Object(c["H"])(!0),Object(c["k"])(c["b"],null,Object(c["O"])(i.customIndexList,(function(t){return Object(c["H"])(),Object(c["k"])("div",{key:t},[Object(c["n"])(a,{index:t},{default:Object(c["ab"])((function(){return[Object(c["m"])(Object(c["T"])(i.t("title")+t),1)]})),_:2},1032,["index"]),Object(c["n"])(b,{title:i.t("text")},null,8,["title"]),Object(c["n"])(b,{title:i.t("text")},null,8,["title"]),Object(c["n"])(b,{title:i.t("text")},null,8,["title"])])})),128))]})),_:1},8,["index-list"])]})),_:1},8,["title"])]})),_:1},8,["active"])}var u=n("dee8"),r={"zh-CN":{text:"文本",customIndexList:"自定义索引列表"},"en-US":{text:"Text",customIndexList:"Custom Index List"}},a={setup:function(){for(var t=Object(u["a"])(r),e=Object(c["N"])(0),n=[],i="A".charCodeAt(0),a=0;a<26;a++)n.push(String.fromCharCode(i+a));return{t:t,activeTab:e,indexList:n,customIndexList:[1,2,3,4,5,6,8,9,10]}}};a.render=i;e["default"]=a},dee8:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var c=n("ade3"),i=(n("159b"),n("b64b"),n("6440")),u=n("22e8"),r=n("0764"),a=0;function b(t){var e="demo-i18n-".concat(a++);if(t){var n={},b=Object(u["a"])(e);Object.keys(t).forEach((function(e){n[e]=Object(c["a"])({},b,t[e])})),i["a"].add(n)}return Object(r["a"])(e)}}}]);
//# sourceMappingURL=component-indexbar.34009bdc.js.map