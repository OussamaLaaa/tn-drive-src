// ---- shaders ----
const QUAD_VS=`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`;
const SKY_VS=`varying vec3 vDir;void main(){vDir=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`;
const SKY_FS=`varying vec3 vDir;uniform vec3 uSun;uniform vec3 uHor;uniform float uNight;uniform float uTime;uniform float uCover;uniform float uFog;
float hsh(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float nz(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hsh(i),hsh(i+vec2(1.,0.)),f.x),mix(hsh(i+vec2(0.,1.)),hsh(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float a=.5;float s=0.;for(int i=0;i<5;i++){s+=a*nz(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return s;}
void main(){vec3 d=normalize(vDir);float h=clamp(d.y,0.,1.);
 vec3 zen=mix(vec3(.10,.28,.60),vec3(.008,.015,.05),uNight);
 vec3 col=mix(uHor,zen,pow(h,.5));
 float sd=max(dot(d,normalize(uSun)),0.);vec3 sc=vec3(1.,.86,.62);
 col+=(1.-uNight)*(1.-uFog)*(pow(sd,900.)*6.*sc+pow(sd,48.)*.4*sc+pow(sd,7.)*.14*vec3(1.,.72,.45));
 if(d.y>.015){vec2 uv=d.xz/(d.y+.28)*1.3+vec2(uTime*.012,uTime*.005);float c=fbm(uv*1.15);float cov=smoothstep(.52-uCover*.28,.8,c);
  vec3 cc=mix(vec3(1.,.99,.97),vec3(.42,.47,.55),uCover*.85);cc=mix(cc,vec3(.04,.05,.09),uNight);cc*=1.-.25*smoothstep(.6,1.,fbm(uv*1.15+3.3))*(1.-uNight);
  col=mix(col,cc,cov*smoothstep(.015,.28,d.y)*.92);}
 if(uNight>.02&&d.y>0.){vec2 g=floor(d.xz/(d.y+.12)*70.);float s=step(.987,hsh(g));col+=vec3(s)*uNight*smoothstep(0.,.25,d.y)*(1.-uCover)*(1.-uFog);}
 col=mix(col,uHor,uFog);if(d.y<=0.)col=uHor;gl_FragColor=vec4(col,1.);}`;
const BRIGHT_FS=`varying vec2 vUv;uniform sampler2D tD;uniform float uThr;uniform vec2 uTexel;
void main(){vec3 c=texture2D(tD,vUv+uTexel*vec2(-.5,-.5)).rgb+texture2D(tD,vUv+uTexel*vec2(.5,-.5)).rgb+texture2D(tD,vUv+uTexel*vec2(-.5,.5)).rgb+texture2D(tD,vUv+uTexel*vec2(.5,.5)).rgb;c*=.25;float l=max(max(c.r,c.g),c.b);float k=max(l-uThr,0.)/max(l,.0001);gl_FragColor=vec4(c*k,1.);}`;
const BLUR_FS=`varying vec2 vUv;uniform sampler2D tD;uniform vec2 uDir;
void main(){vec3 s=texture2D(tD,vUv).rgb*.227027027;s+=(texture2D(tD,vUv+uDir*1.3846153846).rgb+texture2D(tD,vUv-uDir*1.3846153846).rgb)*.3162162162;s+=(texture2D(tD,vUv+uDir*3.2307692308).rgb+texture2D(tD,vUv-uDir*3.2307692308).rgb)*.0702702703;gl_FragColor=vec4(s,1.);}`;
const COMP_FS=`varying vec2 vUv;uniform sampler2D tS;uniform sampler2D tB;uniform vec2 uRes;uniform vec2 uSun;
uniform float uTime;uniform float uSpeed;uniform float uRain;uniform float uNight;uniform float uBloom;uniform float uSunVis;uniform float uExpo;uniform float uVig;
float h21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
vec2 drops(vec2 uv){vec2 o=vec2(0.);for(int l=0;l<2;l++){float sc=14./(1.+float(l)*.7);vec2 p=uv*vec2(sc*uRes.x/uRes.y,sc);vec2 id=floor(p);vec2 f=fract(p)-.5;float r=h21(id+float(l)*17.3);float live=fract(uTime*(.05+.06*r)+r*3.);vec2 c=vec2((h21(id+3.1)-.5)*.5,(live-.5)*.9);vec2 q=(f-c)*vec2(1.,1.35);float m=smoothstep(.16,.06,length(q))*step(.5,h21(id+7.7));o+=q*m*.35;}return o*.045;}
void main(){vec2 uv=vUv;vec2 c=uv-.5;uv+=drops(uv)*uRain;float sp=uSpeed*.04;vec3 col=vec3(0.);
 for(int i=0;i<6;i++){float k=float(i)/5.;col+=texture2D(tS,uv-c*sp*k).rgb;}col/=6.;
 float ca=.0014+uSpeed*.0025;col.r=texture2D(tS,uv-c*ca).r*.6+col.r*.4;col.b=texture2D(tS,uv+c*ca).b*.6+col.b*.4;
 col+=texture2D(tB,uv).rgb*uBloom;
 vec2 dv=(uv-uSun)*vec2(uRes.x/uRes.y,1.);float fl=exp(-length(dv)*5.5)*.5+exp(-length(dv)*18.)*.5;
 vec2 gv=(uv-(vec2(1.)-uSun))*vec2(uRes.x/uRes.y,1.);fl+=smoothstep(.12,.0,abs(length(gv)-.12))*.1;
 col+=vec3(1.,.85,.62)*fl*uSunVis*.6;col*=uExpo;col=clamp((col*(2.51*col+.03))/(col*(2.43*col+.59)+.14),0.,1.);
 float lm=dot(col,vec3(.299,.587,.114));col=mix(vec3(lm),col,mix(1.14,1.02,uNight));col=(col-.5)*mix(1.07,1.03,uNight)+.5;col*=mix(vec3(1.),vec3(.86,.93,1.08),uNight);
 float vg=smoothstep(.95,.25,length(c*vec2(1.,.9)));col*=mix(1.-uVig,1.,vg);col+=(h21(uv*uRes+uTime*60.)-.5)*.03;col=min(max(col,vec3(0.)),vec3(8.));if(col.r!=col.r||col.g!=col.g||col.b!=col.b)col=vec3(0.);gl_FragColor=vec4(col,1.);}`;
