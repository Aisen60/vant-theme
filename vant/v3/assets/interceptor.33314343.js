import{l as a,o as c}from"./use-translate.39547e32.js";function f(n){const{interceptor:l,args:o,done:s,canceled:e}=n;if(l){const t=l.apply(null,o||[]);a(t)?t.then(r=>{r?s():e&&e()}).catch(c):t?s():e&&e()}else s()}export{f as c};