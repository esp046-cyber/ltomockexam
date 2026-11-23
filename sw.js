const VERSION='lto-pwa-2026-v5';
const FONTS='lto-fonts-v5';
const PRECACHE=[
 "./",
 "./index.html",
 "./offline.html",
 "./manifest.webmanifest",
 "./css/styles.css",
 "./js/questions.js",
 "./js/app.js",
 "./favicon.ico",
 "./favicon.svg",
 "./apple-touch-icon.png",
 "./icons/favicon-16x16.png",
 "./icons/favicon-32x32.png",
 "./icons/icon-72.png",
 "./icons/icon-96.png",
 "./icons/icon-128.png",
 "./icons/icon-144.png",
 "./icons/icon-152.png",
 "./icons/icon-192.png",
 "./icons/icon-384.png",
 "./icons/icon-512.png",
 "./icons/icon-maskable-192.png",
 "./icons/icon-maskable-512.png"
];
const blank=u=>new Response('',{status:200,headers:{'Content-Type':/googleapis/.test(u.hostname)?'text/css':'font/woff2'}});
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(PRECACHE)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION&&x!==FONTS).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('message',e=>{if(e.data&&e.data.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
 if(/^fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){
  e.respondWith((async()=>{try{const c=await caches.open(FONTS),hit=await c.match(r);
   const net=Promise.resolve().then(()=>fetch(r)).then(res=>{if(res&&(res.ok||res.type==='opaque'))Promise.resolve(c.put(r,res.clone())).catch(()=>{});return res}).catch(()=>null);
   return hit||(await net)||blank(u)}catch(_){return blank(u)}})());return}
 if(u.origin!==location.origin)return;
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r).then(m=>m||caches.match('./index.html')).then(m=>m||caches.match('./offline.html'))));return}
 e.respondWith(caches.match(r).then(hit=>{const net=fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp))}return res}).catch(()=>hit||new Response('',{status:504}));return hit||net}));
});
