function dg(){const w=W,hh=Hh,r=Math.min(w*.42,hh*.3);return{w,hh,r,wx:w/2,wy:hh*1.02,gx:w/2,gy:hh*.87,gr:r*.55}}
function angS(s){return Math.PI*.75+s/140*Math.PI*1.5}
function buildStatic(){const G=SG=dg(),w=G.w,hh=G.hh,r=G.r,gx=G.gx,gy=G.gy,gr=G.gr,c=sdx;
 sdc.width=Math.round(w*DP);sdc.height=Math.round(hh*DP);sdc.style.width=w+'px';sdc.style.height=hh+'px';c.setTransform(DP,0,0,DP,0,0);c.clearRect(0,0,w,hh);
 const pg=c.createLinearGradient(0,0,0,hh*.5);pg.addColorStop(0,'#0a0a0c');pg.addColorStop(1,'#202227');c.fillStyle=pg;c.fillRect(0,0,w,6);
 c.beginPath();c.moveTo(0,0);c.lineTo(w*.09,0);c.lineTo(0,hh*.45);c.fill();c.beginPath();c.moveTo(w,0);c.lineTo(w*.91,0);c.lineTo(w,hh*.45);c.fill();
 const dg2=c.createLinearGradient(0,hh*.7,0,hh);dg2.addColorStop(0,'#2d3036');dg2.addColorStop(.1,'#17181b');dg2.addColorStop(1,'#060607');c.fillStyle=dg2;
 c.beginPath();c.moveTo(0,hh*.82);c.quadraticCurveTo(w/2,hh*.7,w,hh*.82);c.lineTo(w,hh);c.lineTo(0,hh);c.fill();
 c.strokeStyle='rgba(255,255,255,.14)';c.lineWidth=2;c.beginPath();c.moveTo(0,hh*.82);c.quadraticCurveTo(w/2,hh*.7,w,hh*.82);c.stroke();
 const gl=c.createLinearGradient(0,0,w,hh*.6);gl.addColorStop(0,'rgba(255,255,255,.06)');gl.addColorStop(.4,'rgba(255,255,255,0)');c.fillStyle=gl;c.fillRect(0,0,w,hh*.7);
 const bz=c.createLinearGradient(gx-gr,gy-gr,gx+gr,gy+gr);bz.addColorStop(0,'#8a8d93');bz.addColorStop(.5,'#2b2d31');bz.addColorStop(1,'#6b6e74');c.fillStyle=bz;c.beginPath();c.arc(gx,gy,gr*1.07,0,7);c.fill();
 const gf=c.createRadialGradient(gx-gr*.25,gy-gr*.3,gr*.1,gx,gy,gr);gf.addColorStop(0,'#16181d');gf.addColorStop(1,'#030304');c.fillStyle=gf;c.beginPath();c.arc(gx,gy,gr,0,7);c.fill();
 c.textAlign='center';
 for(let q=0;q<=140;q+=10){const a=angS(q),big=q%20==0;c.strokeStyle=q>100?'#ff5a3c':'#ffb25a';c.shadowColor=c.strokeStyle;c.shadowBlur=big?7:3;c.lineWidth=big?2.4:1.2;c.beginPath();c.moveTo(gx+Math.cos(a)*gr*(big?.8:.86),gy+Math.sin(a)*gr*(big?.8:.86));c.lineTo(gx+Math.cos(a)*gr*.93,gy+Math.sin(a)*gr*.93);c.stroke();
  if(big){c.shadowBlur=0;c.fillStyle='#e8e8ea';c.font=(gr*.15)+'px Arial';c.fillText(q,gx+Math.cos(a)*gr*.66,gy+Math.sin(a)*gr*.66+gr*.05)}}
 c.shadowBlur=0;c.font=(gr*.11)+'px Arial';c.fillStyle='#a88';c.fillText('km/h',gx,gy+gr*.7);
 // steering wheel bitmap (rotated each frame with one drawImage)
 const sz=Math.ceil(r*2.4);WHL=document.createElement('canvas');WHL.width=Math.round(sz*DP);WHL.height=Math.round(sz*DP);WHL.s=sz;const k=WHL.getContext('2d');k.setTransform(DP,0,0,DP,0,0);k.translate(sz/2,sz/2);
 const lg2=k.createLinearGradient(-r,-r,r,r);lg2.addColorStop(0,'#2e2e32');lg2.addColorStop(.5,'#101012');lg2.addColorStop(1,'#222226');
 k.strokeStyle=lg2;k.lineWidth=r*.16;k.beginPath();k.arc(0,0,r,0,7);k.stroke();
 k.strokeStyle='rgba(255,255,255,.12)';k.lineWidth=2;k.beginPath();k.arc(0,0,r*1.065,Math.PI*1.1,Math.PI*1.7);k.stroke();
 k.setLineDash([5,7]);k.strokeStyle='rgba(190,190,200,.35)';k.lineWidth=1.4;k.beginPath();k.arc(0,0,r*.935,0,7);k.stroke();k.setLineDash([]);
 k.lineCap='round';k.strokeStyle='#17171a';k.lineWidth=r*.09;[Math.PI*.9,Math.PI*.1,Math.PI*.5].forEach(a=>{k.beginPath();k.moveTo(0,0);k.lineTo(Math.cos(a)*r,Math.sin(a)*r);k.stroke()});
 const hubg=k.createRadialGradient(-r*.05,-r*.05,0,0,0,r*.24);hubg.addColorStop(0,'#3a3a40');hubg.addColorStop(1,'#111');k.fillStyle=hubg;k.beginPath();k.arc(0,0,r*.22,0,7);k.fill();k.strokeStyle='#8a8d93';k.lineWidth=2;k.beginPath();k.arc(0,0,r*.13,0,7);k.stroke()}
function dash(){
cx.setTransform(DP,0,0,DP,0,0);
const G=SG||(SG=dg()),w=G.w,hh=G.hh,r=G.r,wx=G.wx,wy=G.wy,gx=G.gx,gy=G.gy,gr=G.gr;
cx.clearRect(0,0,w,hh);
if(RN){cx.save();cx.beginPath();cx.rect(0,0,w,hh*.76);cx.clip();cx.strokeStyle='rgba(205,228,255,.5)';cx.lineWidth=1.2;cx.beginPath();const pn=performance.now();for(let i=0;i<130;i++){const rx=(i*131.7)%w,ry=((i*57.3)+pn*(.5+(i%7)*.06))%hh;cx.moveTo(rx,ry);cx.lineTo(rx-4,ry+18)}cx.stroke();cx.restore()}
// mirror: re-rendered every 3rd frame, cached in between
const mw=w*.34,mh=Math.min(mw*.3,hh*.1),mx=w*.33,my=8;
if((mirF=(mirF+1)%3)==0||!mirOK){mc.aspect=mw/mh;mc.updateProjectionMatrix();mc.position.set(x-.1,1.3,-d);mc.rotation.y=Math.PI;
 ren.setScissorTest(true);ren.setScissor(mx,Hh-my-mh,mw,mh);ren.setViewport(mx,Hh-my-mh,mw,mh);ren.render(sc,mc);ren.setScissorTest(false);ren.setViewport(0,0,W,Hh);
 const m2=Math.round(mw*DP),h2=Math.round(mh*DP);if(MC.width!=m2||MC.height!=h2){MC.width=m2;MC.height=h2}
 mcx.setTransform(1,0,0,1,0,0);mcx.clearRect(0,0,m2,h2);mcx.save();try{mcx.filter='brightness(.72) contrast(1.05)'}catch(e){}mcx.translate(m2,0);mcx.scale(-1,1);mcx.drawImage(wc,mx*PR,my*PR,mw*PR,mh*PR,0,0,m2,h2);mcx.restore();mirOK=true}
cx.save();cx.beginPath();if(cx.roundRect)cx.roundRect(mx,my,mw,mh,8);else cx.rect(mx,my,mw,mh);cx.clip();cx.drawImage(MC,mx,my,mw,mh);cx.restore();
const mg=cx.createLinearGradient(mx,my,mx,my+mh);mg.addColorStop(0,'rgba(255,255,255,.18)');mg.addColorStop(.4,'rgba(255,255,255,0)');mg.addColorStop(1,'rgba(0,0,0,.25)');cx.fillStyle=mg;cx.fillRect(mx,my,mw,mh);
const fg=cx.createLinearGradient(mx,my-4,mx,my+mh+4);fg.addColorStop(0,'#555');fg.addColorStop(.5,'#111');fg.addColorStop(1,'#333');cx.strokeStyle=fg;cx.lineWidth=6;cx.strokeRect(mx-3,my-3,mw+6,mh+6);
// gauge (dynamic parts only)
cx.textAlign='center';
const la=angS(LIM(d));cx.fillStyle='#f33';cx.shadowColor='#f33';cx.shadowBlur=8;cx.beginPath();cx.arc(gx+Math.cos(la)*gr*.97,gy+Math.sin(la)*gr*.97,gr*.045,0,7);cx.fill();cx.shadowBlur=0;
const na=angS(v);cx.save();cx.shadowColor='rgba(0,0,0,.7)';cx.shadowBlur=6;cx.shadowOffsetY=3;cx.strokeStyle='#ff6a2a';cx.lineWidth=3.2;cx.lineCap='round';cx.beginPath();cx.moveTo(gx-Math.cos(na)*gr*.12,gy-Math.sin(na)*gr*.12);cx.lineTo(gx+Math.cos(na)*gr*.86,gy+Math.sin(na)*gr*.86);cx.stroke();cx.restore();
const hb=cx.createRadialGradient(gx-gr*.03,gy-gr*.03,0,gx,gy,gr*.1);hb.addColorStop(0,'#aaa');hb.addColorStop(1,'#222');cx.fillStyle=hb;cx.beginPath();cx.arc(gx,gy,gr*.09,0,7);cx.fill();
cx.fillStyle='#ffe3b8';cx.shadowColor='#ff9d2e';cx.shadowBlur=10;cx.font='bold '+(gr*.3)+'px Arial';cx.fillText(Math.round(v),gx,gy+gr*.55);cx.shadowBlur=0;
const bl=sig&&Math.floor(t*3)%2;cx.font=(gr*.35)+'px Arial';cx.fillStyle=bl&&sig<0?'#3f3':'#2a2f2a';if(bl&&sig<0){cx.shadowColor='#3f3';cx.shadowBlur=10}cx.fillText('◀',gx-gr*.4,gy-gr*.35);cx.shadowBlur=0;cx.fillStyle=bl&&sig>0?'#3f3':'#2a2f2a';if(bl&&sig>0){cx.shadowColor='#3f3';cx.shadowBlur=10}cx.fillText('▶',gx+gr*.4,gy-gr*.35);cx.shadowBlur=0;
if(!belt){cx.fillStyle='#f33';cx.fillText('🔓',gx,gy-gr*.35)}
if(lampR&&Math.floor(t*3)%2){cx.fillStyle='#f22';cx.shadowColor='#f22';cx.shadowBlur=14;cx.beginPath();cx.arc(gx-gr*.95,gy-gr*.75,gr*.2,0,7);cx.fill();cx.shadowBlur=0;cx.font=(gr*.25)+'px Arial';cx.fillText('🛢️',gx-gr*.95,gy-gr*.66)}
if(lampO){cx.fillStyle='#f90';cx.shadowColor='#f90';cx.shadowBlur=14;cx.beginPath();cx.arc(gx+gr*.95,gy-gr*.75,gr*.2,0,7);cx.fill();cx.shadowBlur=0;cx.font=(gr*.25)+'px Arial';cx.fillText('⛽',gx+gr*.95,gy-gr*.66)}
if(WHL){cx.save();cx.translate(wx,wy);cx.rotate(sa*1.1);cx.drawImage(WHL,-WHL.s/2,-WHL.s/2,WHL.s,WHL.s);cx.restore()}
// HUD
cx.textAlign='left';cx.fillStyle='#fff';cx.shadowColor='rgba(0,0,0,.8)';cx.shadowBlur=4;cx.font='bold 16px Tahoma';cx.fillText('⭐ '+score,10,26);cx.font='13px Tahoma';cx.fillText('💡 '+['إطفاء','وضعية','مقاطعة','طريق'][lights]+(fog?' + ضباب':''),10,46);
if(PERF){cx.font='12px monospace';cx.fillStyle='#9f9';cx.fillText(Math.round(1000/Math.max(_fe,1))+' fps · '+_fe.toFixed(1)+' ms · calls '+ren.info.render.calls+' · tris '+ren.info.render.triangles+' · PR '+PR,10,66)}cx.shadowBlur=0;
const lim=LIM(d),sx=w-34;cx.fillStyle='#d22';cx.shadowColor='rgba(0,0,0,.6)';cx.shadowBlur=6;cx.beginPath();cx.arc(sx,34,24,0,7);cx.fill();cx.shadowBlur=0;cx.fillStyle='#fff';cx.beginPath();cx.arc(sx,34,18,0,7);cx.fill();cx.fillStyle=v>lim+3?'#d22':'#000';cx.textAlign='center';cx.font='bold 18px Arial';cx.fillText(lim,sx,40);
let ht=HN[0][1];HN.forEach(a=>{if(d+2>=a[0])ht=a[1]});if(LV[cur].sg)ht=BN||LV[cur].n;cx.font='14px Tahoma';const tw=cx.measureText(ht).width+22;cx.fillStyle='rgba(8,10,14,.72)';cx.beginPath();if(cx.roundRect)cx.roundRect(w/2-tw/2,my+mh+10,tw,26,10);else cx.rect(w/2-tw/2,my+mh+10,tw,26);cx.fill();cx.fillStyle='#fff';cx.fillText(ht,w/2,my+mh+28);
if(toastT>0){cx.fillStyle='rgba(200,16,46,.92)';cx.beginPath();if(cx.roundRect)cx.roundRect(16,hh*.38,w-32,46,12);else cx.rect(16,hh*.38,w-32,46);cx.fill();cx.fillStyle='#fff';cx.font='bold 15px Tahoma';cx.fillText(toast,w/2,hh*.38+29)}
}
function draw(){ren.info.reset();
cam.rotation.order='YXZ';if(st){const bob=Math.sin(d*1.3)*.012*Math.min(1,v/40)+(jolt>0?Math.sin(t*40)*jolt*.08:0);cam.position.set(x-.4,1.2+bob,-d);cam.rotation.y=-h*.8;camRoll+=(Math.sin(h)*v*.002-camRoll)*.1;camPit+=(Math.max(-.03,Math.min(.03,ACC*.0012))-camPit)*.1;cam.rotation.z=camRoll;cam.rotation.x=camPit;const fv=(W<Hh?85:65)+v*.07;if(Math.abs(cam.fov-fv)>.2){cam.fov=fv;cam.updateProjectionMatrix()}if(jolt>0)jolt-=.05}else cam.position.set(2,1.2,0);
slowM.visible=!!slow;if(slow)slowM.position.set(slow.x,0,-slow.d);
oncM.visible=!!onc;if(onc)oncM.position.set(onc.x,0,-onc.d);
ambM.visible=!!amb;if(amb){ambM.position.set(amb.x,0,-amb.d);amL.material.color.set(Math.floor(t*4)%2?0xff0000:0x0044ff)}
crossM.visible=!!cross&&!!cross.on;crossM.position.set(cross?cross.x:0,0,-CZ);
const Wk=W2.on&&W2.k!='anim';pd.visible=Wk||(!!ped&&!!ped.on);if(Wk){pd.position.set(W2.x,0,-W2.z);pd.scale.setScalar(W2.k=='kid'?.7:1)}else if(ped){pd.position.set(ped.x,0,-122);pd.scale.setScalar(1)}if(pd.visible){const sw=Math.sin(performance.now()/160)*.55,u=pd.userData;u.legs[0].rotation.x=sw;u.legs[1].rotation.x=-sw;u.arms[0].rotation.x=-sw*.8;u.arms[1].rotation.x=sw*.8}anM.visible=!!(W2.on&&W2.k=='anim');if(anM.visible)anM.position.set(W2.x,0,-W2.z);
LM[0].color.set(lg==2?0xff2222:0x330000);LM[1].color.set(lg==1?0xffcc00:0x332200);LM[2].color.set(lg==0||lg==3?0x22dd44:0x003311);
const f=d+2,n=(st&&!LV[cur].sg)?Math.min(1,Math.max(0,(f-1650)/60)):0,fz=!LV[cur].sg&&f>2000&&f<2160,lit=f<1800||f>2000;
hemi.intensity=.56*(1-n)+n*(lit?.4:.12);sun.intensity=.9*(1-n)+n*.04;fillL.intensity=.12*(1-n)+.08*n;NI=n;FZ=fz?1:0;
sc.background.set(0x9ec9ee).lerp(_c2.set(fz?0x3a3f45:0x05070d),n);if(RN&&n<.5)sc.background.lerp(_c1.set(0x7f8a95),.55);sc.fog.color.copy(sc.background);sc.fog.near=fz?3:40;sc.fog.far=fz?45:(RN?150:260);
hl.intensity=lights>1?(lights==3?2.2:1.4):0;hl.distance=lights==3?110:35;hl.position.set(x-.4,1,-d);hl.target.position.set(x-.4,0,-d-40);hl.target.updateMatrixWorld();
oarm.rotation.z=of==1?-1.5:0;og.userData.arms[0].rotation.z=of==1?1.5:0;fl2.visible=!LV[cur].sg&&Math.floor(t*2)%2==0;brM.visible=!!rl&&!!LV[cur].sg;rlA.visible=!!rl&&Math.floor(t*3)%2==0;rlB.visible=!!rl&&Math.floor(t*3)%2==1;blkM.visible=!!bl;
ren.setScissorTest(false);ren.setViewport(0,0,W,Hh);gfxFrame(f);dash();
}
function loop(ts){const dt=Math.min(.05,(ts-last)/1000||0);last=ts;gp(dt);rdIn();if(mn){mup(dt);mdraw()}else if(st>0){up(dt);draw();adapt(dt)}snd(dt);requestAnimationFrame(loop)}
document.querySelectorAll('[data-k]').forEach(b=>{const k=b.dataset.k;b.onpointerdown=e=>{e.preventDefault();K[k]=1};b.onpointerup=b.onpointerleave=b.onpointercancel=()=>K[k]=0});
document.querySelectorAll('[data-s]').forEach(b=>b.onclick=()=>{const s=b.dataset.s;if(s=='belt')belt=true;else if(s=='M')mirT=t;else if(s=='L')lights=(lights+1)%4;else if(s=='G')fog=!fog;else if(s=='U')AU.mute();else{sig=sig==+s?0:+s;sigT=6}});
const KC={KeyW:'g',KeyA:'l',KeyS:'b',KeyD:'r'};
onkeydown=e=>{AU.init();const c=KC[e.code];if(c){K[c]=1;e.preventDefault()}if(e.code=='Space'){K.hb=1;e.preventDefault()}const n=e.key.toLowerCase();if(e.key=='ArrowLeft'){tgS(-1);e.preventDefault()}if(e.key=='ArrowRight'){tgS(1);e.preventDefault()}if(n=='b')belt=true;if(n=='m')mirT=t;if(n=='l')cyc();if(n=='f')fog=!fog;if(n=='h')K.hn=1;if(n=='p')PERF=!PERF;if(e.key=='Escape')menu()};
onkeyup=e=>{const c=KC[e.code];if(c)K[c]=0;if(e.code=='Space')K.hb=0;if(e.key.toLowerCase()=='h')K.hn=0};
document.addEventListener('pointerdown',e=>{AU.init();if(e.target.closest&&e.target.closest('button,.nd'))AU.ui()});
init(0);st=0;menu();setTimeout(()=>{try{decor('b')}catch(e){}setTimeout(()=>{try{decor('t')}catch(e){}},900)},2000);requestAnimationFrame(loop);
