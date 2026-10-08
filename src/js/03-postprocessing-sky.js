// ---- post-processing ----
const PP={ok:false,hf:probeHF(),
init(){try{if(!PPON)return;const ty=this.hf?T.HalfFloatType:T.UnsignedByteType,o={format:T.RGBAFormat,minFilter:T.LinearFilter,magFilter:T.LinearFilter,type:ty};
 this.rt=new T.WebGLMultisampleRenderTarget(4,4,o);this.rt.samples=4;
 const o2={format:T.RGBAFormat,minFilter:T.LinearFilter,magFilter:T.LinearFilter,type:ty,depthBuffer:false,stencilBuffer:false};this.b1=new T.WebGLRenderTarget(4,4,o2);this.b2=new T.WebGLRenderTarget(4,4,o2);
 this.qc=new T.OrthographicCamera(-1,1,1,-1,0,1);this.qs=new T.Scene();
 const mk=(fs,u)=>new T.ShaderMaterial({uniforms:u,vertexShader:QUAD_VS,fragmentShader:fs,depthTest:false,depthWrite:false});
 this.mB=mk(BRIGHT_FS,{tD:{value:null},uThr:{value:this.hf?1:.8},uTexel:{value:new T.Vector2()}});this.mH=mk(BLUR_FS,{tD:{value:null},uDir:{value:new T.Vector2()}});
 this.mC=mk(COMP_FS,{tS:{value:null},tB:{value:null},uRes:{value:new T.Vector2(1,1)},uSun:{value:new T.Vector2(.7,.7)},uTime:{value:0},uSpeed:{value:0},uRain:{value:0},uNight:{value:0},uBloom:{value:.5},uSunVis:{value:0},uExpo:{value:.8},uVig:{value:.3}});
 this.q=new T.Mesh(new T.PlaneBufferGeometry(2,2),this.mB);this.q.frustumCulled=false;this.qs.add(this.q);this.ok=true;this.resize()}catch(e){this.ok=false}},
resize(){if(!this.ok)return;const s=ren.getDrawingBufferSize(new T.Vector2());this.rt.setSize(s.x,s.y);const bw=Math.max(2,s.x>>2),bh=Math.max(2,s.y>>2);this.b1.setSize(bw,bh);this.b2.setSize(bw,bh);this.mC.uniforms.uRes.value.set(s.x,s.y)},
pass(m,rt){this.q.material=m;ren.setRenderTarget(rt);ren.render(this.qs,this.qc)},
render(){const U=this.mC.uniforms,bw=this.b1.width,bh=this.b1.height;ren.setRenderTarget(this.rt);ren.render(sc,cam);
 this.mB.uniforms.tD.value=this.rt.texture;this.mB.uniforms.uTexel.value.set(1/this.rt.width,1/this.rt.height);this.pass(this.mB,this.b1);
 this.mH.uniforms.tD.value=this.b1.texture;this.mH.uniforms.uDir.value.set(1/bw,0);this.pass(this.mH,this.b2);
 this.mH.uniforms.tD.value=this.b2.texture;this.mH.uniforms.uDir.value.set(0,1/bh);this.pass(this.mH,this.b1);
 this.mH.uniforms.tD.value=this.b1.texture;this.mH.uniforms.uDir.value.set(2/bw,0);this.pass(this.mH,this.b2);
 this.mH.uniforms.tD.value=this.b2.texture;this.mH.uniforms.uDir.value.set(0,2/bh);this.pass(this.mH,this.b1);
 U.tS.value=this.rt.texture;U.tB.value=this.b1.texture;this.q.material=this.mC;ren.setRenderTarget(null);ren.render(this.qs,this.qc)}};
// ---- sky dome ----
const skyU={uSun:{value:SUND.clone()},uHor:{value:new T.Color(0x9ec9ee)},uNight:{value:0},uTime:{value:0},uCover:{value:.35},uFog:{value:0}};
const skyMat=new T.ShaderMaterial({uniforms:skyU,vertexShader:SKY_VS,fragmentShader:SKY_FS,side:T.BackSide,depthWrite:false,fog:false});
const skyM=new T.Mesh(new T.SphereGeometry(250,32,16),skyMat);skyM.frustumCulled=false;skyM.renderOrder=-10;sc.add(skyM);
let envDay=null,envNight=null,envCur=0;
function makeEnv(){if(!QS.std)return;try{const pm=new T.PMREMGenerator(ren),es=new T.Scene(),m2=new T.Mesh(skyM.geometry,skyMat);m2.frustumCulled=false;es.add(m2);
 const o=skyU.uNight.value,h=skyU.uHor.value.clone();envDay=pm.fromScene(es,0,.1,500);skyU.uNight.value=1;skyU.uHor.value.set(0x05070d);envNight=pm.fromScene(es,0,.1,500);skyU.uNight.value=o;skyU.uHor.value.copy(h);pm.dispose();sc.environment=envDay.texture}catch(e){}}
const sdc=document.getElementById('sd'),sdx=sdc.getContext('2d'),MC=document.createElement('canvas'),mcx=MC.getContext('2d');
function rs(part){W=innerWidth;Hh=innerHeight;ren.setPixelRatio(PR);ren.setSize(W,Hh);cam.aspect=W/Hh;cam.fov=W<Hh?85:65;cam.updateProjectionMatrix();PP.resize();
 if(!part){oc.width=Math.round(W*DP);oc.height=Math.round(Hh*DP);oc.style.width=W+'px';oc.style.height=Hh+'px';SG=null;mirOK=false;buildStatic()}}
PP.init();onresize=()=>rs();rs();
