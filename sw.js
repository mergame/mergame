if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),a={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>a[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-f51ab5e4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.8eac0012.js",revision:null},{url:"assets/app.b055ae1f.js",revision:null},{url:"assets/home.39303f28.css",revision:null},{url:"assets/home.d9942b8d.js",revision:null},{url:"assets/index.c56eda78.js",revision:null},{url:"assets/index.c9ad19ef.css",revision:null},{url:"assets/README.4cfb5383.js",revision:null},{url:"assets/virtual_pwa-register.3ff79d29.js",revision:null},{url:"index.html",revision:"b4802dff574a3a088a520d20d6693b75"},{url:"favicon.svg",revision:"2e9be39f426dd762d5b0a61cbae443eb"},{url:"safari-pinned-tab.svg",revision:"5eaf74d1c43d30e0af743b68a3f48504"},{url:"pwa-192x192.png",revision:"65f6c00ff3d88d8371df0480c1ba0272"},{url:"pwa-512x512.png",revision:"20a2db7d5040eb315e6acf49c6983de9"},{url:"manifest.webmanifest",revision:"37e8d18026b05432f623fc5efac2b4b1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
