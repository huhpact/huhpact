(()=>{
const $=s=>document.querySelector(s),C=funnelCountries,S=funnelShapes,FONT='Inter,system-ui,sans-serif';
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ß/g,'ss').replace(/ø/g,'o').replace(/æ/g,'ae').replace(/œ/g,'oe').replace(/ł/g,'l').replace(/đ/g,'d').replace(/ı/g,'i').replace(/[’'`´.\-–]/g,' ').replace(/\s+/g,' ').trim();
const cfg={mode:'single',single:'FR',multi:new Set(['FR']),diff:'med',rounds:10};
const DIFF={easy:{a:[24,34],l:[.35,.6],min:4,max:999,h:'Breiter Trichter, Städte als Orientierungspunkte sichtbar.'},med:{a:[12,19],l:[.25,.45],min:2,max:12,h:'Schmaler Trichter, keine Orientierungspunkte.'},hard:{a:[6,10],l:[.14,.28],min:1,max:3,h:'Sehr schmal und kurz – meist nur wenige richtige Städte.'}};
const codes=Object.keys(C).sort((a,b)=>C[a].n.localeCompare(C[b].n,'de'));
const GR=[['eu','Europa'],['world','Weltweit']];
const total=codes.reduce((a,c)=>a+C[c].c.length,0);
$('#stat').textContent=codes.length+' Länder · '+total.toLocaleString('de-DE')+' Städte ab 50.000 Einwohnern';

// ---------- Setup ----------
const sel=$('#selC'),chips=$('#chips');
GR.forEach(([g,l])=>{const og=document.createElement('optgroup');og.label=l;codes.filter(c=>C[c].g===g).forEach(c=>og.appendChild(new Option(C[c].n+' ('+C[c].c.length+')',c)));sel.appendChild(og);
 const h=document.createElement('div');h.className='cg';h.textContent=l;chips.append(h);
 codes.filter(c=>C[c].g===g).forEach(c=>{const b=document.createElement('button');b.type='button';b.className='chip';b.textContent=C[c].n;b.dataset.c=c;b.onclick=()=>{cfg.multi.has(c)?cfg.multi.delete(c):cfg.multi.add(c);syncUI()};chips.append(b)})});
sel.value='FR';sel.onchange=()=>cfg.single=sel.value;
document.querySelectorAll('.presets button').forEach(b=>b.onclick=()=>{const p=b.dataset.p;cfg.multi=new Set(codes.filter(c=>p==='all'||(p!=='none'&&C[c].g===p)));syncUI()});
document.querySelectorAll('.seg').forEach(s=>s.onclick=e=>{const b=e.target.closest('button');if(!b)return;const k=s.dataset.k;cfg[k]=k==='rounds'?+b.dataset.v:b.dataset.v;syncUI()});
function syncUI(){
 document.querySelectorAll('.seg').forEach(s=>s.querySelectorAll('button').forEach(b=>b.classList.toggle('on',String(cfg[s.dataset.k])===b.dataset.v)));
 $('#pSingle').hidden=cfg.mode!=='single';$('#pMulti').hidden=cfg.mode!=='multi';
 chips.querySelectorAll('.chip').forEach(b=>b.classList.toggle('on',cfg.multi.has(b.dataset.c)));
 const n=cfg.multi.size,cn=[...cfg.multi].reduce((a,c)=>a+C[c].c.length,0);
 $('#cnt').textContent=n+' Länder ausgewählt · '+cn.toLocaleString('de-DE')+' Städte';
 $('#dh').textContent=DIFF[cfg.diff].h;$('#go').disabled=cfg.mode==='multi'&&!n;
}
syncUI();
const show=id=>{['setup','game','result'].forEach(s=>$('#'+s).hidden=s!==id);if(id==='game')resize()};

// ---------- Geometrie ----------
const geoCache={};
function geo(cc){
 if(geoCache[cc])return geoCache[cc];
 const sh=S[cc],polys=sh.type==='Polygon'?[sh.coordinates]:sh.coordinates;
 let mn=1e9,mx=-1e9,la0=1e9,la1=-1e9;
 polys.forEach(p=>p.forEach(r=>r.forEach(([x,y])=>{mn=Math.min(mn,x);mx=Math.max(mx,x);la0=Math.min(la0,y);la1=Math.max(la1,y)})));
 const wrap=mx-mn>300,fx=x=>wrap&&x<0?x+360:x;
 if(wrap){mn=1e9;mx=-1e9;polys.forEach(p=>p.forEach(r=>r.forEach(([x])=>{x=fx(x);mn=Math.min(mn,x);mx=Math.max(mx,x)})))}
 const lon0=(mn+mx)/2,latM=(la0+la1)/2,k=Math.cos(latM*Math.PI/180);
 const P=(lo,la)=>[(fx(lo)-lon0)*k,la-latM];
 const rings=polys.map(p=>p.map(r=>r.map(([x,y])=>P(x,y))));
 const bx0=(mn-lon0)*k,bx1=(mx-lon0)*k,by0=la0-latM,by1=la1-latM;
 const cities=C[cc].c.map(a=>{const [x,y]=P(a[2],a[1]);return{n:a[0],x,y,pop:a[3],alt:a[4]||'',nn:norm(a[0]),na:a[4]?a[4].split('|').map(norm):[]}});
 return geoCache[cc]={cc,rings,cities,bx0,by0,bw:bx1-bx0,bh:by1-by0,size:Math.hypot(bx1-bx0,by1-by0)};
}
function inF(o,c,th,al,L){
 const dx=c.x-o.x,dy=c.y-o.y;if(Math.hypot(dx,dy)>L)return false;
 let a=Math.atan2(dy,dx)-th;a=Math.atan2(Math.sin(a),Math.cos(a));return Math.abs(a)<=al;
}
function makeFunnel(g,d){
 const cs=g.cities,R=r=>r[0]+Math.random()*(r[1]-r[0]),need=Math.min(d.min,Math.ceil((cs.length-1)/2));
 for(let o=0;o<40;o++){
  const origin=cs[Math.random()*cs.length|0];
  for(let t=0;t<120;t++){
   const k=1+t/80,th=Math.random()*2*Math.PI,al=Math.min(R(d.a)*k,45)*Math.PI/180,L=R(d.l)*g.size*k;
   const inside=cs.filter(c=>c!==origin&&inF(origin,c,th,al,L));
   if(inside.length>=need&&inside.length<=d.max)return{origin,th,al,L,inside};
  }
 }
 const origin=cs[0],n=cs[1],th=Math.atan2(n.y-origin.y,n.x-origin.x),L=Math.hypot(n.x-origin.x,n.y-origin.y)*1.5,al=.35;
 return{origin,th,al,L,inside:cs.filter(c=>c!==origin&&inF(origin,c,th,al,L))};
}

// ---------- Spiel ----------
let R=null,pool,results,score,streak,used,prog=1,raf=0;
const cv=$('#cv'),ctx=cv.getContext('2d'),inp=$('#q'),sug=$('#sug');let dpr=1;
$('#go').onclick=()=>{pool=cfg.mode==='single'?[cfg.single]:[...cfg.multi];results=[];score=0;streak=0;used=new Set();show('game');next()};
$('#back').onclick=()=>{cancelAnimationFrame(raf);show('setup')};
$('#tosetup').onclick=()=>show('setup');$('#again').onclick=()=>$('#go').click();
$('#nx').onclick=next;$('#skip').onclick=()=>guess(null);
function next(){
 if(results.length>=cfg.rounds)return finish();
 let g,f,t=0;
 do{g=geo(pool[Math.random()*pool.length|0]);f=makeFunnel(g,DIFF[cfg.diff]);t++}while(used.has(g.cc+f.origin.n)&&t<30);
 used.add(g.cc+f.origin.n);R={g,f,done:false,guess:null,ok:false};
 $('#pc').textContent=f.origin.n;$('#pk').textContent=C[g.cc].n;
 $('#rn').textContent='Runde '+(results.length+1)+' / '+cfg.rounds;
 $('#pb').style.width=results.length/cfg.rounds*100+'%';$('#sc').textContent=score;$('#st').textContent=streak;
 $('#fb').hidden=true;$('#inrow').hidden=false;inp.value='';renderSug();
 cancelAnimationFrame(raf);const t0=performance.now();
 (function f2(now){const p=Math.max(0,Math.min(1,(now-t0)/750));prog=1-Math.pow(1-p,3);draw();if(p<1)raf=requestAnimationFrame(f2)})(t0);
 if(!matchMedia('(pointer:coarse)').matches)inp.focus();
}
function guess(c){
 if(!R||R.done)return;R.done=true;R.guess=c;R.ok=!!c&&R.f.inside.includes(c);prog=1;
 results.push(R.ok);R.ok?(score++,streak++):streak=0;
 $('#sc').textContent=score;$('#st').textContent=streak;$('#pb').style.width=results.length/cfg.rounds*100+'%';
 sug.hidden=true;inp.blur();$('#inrow').hidden=true;
 const fb=$('#fb'),ft=$('#ft');fb.hidden=false;fb.classList.toggle('bad',!R.ok);ft.textContent='';
 const b=document.createElement('b');
 b.textContent=R.ok?'Richtig – '+c.n+' liegt im Trichter.':c?'Leider nicht – '+c.n+' liegt außerhalb.':'Übersprungen.';
 ft.append(b);
 const ins=[...R.f.inside].sort((a,b)=>b.pop-a.pop),nm=ins.slice(0,6).map(x=>x.n).join(', ');
 ft.append(document.createTextNode(' Im Trichter: '+nm+(ins.length>6?' und '+(ins.length-6)+' weitere.':'.')));
 $('#nx').textContent=results.length>=cfg.rounds?'Ergebnis':'Weiter';
 draw();$('#nx').focus();
}
function finish(){
 show('result');const n=cfg.rounds,p=Math.round(score/n*100);
 $('#rs').textContent=score+' / '+n;
 $('#rt').textContent=p+' % Trefferquote – '+(p>=90?'hervorragend.':p>=70?'sehr solide.':p>=50?'ordentlich.':'da ist noch Luft nach oben.');
 const d=$('#rd');d.textContent='';results.forEach(ok=>{const i=document.createElement('i');if(ok)i.className='ok';d.append(i)});
}

// ---------- Suche ----------
let items=[],hi=0;
function renderSug(){
 const q=norm(inp.value);sug.textContent='';
 if(!q||!R||R.done){sug.hidden=true;return}
 const res=[];
 for(const c of R.g.cities){
  if(c===R.f.origin)continue;let sc=-1;
  if(c.nn.startsWith(q))sc=0;else if(c.na.some(a=>a.startsWith(q)))sc=1;else if(c.nn.split(' ').some(w=>w.startsWith(q)))sc=2;else if(c.nn.includes(q))sc=3;else if(c.na.some(a=>a.includes(q)))sc=4;
  if(sc>=0)res.push([sc,c]);
 }
 res.sort((a,b)=>a[0]-b[0]||b[1].pop-a[1].pop);
 items=res.slice(0,7);hi=0;sug.hidden=false;
 if(!items.length){const d=document.createElement('div');d.className='muted';d.textContent='Keine Stadt gefunden (nur Städte ab 50.000 Einwohnern).';sug.append(d);return}
 items.forEach(([sc,c],i)=>{
  const b=document.createElement('button');b.type='button';if(!i)b.className='hi';
  const a=document.createElement('span');a.textContent=c.n+((sc===1||sc===4)&&c.alt?' ('+c.alt.split('|')[0]+')':'');
  const e=document.createElement('em');e.textContent=c.pop>=1e6?(c.pop/1e6).toFixed(1).replace('.',',')+' Mio.':Math.round(c.pop/1000)+' Tsd.';
  b.append(a,e);b.onmousedown=ev=>ev.preventDefault();b.onclick=()=>guess(c);sug.append(b);
 });
}
function mark(){[...sug.children].forEach((b,i)=>b.classList.toggle('hi',i===hi))}
inp.oninput=renderSug;
inp.onkeydown=e=>{
 if(e.key==='ArrowDown'&&items.length){hi=(hi+1)%items.length;mark();e.preventDefault()}
 else if(e.key==='ArrowUp'&&items.length){hi=(hi-1+items.length)%items.length;mark();e.preventDefault()}
 else if(e.key==='Enter'&&items[hi]&&!sug.hidden){guess(items[hi][1])}
 else if(e.key==='Escape'){inp.value='';renderSug()}
};

// ---------- Zeichnen ----------
function resize(){
 const w=cv.clientWidth,h=cv.clientHeight;if(!w)return;
 dpr=window.devicePixelRatio||1;cv.width=w*dpr;cv.height=h*dpr;draw();
}
new ResizeObserver(resize).observe($('#mapwrap'));
function draw(){
 if(!R)return;const W=cv.clientWidth,H=cv.clientHeight;if(!W)return;
 ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,W,H);
 const g=R.g,f=R.f,cs=getComputedStyle(document.documentElement),v=n=>cs.getPropertyValue(n).trim(),ar=v('--accent-rgb');
 const pad=26,s=Math.min((W-2*pad)/g.bw,(H-2*pad)/g.bh),ox=W/2-(g.bx0+g.bw/2)*s,oy=H/2+(g.by0+g.bh/2)*s;
 const T=c=>[ox+c.x*s,oy-c.y*s];
 const path=()=>{ctx.beginPath();g.rings.forEach(p=>p.forEach(r=>{r.forEach(([x,y],i)=>{const X=ox+x*s,Y=oy-y*s;i?ctx.lineTo(X,Y):ctx.moveTo(X,Y)});ctx.closePath()}))};
 path();ctx.fillStyle=v('--map');ctx.fill('evenodd');
 const [ax,ay]=T(f.origin),L=Math.max(.01,f.L*s*prog);
 ctx.save();path();ctx.clip('evenodd');
 const gr=ctx.createRadialGradient(ax,ay,0,ax,ay,Math.max(L,1));
 gr.addColorStop(0,`rgba(${ar},.6)`);gr.addColorStop(1,`rgba(${ar},.14)`);
 ctx.beginPath();ctx.moveTo(ax,ay);ctx.arc(ax,ay,L,-f.th-f.al,-f.th+f.al);ctx.closePath();
 ctx.fillStyle=gr;ctx.fill();ctx.strokeStyle=`rgba(${ar},.9)`;ctx.lineWidth=1.3;ctx.stroke();ctx.restore();
 path();ctx.strokeStyle=v('--mapline');ctx.lineWidth=1;ctx.lineJoin='round';ctx.stroke();
 const dot=(c,r,fill,ring)=>{const[x,y]=T(c);ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fillStyle=fill;ctx.fill();if(ring){ctx.lineWidth=2;ctx.strokeStyle=ring;ctx.stroke()}};
 if(cfg.diff==='easy'||R.done)g.cities.forEach(c=>dot(c,2,v('--muted')+'99'));
 const boxes=[];
 const label=(c,bold,col)=>{
  const[x,y]=T(c);ctx.font=(bold?'600 13px ':'500 11.5px ')+FONT;const w=ctx.measureText(c.n).width;
  for(const dx of[10,-10-w]){const b=[x+dx-2,y-10,x+dx+w+2,y+8];
   if(!boxes.some(q=>b[0]<q[2]&&b[2]>q[0]&&b[1]<q[3]&&b[3]>q[1])){boxes.push(b);ctx.lineWidth=3;ctx.lineJoin='round';ctx.strokeStyle=v('--map');ctx.strokeText(c.n,x+dx,y+4);ctx.fillStyle=col;ctx.fillText(c.n,x+dx,y+4);return}}
 };
 if(R.done){
  const top=[...f.inside].sort((a,b)=>b.pop-a.pop);
  f.inside.forEach(c=>dot(c,4.5,v('--accent'),v('--map')));
  if(R.guess)dot(R.guess,6,R.ok?v('--accent'):v('--bad'),v('--text'));
 }
 const[ox2,oy2]=[ax,ay];
 ctx.beginPath();ctx.arc(ox2,oy2,13,0,7);ctx.strokeStyle=`rgba(${ar},.55)`;ctx.lineWidth=1.5;ctx.stroke();
 ctx.beginPath();ctx.arc(ox2,oy2,6,0,7);ctx.fillStyle=v('--text');ctx.fill();ctx.lineWidth=2;ctx.strokeStyle=v('--map');ctx.stroke();
 label(f.origin,true,v('--text'));
 if(R.done){
  if(R.guess)label(R.guess,true,R.ok?v('--accent'):v('--bad'));
  [...f.inside].sort((a,b)=>b.pop-a.pop).slice(0,8).forEach(c=>c!==R.guess&&label(c,false,v('--accent')));
 }
}
})();
