/* 3D tilt on cards + Lifeline Impact & Donor Prize calculator */
document.addEventListener('mousemove',e=>{const c=e.target.closest?.('.card-lp');
 document.querySelectorAll('.card-lp[data-t]').forEach(x=>{if(x!==c){x.style.transform='';x.removeAttribute('data-t')}});
 if(!c||matchMedia('(pointer:coarse)').matches)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
 c.dataset.t=1;c.style.transform=`perspective(700px) rotateX(${-y*10}deg) rotateY(${x*12}deg) translateY(-6px)`});
document.querySelectorAll('.flip').forEach(f=>f.addEventListener('click',()=>f.classList.toggle('on')));
const TIERS=[{min:1,name:'Bronze Hero',prize:'Digital certificate + LifePulse badge'},{min:3,name:'Silver Saver',prize:'LifePulse T-shirt'},{min:5,name:'Gold Guardian',prize:'Free health check-up voucher'},{min:10,name:'Platinum Lifesaver',prize:'Trophy + Hall of Fame feature'}];
const rng=document.getElementById('donCount');
if(rng){const $=id=>document.getElementById(id);
 function upd(){const n=+rng.value,t=[...TIERS].reverse().find(x=>n>=x.min),next=TIERS.find(x=>n<x.min);
  $('donN').textContent=n;$('lives').textContent=n*3;
  $('tierName').textContent=t?t.name:'Start your journey';$('prizeName').textContent=t?t.prize:'Make your first donation to unlock prizes';
  $('nextTier').textContent=next?`${next.min-n} more donation(s) to reach ${next.name}`:'You reached the top tier! 🏆';
  $('meter').style.width=Math.min(100,n/10*100)+'%';$('claim').disabled=!t;$('coupon').style.display='none';
  document.querySelectorAll('.flip').forEach((f,i)=>f.classList.toggle('tier-now',!!t&&TIERS[i].name===t.name))}
 rng.addEventListener('input',upd);upd();
 $('claim').addEventListener('click',()=>{let c;try{c=localStorage.getItem('lp_coupon')}catch(e){}
  if(!c){c='LP-'+Math.random().toString(36).slice(2,8).toUpperCase();try{localStorage.setItem('lp_coupon',c)}catch(e){}}
  $('coupon').style.display='block';$('coupon').textContent='🎁 Demo prize code: '+c+' – show this at a partner camp (demo only)'})}
/* 3D reveal hooks for sections without .reveal in markup */
document.querySelectorAll('.stat,#groups>div').forEach(el=>{el.classList.add('reveal');if(el.parentElement.id==='groups')el.classList.add('group-col');io.observe(el)});
document.getElementById('groups')?.addEventListener('click',e=>{const b=e.target.closest('.group-btn');if(!b)return;b.classList.remove('coin');void b.offsetWidth;b.classList.add('coin')});
