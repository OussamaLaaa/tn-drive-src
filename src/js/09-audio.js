// ---- audio ----
const AU={c:null,on:true,
init(){if(this.c){this.c.state=='suspended'&&this.c.resume();return}try{const c=this.c=new(window.AudioContext||window.webkitAudioContext)(),m=this.m=c.createGain();m.gain.value=this.on?.55:0;m.connect(c.destination);
const nb=this.nb=c.createBuffer(1,c.sampleRate*2,c.sampleRate),D=nb.getChannelData(0);for(let i=0;i<D.length;i++)D[i]=Math.random()*2-1;
const ns=(ft,f,q)=>{const s=c.createBufferSource();s.buffer=nb;s.loop=true;const fl=c.createBiquadFilter();fl.type=ft;fl.frequency.value=f;fl.Q.value=q||1;const g=c.createGain();g.gain.value=0;s.connect(fl);fl.connect(g);g.connect(m);s.start();return{g,fl}};
const osc=(ty,f)=>{const o=c.createOscillator();o.type=ty;o.frequency.value=f;o.start();return o};
const ef=c.createBiquadFilter();ef.type='lowpass';ef.frequency.value=600;const eg=c.createGain();eg.gain.value=0;ef.connect(eg);eg.connect(m);
this.o1=osc('sawtooth',40);this.o2=osc('square',20);this.o3=osc('sine',80);[this.o1,this.o2,this.o3].forEach(o=>o.connect(ef));this.ef=ef;this.eg=eg;
this.wd=ns('bandpass',700,.6);this.tr=ns('bandpass',1900,4);this.rm=ns('lowpass',160);
this.sr=osc('sawtooth',800);this.sg=c.createGain();this.sg.gain.value=0;this.sr.connect(this.sg);this.sg.connect(m);
this.h1=osc('square',392);this.h2=osc('square',494);this.hg=c.createGain();this.hg.gain.value=0;this.h1.connect(this.hg);this.h2.connect(this.hg);this.hg.connect(m);
this.mg=c.createGain();this.mg.gain.value=0;this.mg.connect(m);this.pd=[0,1,2].map(()=>{const o=osc('triangle',220),g=c.createGain();g.gain.value=.09;o.connect(g);g.connect(this.mg);return o})}catch(e){this.c=null}},
S(p,v){if(!this.c||!p.setTargetAtTime)return;const l=this._l||(this._l=new Map()),o=l.get(p);if(o!==undefined&&Math.abs(o-v)<Math.abs(v)*.01+.0005)return;l.set(p,v);p.setTargetAtTime(v,this.c.currentTime,.06)},
engine(r,th,v,on){if(!this.th)return;const f=32+r*95;this.S(this.o1.frequency,f);this.S(this.o2.frequency,f*.5);this.S(this.o3.frequency,f*2);this.S(this.ef.frequency,300+r*1500+th*600);this.S(this.eg.gain,on?.06+.1*th+.07*r:0)},
env(v,sl){if(!this.th)return;this.S(this.wd.g.gain,Math.min(.3,v/110*.28)+(RN?.1:0));this.S(this.wd.fl.frequency,300+v*9);this.S(this.rm.g.gain,v>1?.03+v/110*.08:0);this.S(this.tr.g.gain,sl*.2)},
music(on,tm){if(!this.th)return;this.S(this.mg.gain,on?.5:0);if(!on)return;const ch=[[220,261.6,329.6],[174.6,220,261.6],[261.6,329.6,392],[196,246.9,293.7]][Math.floor(tm/5)%4];this.pd.forEach((o,i)=>this.S(o.frequency,ch[i]))},
o(ty,f,d,v,f2){if(!this.c)return;const c=this.c,o=c.createOscillator(),g=c.createGain();o.type=ty;o.frequency.setValueAtTime(f,c.currentTime);if(f2)o.frequency.exponentialRampToValueAtTime(f2,c.currentTime+d);g.gain.setValueAtTime(v,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+d);o.connect(g);g.connect(this.m);o.start();o.stop(c.currentTime+d)},
n(d,v,f){if(!this.c)return;const c=this.c,s=c.createBufferSource(),g=c.createGain(),fl=c.createBiquadFilter();s.buffer=this.nb;fl.type='lowpass';fl.frequency.value=f;g.gain.setValueAtTime(v,c.currentTime);g.gain.exponentialRampToValueAtTime(.001,c.currentTime+d);s.connect(fl);fl.connect(g);g.connect(this.m);s.start();s.stop(c.currentTime+d)},
tick(){this.o('square',1800,.03,.07);setTimeout(()=>this.o('square',1200,.03,.05),90)},beep(){this.o('sine',1400,.25,.12)},bell(){this.o('sine',1560,.35,.14);this.o('sine',2340,.3,.06)},
thud(){this.n(.25,.5,200);this.o('sine',90,.25,.4,40)},crash(){this.n(.6,.9,1500);this.o('sawtooth',120,.5,.3,30)},bad(){this.o('square',220,.18,.15);setTimeout(()=>this.o('square',165,.3,.15),150)},
ok(){this.o('sine',660,.12,.15);setTimeout(()=>this.o('sine',990,.25,.15),110)},win(){[523,659,784,1046].forEach((f,i)=>setTimeout(()=>this.o('triangle',f,.4,.18),i*130))},ui(){this.o('sine',880,.06,.08)},
siren(a){if(!this.c||!this.th)return;this.S(this.sg.gain,a*.14);this.S(this.sr.frequency,850+160*Math.sin(performance.now()/180))},horn(on){if(!this.c||!this.th)return;this.S(this.hg.gain,on?.12:0)},
mute(){this.on=!this.on;if(this.m)this.m.gain.value=this.on?.55:0;const b=document.querySelector('[data-s=U]');if(b)b.textContent=this.on?'🔊':'🔇'}};
function snd(dt){if(!AU.c)return;_sa+=dt;AU.th=_sa>=.05;if(AU.th)_sa=0;const mpv=document.getElementById('mp').style.display=='block',on=!mpv&&(st>0||mn);
if(mn){const sv=Math.abs(msv);AU.engine(.18+sv*.1,Math.min(1,sv/2.3),0,on&&ms==1);AU.env(0,0)}
else if(on){const G=[0,22,42,65,90,200];let gi=0;while(v>=G[gi+1])gi++;const tr=.22+(v-G[gi])/(G[gi+1]-G[gi])*.65;rpmS+=(tr-rpmS)*Math.min(1,7*dt);AU.engine(rpmS,IN.g,v,st==1);AU.env(v,Math.max(0,Math.min(1,IN.b*v/90*(v>25?1:0)+Math.abs(sa)*v/120*(v>40?1:0)-.35)))}
else{AU.engine(0,0,0,false);AU.env(0,0)}
AU.music(mpv||(!mn&&!on)||ov.style.display=='flex'&&st!=3,performance.now()/1000);
if(!mn&&st==1){if(sig){tkT+=dt;if(tkT>.5){tkT=0;AU.tick()}}else tkT=0;if(!belt&&v>5){bwT+=dt;if(bwT>1.3){bwT=0;AU.beep()}}else bwT=0;if(rl){blT+=dt;if(blT>.4){blT=0;AU.bell()}}AU.siren(amb?Math.max(0,1-Math.abs(amb.d-d)/160):0);AU.horn(IN.hn)}else{AU.siren(0);AU.horn(0)}}
