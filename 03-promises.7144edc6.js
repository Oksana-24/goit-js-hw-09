var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("iQIUW");const i=document.querySelector(".form"),l=document.querySelector("button");i.addEventListener("submit",(function(e){e.preventDefault(),l.toggleAttribute("disabled");const{elements:{delay:t,step:n,amount:r}}=e.currentTarget;let d=Number(t.value),s=Number(n.value),c=Number(r.value);const f=setInterval((()=>{var e,t;if((e=a,t=d,new Promise(((n,r)=>{Math.random()>.3?n({position:e,delay:t}):r({position:e,delay:t})}),t)).then((({position:e,delay:t})=>{o.Notify.success(`Fulfilled promise ${e} in ${t}ms`,u)})).catch((({position:e,delay:t})=>{o.Notify.failure(`Rejected promise ${e} in ${t}ms`,u)})).finally((()=>{i.reset()})),a===c)return a=1,clearInterval(f),void l.removeAttribute("disabled");a+=1,d+=s}),d)}));let a=1;const u={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1};
//# sourceMappingURL=03-promises.7144edc6.js.map
