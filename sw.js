if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-4ee7f24a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/404.df802d54.js",revision:null},{url:"assets/app.616cfe51.js",revision:null},{url:"assets/home.fa0df464.css",revision:null},{url:"assets/home.fcc64410.js",revision:null},{url:"assets/index.8af8b775.js",revision:null},{url:"assets/index.d56eb578.css",revision:null},{url:"assets/virtual_pwa-register.ccdd07ff.js",revision:null},{url:"index.html",revision:"a81043d72364beda8a8c4f27677895f4"},{url:"manifest.webmanifest",revision:"0ea38775bdef7081a654136b25474f2f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
