import{s as r,H as u}from"./vue-libs.baee7c1f.js";import{e as a}from"./use-translate.5c5bc340.js";import{u as m}from"./use-expose.ee9c0d2a.js";function d(){const e=u({show:!1}),t=n=>{e.show=n},o=n=>{a(e,n,{transitionAppear:!0}),t(!0)},s=()=>t(!1);return m({open:o,close:s,toggle:t}),{open:o,close:s,state:e,toggle:t}}function f(e){const t=r(e),o=document.createElement("div");return document.body.appendChild(o),{instance:t.mount(o),unmount(){t.unmount(),document.body.removeChild(o)}}}export{f as m,d as u};
