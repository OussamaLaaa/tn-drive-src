// ---- world ----

try{texWorld(B(600,.1,4000,0x4a8f4a,0,-.06,-1400),B(8,.1,3800,0x3a3d42,0,-.04,-1450))}catch(e){console.log('texWorld',e)}
B(.15,.04,3800,0xffffff,-3.85,.02,-1450);B(.15,.04,3800,0xffffff,3.85,.02,-1450);
dashMesh(z=>(z<695||z>805)&&[510,1450,1550,2600,2840].every(c=>Math.abs(z-c)>6),sc);
const NB=sc.children.length;[510,1450,1550,2840].forEach(z=>B(200,.1,8,0x484b50,0,-.03,-z));B(200,.06,3,0x222222,0,0,-2600);
B(.15,.04,110,0xffffff,0,.02,-750);
for(let i=-4;i<4;i++)B(.5,.04,3,0xffffff,i+.5,.02,-121);
B(4,.04,.4,0xffffff,2,.02,-260);B(4,.04,.4,0xffffff,2,.02,-380);
try{walk(B(2,.2,620,0x999999,5,0,-310),620);walk(B(2,.2,620,0x999999,-5,0,-310),620)}catch(e){console.log('walk',e)}
try{routeDecor()}catch(e){console.log('routeDecor',e)}
const tx=f=>{const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');g.textAlign='center';f(g);return new T.CanvasTexture(c)};
const ci=(g,c,r)=>{g.fillStyle=c;g.beginPath();g.arc(64,64,r,0,7);g.fill()};
const spd=n=>g=>{ci(g,'#d22',62);ci(g,'#fff',48);g.fillStyle='#000';g.font='bold 52px Arial';g.fillText(n,64,82)};
const stp=g=>{g.fillStyle='#d22';g.beginPath();for(let i=0;i<8;i++){const a=Math.PI/8+i*Math.PI/4;g.lineTo(64+62*Math.cos(a),64+62*Math.sin(a))}g.fill();g.fillStyle='#fff';g.font='bold 46px Arial';g.fillText('قف',64,80)};
const wn=e=>g=>{g.fillStyle='#d22';g.beginPath();g.moveTo(64,4);g.lineTo(124,120);g.lineTo(4,120);g.fill();g.fillStyle='#fff';g.beginPath();g.moveTo(64,28);g.lineTo(104,108);g.lineTo(24,108);g.fill();g.font='38px serif';g.fillText(e,64,98)};
const nov=g=>{ci(g,'#d22',62);ci(g,'#fff',48);g.font='32px serif';g.fillText('🚗🚗',64,76)};
function sign(dd,f){B(.08,2.6,.08,0x888888,4.8,1.3,-dd);const m=new T.Mesh(new T.PlaneGeometry(1.1,1.1),new T.MeshBasicMaterial({map:tx(f),transparent:true}));m.position.set(4.8,2.8,-dd+.06);sc.add(m)}
sign(10,spd(50));sign(85,wn('🚶'));sign(200,wn('🚦'));sign(370,stp);sign(445,wn('➡'));sign(620,spd(90));sign(690,nov);sign(1380,spd(50));sign(1800,spd(90));sign(2560,wn('🚂'));
const LM=[0,1,2].map(()=>new T.MeshBasicMaterial({color:0x222222}));
[4.6,-4.6].forEach(px=>{B(.1,4.4,.1,0x555555,px,2.2,-260);B(.5,1.3,.4,0x111111,px,4.6,-260);LM.forEach((m,i)=>{const s=new T.Mesh(new T.SphereGeometry(.15,8,8),m);s.position.set(px,5+.0-i*.4+.0,-259.75+0);s.position.y=5-i*.4;sc.add(s)})});
function car(c,a){const g=new T.Group();
 const body=QS.std?new T.MeshPhysicalMaterial({color:c,metalness:.35,roughness:.4,clearcoat:.6,clearcoatRoughness:.2,envMapIntensity:.6}):Mt(c);
 const glass=QS.std?new T.MeshStandardMaterial({color:0x10161e,metalness:.7,roughness:.15,envMapIntensity:.8}):Mt(0x1b2733);
 const dark=Mt(0x111214),chrome=QS.std?new T.MeshStandardMaterial({color:0xcfd3d8,metalness:1,roughness:.2}):Mt(0xbfc3c8),hlm=new T.MeshBasicMaterial({color:0xfff4d0}),tlm=new T.MeshBasicMaterial({color:0xff2a1a}),HD=(PP.ok&&PP.hf)?2.2:1;hlm.color.multiplyScalar(HD);tlm.color.multiplyScalar(HD*.9);
 BM(1.82,.5,4.3,body,0,.58,0,g);BM(1.7,.14,1.3,body,0,.9,-1.35,g).rotation.x=.1;BM(1.76,.2,1.1,body,0,.92,1.55,g);BM(1.56,.5,2.1,glass,0,1.15,.15,g);BM(1.6,.07,1.9,body,0,1.42,.15,g);
 BM(1.86,.18,.3,dark,0,.38,-2.1,g);BM(1.86,.18,.3,dark,0,.38,2.1,g);
 [[-.92,-1.35],[.92,-1.35],[-.92,1.35],[.92,1.35]].forEach(p=>{const w=new T.Mesh(new T.CylinderGeometry(.33,.33,.24,18),dark);w.rotation.z=Math.PI/2;w.position.set(p[0],.33,p[1]);w.castShadow=!!QS.shadow;g.add(w);const r=new T.Mesh(new T.CylinderGeometry(.2,.2,.26,10),chrome);r.rotation.z=Math.PI/2;r.position.set(p[0],.33,p[1]);g.add(r)});
 [-.62,.62].forEach(x=>{BM(.42,.15,.06,hlm,x,.68,-2.16,g);BM(.42,.14,.06,tlm,x,.72,2.16,g)});BM(.5,.12,.03,Mt(0xf0f0f0),0,.5,2.18,g);[-.95,.95].forEach(x=>BM(.12,.1,.2,body,x,1.05,-.7,g));
 if(a){BM(1.84,.16,4.3,Mt(0xdd1111),0,.62,0,g);BM(1.2,.05,.6,Mt(0xffffff),0,1.45,.2,g);amL=BM(1.2,.14,.4,new T.MeshBasicMaterial({color:0xff0000}),0,1.52,.2,g)}
 g.visible=false;sc.add(g);return g}
const slowM=car(0xddaa22),oncM=car(0x3388cc),ambM=car(0xffffff,1),crossM=car(0xcc55aa);oncM.rotation.y=Math.PI;crossM.rotation.y=Math.PI/2;
const pd=human(0xdd6622,0x2a3a5a);pd.visible=false;sc.add(pd);
const og=human(0x1f3f8f,0x1b2a55,true);const oarm=og.userData.arm;og.position.set(0,0,-1445);sc.add(og);B(4,.04,.4,0xffffff,2,.02,-1440);
B(.1,4.4,.1,0x555555,4.6,2.2,-1550);const fl2=new T.Mesh(new T.SphereGeometry(.25,8,8),new T.MeshBasicMaterial({color:0xffaa00}));fl2.position.set(4.6,4.6,-1550);sc.add(fl2);
const hl=new T.SpotLight(0xffffe0,0,35,.6,.5);sc.add(hl,hl.target);
const rlM=new T.MeshBasicMaterial({color:0xff2222}),rlA=new T.Mesh(new T.SphereGeometry(.25,8,8),rlM),rlB=new T.Mesh(new T.SphereGeometry(.25,8,8),rlM);rlA.position.set(4.6,3,-2600);rlB.position.set(-4.6,3,-2600);sc.add(rlA,rlB);B(.1,3,.1,0x555555,4.6,1.5,-2600);B(.1,3,.1,0x555555,-4.6,1.5,-2600);
B(.1,4.4,.1,0x555555,4.6,2.2,-2830);const gl=new T.Mesh(new T.SphereGeometry(.25,8,8),new T.MeshBasicMaterial({color:0x22dd44}));gl.position.set(4.6,4.6,-2830);sc.add(gl);B(4,.04,.4,0xffffff,2,.02,-2830);
const blkM=car(0x884444);blkM.position.set(2,0,-2840);
const PROPS=sc.children.slice(NB).filter(o=>!o.isLight&&![slowM,oncM,ambM,crossM,pd,blkM,fl2,rlA,rlB,hl.target].includes(o));
const DFg=new T.Group();dashMesh(z=>!(z<695||z>805)||![510,1450,1550,2600,2840].every(c=>Math.abs(z-c)>6),DFg);DFg.visible=false;sc.add(DFg);
const anM=new T.Group();B(1.9,1,.7,0x7a5230,0,1,0,anM);B(.5,.6,.5,0x7a5230,1.1,1.35,0,anM);[-.7,.7].forEach(a=>[-.2,.2].forEach(b=>B(.12,.7,.12,0x333333,a,.35,b,anM)));anM.visible=false;sc.add(anM);
const zbG=new T.Group();for(let i=-4;i<4;i++)B(.5,.04,3,0xffffff,i+.5,.025,0,zbG);zbG.visible=false;sc.add(zbG);
const bpM=B(8,.12,1.2,0xe0b020,0,.06,0);bpM.visible=false;const lnM=B(4,.04,.4,0xffffff,2,.025,0);lnM.visible=false;const tkM=B(200,.06,3,0x222222,0,.01,0);tkM.visible=false;const brM=B(4,.25,.25,0xdd2222,2,1,0);brM.visible=false;
const rp=[4.6,-4.6].map(px=>{const o=B(.1,3,.1,0x555555,px,1.5,0);o.visible=false;return o});
const busM=new T.Group();B(2.5,2.6,9,0x2a7fb8,0,1.7,0,busM);B(2.52,.8,9.02,0xdddddd,0,2.2,0,busM);BM(2.56,.62,8.4,Mt(0x14202c),0,2.25,0,busM);[[-1.05,-3],[1.05,-3],[-1.05,3],[1.05,3]].forEach(p=>{const w=new T.Mesh(new T.CylinderGeometry(.45,.45,.3,16),Mt(0x111214));w.rotation.z=Math.PI/2;w.position.set(p[0]*1.18,.45,p[1]);busM.add(w)});busM.visible=false;sc.add(busM);
const acM1=car(0xaa3333),acM2=car(0x3366aa),injM=new T.Group();B(1.7,.25,.5,0xdd6622,0,.2,0,injM);B(.3,.3,.3,0xffcc99,-.95,.25,0,injM);injM.visible=false;sc.add(injM);
