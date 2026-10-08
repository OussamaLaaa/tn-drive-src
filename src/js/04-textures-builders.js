// ---- procedural textures ----
function ctex(c,rx,ry){const t=new T.CanvasTexture(c);t.wrapS=t.wrapT=T.RepeatWrapping;t.repeat.set(rx||1,ry||1);t.anisotropy=Math.min(AN,8);return t}
function cv(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c}
function asphaltC(){const c=cv(512,512),g=c.getContext('2d');g.fillStyle='#3d4046';g.fillRect(0,0,512,512);
 for(let i=0;i<9000;i++){const v=40+Math.random()*60|0;g.fillStyle=`rgba(${v},${v},${v+4},${.25+Math.random()*.35})`;g.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*2,1+Math.random()*2)}
 for(let i=0;i<14;i++){g.fillStyle=`rgba(20,20,22,${.05+Math.random()*.07})`;g.beginPath();g.ellipse(Math.random()*512,Math.random()*512,30+Math.random()*80,10+Math.random()*40,Math.random()*3,0,7);g.fill()}
 [.15,.35,.65,.85].forEach(u=>{const gr=g.createLinearGradient((u-.04)*512,0,(u+.04)*512,0);gr.addColorStop(0,'rgba(0,0,0,0)');gr.addColorStop(.5,'rgba(0,0,0,.14)');gr.addColorStop(1,'rgba(0,0,0,0)');g.fillStyle=gr;g.fillRect((u-.04)*512,0,.08*512,512)});
 g.strokeStyle='rgba(15,15,18,.35)';g.lineWidth=1;for(let i=0;i<6;i++){let x=Math.random()*512,y=Math.random()*512;g.beginPath();g.moveTo(x,y);for(let k=0;k<12;k++){x+=(Math.random()-.5)*40;y+=(Math.random()-.3)*30;g.lineTo(x,y)}g.stroke()}return c}
function grassC(){const c=cv(512,512),g=c.getContext('2d');g.fillStyle='#4b8a43';g.fillRect(0,0,512,512);
 for(let i=0;i<22;i++){g.fillStyle=`rgba(${60+Math.random()*30|0},${120+Math.random()*40|0},${50+Math.random()*30|0},.18)`;g.beginPath();g.ellipse(Math.random()*512,Math.random()*512,20+Math.random()*70,15+Math.random()*50,Math.random()*3,0,7);g.fill()}
 for(let i=0;i<9000;i++){const l=Math.random();g.strokeStyle=l<.5?'rgba(40,100,40,.5)':'rgba(120,170,80,.45)';g.lineWidth=1;const x=Math.random()*512,y=Math.random()*512;g.beginPath();g.moveTo(x,y);g.lineTo(x+(Math.random()-.5)*3,y-2-Math.random()*5);g.stroke()}return c}
function walkC(){const c=cv(256,256),g=c.getContext('2d');g.fillStyle='#a9a69c';g.fillRect(0,0,256,256);for(let i=0;i<2500;i++){const v=140+Math.random()*50|0;g.fillStyle=`rgba(${v},${v-3},${v-10},.35)`;g.fillRect(Math.random()*256,Math.random()*256,2,2)}g.strokeStyle='#7d7a72';g.lineWidth=3;for(let i=0;i<=4;i++){g.beginPath();g.moveTo(i*64,0);g.lineTo(i*64,256);g.stroke();g.beginPath();g.moveTo(0,i*64);g.lineTo(256,i*64);g.stroke()}return c}
function facadeC(emi){const W2=1024,H2=512,c=cv(W2,H2),g=c.getContext('2d');
 if(emi){g.fillStyle='#000';g.fillRect(0,0,W2,H2)}else{g.fillStyle='#fff';g.fillRect(0,0,W2,H2);for(let i=0;i<5000;i++){const v=225+Math.random()*30|0;g.fillStyle=`rgba(${v},${v},${v-6},.22)`;g.fillRect(Math.random()*W2,Math.random()*H2,2,2)}}
 let seed=7;const rnd=()=>{seed=(seed*16807)%2147483647;return seed/2147483647};
 for(let r=0;r<2;r++)for(let k=0;k<4;k++){const x=k*256+64,y=r*256+70,w=128,hh=140;
  if(emi){if(rnd()<.45){const gr=g.createLinearGradient(0,y,0,y+hh);gr.addColorStop(0,'#ffd88a');gr.addColorStop(1,'#ff9a3c');g.fillStyle=gr;g.fillRect(x+8,y+8,w-16,hh-16)}continue}
  g.fillStyle='#2a6fb0';g.fillRect(x-8,y-8,w+16,hh+16);const gr=g.createLinearGradient(x,y,x+w,y+hh);gr.addColorStop(0,'#46607a');gr.addColorStop(.5,'#1f2c3a');gr.addColorStop(1,'#34495e');g.fillStyle=gr;g.fillRect(x+6,y+6,w-12,hh-12);
  g.fillStyle='rgba(255,255,255,.18)';g.beginPath();g.moveTo(x+6,y+6);g.lineTo(x+50,y+6);g.lineTo(x+6,y+60);g.fill();g.fillStyle='#e9e6dd';g.fillRect(x-14,y+hh+4,w+28,10);g.fillStyle='#2a6fb0';g.fillRect(x+w/2-2,y+6,4,hh-12);g.fillRect(x+6,y+hh/2-2,w-12,4);
  if(rnd()<.3){g.fillStyle='rgba(42,111,176,.9)';g.fillRect(x-30,y-6,24,hh+12);g.fillRect(x+w+6,y-6,24,hh+12)}}
 if(!emi){g.fillStyle='rgba(0,0,0,.08)';g.fillRect(0,H2-6,W2,6)}return c}
function radialC(){const c=cv(128,128),g=c.getContext('2d'),gr=g.createRadialGradient(64,64,0,64,64,64);gr.addColorStop(0,'rgba(255,230,160,.95)');gr.addColorStop(.4,'rgba(255,210,120,.35)');gr.addColorStop(1,'rgba(255,200,100,0)');g.fillStyle=gr;g.fillRect(0,0,128,128);return c}
const _mc={};const Mt=c=>_mc[c]||(_mc[c]=new T.MeshLambertMaterial({color:c}));const _sm={};const SMc=(k,o)=>_sm[k]||(_sm[k]=SM(o));
const SM=(o)=>{const p={};['color','map','vertexColors','emissive','emissiveMap','emissiveIntensity'].forEach(k=>{if(o[k]!==undefined)p[k]=o[k]});return new T.MeshLambertMaterial(p)};
const B=(w,hh,dd,c,px,py,pz,p)=>{const m=new T.Mesh(new T.BoxGeometry(w,hh,dd),Mt(c));m.position.set(px,py,pz);m.receiveShadow=true;m.castShadow=!!QS.shadow&&hh>.25;(p||sc).add(m);return m};
const BM=(w,hh,dd,mat,px,py,pz,p)=>{const m=new T.Mesh(new T.BoxGeometry(w,hh,dd),mat);m.position.set(px,py,pz);m.castShadow=!!QS.shadow;m.receiveShadow=true;(p||sc).add(m);return m};
// ---- geometry builders ----
function GBn(){return{P:[],N:[],U:[],C:[]}}
function gbQuad(G,n,a,b,c2,d2,fw,fh,us,vs,col,colT){const i0=G.P.length/3,pts=[a,b,c2,d2],uv=[[0,0],[fw*us,0],[fw*us,fh*vs],[0,fh*vs]];
 [0,1,2,0,2,3].forEach(k=>{G.P.push(...pts[k]);G.N.push(...n);G.U.push(...uv[k]);G.C.push(...(k<2||!colT?col:colT))})}
function gbBox(G,H,w,h,d,x,y,z,col,us,vs){const cb=[col[0]*.74,col[1]*.74,col[2]*.74],a=w/2,b=h/2,e=d/2,P=(sx,sy,sz)=>[x+sx,y+sy,z+sz];
 gbQuad(G,[1,0,0],P(a,-b,e),P(a,-b,-e),P(a,b,-e),P(a,b,e),d,h,us,vs,cb,col);gbQuad(G,[-1,0,0],P(-a,-b,-e),P(-a,-b,e),P(-a,b,e),P(-a,b,-e),d,h,us,vs,cb,col);
 gbQuad(G,[0,0,1],P(-a,-b,e),P(a,-b,e),P(a,b,e),P(-a,b,e),w,h,us,vs,cb,col);gbQuad(G,[0,0,-1],P(a,-b,-e),P(-a,-b,-e),P(-a,b,-e),P(a,b,-e),w,h,us,vs,cb,col);
 if(H)gbQuad(H,[0,1,0],P(-a,b,e),P(a,b,e),P(a,b,-e),P(-a,b,-e),w,d,.1,.1,[col[0]*.62,col[1]*.62,col[2]*.62])}
function gbGeo(G){const o=new T.BufferGeometry();o.setAttribute('position',new T.Float32BufferAttribute(G.P,3));o.setAttribute('normal',new T.Float32BufferAttribute(G.N,3));o.setAttribute('uv',new T.Float32BufferAttribute(G.U,2));o.setAttribute('color',new T.Float32BufferAttribute(G.C,3));return o}
function mergeGeos(parts){const G=GBn(),v=new T.Vector3(),nm=new T.Matrix3();parts.forEach(pt=>{const g=pt.g.index?pt.g.toNonIndexed():pt.g,pa=g.attributes.position,na=g.attributes.normal,ua=g.attributes.uv;nm.getNormalMatrix(pt.m);
 for(let i=0;i<pa.count;i++){v.fromBufferAttribute(pa,i).applyMatrix4(pt.m);G.P.push(v.x,v.y,v.z);v.fromBufferAttribute(na,i).applyMatrix3(nm).normalize();G.N.push(v.x,v.y,v.z);G.U.push(ua?ua.getX(i):0,ua?ua.getY(i):0);G.C.push(pt.c[0],pt.c[1],pt.c[2])}});return gbGeo(G)}
function addMesh(geo,mat,grp,cast){const m=new T.Mesh(geo,mat);m.castShadow=!!QS.shadow&&cast!==false;m.receiveShadow=true;(grp||sc).add(m);return m}
function initMats(){if(facM)return;const fc=ctex(facadeC(false),1,1),fe=ctex(facadeC(true),1,1);
 facM=SM({map:fc,vertexColors:true,roughness:.9,metalness:0,emissive:new T.Color(0xffffff),emissiveMap:fe,emissiveIntensity:0});
 roofM=SM({vertexColors:true,roughness:.95,metalness:0,color:0xffffff});
 lampM=new T.MeshBasicMaterial({color:0x8a8470});
 poolM=new T.MeshBasicMaterial({map:ctex(radialC(),1,1),transparent:true,opacity:0,blending:T.AdditiveBlending,depthWrite:false});}
function texWorld(gr,rd){initMats();const gt=ctex(grassC(),60,400);gr.material=new T.MeshLambertMaterial({map:gt});
 const at=ctex(asphaltC(),1,475);roadMat=new T.MeshLambertMaterial({map:at});rd.material=roadMat;gr.receiveShadow=rd.receiveShadow=true;gr.castShadow=rd.castShadow=false}
function walk(m,len){const t=ctex(walkC(),1,len/2);m.material=SM({map:t,roughness:.95,metalness:0,color:0xffffff});m.receiveShadow=true;m.castShadow=false}
const BCOL=[[1,.97,.92],[.93,.9,.83],[.87,.91,.95],[.95,.89,.78]];
const CHK=150;
function zs2(z0,step,a,b){const r=[];for(let z=z0+Math.ceil((a-z0)/step)*step;z<b;z+=step)r.push(z);return r}
function cityBuildings(G,H,z0,z1,skip,gap,a,b){a=a==null?z0:a;b=b==null?z1:Math.min(b,z1);zs2(z0,16,a,b).forEach(z=>{for(const s of[-1,1]){if(skip&&skip(z))continue;const w=8+Math.random()*4,hh=6+Math.random()*12,x0=s*(gap+w/2),col=BCOL[Math.random()*4|0];
 gbBox(G,H,w,hh,12,x0,hh/2,-z,col,1/12,1/6.4);gbBox(G,null,1.7,2.7,.25,x0-s*w/2+ -s*.05,1.35,-z+Math.random()*4-2,[.16,.44,.78],.02,.02);
 if(Math.random()<.6)gbBox(G,H,2.4,1.4,2,x0+(Math.random()-.5)*w*.5,hh+.7,-z+(Math.random()-.5)*5,[.82,.82,.8],.02,.02)}})}
const DASHG=new T.BoxGeometry(.15,.04,3);
function dashMesh(pred,grp){const parts=[];for(let z=0;z<3300;z+=8)if(pred(z))parts.push({g:DASHG,m:new T.Matrix4().makeTranslation(0,.02,-z),c:[.867,.867,.867]});initMats();return addMesh(mergeGeos(parts),SMc('dash',{vertexColors:true}),grp,false)}
function buildMeshes(G,H,grp){initMats();addMesh(gbGeo(G),facM,grp);addMesh(gbGeo(H),roofM,grp)}
function treeParts(parts,x,z,s){const m=new T.Matrix4(),col=()=>[.18+Math.random()*.08,.42+Math.random()*.16,.2+Math.random()*.08];
 parts.push({g:new T.CylinderGeometry(.14*s,.22*s,2.4*s,6),m:m.clone().makeTranslation(x,1.2*s,z),c:[.36,.26,.17]});
 for(let i=0;i<3;i++){const r=(1.5-i*.28)*s;const mm=new T.Matrix4().makeScale(r,r*.92,r).setPosition(x+(Math.random()-.5)*.5*s,(2.8+i*.95)*s,z+(Math.random()-.5)*.5*s);parts.push({g:new T.IcosahedronGeometry(1,1),m:mm,c:col()})}}
function palmParts(parts,x,z,s){const g1=new T.CylinderGeometry(.11*s,.18*s,1.5*s,6);let px=x,py=0,tilt=(Math.random()-.5)*.25;
 for(let i=0;i<4;i++){const m=new T.Matrix4().makeRotationZ(tilt*i*.3).setPosition(px,py+.75*s,z);parts.push({g:g1,m,c:[.45,.36,.26]});px+=Math.sin(tilt)*.3*s;py+=1.45*s}
 for(let k=0;k<11;k++){const fg=new T.BoxGeometry(.28*s,.035,2.7*s);fg.translate(0,0,1.35*s);const r=new T.Matrix4().makeRotationY(k/11*Math.PI*2),t2=new T.Matrix4().makeRotationX(.42+Math.random()*.25);const mm=new T.Matrix4().makeTranslation(px,py+.2*s,z).multiply(r).multiply(t2);parts.push({g:fg,m:mm,c:[.2+Math.random()*.06,.5+Math.random()*.15,.2]})}}
function lampParts(poleP,headP,poolG,x,z,side){const m=new T.Matrix4();poleP.push({g:new T.CylinderGeometry(.07,.1,5.2,6),m:m.clone().makeTranslation(x,2.6,z),c:[.35,.37,.4]});
 poleP.push({g:new T.BoxGeometry(1.2,.07,.07),m:m.clone().makeTranslation(x-side*.6,5.2,z),c:[.35,.37,.4]});
 headP.push({g:new T.BoxGeometry(.5,.12,.22),m:m.clone().makeTranslation(x-side*1.15,5.12,z),c:[1,1,1]});
 const pg=new T.PlaneGeometry(9,9);pg.rotateX(-Math.PI/2);poolG.push({g:pg,m:m.clone().makeTranslation(x-side*1.1,.07,z),c:[1,1,1]})}
function streetDecor(grp,z0,z1,skip,opt){opt=opt||{};for(let a=z0;a<z1;a+=CHK){const b=Math.min(a+CHK,z1),G=GBn(),H=GBn();cityBuildings(G,H,z0,z1,skip,opt.gap||10,a,b);buildMeshes(G,H,grp);
 const tp=[],pp=[],hp=[],pl=[];zs2(z0+8,40,a,b).forEach(z=>{if(skip&&skip(z))return;[-1,1].forEach(s=>lampParts(pp,hp,pl,s*5.1,-z,s));if(Math.random()<.7)palmParts(tp,(Math.random()<.5?-1:1)*(6.6+Math.random()*.8),-(z+14+Math.random()*6),1+Math.random()*.3)});
 if(tp.length)addMesh(mergeGeos(tp),SMc('palm',{vertexColors:true,roughness:.9,metalness:0,side:T.DoubleSide}),grp);
 if(pp.length)addMesh(mergeGeos(pp),SMc('pole',{vertexColors:true,roughness:.5,metalness:.6}),grp);
 if(hp.length)addMesh(mergeGeos(hp),lampM,grp,false);
 if(pl.length){const pm=addMesh(mergeGeos(pl),poolM,grp,false);pm.receiveShadow=false;pm.renderOrder=3}}}
function treeDecor(grp,z0,z1,step,skip){for(let a=z0;a<z1;a+=CHK){const parts=[];zs2(z0,step,a,Math.min(a+CHK,z1)).forEach(z=>{for(const s of[-1,1]){if(skip&&skip(z))continue;const x=s*(7+Math.random()*4.5);if(Math.random()<.18)palmParts(parts,x,-z,1+Math.random()*.3);else treeParts(parts,x,-z,.8+Math.random()*.7)}});
 if(parts.length)addMesh(mergeGeos(parts),SMc('tree',{vertexColors:true,roughness:.92,metalness:0,side:T.DoubleSide}),grp)}}
function routeDecor(){const skipB=z=>Math.abs(z-506)<14||(z>600&&z<1380)||Math.abs(z-1450)<14||Math.abs(z-1550)<14;streetDecor(sc,30,1800,z=>skipB(z),{gap:10});treeDecor(sc,640,3300,18,z=>z>1380&&z<1800)}
function human(shirt,pants,cop){const g=new T.Group(),sk=0xe0b08a,sm=Mt(shirt),pm=Mt(pants);const add=(geo,mat,x,y,z)=>{const m=new T.Mesh(geo,mat);m.position.set(x,y,z);m.castShadow=!!QS.shadow;g.add(m);return m};
 add(new T.BoxGeometry(.5,.62,.28),sm,0,1.15,0);add(new T.SphereGeometry(.15,12,10),Mt(sk),0,1.62,0);if(cop)add(new T.CylinderGeometry(.17,.17,.1,12),Mt(0x1b2a55),0,1.78,0);
 const l1=add(new T.BoxGeometry(.18,.78,.2),pm,-.14,.4,0),l2=add(new T.BoxGeometry(.18,.78,.2),pm,.14,.4,0);l1.geometry.translate(0,-.39,0);l2.geometry.translate(0,-.39,0);l1.position.y=.78;l2.position.y=.78;
 const a1=add(new T.BoxGeometry(.13,.7,.13),sm,-.34,1.1,0),a2=add(new T.BoxGeometry(.13,.7,.13),sm,.42,1.1,0);g.userData={legs:[l1,l2],arms:[a1,a2],arm:a2};return g}
