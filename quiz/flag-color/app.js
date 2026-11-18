(()=>{
const $=s=>document.querySelector(s);
const CAT={c:'Land',t:'Gebiet',o:'Organisation'},CATS=[['c','Länder'],['t','Gebiete'],['o','Organisationen']];
const cfg={cats:new Set(['c']),mode:'rgb',rounds:10};

/* ---------- Farbmathematik ---------- */
const clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
const hex2rgb=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
const rgb2hex=c=>'#'+c.map(v=>Math.round(clamp(v,0,255)).toString(16).padStart(2,'0')).join('');
function rgb2hsl([r,g,b]){r/=255;g/=255;b/=255;const mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2;let h=0,s=0;
 if(mx!==mn){const d=mx-mn;s=l>.5?d/(2-mx-mn):d/(mx+mn);h=mx===r?(g-b)/d+(g<b?6:0):mx===g?(b-r)/d+2:(r-g)/d+4;h*=60}return[h,s*100,l*100]}
function hsl2rgb([h,s,l]){s/=100;l/=100;const k=n=>(n+h/30)%12,a=s*Math.min(l,1-l),f=n=>l-a*Math.max(-1,Math.min(k(n)-3,Math.min(9-k(n),1)));return[f(0)*255,f(8)*255,f(4)*255]}
function lab([r,g,b]){const f=v=>{v/=255;return v<=.04045?v/12.92:Math.pow((v+.055)/1.055,2.4)},R=f(r),G=f(g),B=f(b);
 const x=(R*.4124+G*.3576+B*.1805)/.95047,y=R*.2126+G*.7152+B*.0722,z=(R*.0193+G*.1192+B*.9505)/1.08883,t=v=>v>.008856?Math.cbrt(v):7.787*v+16/116;
 return[116*t(y)-16,500*(t(x)-t(y)),200*(t(y)-t(z))]}
/* CIEDE2000 – wahrnehmungsnaher Farbabstand */
function dE(a,b){
 const [L1,a1,b1]=lab(a),[L2,a2,b2]=lab(b),rad=Math.PI/180,deg=180/Math.PI;
 const C1=Math.hypot(a1,b1),C2=Math.hypot(a2,b2),Cb=(C1+C2)/2,G=.5*(1-Math.sqrt(Math.pow(Cb,7)/(Math.pow(Cb,7)+Math.pow(25,7))));
 const ap1=(1+G)*a1,ap2=(1+G)*a2,Cp1=Math.hypot(ap1,b1),Cp2=Math.hypot(ap2,b2);
 const hp=(y,x)=>{if(!x&&!y)return 0;const h=Math.atan2(y,x)*deg;return h<0?h+360:h},hp1=hp(b1,ap1),hp2=hp(b2,ap2);
 const dL=L2-L1,dC=Cp2-Cp1;let dh=0;
 if(Cp1*Cp2){dh=hp2-hp1;if(dh>180)dh-=360;else if(dh<-180)dh+=360}
 const dH=2*Math.sqrt(Cp1*Cp2)*Math.sin(dh*rad/2),Lb=(L1+L2)/2,Cpb=(Cp1+Cp2)/2;
 let hb=hp1+hp2;if(Cp1*Cp2){hb=Math.abs(hp1-hp2)>180?(hp1+hp2+(hp1+hp2<360?360:-360))/2:(hp1+hp2)/2}
 const T=1-.17*Math.cos((hb-30)*rad)+.24*Math.cos(2*hb*rad)+.32*Math.cos((3*hb+6)*rad)-.2*Math.cos((4*hb-63)*rad);
 const dth=30*Math.exp(-Math.pow((hb-275)/25,2)),Rc=2*Math.sqrt(Math.pow(Cpb,7)/(Math.pow(Cpb,7)+Math.pow(25,7)));
 const Sl=1+.015*Math.pow(Lb-50,2)/Math.sqrt(20+Math.pow(Lb-50,2)),Sc=1+.045*Cpb,Sh=1+.015*Cpb*T,Rt=-Math.sin(2*dth*rad)*Rc;
 return Math.sqrt(Math.pow(dL/Sl,2)+Math.pow(dC/Sc,2)+Math.pow(dH/Sh,2)+Rt*(dC/Sc)*(dH/Sh));
}
/* Genauigkeit: ΔE 1 ≈ 99 %, 5 ≈ 95 %, 10 ≈ 88 %, 20 ≈ 73 %, 40 ≈ 43 %, 70 ≈ 16 % */
const accOf=d=>Math.round(100*Math.exp(-Math.pow(d/45,1.4)));
const tier=p=>p>=85?'g':p>=55?'m':'b';
function colorOf(v){v=(v||'').trim().toLowerCase();let m=v.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/);
 if(m)return v.length===4?'#'+[...v.slice(1)].map(c=>c+c).join(''):v;
 m=v.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);return m?rgb2hex([+m[1],+m[2],+m[3]]):null}

/* ---------- Setup ---------- */
const cnt={};FLAGS.forEach(f=>cnt[f.k]=(cnt[f.k]||0)+1);
const catBox=$('#cats');
CATS.forEach(([k,l])=>{const b=document.createElement('button');b.type='button';b.className='chip';b.dataset.k=k;b.innerHTML=l+' <b>'+cnt[k]+'</b>';
 b.onclick=()=>{if(cfg.cats.has(k)){if(cfg.cats.size>1)cfg.cats.delete(k)}else cfg.cats.add(k);sync()};catBox.append(b)});
document.querySelectorAll('#setup .seg').forEach(s=>s.onclick=e=>{const b=e.target.closest('button');if(!b)return;const k=s.dataset.k;cfg[k]=k==='rounds'?+b.dataset.v:b.dataset.v;sync()});
function pool(){return FLAGS.filter(f=>cfg.cats.has(f.k))}
function sync(){
 catBox.querySelectorAll('.chip').forEach(b=>b.classList.toggle('on',cfg.cats.has(b.dataset.k)));
 document.querySelectorAll('#setup .seg').forEach(s=>s.querySelectorAll('button').forEach(b=>b.classList.toggle('on',String(cfg[s.dataset.k])===b.dataset.v)));
 $('#catHint').textContent=pool().length+' Flaggen im Pool · Länder = UN-Mitglieder, Vatikan, Palästina, Taiwan, Kosovo';
 document.querySelectorAll('#modeSeg button').forEach(b=>b.classList.toggle('on',b.dataset.v===cfg.mode));
}
$('#stat').textContent=FLAGS.length+' Flaggen · '+FLAGS.filter(f=>f.k==='c').length+' Länder, '+FLAGS.filter(f=>f.k==='t').length+' Gebiete, '+FLAGS.filter(f=>f.k==='o').length+' Organisationen';
sync();
const show=id=>['setup','game','result'].forEach(s=>$('#'+s).hidden=s!==id);

/* ---------- Spielzustand ---------- */
let queue=[],R=null,hist=[],cur={rgb:[128,128,128],hsl:[0,0,50]},refs=[];
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
function nextFlag(){if(!queue.length)queue=shuffle(pool().slice());return queue.pop()}
$('#go').onclick=()=>{queue=[];hist=[];show('game');round()};
$('#back').onclick=()=>show('setup');
$('#tosetup').onclick=()=>show('setup');$('#again').onclick=()=>$('#go').click();

function pickTarget(f){const w=f.c.map(c=>Math.sqrt(c[1]));let r=Math.random()*w.reduce((a,b)=>a+b,0);for(let i=0;i<w.length;i++){r-=w[i];if(r<=0)return f.c[i][0]}return f.c[0][0]}
function collect(svg,target){
 const out=[],P=['fill','stroke','stop-color'];
 [svg,...svg.querySelectorAll('*')].forEach(el=>{
  P.forEach(p=>{if(el.hasAttribute(p)&&colorOf(el.getAttribute(p))===target)out.push([el,p,0])});
  const st=el.getAttribute('style');
  if(st)st.split(';').forEach(d=>{const i=d.indexOf(':');if(i>0){const p=d.slice(0,i).trim();if(P.includes(p)&&colorOf(d.slice(i+1))===target)out.push([el,p,1])}})});
 return out}
function paint(hex){refs.forEach(([el,p,st])=>st?el.style.setProperty(p,hex):el.setAttribute(p,hex))}

function round(){
 const f=nextFlag(),target=pickTarget(f);
 R={f,target,done:false,pick:null,acc:0,de:0};
 $('#pn').textContent=f.n;$('#pk').textContent=CAT[f.k];
 $('#rn').textContent='Runde '+(hist.length+1)+' / '+cfg.rounds;
 $('#pb').style.width=hist.length/cfg.rounds*100+'%';
 $('#avg').textContent=hist.length?Math.round(hist.reduce((a,h)=>a+h.acc,0)/hist.length)+' %':'–';
 const box=$('#flag');box.style.animation='none';box.offsetWidth;box.style.animation='';
 box.innerHTML=f.s;const svg=box.querySelector('svg');svg.removeAttribute('width');svg.removeAttribute('height');svg.setAttribute('role','img');svg.setAttribute('aria-label','Flagge: '+f.n);
 refs=collect(svg,target);
 $('#stage').classList.remove('reveal');$('#cmp').hidden=true;$('#fb').hidden=true;$('#ctl').hidden=false;
 cur={rgb:[128,128,128],hsl:[0,0,50]};buildSliders();update();
}

/* ---------- Regler ---------- */
const DEF={rgb:[['R',255],['G',255],['B',255]],hsl:[['H',360],['S',100],['L',100]]};
function buildSliders(){
 const box=$('#sl');box.innerHTML='';
 DEF[cfg.mode].forEach(([n,max],i)=>{
  const row=document.createElement('div');row.className='row';
  row.innerHTML='<label>'+n+'</label><input type="range" min="0" max="'+max+'" step="1" aria-label="'+n+'"><input type="number" min="0" max="'+max+'" inputmode="numeric" aria-label="'+n+' Wert">';
  const [rg,nm]=row.querySelectorAll('input');
  const on=v=>{v=clamp(Math.round(+v||0),0,max);if(cfg.mode==='rgb'){cur.rgb[i]=v;cur.hsl=rgb2hsl(cur.rgb)}else{cur.hsl[i]=v;cur.rgb=hsl2rgb(cur.hsl)}update()};
  rg.oninput=()=>on(rg.value);nm.oninput=()=>{if(nm.value!=='')on(nm.value)};nm.onblur=()=>update();
  box.append(row)});
}
function update(){
 const rows=$('#sl').children,v=cfg.mode==='rgb'?cur.rgb:cur.hsl,hex=rgb2hex(cur.rgb);
 for(let i=0;i<rows.length;i++){const[rg,nm]=rows[i].querySelectorAll('input'),val=Math.round(v[i]);
  rg.value=val;if(document.activeElement!==nm)nm.value=val;rg.style.setProperty('--cur',hex);rg.style.setProperty('--tr',track(i))}
 $('#hex').textContent=hex;$('#swc').style.background=hex;paint(hex);
}
function track(i){
 if(cfg.mode==='rgb'){const a=[...cur.rgb],b=[...cur.rgb];a[i]=0;b[i]=255;return`linear-gradient(90deg,${rgb2hex(a)},${rgb2hex(b)})`}
 const[h,s,l]=cur.hsl;
 if(i===0)return`linear-gradient(90deg,${[0,60,120,180,240,300,360].map(x=>rgb2hex(hsl2rgb([x,s,l]))).join(',')})`;
 if(i===1)return`linear-gradient(90deg,${rgb2hex(hsl2rgb([h,0,l]))},${rgb2hex(hsl2rgb([h,100,l]))})`;
 return`linear-gradient(90deg,#000,${rgb2hex(hsl2rgb([h,s,50]))},#fff)`;
}
document.querySelectorAll('#modeSeg button').forEach(b=>b.onclick=()=>{cfg.mode=b.dataset.v;sync();buildSliders();update()});

/* ---------- Wertung ---------- */
function confirm(){
 if(!R||R.done)return;R.done=true;
 const mine=[...cur.rgb].map(Math.round),tgt=hex2rgb(R.target);
 R.pick=rgb2hex(mine);R.de=dE(mine,tgt);R.acc=accOf(R.de);hist.push({f:R.f,pick:R.pick,target:R.target,acc:R.acc,de:R.de});
 $('#ctl').hidden=true;$('#fb').hidden=false;$('#cmp').hidden=false;
 $('#stage').classList.add('reveal');paint(R.target);
 document.querySelectorAll('#cmp button').forEach(b=>b.classList.toggle('on',b.dataset.s==='orig'));
 $('#pm').style.background=R.pick;$('#pmh').textContent=R.pick;$('#po').style.background=R.target;$('#poh').textContent=R.target;
 const el=$('#pct');el.className='pct '+tier(R.acc);const t0=performance.now();
 (function f(now){const p=clamp((now-t0)/600,0,1),v=Math.round(R.acc*(1-Math.pow(1-p,3)));el.innerHTML=v+'<small> %</small>';if(p<1)requestAnimationFrame(f)})(t0);
 $('#pb').style.width=hist.length/cfg.rounds*100+'%';
 $('#avg').textContent=Math.round(hist.reduce((a,h)=>a+h.acc,0)/hist.length)+' %';
 $('#nx').textContent=hist.length>=cfg.rounds?'Ergebnis':'Weiter';$('#nx').focus();
}
$('#ok').onclick=confirm;
document.querySelectorAll('#cmp button').forEach(b=>b.onclick=()=>{
 document.querySelectorAll('#cmp button').forEach(x=>x.classList.toggle('on',x===b));paint(b.dataset.s==='orig'?R.target:R.pick)});
$('#nx').onclick=()=>hist.length>=cfg.rounds?finish():round();
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&!$('#game').hidden&&R&&!R.done&&e.target.tagName!=='BUTTON'){e.preventDefault();confirm()}});

/* ---------- Ergebnis ---------- */
function finish(){
 show('result');const n=hist.length,avg=Math.round(hist.reduce((a,h)=>a+h.acc,0)/n),sum=hist.reduce((a,h)=>a+h.acc,0);
 $('#rs').textContent=avg+' %';
 $('#rt').textContent='Durchschnittliche Genauigkeit – '+(avg>=90?'ein Auge für Farben.':avg>=75?'sehr stark.':avg>=55?'solide.':'da ist noch Luft nach oben.');
 const best=hist.reduce((a,h)=>h.acc>a.acc?h:a),worst=hist.reduce((a,h)=>h.acc<a.acc?h:a),perfect=hist.filter(h=>h.acc>=95).length;
 $('#rst').innerHTML='';
 [['Punkte',sum+' / '+n*100],['Beste Runde',best.f.n+' · '+best.acc+' %'],['Schwächste Runde',worst.f.n+' · '+worst.acc+' %'],['Treffer ≥ 95 %',perfect+' von '+n]].forEach(([l,v])=>{
  const d=document.createElement('div');d.className='stat';d.textContent=l;const b=document.createElement('b');b.textContent=v;d.append(b);$('#rst').append(d)});
 const L=$('#rl');L.innerHTML='';
 hist.forEach(h=>{
  const r=document.createElement('div');r.className='li';
  const im=document.createElement('img');im.alt='';im.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(h.f.s);
  const nm=document.createElement('span');nm.className='nm';nm.textContent=h.f.n;
  const sw=document.createElement('span');sw.className='sws';
  [h.pick,h.target].forEach(c=>{const i=document.createElement('i');i.style.background=c;i.title=c;sw.append(i)});
  const p=document.createElement('span');p.className='p '+tier(h.acc);p.textContent=h.acc+' %';
  r.append(im,nm,sw,p);L.append(r)});
}
})();