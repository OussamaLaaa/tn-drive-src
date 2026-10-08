const {chromium}=require('playwright');
const S=extract();
const fs=require('fs'),path=require('path');
function extract(){const js=fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf-8');const o={};for(const k of ['QUAD_VS','SKY_VS','SKY_FS','BRIGHT_FS','BLUR_FS','COMP_FS']){o[k]=new RegExp('const '+k+'=`([\\s\\S]*?)`;').exec(js)[1]}return o}
// Compiles every GLSL shader of the game in headless Chromium (WebGL2). Needs: npm i playwright
(async()=>{
 const b=await chromium.launch({args:['--use-gl=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist','--no-sandbox']});
 const p=await b.newPage();p.on('console',m=>console.log('PAGE:',m.text()));
 await p.setContent('<canvas id=c width=64 height=64></canvas>');
 const res=await p.evaluate((S)=>{
  const gl=document.getElementById('c').getContext('webgl2');if(!gl)return {err:'no webgl2'};
  const out={};
  // emulate three.js WebGL2 prefix for ShaderMaterial
  const vpre=`#version 300 es
precision highp float;precision highp int;
uniform mat4 modelMatrix;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;uniform mat4 viewMatrix;uniform mat3 normalMatrix;uniform vec3 cameraPosition;
in vec3 position;in vec3 normal;in vec2 uv;
#define attribute in
#define varying out
#define texture2D texture
`;
  const fpre=`#version 300 es
precision highp float;precision highp int;
layout(location = 0) out highp vec4 pc_fragColor;
#define varying in
#define gl_FragColor pc_fragColor
#define texture2D texture
`;
  function comp(type,src){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))return {log:gl.getShaderInfoLog(s)};return {s}}
  function prog(vs,fs,name){const v=comp(gl.VERTEX_SHADER,vpre+vs),f=comp(gl.FRAGMENT_SHADER,fpre+fs);if(v.log||f.log){out[name]={vlog:v.log,flog:f.log};return null}
   const pr=gl.createProgram();gl.attachShader(pr,v.s);gl.attachShader(pr,f.s);gl.linkProgram(pr);if(!gl.getProgramParameter(pr,gl.LINK_STATUS)){out[name]={link:gl.getProgramInfoLog(pr)};return null}out[name]='ok';return pr}
  prog(S.QUAD_VS,S.BRIGHT_FS,'bright');prog(S.QUAD_VS,S.BLUR_FS,'blur');const pc=prog(S.QUAD_VS,S.COMP_FS,'comp');const ps=prog(S.SKY_VS,S.SKY_FS,'sky');
  // render composite with a test texture and read pixels
  if(pc){
   const tex=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,tex);const px=new Uint8Array(4*4*4);for(let i=0;i<16;i++){px[i*4]=200;px[i*4+1]=150;px[i*4+2]=100;px[i*4+3]=255}
   gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,4,4,0,gl.RGBA,gl.UNSIGNED_BYTE,px);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
   gl.useProgram(pc);
   const buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,0,0, 1,-1,1,0, -1,1,0,1, 1,1,1,1]),gl.STATIC_DRAW);
   const pl=gl.getAttribLocation(pc,'position'),ul=gl.getAttribLocation(pc,'uv');
   gl.enableVertexAttribArray(pl);gl.vertexAttribPointer(pl,2,gl.FLOAT,false,16,0);gl.enableVertexAttribArray(ul);gl.vertexAttribPointer(ul,2,gl.FLOAT,false,16,8);
   const set1=(n,v)=>gl.uniform1f(gl.getUniformLocation(pc,n),v);
   gl.uniform1i(gl.getUniformLocation(pc,'tS'),0);gl.uniform1i(gl.getUniformLocation(pc,'tB'),0);
   gl.uniform2f(gl.getUniformLocation(pc,'uRes'),64,64);gl.uniform2f(gl.getUniformLocation(pc,'uSun'),.5,.8);
   const run=(rain,night,speed)=>{set1('uTime',3.3);set1('uSpeed',speed);set1('uRain',rain);set1('uNight',night);set1('uBloom',.5);set1('uSunVis',1);set1('uExpo',1);set1('uVig',.35);
    gl.viewport(0,0,64,64);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);const r=new Uint8Array(4);gl.readPixels(32,32,1,1,gl.RGBA,gl.UNSIGNED_BYTE,r);const e=new Uint8Array(4);gl.readPixels(2,2,1,1,gl.RGBA,gl.UNSIGNED_BYTE,e);return {center:[...r],corner:[...e]}};
   out.comp_day=run(0,0,0);out.comp_rain=run(1,0,.8);out.comp_night=run(0,1,.5);out.glerr=gl.getError();
  }
  return out;
 },{QUAD_VS:S.QUAD_VS,SKY_VS:S.SKY_VS,SKY_FS:S.SKY_FS,BRIGHT_FS:S.BRIGHT_FS,BLUR_FS:S.BLUR_FS,COMP_FS:S.COMP_FS});
 console.log(JSON.stringify(res,null,1));await b.close();
})().catch(e=>{console.log('ERR',e.message);process.exit(1)});
