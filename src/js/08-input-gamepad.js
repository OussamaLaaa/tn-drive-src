// ===== input / physics / audio / zones =====
let RN=0,ZN=[],ZL=0,BN='',wet=0,jolt=0,ACC=0,CZ=510,msv=0,camRoll=0,camPit=0,PAD=null,pb=[],nt=0,fi=0,lastKey='',rpmS=.2,tkT=0,bwT=0,blT=0;
const W2={on:0,x:0,z:0,k:''},IN={s:0,g:0,b:0,hb:0,hn:0},M0=M.spd,E0=E.spd;
const LIM=z=>ZL||(LV[cur].sg?90:(z<620||(z>1380&&z<1800))?50:90);
function tgS(s){sig=sig==s?0:s;sigT=6}
function cyc(){lights=(lights+1)%4}
function rl2(a,b){const g=document.querySelector('[data-k=g]'),r=document.querySelector('[data-k=b]');if(g)g.textContent=a;if(r)r.textContent=b}
function rum(a,b){try{const p=[...navigator.getGamepads()].find(x=>x&&x.connected);p&&p.vibrationActuator&&p.vibrationActuator.playEffect('dual-rumble',{duration:260,strongMagnitude:a,weakMagnitude:b})}catch(e){}}
function rdIn(){const kb=(K.r?1:0)-(K.l?1:0);IN.s=Math.max(-1,Math.min(1,kb+(PAD?PAD.s:0)));IN.g=Math.max(K.g?1:0,PAD?PAD.g:0);IN.b=Math.max(K.b?1:0,PAD?PAD.b:0);IN.hb=(K.hb||(PAD&&PAD.hb))?1:0;IN.hn=(K.hn||(PAD&&PAD.hn))?1:0}
function uiEls(){const m=document.getElementById('mp'),o=ov.style.display=='flex',root=o?ov:(m.style.display=='block'?m:null);return root?[...root.querySelectorAll(o?'button':'.nd,.pill')].filter(e=>e.offsetParent&&!e.disabled):[]}
function focus(els){els.forEach(e=>e.classList.remove('fc'));const e=els[fi];if(e){e.classList.add('fc');e.scrollIntoView({block:'center',behavior:'smooth'})}}
function gp(dt){const p=(navigator.getGamepads?[...navigator.getGamepads()]:[]).find(x=>x&&x.connected);if(!p){PAD=null;return}
if(!PAD){PAD={s:0,g:0,b:0,hb:0,hn:0};toast='🎮 يد التحكم متصلة';toastT=2.5}AU.init();
const ax=v=>Math.abs(v)<.14?0:(v-Math.sign(v)*.14)/.86,bt=i=>p.buttons[i]&&p.buttons[i].pressed,E=[];for(let i=0;i<16;i++){const d=!!bt(i);E[i]=d&&!pb[i];pb[i]=d}
PAD.s=ax(p.axes[0]||0);PAD.g=p.buttons[7]?p.buttons[7].value:0;PAD.b=p.buttons[6]?p.buttons[6].value:0;PAD.hb=bt(1)?1:0;PAD.hn=bt(10)?1:0;
const els=uiEls();
if(els.length){const k=els.length+(els[0].textContent||'');if(k!=lastKey){lastKey=k;fi=Math.max(0,els.findIndex(e=>e.classList.contains('cur')));focus(els)}
const ay=p.axes[1]||0,ax0=p.axes[0]||0,dn=bt(13)||ay>.6||bt(15)||ax0>.6,up=bt(12)||ay<-.6||bt(14)||ax0<-.6;nt-=dt;
if((dn||up)&&nt<=0){nt=.22;fi=(fi+(dn?1:-1)+els.length)%els.length;focus(els)}else if(!dn&&!up)nt=0;
if(E[0]){const e=els[fi]||els[0];e&&e.click()}if(E[9]&&st!=3)menu();return}
lastKey='';
if(E[0])belt=true;if(E[2])cyc();if(E[3])mirT=t;if(E[4]||E[14])tgS(-1);if(E[5]||E[15])tgS(1);if(E[12])fog=!fog;if(E[9]||E[8])menu()}
