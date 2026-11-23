const VERSION='lto-pwa-2026-v1';
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
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(PRECACHE)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('message',e=>{if(e.data&&e.data.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r).then(m=>m||caches.match('./index.html')).then(m=>m||caches.match('./offline.html'))));return}
 e.respondWith(caches.match(r).then(hit=>{const net=fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(VERSION).then(c=>c.put(r,cp))}return res}).catch(()=>hit);return hit||net}));
});
