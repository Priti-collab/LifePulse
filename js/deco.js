/* Adds floating 3D-style SVG illustrations to every section, with mouse + scroll parallax */
(()=>{const root=location.pathname.includes('/pages/')?'../':'',IMGS=['drop','heart','bag','plus'];
const hosts=[...document.querySelectorAll('.hero,section,main')];const items=[];
hosts.forEach((h,i)=>{[0,1].forEach(k=>{const n=i*2+k,side=(n%2)?'right':'left',sp=document.createElement('span');
 sp.className='deco';sp.setAttribute('aria-hidden','true');
 sp.style.cssText=`${side}:${((n*5)%3)*.7}%;top:${8+(n*23)%60}%;--s:${58+(n*13)%34}px;--dl:${-(n*1.3)}s`;
 sp.dataset.d=8+(n*7)%22;sp.innerHTML=`<img src="${root}assets/images/${IMGS[n%4]}.png" alt="" loading="lazy">`;
 h.prepend(sp);items.push(sp)})});
let mx=0,my=0;const move=()=>items.forEach(s=>{const d=+s.dataset.d;s.style.transform=`translate3d(${mx*d}px,${my*d+scrollY*d*.01}px,0)`});
document.addEventListener('mousemove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;move()});
addEventListener('scroll',move,{passive:true});})();
