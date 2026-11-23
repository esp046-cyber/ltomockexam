(()=>{
'use strict';
const $=s=>document.querySelector(s),app=$('#app'),QS=window.QUESTIONS,CATS=window.CATS;
const T={en:{home:'Home',exams:'Exams',signs:'Signs',progress:'Progress',title:'2026 LTO LTMS Mock Exam',sub:'Practice for the Philippine LTO driver’s license written exam, online or offline.',official:'Official LTMS simulation',officialD:'Up to 60 questions, 60 minutes, 80% to pass.',practice:'Practice mode',practiceD:'Up to 40 questions, untimed, with feedback and legal rationale.',drill:'Traffic signs drill',drillD:'Visual sign and pavement marking questions.',bycat:'Quiz by category',review:'Review missed questions',start:'Start',question:'Question',of:'of',prev:'Previous',next:'Next',flag:'Flag',unflag:'Unflag',submit:'Submit exam',answered:'Answered',flagged:'Flagged',unanswered:'Unanswered',passed:'PASSED',failed:'FAILED',score:'Score',home2:'Back to home',print:'Print result',missed:'Questions to review',correct:'Correct',wrong:'Incorrect',yourAns:'Your answer',right:'Correct answer',avg:'Average score',exams2:'Exams taken',streak:'Day streak',mastery:'Category mastery',history:'Recent exams',empty:'No exams yet. Take a practice exam to see your progress here.',nomissed:'No missed questions to review yet.',confirm:'Submit now? Unanswered questions count as wrong.',about:'About',aboutT:'This is an unofficial study aid. Question wording and fines may change; verify with the LTO and current Philippine law. A real LTMS exam may differ in length and content.',install:'Install this app for offline practice.',installBtn:'Install',later:'Not now',iosT:'Install on iPhone or iPad',iosS:'Tap the Share button in Safari, then choose Add to Home Screen.',close:'Close',update:'New update available. Tap to refresh.',refresh:'Refresh',cert:'LTO Mock Exam Result',note:'Practice result only. This is not an official LTO document.',time:'Time left',pool:'questions available',gallery:'Sign gallery',minutes:'min'},
fil:{home:'Home',exams:'Pagsusulit',signs:'Signs',progress:'Progreso',title:'2026 LTO LTMS Mock Exam',sub:'Magsanay para sa nakasulat na pagsusulit sa lisensya ng LTO, online o offline.',official:'Opisyal na LTMS simulation',officialD:'Hanggang 60 tanong, 60 minuto, 80% para pumasa.',practice:'Practice mode',practiceD:'Hanggang 40 tanong, walang oras, may feedback at batas.',drill:'Traffic signs drill',drillD:'Mga tanong sa sign at pavement marking.',bycat:'Quiz ayon sa kategorya',review:'Balikan ang mga mali',start:'Simulan',question:'Tanong',of:'sa',prev:'Nakaraan',next:'Susunod',flag:'I-flag',unflag:'Alisin ang flag',submit:'Isumite',answered:'Nasagot',flagged:'Naka-flag',unanswered:'Hindi pa nasasagot',passed:'PASADO',failed:'BAGSAK',score:'Iskor',home2:'Bumalik sa home',print:'I-print ang resulta',missed:'Mga dapat balikan',correct:'Tama',wrong:'Mali',yourAns:'Sagot mo',right:'Tamang sagot',avg:'Karaniwang iskor',exams2:'Mga pagsusulit',streak:'Sunod-sunod na araw',mastery:'Husay sa kategorya',history:'Mga huling pagsusulit',empty:'Wala pang pagsusulit. Subukan ang practice exam para makita ang progreso.',nomissed:'Wala pang maling sagot na babalikan.',confirm:'Isumite na? Ang hindi nasagot ay bibilangin na mali.',about:'Tungkol',aboutT:'Hindi ito opisyal na materyal. Maaaring magbago ang mga tanong at multa; i-verify sa LTO at sa kasalukuyang batas. Maaaring iba ang tunay na LTMS exam.',install:'I-install ang app para sa offline na pagsasanay.',installBtn:'I-install',later:'Mamaya na',iosT:'I-install sa iPhone o iPad',iosS:'Pindutin ang Share sa Safari, saka piliin ang Add to Home Screen.',close:'Isara',update:'May bagong update. Pindutin para mag-refresh.',refresh:'I-refresh',cert:'Resulta ng LTO Mock Exam',note:'Resulta ng pagsasanay lamang. Hindi ito opisyal na dokumento ng LTO.',time:'Natitirang oras',pool:'tanong ang available',gallery:'Gallery ng signs',minutes:'min'}};
let lang=ld('lang','en'),E=null,tm=null;
const t=k=>T[lang][k]||T.en[k]||k;
function ld(k,d){try{const v=localStorage.getItem('lto_'+k);return v===null?d:JSON.parse(v)}catch{return d}}
function sv(k,v){try{localStorage.setItem('lto_'+k,JSON.stringify(v))}catch{}}
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const qt=q=>lang==='fil'?q.fil:q.en,ex=q=>lang==='fil'?q.exf:q.ex,cn=c=>CATS[c][lang==='fil'?1:0];
const L='ABCD';
function live(m){$('#live').textContent=m}
function toast(m,btn,fn){const old=$('.toast');if(old)old.remove();const d=document.createElement('div');d.className='toast';d.setAttribute('role','status');d.innerHTML='<span>'+m+'</span>'+(btn?'<button>'+btn+'</button>':'');document.body.appendChild(d);if(btn)d.querySelector('button').onclick=fn;else setTimeout(()=>d.remove(),3500)}
/* theme + language */
const root=document.documentElement;
function theme(th){root.dataset.theme=th;sv('theme',th);const m=document.querySelector('meta[name=theme-color]');if(m)m.content=th==='dark'?'#0F1B2D':'#0B2545'}
theme(ld('theme',matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
/* routing */
function route(){const h=(location.hash||'#home').slice(1),[name,qs]=h.split('?'),p=new URLSearchParams(qs||'');return{name,p}}
function render(){
 const{name,p}=route();
 document.querySelectorAll('nav.tabs a').forEach(a=>{a.textContent=t(a.dataset.k);a.toggleAttribute('aria-current',false);if(a.dataset.k===({about:'home',exam:'exams'}[name]||name))a.setAttribute('aria-current','page')});
 $('#lang').textContent=lang==='en'?'FIL':'EN';$('#lang').setAttribute('aria-label',lang==='en'?'Switch to Filipino':'Switch to English');
 root.lang=lang==='fil'?'fil':'en';
 if(name==='exam'&&p.get('mode')&&!E){start(p.get('mode'));history.replaceState(null,'','#exam');return}
 const f={home,exam:examView,signs:signsView,progress:progressView,about:aboutView}[name]||home;
 app.innerHTML='';f();app.focus({preventScroll:true});window.scrollTo(0,0);
}
function home(){app.innerHTML=`<h1>${t('title')}</h1><p>${t('sub')}</p><div class="grid two"><a class="btn warn" href="#exam?mode=official">${t('official')}</a><a class="btn" href="#exam?mode=practice">${t('practice')}</a><a class="btn sec" href="#signs">${t('drill')}</a><a class="btn sec" href="#exam">${t('bycat')}</a></div><p class="noprint" style="margin-top:16px;color:var(--muted)">${QS.length} ${t('pool')}. <a href="#about">${t('about')}</a></p>`}
function aboutView(){app.innerHTML=`<h2>${t('about')}</h2><div class="card"><p>${t('aboutT')}</p><p>RA 4136 · RA 8750 · RA 10054 · RA 10586 · RA 10913 · RA 11229</p></div>`}
function examView(){
 if(E&&!E.done)return runView();
 if(E&&E.done)return resultView();
 const cats=Object.keys(CATS).map(c=>`<button class="btn sec" data-cat="${c}">${cn(c)} (${QS.filter(q=>q.cat===c).length})</button>`).join('');
 app.innerHTML=`<h2>${t('exams')}</h2><div class="grid two"><button class="card mode" data-m="official"><h3>${t('official')}</h3><p>${t('officialD')}</p></button><button class="card mode" data-m="practice"><h3>${t('practice')}</h3><p>${t('practiceD')}</p></button><button class="card mode" data-m="signs"><h3>${t('drill')}</h3><p>${t('drillD')}</p></button><button class="card mode" data-m="review"><h3>${t('review')}</h3><p>${(ld('missed',[])).length} ${t('missed')}</p></button></div><h3>${t('bycat')}</h3><div class="grid">${cats}</div>`;
 app.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>start(b.dataset.m));
 app.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>start('cat',b.dataset.cat));
}
function start(mode,cat){
 let pool=QS.slice();
 if(mode==='signs')pool=pool.filter(q=>q.cat==='signs');
 if(mode==='cat')pool=pool.filter(q=>q.cat===cat);
 if(mode==='review'){const m=ld('missed',[]);pool=pool.filter(q=>m.includes(q.id))}
 pool=shuf(pool).slice(0,{official:60,practice:40}[mode]||99);
 if(!pool.length){toast(t('nomissed'));return}
 E={mode,list:pool,i:0,ans:{},flag:{},done:false,end:mode==='official'?Date.now()+3600000:0};
 if(E.end){clearInterval(tm);tm=setInterval(tick,1000)}
 if(location.hash!=='#exam')location.hash='#exam';else render();
}
function fmt(ms){const s=Math.max(0,Math.ceil(ms/1000));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function tick(){if(!E||E.done||!E.end){clearInterval(tm);return}const r=E.end-Date.now(),el=$('#timer');if(el){el.textContent=fmt(r);el.classList.toggle('low',r<300000)}const m=Math.ceil(r/60000);if(r>0&&r%60000<1000&&[30,10,5,1].includes(m))live(m+' '+t('minutes'));if(r<=0)finish()}
function runView(){
 const q=E.list[E.i],n=E.list.length,a=E.ans[E.i],fb=E.mode!=='official',locked=fb&&a!==undefined;
 const opts=q.o.map((o,k)=>{let c='opt';if(a===k)c+=' sel';if(locked){if(k===q.a)c+=' right';else if(a===k)c+=' wrong'}return `<button class="${c}" data-k="${k}" ${locked?'aria-disabled="true"':''}><b>${L[k]}.</b><span>${o}</span></button>`}).join('');
 const nav=E.list.map((_,i)=>`<button class="${E.ans[i]!==undefined?'ans':''} ${E.flag[i]?'flg':''} ${i===E.i?'cur':''}" data-i="${i}" aria-label="${t('question')} ${i+1}">${i+1}</button>`).join('');
 app.innerHTML=`<div class="top"><strong class="tnum">${t('question')} ${E.i+1} ${t('of')} ${n}</strong>${E.end?`<span id="timer" class="tnum" role="timer" aria-label="${t('time')}">${fmt(E.end-Date.now())}</span>`:''}</div><div class="bar-track"><div class="bar-fill" style="width:${(E.i+1)/n*100}%"></div></div>
 <section class="card" style="margin-top:12px"><p style="color:var(--muted);margin-bottom:8px">${cn(q.cat)}</p>${q.svg?`<div class="sign">${q.svg}</div>`:''}<h2>${qt(q)}</h2><div role="group" aria-label="${t('question')}">${opts}</div>${locked?`<div class="fb" role="status"><strong class="${a===q.a?'pass':'fail'}">${a===q.a?t('correct'):t('wrong')}</strong> ${a===q.a?'':'· '+t('right')+': '+L[q.a]+'. '+q.o[q.a]}<p style="margin:8px 0 0">${ex(q)}</p></div>`:''}
 <div class="row"><button class="btn sec" id="prev" ${E.i===0?'disabled':''}>${t('prev')}</button><button class="btn sec" id="flag">${E.flag[E.i]?t('unflag'):t('flag')}</button><button class="btn" id="next" ${E.i===n-1?'disabled':''}>${t('next')}</button><button class="btn ok" id="sub">${t('submit')}</button></div></section>
 <section class="card"><div class="nav">${nav}</div><div class="legend"><span>${t('answered')}: ${Object.keys(E.ans).length}</span><span>${t('flagged')}: ${Object.keys(E.flag).filter(k=>E.flag[k]).length}</span><span>${t('unanswered')}: ${n-Object.keys(E.ans).length}</span></div></section>`;
 app.querySelectorAll('.opt').forEach(b=>b.onclick=()=>pick(+b.dataset.k));
 app.querySelectorAll('.nav button').forEach(b=>b.onclick=()=>go(+b.dataset.i));
 $('#prev').onclick=()=>go(E.i-1);$('#next').onclick=()=>go(E.i+1);
 $('#flag').onclick=()=>{E.flag[E.i]=!E.flag[E.i];runView()};
 $('#sub').onclick=()=>{if(Object.keys(E.ans).length===n||confirm(t('confirm')))finish()};
}
function go(i){if(!E||E.done||i<0||i>=E.list.length)return;E.i=i;runView();window.scrollTo(0,0)}
function pick(k){if(!E||E.done)return;const q=E.list[E.i];if(E.mode!=='official'&&E.ans[E.i]!==undefined)return;E.ans[E.i]=k;runView();if(E.mode!=='official')live((k===q.a?t('correct'):t('wrong'))+'. '+ex(q))}
function finish(){
 if(!E||E.done)return;E.done=true;clearInterval(tm);
 const n=E.list.length;let sc=0;const st=ld('cats',{}),missed=new Set(ld('missed',[]));
 E.list.forEach((q,i)=>{const ok=E.ans[i]===q.a;st[q.cat]=st[q.cat]||[0,0];st[q.cat][1]++;if(ok){sc++;st[q.cat][0]++;missed.delete(q.id)}else missed.add(q.id)});
 E.score=sc;E.pct=Math.round(sc/n*100);E.pass=sc/n>=.8;
 const h=ld('hist',[]);h.unshift({d:new Date().toISOString(),mode:E.mode,sc,n,pct:E.pct,pass:E.pass});sv('hist',h.slice(0,50));sv('cats',st);sv('missed',[...missed]);
 const days=ld('days',[]),today=new Date().toISOString().slice(0,10);if(!days.includes(today))days.push(today);sv('days',days.slice(-400));
 live(t('score')+' '+sc+'/'+n);
 if(location.hash!=='#exam')location.hash='#exam';else render();
}
function resultView(){
 const n=E.list.length,bad=E.list.map((q,i)=>[q,i]).filter(([q,i])=>E.ans[i]!==q.a);
 const rev=bad.map(([q,i])=>`<div class="card"><p><strong>${i+1}. ${qt(q)}</strong></p><p>${t('yourAns')}: ${E.ans[i]===undefined?'—':L[E.ans[i]]+'. '+q.o[E.ans[i]]}<br>${t('right')}: ${L[q.a]}. ${q.o[q.a]}</p><p style="color:var(--muted)">${ex(q)}</p></div>`).join('');
 app.innerHTML=`<section class="card cert"><h2>${t('cert')}</h2><div class="big tnum ${E.pass?'pass':'fail'}">${E.score}/${n}</div><p class="tnum">${E.pct}% · ${E.pass?`<strong class="pass">${t('passed')}</strong>`:`<strong class="fail">${t('failed')}</strong>`}</p><p>${new Date().toLocaleString()}</p><p style="color:var(--muted)">${t('note')}</p></section><div class="row noprint"><button class="btn" id="pr">${t('print')}</button><button class="btn sec" id="hm">${t('home2')}</button></div>${bad.length?`<h2 style="margin-top:24px" class="noprint">${t('missed')}</h2><div class="noprint">${rev}</div>`:''}`;
 $('#pr').onclick=()=>print();$('#hm').onclick=()=>{E=null;location.hash='#home'};
}
function streak(){const d=new Set(ld('days',[]));let c=0,x=new Date();if(!d.has(x.toISOString().slice(0,10)))x.setDate(x.getDate()-1);while(d.has(x.toISOString().slice(0,10))){c++;x.setDate(x.getDate()-1)}return c}
function progressView(){
 const h=ld('hist',[]);
 if(!h.length){app.innerHTML=`<h2>${t('progress')}</h2><div class="card empty">${t('empty')}<div class="row" style="justify-content:center"><a class="btn" href="#exam?mode=practice">${t('practice')}</a></div></div>`;return}
 const st=ld('cats',{}),avg=Math.round(h.reduce((s,x)=>s+x.pct,0)/h.length);
 const bars=Object.keys(CATS).map(c=>{const[a,b]=st[c]||[0,0],p=b?Math.round(a/b*100):0;return `<p style="margin-bottom:4px">${cn(c)} <span class="tnum" style="float:right">${p}%</span></p><div class="bar-track" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><div class="bar-fill" style="width:${p}%"></div></div><div style="height:12px"></div>`}).join('');
 app.innerHTML=`<h2>${t('progress')}</h2><div class="card stat tnum"><div><b>${avg}%</b><span>${t('avg')}</span></div><div><b>${h.length}</b><span>${t('exams2')}</span></div><div><b>${streak()}</b><span>${t('streak')}</span></div></div><div class="card"><h3>${t('mastery')}</h3>${bars}</div><div class="row noprint" style="margin-bottom:16px"><button class="btn warn" id="rv">${t('review')} (${ld('missed',[]).length})</button></div><div class="card"><h3>${t('history')}</h3>${h.slice(0,8).map(x=>`<p class="tnum" style="margin:0 0 8px">${new Date(x.d).toLocaleDateString()} · ${x.mode} · ${x.sc}/${x.n} · <strong class="${x.pass?'pass':'fail'}">${x.pct}%</strong></p>`).join('')}</div>`;
 $('#rv').onclick=()=>start('review');
}
function signsView(){
 const s=QS.filter(q=>q.cat==='signs');
 app.innerHTML=`<h2>${t('drill')}</h2><div class="row noprint" style="margin:0 0 16px"><button class="btn warn" id="sd">${t('start')}</button></div><h3>${t('gallery')}</h3><div class="signs-grid">${s.map(q=>`<div class="card">${q.svg}<p style="margin:8px 0 0;font-size:.9rem">${q.o[q.a]}</p></div>`).join('')}</div>`;
 $('#sd').onclick=()=>start('signs');
}
/* events */
$('#lang').onclick=()=>{lang=lang==='en'?'fil':'en';sv('lang',lang);render()};
$('#theme').onclick=()=>theme(root.dataset.theme==='dark'?'light':'dark');
addEventListener('hashchange',render);
addEventListener('keydown',e=>{
 if(!E||E.done||route().name!=='exam'||e.target.closest('input,textarea')||e.ctrlKey||e.metaKey||e.altKey)return;
 const k=e.key.toLowerCase();let i='1234'.indexOf(k);if(i<0)i='abcd'.indexOf(k);
 if(i>=0&&i<E.list[E.i].o.length){pick(i);e.preventDefault()}
 else if(e.key==='ArrowRight')go(E.i+1);else if(e.key==='ArrowLeft')go(E.i-1);
});
/* install banner */
let dp=null;
function banner(){if(ld('noinstall',false)||matchMedia('(display-mode: standalone)').matches||navigator.standalone)return;const d=document.createElement('div');d.className='banner';d.innerHTML=`<span>${t('install')}</span><span><button id="bi">${t('installBtn')}</button> <button id="bl">${t('later')}</button></span>`;document.body.appendChild(d);
 $('#bl').onclick=()=>{sv('noinstall',true);d.remove()};
 $('#bi').onclick=async()=>{d.remove();if(dp){dp.prompt();await dp.userChoice;dp=null}else ios()}}
function ios(){const m=document.createElement('div');m.className='modal';m.setAttribute('role','dialog');m.setAttribute('aria-modal','true');m.innerHTML=`<div class="card"><h2>${t('iosT')}</h2><p>${t('iosS')}</p><button class="btn" id="mc">${t('close')}</button></div>`;document.body.appendChild(m);$('#mc').onclick=()=>m.remove();$('#mc').focus()}
addEventListener('beforeinstallprompt',e=>{e.preventDefault();dp=e;banner()});
if(/iphone|ipad|ipod/i.test(navigator.userAgent)&&!navigator.standalone)setTimeout(banner,2500);
/* service worker + update toast */
if('serviceWorker'in navigator){addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js').then(r=>{
 const w=()=>{if(r.waiting&&navigator.serviceWorker.controller)toast(t('update'),t('refresh'),()=>r.waiting.postMessage({type:'SKIP_WAITING'}))};
 w();r.addEventListener('updatefound',()=>{const n=r.installing;n&&n.addEventListener('statechange',()=>{if(n.state==='installed')w()})})}).catch(()=>{});
 let rl=false;navigator.serviceWorker.addEventListener('controllerchange',()=>{if(rl)return;rl=true;location.reload()})})}
render();
})();
