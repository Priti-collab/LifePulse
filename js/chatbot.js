/* Blood Buddy – rule-based chatbot, injected on every page */
(()=>{const root=location.pathname.includes('/pages/')?'../':'';
const KEY='bb_chat',FALL="I'm mainly here to help with blood donation, blood availability, donation camps and emergency blood requests. 🩸";
const QA=[
{q:'Who can donate blood?',k:['who can','eligib'],a:'Blood donation eligibility depends on factors such as age, health, weight and local blood-bank rules. Please confirm your eligibility with a qualified blood donation center before donating.'},
{q:'How can I donate?',k:['how can i donate','how to donate'],a:"Usually, you register, complete a health screening, donate if eligible, and follow the donation center's after-care instructions."},
{q:'What blood groups are there?',k:['group','types'],a:'Common blood groups are A+, A-, B+, B-, AB+, AB-, O+ and O-.'},
{q:'I need blood urgently',k:['urgent','emergency','need blood'],a:'If this is an emergency, contact the hospital or qualified blood bank directly. You can also submit a request through our Request Blood page.',l:['Request Blood','pages/request-blood.html']},
{q:'Find a blood bank',k:['blood bank'],a:'You can search blood banks by city and blood group here:',l:['Find a Blood Bank','index.html#find']},
{q:'Upcoming donation camps',k:['camp'],a:'See upcoming donation camps here:',l:['View Camps','index.html#camps-wrap']}];
const d=document.createElement('div');
d.innerHTML=`<button id="bb-fab" aria-label="Open Blood Buddy chat">🩸 Blood Buddy</button>
<section id="bb-win" aria-label="Blood Buddy chat"><div class="bb-head"><div><b>🩸 Blood Buddy</b><small>Your blood donation assistant</small></div><div><button id="bb-clear" title="Clear chat" aria-label="Clear chat">🗑</button><button id="bb-min" aria-label="Minimize">—</button><button id="bb-x" aria-label="Close">✕</button></div></div>
<div class="bb-body" id="bb-body" aria-live="polite"></div><div class="bb-q" id="bb-q"></div>
<form class="bb-foot" id="bb-form"><input id="bb-in" placeholder="Type your question…" aria-label="Message" autocomplete="off"><button>Send</button></form></section>`;
document.body.append(d);
const g=s=>document.getElementById(s),win=g('bb-win'),body=g('bb-body');let hist=JSON.parse(localStorage.getItem(KEY)||'[]');
const time=()=>new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
function draw(m){const e=document.createElement('div');e.className='msg '+m.r;e.innerHTML=`${m.t}${m.l?`<br><a class="btn-lp" href="${root+m.l[1]}">${m.l[0]}</a>`:''}<time>${m.ts}</time>`;body.append(e);body.scrollTop=body.scrollHeight}
function add(r,t,l){const m={r,t,l,ts:time()};hist.push(m);localStorage.setItem(KEY,JSON.stringify(hist));draw(m)}
const welcome=()=>add('bot',"Hi! I'm Blood Buddy 🩸<br>How can I help you today?");
function ask(q){const t=q.trim();if(!t)return;add('user',t.replace(/</g,'&lt;'));
 const ty=document.createElement('div');ty.className='typing';ty.textContent='Blood Buddy is typing...';body.append(ty);body.scrollTop=body.scrollHeight;
 setTimeout(()=>{ty.remove();const l=t.toLowerCase(),h=QA.find(x=>l===x.q.toLowerCase())||QA.find(x=>x.k.some(k=>l.includes(k)));h?add('bot',h.a,h.l):add('bot',FALL)},700)}
g('bb-q').innerHTML=QA.map(x=>`<button type="button">${x.q}</button>`).join('');
g('bb-q').onclick=e=>e.target.tagName==='BUTTON'&&ask(e.target.textContent);
g('bb-form').onsubmit=e=>{e.preventDefault();ask(g('bb-in').value);g('bb-in').value=''};
g('bb-fab').onclick=()=>{win.classList.add('open');win.classList.remove('min');g('bb-fab').style.display='none';g('bb-in').focus()};
g('bb-x').onclick=()=>{win.classList.remove('open');g('bb-fab').style.display=''};
g('bb-min').onclick=()=>win.classList.toggle('min');
g('bb-clear').onclick=()=>{hist=[];localStorage.removeItem(KEY);body.innerHTML='';welcome()};
hist.length?hist.forEach(draw):welcome();})();
