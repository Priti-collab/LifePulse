/* LifePulse main script */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
addEventListener('scroll',()=>$('.navbar')?.classList.toggle('scrolled',scrollY>30));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.15});
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,end=+el.dataset.count;let n=0;const step=Math.ceil(end/60);
const t=setInterval(()=>{n=Math.min(n+step,end);el.textContent=n.toLocaleString()+'+';if(n>=end)clearInterval(t)},25);cio.unobserve(el)}));
$$('[data-count]').forEach(el=>cio.observe(el));
const GL=Object.keys(GROUPS),CITIES=[...new Set(BANKS.map(b=>b.c))].sort();
$$('select[data-groups]').forEach(s=>s.innerHTML='<option value="">'+(s.required?'Select':'All groups')+'</option>'+GL.map(g=>`<option>${g}</option>`).join(''));
$$('select[data-cities]').forEach(s=>s.innerHTML='<option value="">All cities</option>'+CITIES.map(c=>`<option>${c}</option>`).join(''));
const res=$('#results');
$('#findForm')?.addEventListener('submit',e=>{e.preventDefault();
 const g=$('#fGroup').value,c=$('#fCity').value,list=BANKS.filter(b=>(!g||b.g.includes(g))&&(!c||b.c===c));
 res.innerHTML=list.length?list.map(b=>`<div class="col-md-6 col-lg-4"><div class="card-lp"><h5>${b.n}</h5><p class="mb-1">📍 ${b.a}, ${b.c}</p><p class="mb-1">📞 ${b.p}</p><p class="mb-2">🩸 ${b.g.join(', ')}</p><span class="badge ${b.s==='Available'?'badge-ok':'badge-low'}">${b.s}</span><br><a class="btn-lp btn-sm mt-3" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.n+' '+b.a+' '+b.c)}">📍 View on Map</a></div></div>`).join(''):'<p class="text-center">No matching blood banks in demo data.</p>'});
const cg=$('#camps');if(cg)cg.innerHTML=CAMPS.map(c=>`<div class="col-md-6 col-lg-4 reveal"><div class="card-lp"><img class="camp-photo" src="assets/images/${c.i}" alt="${c.n} blood donation camp" loading="lazy"><h5>${c.n}</h5><p class="mb-1">🏢 ${c.o}</p><p class="mb-1">📅 ${c.d} · ${c.t}</p><p>📍 ${c.l}</p><button class="btn-lp btn-sm" data-camp>Register</button></div></div>`).join('');
$$('.reveal').forEach(el=>io.observe(el));
document.addEventListener('click',e=>{const b=e.target.closest('[data-camp]');if(b){b.textContent='Registered ✓';b.disabled=true}});
const gg=$('#groups');if(gg){gg.innerHTML=GL.map(g=>`<div class="col-6 col-md-3"><button class="group-btn">${g}</button></div>`).join('');
 gg.addEventListener('click',e=>{const b=e.target.closest('.group-btn');if(!b)return;$$('.group-btn').forEach(x=>x.classList.remove('on'));b.classList.add('on');$('#groupInfo').textContent=b.textContent+': '+GROUPS[b.textContent]})}
const st=$('#stories');if(st)st.innerHTML=STORIES.map(s=>`<div class="card-lp story"><p>“${s[2]}”</p><div class="d-flex gap-2 align-items-center"><img class="avatar" src="assets/images/${s[3]}" alt="Portrait of ${s[0]}" loading="lazy"><div><b>${s[0]}</b><br><small>${s[1]}</small></div></div></div>`).join('');
$$('form[data-validate]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();let ok=true;
 $$('[required]',f).forEach(i=>{let bad=!i.value.trim();
  if(!bad&&i.type==='email')bad=!/^\S+@\S+\.\S+$/.test(i.value);
  if(!bad&&i.dataset.phone!==undefined)bad=!/^[6-9]\d{9}$/.test(i.value);
  if(!bad&&i.type==='number'&&i.min)bad=+i.value<+i.min||+i.value>+i.max;
  i.classList.toggle('is-invalid',bad);if(bad)ok=false});
 const m=$('.alert-lp',f.parentElement);if(ok){m.style.display='block';m.textContent=f.dataset.success;f.reset()}else m.style.display='none'}));
