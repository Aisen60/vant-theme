import{c as u,b as m,B as p,u as h,p as V}from"./use-translate.43484c14.js";import{n as g,u as f,w as d}from"./with-install.d47ea1a2.js";import{z as l,x as k,e as s,Q as b}from"./vue-libs.f710b8ed.js";import{c as C,C as v}from"./Checker.aafe0e49.js";const[c,P]=u("radio-group"),R={disabled:Boolean,iconSize:g,direction:String,modelValue:f,checkedColor:String},i=Symbol(c);var w=l({name:c,props:R,emits:["change","update:modelValue"],setup(e,{emit:r,slots:n}){const{linkChildren:o}=m(i),t=a=>r("update:modelValue",a);return k(()=>e.modelValue,a=>r("change",a)),o({props:e,updateValue:t}),p(()=>e.modelValue),()=>{var a;return s("div",{class:P([e.direction]),role:"radiogroup"},[(a=n.default)==null?void 0:a.call(n)])}}});const N=d(w),[j,S]=u("radio");var G=l({name:j,props:C,emits:["update:modelValue"],setup(e,{emit:r,slots:n}){const{parent:o}=h(i),t=()=>(o?o.props.modelValue:e.modelValue)===e.name,a=()=>{o?o.updateValue(e.name):r("update:modelValue",e.name)};return()=>s(v,b({bem:S,role:"radio",parent:o,checked:t(),onToggle:a},e),V(n,["default","icon"]))}});const $=d(G);export{$ as R,N as a};
