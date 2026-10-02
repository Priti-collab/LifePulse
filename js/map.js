/* Google Maps (no API key): embeds maps?q=...&output=embed, directions via maps links */
(()=>{const $=id=>document.getElementById(id),frame=$('mapFrame');if(!frame)return;
if(typeof GOOGLE_MAPS_KEY!=='undefined'&&GOOGLE_MAPS_KEY)return; /* API mode handled by map-api.js */
const show=q=>{frame.src='https://www.google.com/maps?q='+encodeURIComponent(q)+'&output=embed&z=13'};
const dir=b=>'https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(b.n+', '+b.a+', '+b.c);
function list(city){const l=BANKS.filter(b=>!city||b.c===city);
 $('mapList').innerHTML=l.map((b,i)=>`<div class="map-item"><b>${b.n}</b><small>📍 ${b.a}, ${b.c}</small><small>📞 ${b.p}</small>
 <button type="button" class="btn-lp btn-sm mt-2 me-1" data-q="${i}">Show on map</button><a href="${dir(b)}" target="_blank" rel="noopener">Get directions ↗</a></div>`).join('')||'<p>No blood banks found.</p>';
 $('mapList').dataset.city=city||''}
function load(){const c=$('mapCity').value;show(c?`blood bank in ${c}`:'blood bank in India');list(c);$('mapStatus').textContent=''}
$('mapCity').value='Ghaziabad';load();$('mapCity').addEventListener('change',load);
$('mapList').addEventListener('click',e=>{const b=e.target.closest('[data-q]');if(!b)return;
 const c=$('mapList').dataset.city,x=BANKS.filter(k=>!c||k.c===c)[+b.dataset.q];show(`${x.n}, ${x.a}, ${x.c}`);frame.scrollIntoView({behavior:'smooth',block:'center'})});
$('mapLocate').addEventListener('click',()=>{const s=$('mapStatus');
 if(!navigator.geolocation){s.textContent='Location is not supported in this browser.';return}
 s.textContent='Finding your location…';
 navigator.geolocation.getCurrentPosition(p=>{show(`blood bank near ${p.coords.latitude},${p.coords.longitude}`);s.textContent='Showing blood banks near you.'},
 ()=>{s.textContent='Could not get your location. Please allow location access or pick a city.'},{timeout:10000})});})();
