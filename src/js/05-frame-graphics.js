// ---- per-frame graphics ----
const _v3=new T.Vector3(),_c1=new T.Color(),_c2=new T.Color();
function gfxFrame(f){const n=NI,fz=FZ,tm=performance.now()/1000;cam.updateMatrixWorld();
 skyM.position.copy(cam.position);skyU.uTime.value=tm;skyU.uNight.value=n;skyU.uSun.value.copy(SUND);skyU.uHor.value.copy(sc.background);skyU.uFog.value=fz?.9:0;
 skyU.uCover.value+=((RN?.95:(fz?1:.32))-skyU.uCover.value)*.02;
 const sx=Math.round(cam.position.x/2)*2,sz=Math.round(cam.position.z/2)*2;
 sun.target.position.set(sx,0,sz);sun.position.set(sx+SUND.x*80,SUND.y*80,sz+SUND.z*80);sun.target.updateMatrixWorld();
 if(QS.shadow)ren.shadowMap.needsUpdate=true;
 if(envNight&&QS.std){const wantN=n>.5?1:0;if(wantN!=envCur){envCur=wantN;sc.environment=(wantN?envNight:envDay).texture}}
 if(coneM){const on=lights>1?(lights==3?.12:.07):0;coneM.visible=on>0;if(on){coneM.position.set(x-.4,.9,-d-.3);coneM.scale.z=lights==3?1.8:1;coneM.material.opacity=on*(.25+.9*n+(fz?.6:0))}}
 if(facM){facM.emissiveIntensity=n*.95;const hd=PP.ok&&PP.hf?1+1.4*n:1;lampM.color.setRGB((.55+.45*n)*hd,(.52+.43*n)*hd,(.44+.2*n)*hd);poolM.opacity=n*.55}
 if(roadMat){const w=wet?1:0;wetK+=(w-wetK)*.04;const k=1-.3*wetK;roadMat.color.setRGB(k,k,k)}
 if(PP.ok){const U=PP.mC.uniforms;U.uTime.value=tm;U.uSpeed.value=Math.min(1,v/110);U.uRain.value+=((RN?1:0)-U.uRain.value)*.05;U.uNight.value=n;
  _v3.copy(SUND).multiplyScalar(100).add(cam.position);const p=_v3.project(cam);const vis=(p.z<1&&_v3.x>-1.3&&_v3.x<1.3&&_v3.y>-1.3&&_v3.y<1.3)?1:0;U.uSun.value.set(p.x*.5+.5,p.y*.5+.5);U.uSunVis.value=vis*(1-n)*(1-U.uRain.value*.85)*(fz?0:1)*.8;
  U.uBloom.value=.3+.4*n;U.uExpo.value=(EXPO+(wet?-.04:0))*(1+.35*n);
  try{PP.render()}catch(e){PP.ok=false;ren.setRenderTarget(null);ren.render(sc,cam)}}
 else ren.render(sc,cam)}
let _fe=16,_aq=0,_ah=0;function adapt(dt){_fe+=(dt*1000-_fe)*.05;_aq+=dt;if(_aq<2)return;_aq=0;if(_fe>26&&PR>.6)_ah=Math.max(_ah,0)+1;else if(_fe<13&&PR<QS.pr)_ah=Math.min(_ah,0)-1;else _ah=0;if(_ah>=2){PR=Math.max(.6,+(PR-.1).toFixed(2));rs(true);_ah=0}else if(_ah<=-3){PR=Math.min(QS.pr,+(PR+.1).toFixed(2));rs(true);_ah=0}}
function human(shirt,pants,cop){const g=new T.Group(),sm=Mt(shirt),pm=Mt(pants);const add=(geo,mat,x,y,z)=>{const m=new T.Mesh(geo,mat);m.position.set(x,y,z);m.castShadow=!!QS.shadow;g.add(m);return m};
 add(new T.BoxGeometry(.5,.62,.28),sm,0,1.15,0);add(new T.SphereGeometry(.15,12,10),Mt(0xe0b08a),0,1.62,0);if(cop)add(new T.CylinderGeometry(.17,.17,.1,12),Mt(0x1b2a55),0,1.78,0);
 const mk=(w,hgt,mat,x,y)=>{const m=add(new T.BoxGeometry(w,hgt,.2),mat,x,y,0);m.geometry.translate(0,-hgt/2,0);return m};
 const l1=mk(.18,.78,pm,-.14,.78),l2=mk(.18,.78,pm,.14,.78),a1=mk(.13,.7,sm,-.32,1.45),a2=mk(.13,.7,sm,.32,1.45);g.userData={legs:[l1,l2],arms:[a1,a2],arm:a2};return g}

{const cg=new T.ConeGeometry(2.6,26,20,1,true);cg.translate(0,-13,0);cg.rotateX(Math.PI/2);coneM=new T.Mesh(cg,new T.MeshBasicMaterial({color:0xfff0c8,transparent:true,opacity:0,blending:T.AdditiveBlending,depthWrite:false,side:T.DoubleSide}));coneM.frustumCulled=false;coneM.visible=false;sc.add(coneM)}
const QN={low:'منخفضة',med:'متوسطة',high:'عالية',ultra:'قصوى'};
function ecyc(){const L=[.5,.6,.7,.8,.9,1],i=(L.findIndex(v=>Math.abs(v-EXPO)<.01)+1)%L.length;EXPO=L[i];try{localStorage.setItem('tne',EXPO)}catch(e){}menu()}
function qcyc(){const L=['low','med','high','ultra'],n=L[(L.indexOf(QL)+1)%4];try{localStorage.setItem('tnq',n)}catch(e){}try{location.hash='q='+n}catch(e){}location.reload()}
makeEnv();
