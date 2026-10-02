/* Google Maps JavaScript API version: custom markers, info windows, nearest bank. Runs only if GOOGLE_MAPS_KEY is set. */
(()=>{if(typeof GOOGLE_MAPS_KEY==='undefined'||!GOOGLE_MAPS_KEY)return;
const $=id=>document.getElementById(id),fr=$('mapFrame');if(!fr)return;
const div=document.createElement('div');div.id='gmap';div.className='map-frame';div.setAttribute('role','application');div.setAttribute('aria-label','Map of blood banks');fr.replaceWith(div);
let map,info,markers=[],me;const st=t=>$('mapStatus').textContent=t;
const dir=b=>`https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}`;
const km=(a,b,c,d)=>{const r=x=>x*Math.PI/180,h=Math.sin(r(c-a)/2)**2+Math.cos(r(a))*Math.cos(r(c))*Math.sin(r(d-b)/2)**2;return 12742*Math.asin(Math.sqrt(h))};
function open(i){const b=BANKS[i],m=markers[i];info.setContent(`<b>${b.n}</b><br>${b.a}, ${b.c}<br>📞 ${b.p}<br><a target="_blank" rel="noopener" href="${dir(b)}">Get directions</a>`);info.open(map,m)}
function list(c){$('mapList').innerHTML=BANKS.map((b,i)=>c&&b.c!==c?'':`<div class="map-item"><b>${b.n}</b><small>📍 ${b.a}, ${b.c}</small><small>📞 ${b.p}</small><button type="button" class="btn-lp btn-sm mt-2 me-1" data-i="${i}">Show on map</button><a href="${dir(b)}" target="_blank" rel="noopener">Get directions ↗</a></div>`).join('')}
function apply(){const c=$('mapCity').value,bd=new google.maps.LatLngBounds();markers.forEach((m,i)=>{const v=!c||BANKS[i].c===c;m.setVisible(v);if(v)bd.extend(m.getPosition())});if(!bd.isEmpty())map.fitBounds(bd,60);list(c)}
window.initLPMap=()=>{map=new google.maps.Map(div,{center:{lat:28.67,lng:77.45},zoom:11,mapTypeControl:false});info=new google.maps.InfoWindow();
 markers=BANKS.map((b,i)=>{const m=new google.maps.Marker({map,position:{lat:b.lat,lng:b.lng},title:b.n,animation:google.maps.Animation.DROP});m.addListener('click',()=>open(i));return m});
 $('mapCity').value='Ghaziabad';apply();st('')};
window.gm_authFailure=()=>st('Google Maps key problem – check js/config.js and that Maps JavaScript API is enabled.');
$('mapCity').addEventListener('change',apply);
$('mapList').addEventListener('click',e=>{const b=e.target.closest('[data-i]');if(!b)return;const i=+b.dataset.i;map.panTo(markers[i].getPosition());map.setZoom(15);open(i);div.scrollIntoView({behavior:'smooth',block:'center'})});
$('mapLocate').addEventListener('click',()=>{if(!navigator.geolocation)return st('Location is not supported in this browser.');st('Finding your location…');
 navigator.geolocation.getCurrentPosition(p=>{const la=p.coords.latitude,lo=p.coords.longitude;me?.setMap(null);
  me=new google.maps.Marker({map,position:{lat:la,lng:lo},title:'You are here',icon:{path:google.maps.SymbolPath.CIRCLE,scale:9,fillColor:'#1a73e8',fillOpacity:1,strokeColor:'#fff',strokeWeight:3}});
  let n=0,d=1e9;BANKS.forEach((b,i)=>{const x=km(la,lo,b.lat,b.lng);if(x<d){d=x;n=i}});
  markers.forEach(m=>m.setVisible(true));const bd=new google.maps.LatLngBounds();bd.extend({lat:la,lng:lo});bd.extend(markers[n].getPosition());map.fitBounds(bd,80);open(n);
  st(`Nearest blood bank: ${BANKS[n].n} (about ${d.toFixed(1)} km away).`)},()=>st('Could not get your location. Please allow location access or pick a city.'),{timeout:10000})});
const s=document.createElement('script');s.src=`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(GOOGLE_MAPS_KEY)}&callback=initLPMap`;s.async=true;s.onerror=()=>st('Could not load Google Maps. Check your internet connection.');document.head.append(s);})();
