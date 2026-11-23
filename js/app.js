(()=>{
'use strict';
const mm=q=>({matches:!!(window.matchMedia&&window.matchMedia(q).matches)});
const $=s=>document.querySelector(s),app=$('#app'),QS=window.QUESTIONS,CATS=window.CATS;
const T={en:{home:'Home',exams:'Exams',signs:'Signs',progress:'Progress',title:'2026 LTO LTMS Mock Exam',sub:'Practice for the Philippine LTO driver’s license written exam, online or offline.',resume:'Resume last exam',quick:'Quick 10-Item Drill',quickD:'10 random questions, untimed, instant feedback. About 3 minutes.',reviewT:'Review Session Answers',allQ:'All Questions',missedOnly:'Missed Only',allRight:'No missed questions in this session.',rdT:'LTMS Exam Readiness',rd0:'Not Started',rd1:'Building Foundation',rd2:'Almost Ready',rd3:'Exam Ready',rdD0:'Take an exam to see your readiness.',iosCardT:'Install on iPhone / iPad (Safari)',examinee:'Examinee name (optional)',nameHint:'Shown on your result certificate.',shareBtn:'Share score',copied:'Result copied to clipboard.',shareFail:'Could not share. Copy it manually.',resetT:'Clear saved data',resetMissed:'Clear missed questions',resetAll:'Clear all progress',resetC1:'Clear your missed-question deck?',resetC2:'Clear ALL exam history, progress, saved exam and name on this device?',resetDone:'Saved data cleared.',resetD:'Useful if you share this device.',keyAns:'answer',keyNav:'previous / next',fAll:'All',fReg:'Regulatory',fWarn:'Warning',fInfo:'Informative',fMark:'Road Markings',permit:'Non-Pro / Student Permit',permitD:'40 basic questions on signs, rules and laws, with feedback.',official:'Official LTMS simulation',officialD:'Up to 60 questions, 60 minutes, 80% to pass.',practice:'Practice mode',practiceD:'Up to 40 questions, untimed, with feedback and legal rationale.',drill:'Traffic signs drill',drillD:'Visual sign and pavement marking questions.',bycat:'Quiz by category',review:'Review missed questions',start:'Start',question:'Question',of:'of',prev:'Previous',next:'Next',flag:'Flag',unflag:'Unflag',submit:'Submit exam',answered:'Answered',flagged:'Flagged',unanswered:'Unanswered',passed:'PASSED',failed:'FAILED',score:'Score',home2:'Back to home',print:'Print result',missed:'Questions to review',correct:'Correct',wrong:'Incorrect',yourAns:'Your answer',right:'Correct answer',avg:'Average score',exams2:'Exams taken',streak:'Day streak',mastery:'Category mastery',history:'Recent exams',empty:'No exams yet. Take a practice exam to see your progress here.',nomissed:'No missed questions to review yet.',confirm:'Submit now? Unanswered questions count as wrong.',about:'Exam guide',aboutT:'This is an unofficial study aid. Question wording and fines may change; verify with the LTO and current Philippine law. A real LTMS exam may differ in length and content.',install:'Install this app for offline practice.',installBtn:'Install',later:'Not now',iosT:'Install on iPhone or iPad',iosS:'Tap the Share button in Safari, then choose Add to Home Screen.',close:'Close',update:'New update available. Tap to refresh.',refresh:'Refresh',cert:'LTO Mock Exam Result',note:'Practice result only. This is not an official LTO document.',time:'Time left',pool:'questions available',gallery:'Sign gallery',minutes:'min'},
fil:{home:'Home',exams:'Pagsusulit',signs:'Signs',progress:'Progreso',title:'2026 LTO LTMS Mock Exam',sub:'Magsanay para sa nakasulat na pagsusulit sa lisensya ng LTO, online o offline.',resume:'Ituloy ang huling pagsusulit',quick:'Mabilis na 10-Item Drill',quickD:'10 random na tanong, walang oras, may agarang feedback. Mga 3 minuto.',reviewT:'Suriin ang mga Sagot',allQ:'Lahat ng Tanong',missedOnly:'Mga Mali Lang',allRight:'Walang maling sagot sa sesyong ito.',rdT:'Kahandaan sa LTMS Exam',rd0:'Hindi pa nasisimulan',rd1:'Nagtatayo ng Pundasyon',rd2:'Malapit nang Handa',rd3:'Handa na sa Exam',rdD0:'Kumuha ng exam para makita ang kahandaan mo.',iosCardT:'I-install sa iPhone / iPad (Safari)',examinee:'Pangalan ng examinee (opsyonal)',nameHint:'Ipapakita sa resulta mong certificate.',shareBtn:'I-share ang iskor',copied:'Nakopya ang resulta.',shareFail:'Hindi na-share. Kopyahin nang mano-mano.',resetT:'Burahin ang naka-save na datos',resetMissed:'Burahin ang mga maling sagot',resetAll:'Burahin ang lahat ng progreso',resetC1:'Burahin ang deck ng mga maling sagot?',resetC2:'Burahin ang LAHAT ng history, progreso, naka-save na exam at pangalan sa device na ito?',resetDone:'Nabura na ang datos.',resetD:'Kapaki-pakinabang kung shared ang device.',keyAns:'sagot',keyNav:'nakaraan / susunod',fAll:'Lahat',fReg:'Regulatory',fWarn:'Babala',fInfo:'Impormatibo',fMark:'Marka sa Daan',permit:'Non-Pro / Student Permit',permitD:'40 batayang tanong sa signs, patakaran at batas, may feedback.',official:'Opisyal na LTMS simulation',officialD:'Hanggang 60 tanong, 60 minuto, 80% para pumasa.',practice:'Practice mode',practiceD:'Hanggang 40 tanong, walang oras, may feedback at batas.',drill:'Traffic signs drill',drillD:'Mga tanong sa sign at pavement marking.',bycat:'Quiz ayon sa kategorya',review:'Balikan ang mga mali',start:'Simulan',question:'Tanong',of:'sa',prev:'Nakaraan',next:'Susunod',flag:'I-flag',unflag:'Alisin ang flag',submit:'Isumite',answered:'Nasagot',flagged:'Naka-flag',unanswered:'Hindi pa nasasagot',passed:'PASADO',failed:'BAGSAK',score:'Iskor',home2:'Bumalik sa home',print:'I-print ang resulta',missed:'Mga dapat balikan',correct:'Tama',wrong:'Mali',yourAns:'Sagot mo',right:'Tamang sagot',avg:'Karaniwang iskor',exams2:'Mga pagsusulit',streak:'Sunod-sunod na araw',mastery:'Husay sa kategorya',history:'Mga huling pagsusulit',empty:'Wala pang pagsusulit. Subukan ang practice exam para makita ang progreso.',nomissed:'Wala pang maling sagot na babalikan.',confirm:'Isumite na? Ang hindi nasagot ay bibilangin na mali.',about:'Gabay sa Pagsusulit',aboutT:'Hindi ito opisyal na materyal. Maaaring magbago ang mga tanong at multa; i-verify sa LTO at sa kasalukuyang batas. Maaaring iba ang tunay na LTMS exam.',install:'I-install ang app para sa offline na pagsasanay.',installBtn:'I-install',later:'Mamaya na',iosT:'I-install sa iPhone o iPad',iosS:'Pindutin ang Share sa Safari, saka piliin ang Add to Home Screen.',close:'Isara',update:'May bagong update. Pindutin para mag-refresh.',refresh:'I-refresh',cert:'Resulta ng LTO Mock Exam',note:'Resulta ng pagsasanay lamang. Hindi ito opisyal na dokumento ng LTO.',time:'Natitirang oras',pool:'tanong ang available',gallery:'Gallery ng signs',minutes:'min'}};
const persist=()=>sv('session',E&&!E.done?{mode:E.mode,ids:E.list.map(q=>q.id),i:E.i,ans:E.ans,flag:E.flag,end:E.end}:null);
let lang=ld('lang','en'),E=null,tm=null;
const t=k=>T[lang][k]||T.en[k]||k;
function ld(k,d){try{const v=localStorage.getItem('lto_'+k);return v===null?d:JSON.parse(v)}catch{return d}}
function sv(k,v){try{localStorage.setItem('lto_'+k,JSON.stringify(v))}catch{}}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const qo=q=>lang==='fil'&&q.of?q.of:q.o,qt=q=>lang==='fil'?q.fil:q.en,ex=q=>lang==='fil'?q.exf:q.ex,cn=c=>CATS[c][lang==='fil'?1:0];
const L='ABCD';
const vib=p=>{try{if(typeof navigator.vibrate==='function')navigator.vibrate(p)}catch(e){}};
const tcls=r=>r<=60000?'low':r<=300000?'warn':'';
function live(m){$('#live').textContent=m}
function toast(m,btn,fn){const old=$('.toast');if(old)old.remove();const d=document.createElement('div');d.className='toast';d.setAttribute('role','status');d.innerHTML='<span>'+m+'</span>'+(btn?'<button>'+btn+'</button>':'');document.body.appendChild(d);if(btn)d.querySelector('button').onclick=fn;else setTimeout(()=>d.remove(),3500)}
/* theme + language */
const root=document.documentElement;
function theme(th){root.dataset.theme=th;sv('theme',th);const m=document.querySelector('meta[name=theme-color]');if(m)m.content=th==='dark'?'#0F1B2D':'#0B2545'}
theme(ld('theme',mm('(prefers-color-scheme: dark)').matches?'dark':'light'));
/* routing */
function route(){const h=(location.hash||'#home').slice(1),[name,qs]=h.split('?'),p=new URLSearchParams(qs||'');return{name,p}}
function render(){
 const{name,p}=route();
 document.querySelectorAll('nav.tabs a').forEach(a=>{a.textContent=t(a.dataset.k);a.toggleAttribute('aria-current',false);if(a.dataset.k===({about:'home',exam:'exams'}[name]||name))a.setAttribute('aria-current','page')});
 $('#lang').textContent=lang==='en'?'FIL':'EN';$('#lang').setAttribute('aria-label',lang==='en'?'Switch to Filipino':'Switch to English');
 root.lang=lang==='fil'?'fil':'en';
 if(name==='exam'&&p.get('mode')&&!E){start(p.get('mode'));history.replaceState(null,'','#exam');return}
 const f={home,exam:examView,signs:signsView,progress:progressView,about:aboutView}[name]||home;
 app.classList.toggle('wide',name==='exam'&&!!E&&!E.done);app.innerHTML='';f();app.focus({preventScroll:true});window.scrollTo(0,0);
}
function nameCard(){return `<div class="card namecard noprint"><label for="nm"><strong>${t('examinee')}</strong></label><input id="nm" type="text" maxlength="40" autocomplete="name" value="${esc(ld('name',''))}"><p class="small">${t('nameHint')}</p></div>`}
function bindName(){const i=$('#nm');if(i)i.oninput=()=>sv('name',i.value.trim().slice(0,40))}
function home(){
 const mc=ld('missed',[]).length,live2=E&&!E.done;
 app.innerHTML=`<section class="hero"><img src="./icons/icon-192.png" alt="" width="88" height="88"><div><h1>${t('title')}</h1><p>${t('sub')}</p>${live2?`<a class="pill" href="#exam">${t('resume')} · ${E.i+1}/${E.list.length}</a>`:''}</div></section>${nameCard()}
 <div class="grid two"><a class="card mode m-navy" href="#exam?mode=official"><span class="badge">60</span><h3>${t('official')}</h3><p>${t('officialD')}</p></a><a class="card mode m-blue" href="#exam?mode=quick"><span class="badge">10</span><h3>${t('quick')}</h3><p>${t('quickD')}</p></a><a class="card mode m-green" href="#exam?mode=permit"><span class="badge">40</span><h3>${t('permit')}</h3><p>${t('permitD')}</p></a><a class="card mode m-amber" href="#signs"><span class="badge">&#9888;</span><h3>${t('drill')}</h3><p>${t('drillD')}</p></a><a class="card mode m-rose" href="#exam?mode=review"><span class="badge">${mc}</span><h3>${t('review')}</h3><p>${mc} ${t('missed')}</p></a></div>
 <p class="noprint" style="margin-top:16px;color:var(--muted)"><a href="#exam">${t('bycat')}</a> · ${QS.length} ${t('pool')} · <a href="#about">${t('about')}</a></p>`;bindName()}
const BB=[['B','Battery','Check electrolyte level and that terminals are clean and tight.','Tingnan ang tubig ng baterya at kung malinis at mahigpit ang terminal.'],['L','Lights','Test headlights, brake lights, turn signals and hazards.','Subukan ang headlight, brake light, signal light at hazard.'],['O','Oil','Check engine oil level with the dipstick on level ground.','Tingnan ang oil level gamit ang dipstick sa patag na lugar.'],['W','Water','Check radiator coolant (when cold) and windshield washer water.','Tingnan ang coolant ng radiator (kapag malamig) at tubig ng wiper.'],['B','Brakes','Check pedal feel, brake fluid and the parking brake.','Tingnan ang tigas ng pedal, brake fluid at handbrake.'],['A','Air','Check tire pressure, including the spare.','Tingnan ang hangin ng gulong, pati ang ekstra.'],['G','Gas','Make sure there is enough fuel for the trip.','Tiyaking sapat ang gasolina sa biyahe.'],['E','Engine','Listen for unusual noises and check belts and hoses.','Making sa kakaibang tunog at tingnan ang belt at hose.'],['T','Tires','Look for cuts, bulges and worn tread.','Tingnan kung may hiwa, umbok o manipis na gulong.'],['S','Self','Be rested, sober, healthy, with license and documents ready.','Magpahinga, huwag uminom, maayos ang pakiramdam, at dala ang lisensya at dokumento.']];
const GU=[['Student Permit','Typically for applicants aged 16 and above. Requires LTMS registration, a medical certificate, and passing the written exam.','Karaniwang para sa 16 taong gulang pataas. Kailangan ang LTMS registration, medical certificate, at pasadong written exam.'],['Non-Professional License','Typically needs a student permit held for the required period, the Theoretical Driving Course (TDC), the Practical Driving Course (PDC), and passing the written and practical exams.','Karaniwang kailangan ang student permit na sapat ang tagal, Theoretical Driving Course (TDC), Practical Driving Course (PDC), at pasadong written at practical exam.'],['Professional License','For paid driving. Typically needs a minimum age of 18 and the required prior driving experience, plus the required exams.','Para sa bayad na pagmamaneho. Karaniwang kailangan ang edad na 18 pataas at kinakailangang karanasan, kasama ang mga exam.'],['Passing score','The written exam requires 80% to pass.','Kailangan ng 80% para pumasa sa written exam.']];
function aboutView(){
 app.innerHTML=`<h2>${t('about')}</h2><div class="card"><p>${t('aboutT')}</p></div><h3>${lang==='fil'?'Mga Requirement':'License requirements'}</h3>${GU.map(g=>`<details class="card gcard"><summary>${g[0]}</summary><p>${lang==='fil'?g[2]:g[1]}</p></details>`).join('')}<p class="small">${lang==='fil'?'Laging kumpirmahin ang kasalukuyang requirement sa LTO o LTMS portal.':'Always confirm current requirements with the LTO or the LTMS portal.'}</p><details class="card gcard" id="ios"><summary>${t('iosCardT')}</summary><ol class="steps">${(lang==='fil'?['Buksan ang app sa Safari.','Pindutin ang Share icon (parisukat na may arrow pataas).','Mag-scroll at piliin ang Add to Home Screen, saka Add.']:['Open this app in Safari.','Tap the Share icon (square with an up arrow).','Scroll and choose Add to Home Screen, then tap Add.']).map(x=>`<li>${x}</li>`).join('')}</ol></details><h3>BLOWBAGETS</h3><div id="bb">${BB.map(b=>`<details class="card gcard bb"><summary><span class="bl">${b[0]}</span>${b[1]}</summary><p>${lang==='fil'?b[3]:b[2]}</p></details>`).join('')}</div><h3>${t('resetT')}</h3><div class="card"><p>${t('resetD')}</p><div class="row"><button class="btn sec" id="rm">${t('resetMissed')}</button><button class="btn sec bad" id="ra">${t('resetAll')}</button></div></div>`;
 const clr=(keys,msg)=>{if(!confirm(msg))return;keys.forEach(k=>{try{localStorage.removeItem('lto_'+k)}catch{}});if(keys.includes('session')){clearInterval(tm);E=null}toast(t('resetDone'))};
 $('#rm').onclick=()=>clr(['missed'],t('resetC1'));
 $('#ra').onclick=()=>clr(['hist','cats','missed','days','session','name'],t('resetC2'));
}
function examView(){
 if(E&&!E.done)return runView();
 if(E&&E.done)return resultView();
 const cats=Object.keys(CATS).map(c=>`<button class="btn sec" data-cat="${c}">${cn(c)} (${QS.filter(q=>q.cat===c).length})</button>`).join('');
 app.innerHTML=`<h2>${t('exams')}</h2>${nameCard()}<div class="grid two"><button class="card mode" data-m="official"><h3>${t('official')}</h3><p>${t('officialD')}</p></button><button class="card mode" data-m="practice"><h3>${t('practice')}</h3><p>${t('practiceD')}</p></button><button class="card mode m-blue" data-m="quick"><h3>${t('quick')}</h3><p>${t('quickD')}</p></button><button class="card mode" data-m="permit"><h3>${t('permit')}</h3><p>${t('permitD')}</p></button><button class="card mode" data-m="signs"><h3>${t('drill')}</h3><p>${t('drillD')}</p></button><button class="card mode" data-m="review"><h3>${t('review')}</h3><p>${(ld('missed',[])).length} ${t('missed')}</p></button></div><h3>${t('bycat')}</h3><div class="grid">${cats}</div>`;
 bindName();app.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>start(b.dataset.m));
 app.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>start('cat',b.dataset.cat));
}
function start(mode,cat){
 let pool=QS.slice();
 if(mode==='permit')pool=pool.filter(q=>['signs','rules','fines'].includes(q.cat));
 if(mode==='signs')pool=pool.filter(q=>q.cat==='signs');
 if(mode==='cat')pool=pool.filter(q=>q.cat===cat);
 if(mode==='review'){const m=ld('missed',[]);pool=pool.filter(q=>m.includes(q.id))}
 pool=shuf([...new Map(pool.filter(q=>q&&Array.isArray(q.o)&&q.a>=0&&q.a<q.o.length).map(q=>[q.id,q])).values()]).slice(0,{official:60,practice:40,permit:40,quick:10}[mode]||99);
 if(!pool.length){toast(t('nomissed'));return}
 E={mode,list:pool,i:0,ans:{},flag:{},done:false,end:mode==='official'?Date.now()+3600000:0};
 persist();if(E.end){clearInterval(tm);tm=setInterval(tick,1000)}
 if(location.hash!=='#exam')location.hash='#exam';else render();
}
function fmt(ms){const s=Math.max(0,Math.ceil(ms/1000));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function tick(){if(!E||E.done||!E.end){clearInterval(tm);return}const r=E.end-Date.now(),el=$('#timer');if(el){el.textContent=fmt(r);el.classList.toggle('warn',r<=300000&&r>60000);el.classList.toggle('low',r<=60000)}const m=Math.ceil(r/60000);if(r>0&&r%60000<1000&&[30,10,5,1].includes(m))live(m+' '+t('minutes'));if(r<=0)finish()}
function runView(adv){
 const q=E.list[E.i],n=E.list.length,a=E.ans[E.i],fb=E.mode!=='official',locked=fb&&a!==undefined,na=Object.keys(E.ans).length,nf=Object.keys(E.flag).filter(k=>E.flag[k]).length;
 const opts=qo(q).map((o,k)=>{let c='opt';if(a===k)c+=' sel';if(locked){if(k===q.a)c+=' right';else if(a===k)c+=' wrong'}return `<button class="${c}" data-k="${k}" ${locked?'aria-disabled="true"':''}><b>${L[k]}</b><span>${o}</span></button>`}).join('');
 const nav=E.list.map((_,i)=>`<button class="${E.ans[i]!==undefined?'ans':''} ${E.flag[i]?'flg':''} ${i===E.i?'cur':''}" data-i="${i}" aria-label="${t('question')} ${i+1}">${i+1}</button>`).join('');
 app.innerHTML=`<div class="topprog" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${na}"><i style="width:${na/n*100}%"></i></div><div class="exam-grid"><section class="card qcard${adv?' slide':''}"><p class="cat">${cn(q.cat)}</p>${q.svg?`<div class="sign">${q.svg}</div>`:''}<h2 class="qstem">${qt(q)}</h2><div role="group" aria-label="${t('question')}">${opts}</div>${locked?`<div class="fb" role="status"><strong class="${a===q.a?'pass':'fail'}">${a===q.a?t('correct'):t('wrong')}</strong>${a===q.a?'':' · '+t('right')+': '+L[q.a]+'. '+qo(q)[q.a]}<p class="rat">${ex(q)}</p></div>`:''}<div class="row"><button class="btn sec" id="prev" ${E.i===0?'disabled':''}>${t('prev')}</button><button class="btn" id="next" ${E.i===n-1?'disabled':''}>${t('next')}</button><button class="btn ok" id="sub">${t('submit')}</button></div></section>
 <aside class="side card"><div class="top"><strong class="tnum">${t('question')} ${E.i+1}/${n}</strong>${E.end?`<span id="timer" class="tnum ${tcls(E.end-Date.now())}" role="timer" aria-label="${t('time')}">${fmt(E.end-Date.now())}</span>`:''}</div><div class="bar-track"><div class="bar-fill gold" style="width:${na/n*100}%"></div></div><p class="tnum small">${t('answered')}: ${na}/${n}</p><button class="btn sec wide" id="flag">${E.flag[E.i]?t('unflag'):t('flag')}</button><p class="keys" aria-hidden="true"><kbd>A</kbd><kbd>B</kbd><kbd>C</kbd><kbd>D</kbd> ${t('keyAns')} · <kbd>&larr;</kbd><kbd>&rarr;</kbd> ${t('keyNav')}</p><details class="drawer" id="dr"><summary>${t('answered')} ${na} · ${t('flagged')} ${nf} · ${t('unanswered')} ${n-na}</summary><div class="nav">${nav}</div></details></aside></div>`;
 if(mm('(min-width:1024px)').matches)$('#dr').open=true;
 app.querySelectorAll('.opt').forEach(b=>b.onclick=()=>pick(+b.dataset.k));
 app.querySelectorAll('.nav button').forEach(b=>b.onclick=()=>go(+b.dataset.i));
 $('#prev').onclick=()=>go(E.i-1);$('#next').onclick=()=>go(E.i+1);
 $('#flag').onclick=()=>{E.flag[E.i]=!E.flag[E.i];persist();runView()};
 $('#sub').onclick=()=>{if(na===n||confirm(t('confirm')))finish()};
}
function go(i){if(!E||E.done||i<0||i>=E.list.length)return;E.i=i;persist();runView(true);window.scrollTo(0,0)}
function pick(k){if(!E||E.done)return;const q=E.list[E.i];if(E.mode!=='official'&&E.ans[E.i]!==undefined)return;E.ans[E.i]=k;persist();if(E.mode!=='official'&&k!==q.a)vib([30,40,30]);else vib(15);runView();if(E.mode!=='official')live((k===q.a?t('correct'):t('wrong'))+'. '+ex(q))}
function finish(){
 if(!E||E.done)return;E.done=true;E.name=ld('name','');clearInterval(tm);persist();
 const n=E.list.length;let sc=0;const st=ld('cats',{}),missed=new Set(ld('missed',[]));
 E.list.forEach((q,i)=>{const ok=E.ans[i]===q.a;st[q.cat]=st[q.cat]||[0,0];st[q.cat][1]++;if(ok){sc++;st[q.cat][0]++;missed.delete(q.id)}else missed.add(q.id)});
 E.score=sc;E.pct=Math.round(sc/n*100);E.pass=sc/n>=.8;
 const h=ld('hist',[]);h.unshift({d:new Date().toISOString(),mode:E.mode,sc,n,pct:E.pct,pass:E.pass});sv('hist',h.slice(0,50));sv('cats',st);sv('missed',[...missed]);
 const days=ld('days',[]),today=new Date().toISOString().slice(0,10);if(!days.includes(today))days.push(today);sv('days',days.slice(-400));
 live(t('score')+' '+sc+'/'+n);
 if(location.hash!=='#exam')location.hash='#exam';else render();
}
function renderReview(f){
 const el=$('#rvw');if(!el)return;
 const rows=E.list.map((q,i)=>({q,i,a:E.ans[i]})).filter(r=>f==='all'||r.a!==r.q.a);
 el.innerHTML=`<div class="top" style="margin-top:24px"><h2 style="margin:0">${t('reviewT')}</h2><div class="chips" style="margin:0"><button class="chip" data-f="all" aria-pressed="${f==='all'}">${t('allQ')}</button><button class="chip" data-f="miss" aria-pressed="${f==='miss'}">${t('missedOnly')}</button></div></div>`+(rows.length?rows.map(({q,i,a})=>{const ok=a===q.a;return `<div class="card rvrow"><p><strong>${i+1}. ${qt(q)}</strong></p><p class="ua ${ok?'right':'wrong'}">${ok?'\u2713':'\u2717'} ${t('yourAns')}: ${a===undefined?'\u2014':L[a]+'. '+qo(q)[a]}</p><p class="ca">${t('right')}: ${L[q.a]}. ${qo(q)[q.a]}</p><p class="rat">${ex(q)}</p></div>`}).join(''):`<div class="card empty">${t('allRight')}</div>`);
 el.querySelectorAll('.chip').forEach(b=>b.onclick=()=>renderReview(b.dataset.f));
}
function resultView(){
 const cs={};E.list.forEach((q,i)=>{cs[q.cat]=cs[q.cat]||[0,0];cs[q.cat][1]++;if(E.ans[i]===q.a)cs[q.cat][0]++});const cb=Object.keys(cs).map(c=>`<tr><td>${cn(c)}</td><td class="tnum">${cs[c][0]}/${cs[c][1]}</td><td class="tnum">${Math.round(cs[c][0]/cs[c][1]*100)}%</td></tr>`).join('');
 const n=E.list.length,bad=E.list.map((q,i)=>[q,i]).filter(([q,i])=>E.ans[i]!==q.a);
 const rev=bad.map(([q,i])=>`<div class="card"><p><strong>${i+1}. ${qt(q)}</strong></p><p>${t('yourAns')}: ${E.ans[i]===undefined?'—':L[E.ans[i]]+'. '+qo(q)[E.ans[i]]}<br>${t('right')}: ${L[q.a]}. ${qo(q)[q.a]}</p><p style="color:var(--muted)">${ex(q)}</p></div>`).join('');
 app.innerHTML=`<section class="card cert"><h2>${t('cert')}</h2><div class="big tnum ${E.pass?'pass':'fail'}">${E.score}/${n}</div><p class="tnum">${E.pct}% · ${E.pass?`<strong class="pass">${t('passed')}</strong>`:`<strong class="fail">${t('failed')}</strong>`}</p>${E.name?`<p class="cname">${esc(E.name)}</p>`:''}<p>${new Date().toLocaleString()}</p><table class="cb"><tbody>${cb}</tbody></table><p style="color:var(--muted)">${t('note')}</p></section><div class="row noprint"><button class="btn" id="pr">${t('print')}</button><button class="btn warn" id="sh">${t('shareBtn')}</button><button class="btn sec" id="hm">${t('home2')}</button></div><section id="rvw" class="noprint"></section>`;renderReview('all');
 $('#pr').onclick=()=>print();$('#sh').onclick=shareScore;$('#hm').onclick=()=>{E=null;location.hash='#home'};
}
async function shareScore(){
 const txt=`I scored ${E.score}/${E.list.length} (${E.pct}% - ${E.pass?'PASSED':'FAILED'}) on the 2026 LTO LTMS Mock Exam! Try it free: https://esp046-cyber.github.io/ltomockexam/`;
 try{if(navigator.share){await navigator.share({title:'2026 LTO LTMS Mock Exam',text:txt});return}}catch(e){if(e&&e.name==='AbortError')return}
 try{if(navigator.clipboard&&navigator.clipboard.writeText){await navigator.clipboard.writeText(txt);toast(t('copied'));return}}catch(e){}
 try{const ta=document.createElement('textarea');ta.value=txt;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();const ok=document.execCommand&&document.execCommand('copy');ta.remove();toast(t(ok?'copied':'shareFail'))}catch(e){toast(t('shareFail'))}
}
function streak(){const d=new Set(ld('days',[]));let c=0,x=new Date();if(!d.has(x.toISOString().slice(0,10)))x.setDate(x.getDate()-1);while(d.has(x.toISOString().slice(0,10))){c++;x.setDate(x.getDate()-1)}return c}
function rdCard(h){const n=h.length,avg=n?Math.floor(h.reduce((s,x)=>s+x.pct,0)/n):0,k=!n?0:avg>=80?3:avg>=70?2:1;
 return `<div class="card rd rd${k}"><h3>${t('rdT')}</h3><div class="rdbadge">${t('rd'+k)}</div><p class="tnum" style="margin:var(--space-2) 0">${n?avg+'% \u00b7 '+n+' '+t('exams2'):t('rdD0')}</p><div class="bar-track" role="progressbar" aria-valuenow="${avg}" aria-valuemin="0" aria-valuemax="100"><div class="bar-fill" style="width:${avg}%"></div></div></div>`}
function progressView(){
 const h=ld('hist',[]);
 if(!h.length){app.innerHTML=`<h2>${t('progress')}</h2>${rdCard([])}<div class="card empty">${t('empty')}<div class="row" style="justify-content:center"><a class="btn" href="#exam?mode=practice">${t('practice')}</a></div></div>`;return}
 const st=ld('cats',{}),avg=Math.floor(h.reduce((s,x)=>s+x.pct,0)/h.length);
 const bars=Object.keys(CATS).map(c=>{const[a,b]=st[c]||[0,0],p=b?Math.round(a/b*100):0;return `<p style="margin-bottom:4px">${cn(c)} <span class="tnum" style="float:right">${p}%</span></p><div class="bar-track" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><div class="bar-fill" style="width:${p}%"></div></div><div style="height:12px"></div>`}).join('');
 app.innerHTML=`<h2>${t('progress')}</h2>${rdCard(h)}<div class="card stat tnum"><div><b>${avg}%</b><span>${t('avg')}</span></div><div><b>${h.length}</b><span>${t('exams2')}</span></div><div><b>${streak()}</b><span>${t('streak')}</span></div></div><div class="card"><h3>${t('mastery')}</h3>${bars}</div><div class="row noprint" style="margin-bottom:16px"><button class="btn warn" id="rv">${t('review')} (${ld('missed',[]).length})</button></div><div class="card"><h3>${t('history')}</h3>${h.slice(0,8).map(x=>`<p class="tnum" style="margin:0 0 8px">${new Date(x.d).toLocaleDateString()} · ${x.mode} · ${x.sc}/${x.n} · <strong class="${x.pass?'pass':'fail'}">${x.pct}%</strong></p>`).join('')}</div>`;
 $('#rv').onclick=()=>start('review');
}
let sf='all';
function signsView(){
 const F=[['all','fAll'],['reg','fReg'],['warn','fWarn'],['info','fInfo'],['mark','fMark']],list=window.SIGNS.filter(x=>sf==='all'||x.cat===sf);
 app.innerHTML=`<h2>${t('drill')}</h2><div class="row noprint" style="margin:0 0 16px"><button class="btn warn" id="sd">${t('start')}</button></div><div class="chips" role="group" aria-label="${t('gallery')}">${F.map(([k,l])=>`<button class="chip" data-f="${k}" aria-pressed="${sf===k}">${t(l)}</button>`).join('')}</div><div class="signs-grid">${list.map(x=>`<div class="card"><div class="sg">${x.svg}</div><h3>${lang==='fil'?x.fil:x.en}</h3><p>${lang==='fil'?x.mf:x.me}</p></div>`).join('')}</div>`;
 $('#sd').onclick=()=>start('signs');
 app.querySelectorAll('.chip').forEach(b=>b.onclick=()=>{sf=b.dataset.f;signsView()});
}
/* events */
$('#lang').onclick=()=>{lang=lang==='en'?'fil':'en';sv('lang',lang);render()};
$('#theme').onclick=()=>theme(root.dataset.theme==='dark'?'light':'dark');
addEventListener('hashchange',render);
addEventListener('keydown',e=>{
 if(!E||E.done||route().name!=='exam'||(e.target.closest&&e.target.closest('input,textarea,select'))||e.ctrlKey||e.metaKey||e.altKey)return;
 const k=e.key.toLowerCase();let i='1234'.indexOf(k);if(i<0)i='abcd'.indexOf(k);
 if(i>=0&&i<E.list[E.i].o.length){pick(i);e.preventDefault()}
 else if(e.key==='ArrowRight')go(E.i+1);else if(e.key==='ArrowLeft')go(E.i-1);
});
/* install banner */
let dp=null;
function banner(){if(ld('noinstall',false)||mm('(display-mode: standalone)').matches||navigator.standalone)return;const d=document.createElement('div');d.className='banner';d.innerHTML=`<span>${t('install')}</span><span><button id="bi">${t('installBtn')}</button> <button id="bl">${t('later')}</button></span>`;document.body.appendChild(d);
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
function restore(){const s=ld('session',null);if(!s||!Array.isArray(s.ids))return;const list=s.ids.map(id=>QS.find(q=>q.id===id)).filter(Boolean);if(!list.length||list.length!==s.ids.length){sv('session',null);return}
 E={mode:s.mode,list,i:Math.min(s.i||0,list.length-1),ans:s.ans||{},flag:s.flag||{},done:false,end:s.end||0};
 if(E.end){if(Date.now()>=E.end){finish();return}clearInterval(tm);tm=setInterval(tick,1000)}}
restore();render();
})();
