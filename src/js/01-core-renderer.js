const T=THREE,wc=document.getElementById('w'),oc=document.getElementById('o'),ov=document.getElementById('ov'),cx=oc.getContext('2d');
let W,Hh,K={},st=0,d,v,x,h,sa,sig,sigT,belt,fl,score,t=0,cd,spdT,leftT,wasL,stopped,lg,lt,ped,cross,slow,slowD,onc,oncD,amb,ambD,toast,toastT,last=0,amL;
const _hash=(()=>{try{return location.hash}catch(e){return''}})();
const QL=(()=>{let q=(/q=(low|med|high|ultra)/.exec(_hash)||[])[1];if(!q){try{q=localStorage.getItem('tnq')}catch(e){}}if(!/^(low|med|high|ultra)$/.test(q||'')){const m=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||(navigator.maxTouchPoints>1&&innerWidth<900);q=m?'med':'high'}return q})();
const DPR=Math.min(window.devicePixelRatio||1,2);
const QS={low:{pr:.75,shadow:0,pp:0,std:0,map:512},med:{pr:Math.min(DPR,1.25),shadow:1,pp:1,std:0,map:1024},high:{pr:Math.min(DPR,1.5),shadow:1,pp:1,std:1,map:2048},ultra:{pr:DPR,shadow:1,pp:1,std:1,map:4096}}[QL];
const GL2=(()=>{try{return!!document.createElement('canvas').getContext('webgl2')}catch(e){return false}})();
const PPON=GL2&&!!QS.pp;
function probeHF(){try{const c=document.createElement('canvas'),g=c.getContext('webgl2');if(!g||!g.getExtension('EXT_color_buffer_float'))return false;const t=g.createTexture();g.bindTexture(g.TEXTURE_2D,t);g.texImage2D(g.TEXTURE_2D,0,g.RGBA16F,4,4,0,g.RGBA,g.HALF_FLOAT,null);const f=g.createFramebuffer();g.bindFramebuffer(g.FRAMEBUFFER,f);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,t,0);return g.checkFramebufferStatus(g.FRAMEBUFFER)==g.FRAMEBUFFER_COMPLETE}catch(e){return false}}
const ren=new T.WebGLRenderer({canvas:wc,antialias:!PPON,powerPreference:'high-performance'});
ren.info.autoReset=false;ren.shadowMap.enabled=!!QS.shadow;ren.shadowMap.type=T.PCFSoftShadowMap;ren.shadowMap.autoUpdate=false;
let EXPO=(()=>{try{const v=parseFloat(localStorage.getItem('tne'));return v>0?v:.8}catch(e){return .8}})();
let PERF=false,_sa=0,SG=null,mirOK=false,mirF=0,WHL=null;
let PR=QS.pr,DP=DPR,NI=0,FZ=0,SHX=0,roadMat=null,facM=null,roofM=null,lampM=null,poolM=null,wetK=0,coneM=null;
const AN=ren.capabilities.getMaxAnisotropy();
const sc=new T.Scene();sc.background=new T.Color(0x9ec9ee);sc.fog=new T.Fog(0x9ec9ee,40,260);
const cam=new T.PerspectiveCamera(70,1,.1,400),mc=new T.PerspectiveCamera(45,3,.1,300);
const hemi=new T.HemisphereLight(0xdbe9ff,0x6a7a55,.55);sc.add(hemi);
const sun=new T.DirectionalLight(0xfff0d8,.9);const SUND=new T.Vector3(.5,.5,-.7).normalize();sc.add(sun,sun.target);
const fillL=new T.DirectionalLight(0xbcd4ff,.12);fillL.position.set(-6,10,20);sc.add(fillL);
if(QS.shadow){sun.castShadow=true;sun.shadow.mapSize.set(QS.map,QS.map);const sCam=sun.shadow.camera;sCam.left=-48;sCam.right=48;sCam.top=48;sCam.bottom=-48;sCam.near=1;sCam.far=220;sun.shadow.bias=-.0004;sun.shadow.normalBias=.04;sCam.updateProjectionMatrix()}
