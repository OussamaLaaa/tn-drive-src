// Smoke test: loads the game with a mocked DOM/THREE and plays every stage.
// Usage: node tests/smoke.js [path/to/index.html]   (prints any ReferenceError/TypeError)
const vm=require('vm'),fs=require('fs');
const html=fs.readFileSync(process.argv[2]||require('path').join(__dirname,'../dist/index.html'),'utf-8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
function mk(){const store={};const f=function(){};return new Proxy(f,{get(t,p){if(p===Symbol.toPrimitive)return()=>0;if(p==='length')return 0;if(p==='then')return undefined;if(!(p in store))store[p]=mk();return store[p]},set(t,p,v){store[p]=v;return true},apply(){return mk()},construct(){return mk()}})}
const elems={};
const document={getElementById(id){return elems[id]||(elems[id]=mk())},querySelector(){return mk()},querySelectorAll(){return []},createElement(){return mk()},addEventListener(){}};
const THREE=new Proxy({}, {get:(t,p)=>function(){return mk()}});
const ctx={Image:function(){return {set src(v){}}},document,window:null,navigator:{getGamepads:()=>[]},THREE,performance:{now:()=>Date.now()},setTimeout:()=>0,localStorage:{getItem:()=>null,setItem(){}},innerWidth:800,innerHeight:600,requestAnimationFrame(){},console,Math,JSON,Object,Array,Date,Promise,isNaN,parseInt,Number,String};
ctx.window=ctx;vm.createContext(ctx);
try{scripts.forEach(sc=>vm.runInContext(sc,ctx))}catch(e){console.log('LOAD ERROR',e.stack.split('\n').slice(0,4).join('\n'));process.exit(1)}
const test=`
(function(){const out=[];
// park: pressing belt must not fail
try{mstartAll();ms=1;belt=true;stg=0;mstart(0);belt=true;for(let k=0;k<20;k++){IN.g=0;IN.b=0;IN.s=0;mup(.03)}out.push('park stage1 idle ms='+ms+' (1 = ok)');
for(let s2=0;s2<4;s2++){mstart(s2);belt=true;for(let k=0;k<5;k++)mup(.03);out.push('park stage'+(s2+1)+' ms='+ms+' col='+mcol())}}catch(e){out.push('PARK ERROR '+e.stack.split('\\n').slice(0,3).join('|'))}
// exams
for(let i=20;i<23;i++){try{startExam(i);let n=0;while(EX&&EX.n<EX.qs.length&&n<100){exa(n%2);exn();n++}out.push('exam '+i+' questions='+EX.qs.length+' ok='+EX.ok)}catch(e){out.push('EXAM '+i+' ERROR '+e.stack.split('\\n').slice(0,3).join('|'))}}
// stages
for(let i=0;i<LV.length;i++){
 try{
  if(LV[i].man||LV[i].ex)continue;
  init(i);belt=true;let fr=0;
  for(;fr<12000&&st!=2;fr++){IN.g=fr%500<330?1:0;IN.b=fr%500>=330?1:0;IN.s=Math.sin(fr/50)*.3;if(st==3)st=1;up(.03);draw();snd(.03);}
  out.push(i+':'+LV[i].n+' frames='+fr+' d='+Math.round(d)+' zones='+(ZN?ZN.length:0));
 }catch(e){out.push(i+' ERROR '+e.stack.split('\\n').slice(0,3).join(' | '));}
}
return out.join('\\n')})()`;
try{console.log(vm.runInContext(test,ctx))}catch(e){console.log('TEST ERROR',e.stack.split('\n').slice(0,5).join('\n'))}
