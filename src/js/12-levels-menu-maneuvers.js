const LV=[
{n:'المدينة والأولويات',e:'🏙️',s:0,en:620,d:'الحزام، سرعة المدينة، ممر الراجلين، الإشارة الضوئية، قف، أولوية اليمين'},
{n:'الطريق والتجاوز',e:'🛣️',s:600,en:1080,d:'السرعة خارج المدينة، الخط المتواصل، التجاوز، مسافة الأمان، سيارة الإسعاف'},
{n:'لوحة القيادة وعون المرور',e:'🚨',s:1040,en:1640,d:'المؤشر الأحمر والبرتقالي، عون المرور، الضوء الوامض'},
{n:'الليل والأضواء والضباب',e:'🌙',s:1640,en:2240,d:'أضواء المقاطعة والطريق والضباب والوضعية (استعمل 💡 و🌫️)'},
{n:'الأضواء الخاصة والمؤشرات',e:'🚂',s:2240,en:3150,d:'لوحة التسجيل، مؤشرات لوحة القيادة، السكة، مفترق مسدود، الراجلون ومحطة الاستخلاص وإشارات العون'},
{n:'امتحان المناورات (البارك)',e:'🅿️',man:1,d:'أربع مناورات متتالية بالقابض فقط، 5 دقائق'},
{n:'الامتحان الكامل',e:'🏁',s:0,en:3150,d:'كل مراحل الجولان متتالية كما في الامتحان'},
{n:'علامات الخطر والمنع',e:'⚠️',s:0,sg:SG1,d:'المثلث والدائرة الحمراء: الخطر الدائم والمؤقت، المنع، نهاية المنع، منع الوقوف والتوقف'},
{n:'علامات الجبر والإرشاد',e:'🔵',s:0,sg:SG2,d:'الدائرة الزرقاء، السبل الإجبارية، علامات الإرشاد، لوحات المدن والاتجاهات'},
{n:'علامات الأولوية واللافتات',e:'🔶',s:0,sg:SG3,d:'الأولوية (قف وفسح المجال)، اللافتات التكميلية، تلخيص الأشكال والألوان'},
{n:'رسوم الطريق',e:'🛣️',s:0,sg:SGM,d:'الخطوط المتقطعة والمتواصلة والمزدوجة، خط الإعلان، حافة المعبد، الخطوط العرضية، الأسهم، الخطوط المكسرة، ممر المترجلين'},
{n:'علامات المنع (1)',e:'🚫',s:0,sg:PR1,d:'منع الجولان حسب نوع العربة والحمولة والوزن، الدوران والمرور دون توقف'},
{n:'علامات المنع (2)',e:'🚫',s:0,sg:PR2,d:'الأولوية للقادم، المنبهات، مسافة الأمان، المجاوزة، مناطق الوقوف والتوقف'},
{n:'علامات نهاية المنع',e:'🔚',s:0,sg:PE,d:'نهاية المجاوزة والمنبهات والسرعة والمناطق وكل الموانع'},
{n:'علامات الخطر (1)',e:'⚠️',s:0,sg:DG.slice(0,19),d:'المنعرجات والطرق الضيقة والحيوانات والأطفال والسكك الحديدية'},
{n:'علامات الخطر (2)',e:'⚠️',s:0,sg:DG.slice(19),d:'السكك الحديدية المجهزة، المسنم، الجسر، الحجارة، الرياح، التراموي والمنعرجات'},
{n:'العلامات الوقتية',e:'🚧',s:0,sg:TMP,d:'علامات الأشغال والتحويلات والإشارات الوقتية وعلامات الإرشاد الوقتية'},
{n:'علامات الإرشاد (1)',e:'ℹ️',s:0,sg:INF.slice(0,19),d:'طريق السيارات، مآوي الوقوف، المحطات، الممرات، السرعة المحبذة والمسالك'},
{n:'علامات الإرشاد (2)',e:'ℹ️',s:0,sg:INF.slice(19),d:'الخدمات والمرافق، تحديد المسالك، لوحات الاتجاه وموطن العمران'},
{n:'علامات الجبر ونهايته',e:'🔵',s:0,sg:OBL,d:'السبل والاتجاهات الإجبارية، السرعة الدنيا، ونهاية كل جبر'},
{n:'امتحان الكود — سلسلة 1',e:'📝',ex:SER1,d:'30 سؤالًا بنمط الاختبار الرسمي (النجاح بـ24) مع صور ووضعيات'},
{n:'امتحان الكود — سلسلة 2',e:'📝',ex:SER2,d:'30 سؤالًا: العلامات والرسوم والأضواء وإجراءات الامتحان'},
{n:'الإسعافات والصيانة والخطايا',e:'🩺',ex:SER3,d:'الإسعافات الأولية، الصيانة الوقائية، جرائم الجولان وأصناف الخطايا (من 6 إلى 60 د)'},
{n:'وضعيات حقيقية: مطر، عون، حافلة، حادث',e:'🌧️',s:0,sg:NEWSIT,d:'قُد وتصرف: المطر، عون المرور، الخط الأصفر على الرصيف، الحافلة، حادث مرور'}];
const TH={7:'b',8:'b',9:'b',10:'t',11:'b',12:'b',13:'b',14:'t',15:'t',16:'t',17:'b',18:'b',19:'b',23:'t'};LV.forEach((l,i)=>{if(l.sg){l.th=TH[i];if(i>=9)l.rl=1}});
const S3=s=>s==null?0:s>=95?3:s>=85?2:s>=70?1:0,PRE=[-1,0,1,2,3,4,4,-1,7,8,9,10,11,12,13,14,15,16,17,18],unl=i=>prog.open||i==0||i==7||i>=20||prog[PRE[i]]!=null;
const POS=[[27,91],[73,82],[27,73],[73,64],[27,55],[73,46],[27,37],[73,28],[27,19],[73,10]];
const DET='خطأ واحد منها يكفي للرسوب مهما كان بقية أدائك: عدم احترام أولوية اليمين أو علامة قف أو الضوء الأحمر، عدم إفساح المجال للراجلين، تجاوز الخط المتواصل أو التجاوز الخطير، السير عكس الاتجاه، لمس الرصيف، تغيير المسلك دون مراقبة المرآة، فقدان السيطرة أو الاصطدام.<br><br>أما الأخطاء الفنية (نسيان الغماز، انطلاق متردد) فيُتسامح معها ما لم تتكرر.<br><br>في المناورات: لمس شاخص أو رصيف أو الخروج من الممر = رسوب فوري.';
const tot=()=>LV.reduce((a,_,i)=>a+S3(prog[i]),0);
function wr(){try{localStorage.setItem('tnprog',JSON.stringify(prog))}catch(e){}}
function tg(k){prog[k]=!prog[k];if(k=='tr')tr=prog.tr;wr();menu()}
function lk(){const t=document.getElementById('tt');t.style.opacity=1;setTimeout(()=>t.style.opacity=0,1800)}
function ex(){ov.style.display='flex';ov.innerHTML='<h2>📖 الأخطاء الإقصائية</h2>'+DET+'<button class="go" onclick="menu()">رجوع</button>'}
function rk(){const dn=LV.filter((_,i)=>prog[i]!=null).length,C=[['⭐','#111','مجموع النجوم',tot()+' / '+LV.length*3],['🏁','#a83b34','الامتحان الكامل',prog[6]!=null?prog[6]+' نقطة':'غير مصنّف'],['🅿️','#7a3b8a','المناورات',prog[5]!=null?'ناجح ✅':'غير مصنّف'],['🚦','#1f6f4a','المراحل المكتملة',dn+' / '+LV.length]];
ov.style.display='flex';ov.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><button class="bk" onclick="menu()">‹ رجوع</button><b style="font-size:18px">🏆 التصنيفات</b><button class="bk" onclick="menu()">✕</button></div><div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap"><div><div style="font-size:42px;color:#f5e6b3">${dn}</div><b>مراحل مكتملة</b><br><small style="opacity:.7">اطّلع على نتائجك في كل تصنيف</small></div><div style="display:flex;gap:12px;overflow-x:auto;padding:4px;max-width:100%">`+C.map(c=>`<div class="cd"><div class="ci" style="background:${c[1]}">${c[0]}</div><div class="ct"><b>${c[2]}</b><small style="opacity:.7">${c[3]}</small></div></div>`).join('')+'</div></div>'}
function menu(){st=0;mn=0;ms=0;wc.style.display=sdc.style.display='block';document.getElementById('g').classList.remove('mn');rl2('⛽','🛑');K={};ov.style.display='none';ov.className='';const m=document.getElementById('mp');m.style.display='block';
const HP=LV.length*100+170,PS=LV.map((_,i)=>[i%2?72:28,(HP-90-i*100)/HP*100]);
let dd='M'+PS[0].join(' ');for(let i=1;i<PS.length;i++){const a=PS[i-1],b=PS[i],y=(a[1]+b[1])/2;dd+=` C${a[0]} ${y} ${b[0]} ${y} ${b[0]} ${b[1]}`}
const cu=LV.findIndex((_,i)=>unl(i)&&prog[i]==null),co=LV.reduce((a,_,i)=>a+(prog[i]||0),0),P=(w,c,x)=>`<path d="${dd}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" vector-effect="non-scaling-stroke" ${x||''}/>`;
m.innerHTML=`<div class="sc"><div style="position:relative;height:${HP}px;background:linear-gradient(#7ec8e3 0%,#cdeaf2 10%,#f7e2b8 35%,#ecd09a 70%,#e2bd7c 100%)"><svg viewBox="0 0 100 100" preserveAspectRatio="none">${P(46,'#fff')}${P(38,'#4a4d52')}${P(3,'#ffe066','stroke-dasharray="10 12"')}</svg>
<div style="position:absolute;top:24px;left:66%;width:70px;height:70px;border-radius:50%;background:radial-gradient(#fff6c0,#ffb02e);box-shadow:0 0 40px #ffcf66"></div><div class="cl" style="top:40px;left:6%;width:90px"></div><div class="cl" style="top:120px;left:52%;width:120px"></div>`
+LV.map((l,i)=>{const u=unl(i),s=S3(prog[i]),dn=prog[i]!=null;return `<div class="nd ${!u?'lk':dn?'done':i==cu?'cur':''}" style="left:${PS[i][0]}%;top:${PS[i][1]}%" onclick="play(${i})">${u?l.e:'🔒'}<b>${i==6?'🏁':i+1}</b>${u?`<span class="stars">${[0,1,2].map(k=>`<span style="opacity:${k<s?1:.3}">⭐</span>`).join('')}</span>`:''}</div><div class="nl" style="left:${PS[i][0]}%;top:calc(${PS[i][1]}% + 68px)">${l.n}</div>`}).join('')
+`</div></div><div class="bar"><button class="pill" onclick="rk()">🏆</button><div class="pill">مدرسة السياقة 🇹🇳</div><div style="display:flex;gap:5px"><div class="pill">⭐ ${tot()}/${LV.length*3}</div><div class="pill">🪙 ${co}</div></div></div><div class="bar" style="top:auto;bottom:10px;justify-content:center"><button class="pill" onclick="tg('tr')">🎯 تدريب: ${tr?'نعم':'لا'}</button><button class="pill" onclick="tg('open')">${prog.open?'🔓':'🔒'} فتح الكل</button><button class="pill" onclick="ex()">📖 الإقصائية</button><button class="pill" onclick="qcyc()">🎨 ${QN[QL]}</button><button class="pill" onclick="ecyc()">☀️ ${EXPO}</button></div><div id="tt">🔒 أكمل المرحلة السابقة أولًا</div>`;
const sc=m.querySelector('.sc');sc.scrollTop=Math.max(0,HP*PS[cu<0?0:cu][1]/100-innerHeight/2)}
function play(i){if(!unl(i))return lk();document.getElementById('mp').style.display='none';if(LV[i].ex)return startExam(i);if(LV[i].man)return mstartAll();init(i);st=3;const l=LV[i];ov.style.display='flex';ov.innerHTML=`<h2>${l.e} ${l.n}</h2>${l.d}.<br><br>🔒 اربط الحزام (B) ثم انطلق.<br><small style='opacity:.8'>Z/S: تسارع وفرملة · Q/D: توجيه · ← → : غماز · Espace: فرملة اليد · L: أضواء · F: ضباب · M: مرآة · H: منبه · 🎮 يد التحكم مدعومة (RT/LT/عصا)</small><button class="go" onclick="st=1;ov.style.display='none'">انطلق 🚗</button><button class="go" style="background:#333" onclick="menu()">☰ القائمة</button>`}

Object.assign(M,{mirror:'غيّرت المسلك دون مراقبة المرآة',curb:'لمست الرصيف أو اقتربت منه بخطورة',dist:'لم تحترم مسافة الأمان'});
Object.assign(E,{mirror:['قبل أي تغيير للمسلك أو تجاوز يجب مراقبة المرآة والنقطة العمياء؛ تركها خطأ إقصائي.','اضغط 👁️ (أو M) للنظر في المرآة ثم أشِر ⬅️ ثم انتقل.'],curb:['لمس الرصيف أو الخروج الخطير من المنعطف خطأ إقصائي.','ابقَ في وسط مسلكك بعيدًا عن حافة الطريق.'],dist:['مسافة الأمان تحمي من الاصطدام من الخلف (ثانيتان على الأقل).','خفّف السرعة وابتعد عن السيارة التي أمامك قبل التجاوز.']});
const na=a=>Math.atan2(Math.sin(a),Math.cos(a));
const corr=(a,b,y0,y1)=>{const r=[];for(let y=y0;y<y1;y+=1.5)r.push([a-.4,y,.4,.4,'p'],[b,y,.4,.4,'p']);return r};
const ST=[
{n:'1️⃣ السير للأمام في ممر ضيق',s:[10,32.4,0],r:corr(8.5,11.5,6,28),g:()=>my<5,tip:'ضع السيارة في المحور وتقدّم ببطء بلمسات صغيرة على المقود ثم توقف عند الخط.'},
{n:'2️⃣ إيواء العربة موازية للرصيف (الكرينو)',s:[8.3,10.5,0],r:[[13.6,0,7,35,'c'],[11.7,8,1.8,4.4,'k'],[11.7,18.4,1.8,4.4,'k']],g:()=>Math.abs(mx-12.6)<.5&&Math.abs(my-15.4)<1&&Math.abs(na(ma))<.15,tip:'تراجع 🛑 مع المقود نحو الرصيف ثم قوّمه لتستقر موازيًا في الوسط.'},
{n:'3️⃣ الرجوع على الأعقاب',s:[10,28,0],r:[[0,0,6.5,35,'c'],[13.5,0,6.5,35,'c']],g:()=>Math.abs(Math.abs(na(ma))-Math.PI)<.3,tip:'تقدّم بالمقود كاملًا في جهة، ثم تراجع بالمقود المعاكس، وقوّم لتصير في الاتجاه المعاكس.'},
{n:'4️⃣ السير إلى الخلف في ممر ضيق',s:[10,9,0],r:corr(8.5,11.5,6,28),g:()=>my>30,tip:'استعمل المرايا وتراجع ببطء شديد بلمسات صغيرة حتى الخروج من الممر.'}];
const MF={mhit:'لمست شاخصًا أو رصيفًا أو سيارة أو خرجت من الحدود: هذا خطأ إقصائي (رسوب فوري).',mtime:'تجاوزت مدة الاختبار (5 دقائق).'};
function mstart(i){stg=i;[mx,my,ma]=ST[i].s;msa=0;msv=0;mgT=0;ms=1;ov.style.display='none'}
function mretry(){mt=0;belt=false;mstart(0)}
function mstartAll(){mn=1;wc.style.display=sdc.style.display='none';document.getElementById('g').classList.add('mn');rl2('▲','▼');att=0;mt=0;belt=false;mstart(0);ms=0;K={};ov.style.display='flex';ov.innerHTML=`<h2>🅿️ امتحان المناورات</h2>أربع مناورات متتالية في ساحة مغلقة، مدتها 5 دقائق كحد أقصى.<br>• اربط الحزام 🔒 أولًا.<br>• حرّك السيارة ببطء: ▲ (أو Z) للأمام و▼ (أو S) للخلف، وEspace للتوقف.<br>• لمس شاخص أو رصيف أو الخروج من الممر = رسوب فوري.<br>• الدقة أهم من السرعة، وصحّح فورًا إن خرجت عن المحور.<br>• لديك محاولتان.<button class="go" onclick="mt=0;ms=1;ov.style.display='none'">ابدأ</button>`}
function mfail(k){ms=2;att++;K={};AU.crash();rum(1,1);ov.style.display='flex';ov.innerHTML=`<h2>❌ ${att>1?'رسبت في المناورات':'رسوب'}</h2><div class="f">${MF[k]}</div>${att>1?'<div class="f">رسبت في المحاولتين: يجب إعادة اجتياز اختبار الجولان.</div><button class="go" onclick="menu()">☰ القائمة</button>':'<div class="f">لديك محاولة ثانية تبدأ من المناورة الأولى.</div><button class="go" onclick="mretry()">المحاولة الثانية</button>'}`}
function mnext(){ms=2;K={};AU.ok();if(stg==3)save(5,100);ov.style.display='flex';ov.innerHTML=stg==3?`<h2>🎉 نجحت في المناورات</h2>أنجزت المناورات الأربع بنجاح. يسلّمك الممتحن رخصة مؤقتة في انتظار الأصلية.<button class="go" onclick="menu()">☰ القائمة</button>`:`<h2>✅ نجحت المناورة ${stg+1}</h2>المناورة التالية: ${ST[stg+1].n}<button class="go" onclick="mstart(${stg+1})">تابع</button>`}
function mcol(){const c=Math.cos(ma),sn=Math.sin(ma),P=[];for(let u=-2.1;u<=2.11;u+=.35)P.push([-.9,u],[.9,u]);for(let w=-.9;w<=.91;w+=.3)P.push([w,-2.1],[w,2.1]);
return P.some(p=>{const X=mx+p[0]*c+p[1]*sn,Y=my+p[0]*sn-p[1]*c;return X<0||X>20||Y<0||Y>35||ST[stg].r.some(r=>X>r[0]&&X<r[0]+r[2]&&Y>r[1]&&Y<r[1]+r[3])})}
function mup(dt){if(ms!=1||!belt)return;mt+=dt;let tg=(IN.g-IN.b)*2.3;if(IN.hb)tg=0;msv+=(tg-msv)*Math.min(1,(IN.hb?12:3.2)*dt);if(Math.abs(msv)<.02&&!tg)msv=0;
msa+=(IN.s*.62-msa)*Math.min(1,6*dt);ma+=msv/2.6*Math.tan(msa)*dt;mx+=Math.sin(ma)*msv*dt;my-=Math.cos(ma)*msv*dt;
if(mcol())return mfail('mhit');if(mt>300)return mfail('mtime');
if(!tg&&Math.abs(msv)<.05&&ST[stg].g()){if((mgT+=dt)>.6)mnext()}else mgT=0}
function mdraw(){const S=18,c=cx,z=Math.min(W/360,Hh/640);c.setTransform(DP,0,0,DP,0,0);c.clearRect(0,0,W,Hh);c.fillStyle='#2b2d30';c.fillRect(0,0,W,Hh);c.save();c.translate((W-360*z)/2,(Hh-640*z)/2);c.scale(z,z);c.fillStyle='#4a4d52';c.fillRect(0,0,360,640);
ST[stg].r.forEach(r=>{c.fillStyle=r[4]=='c'?'#8a8a8a':r[4]=='k'?'#3366aa':'#ff8800';c.fillRect(r[0]*S,r[1]*S,r[2]*S,r[3]*S)});
c.strokeStyle='#3f3';c.lineWidth=3;c.setLineDash([8,6]);c.beginPath();if(stg==0||stg==3){const y=(stg?30:5)*S;c.moveTo(0,y);c.lineTo(360,y)}else if(stg==1)c.rect(11.7*S,12.4*S,1.8*S,6*S);c.stroke();c.setLineDash([]);
c.translate(mx*S,my*S);c.rotate(ma);c.fillStyle='#111';[[-1,-1.4],[1,-1.4],[-1,1.4],[1,1.4]].forEach((w,i)=>{c.save();c.translate(w[0]*1.02*S,w[1]*S);if(i<2)c.rotate(msa);c.fillRect(-.15*S,-.45*S,.3*S,.9*S);c.restore()});c.fillStyle='#c8102e';c.fillRect(-.9*S,-2.1*S,1.8*S,4.2*S);c.fillStyle='#9cd';c.fillRect(-.7*S,-1.3*S,1.4*S,.8*S);c.restore();
c.fillStyle='#000a';c.fillRect(0,0,W,58);c.fillStyle='#fff';c.textAlign='center';c.font='bold 15px Tahoma';c.fillText(ST[stg].n,W/2,20);c.font='12px Tahoma';c.fillText(ST[stg].tip,W/2,40,W-20);
c.textAlign='left';c.fillText('⏱ '+Math.floor(mt/60)+':'+String(Math.floor(mt%60)).padStart(2,'0'),8,54);
if(!belt&&ms==1){c.textAlign='center';c.font='bold 18px Tahoma';c.fillStyle='#fc0';c.fillText('🔒 اربط الحزام أولًا',W/2,Hh*.5)}}

Object.assign(M,{plate:'إجابة خاطئة: أضواء لوحة التسجيل',temp:'إجابة خاطئة: مؤشر حرارة المحرك',batt:'إجابة خاطئة: مؤشر البطارية',brk:'إجابة خاطئة: مؤشر الفرامل',eng:'إجابة خاطئة: مؤشر المحرك',abs:'إجابة خاطئة: مؤشر ABS',glow:'إجابة خاطئة: تسخين محرك الديزل',pedl:'إجابة خاطئة: ضوء الراجلين',toll:'إجابة خاطئة: محطة الاستخلاص',off2:'إجابة خاطئة: إشارة عون المرور',off3:'إجابة خاطئة: إشارة عون المرور',rail:'عبرت السكة والأضواء الحمراء تومض',blk:'دخلت مفترقًا مسدودًا رغم الضوء الأخضر'});
Object.assign(E,{plate:['أضواء لوحة التسجيل الخلفية تُنير اللوحة ليلًا لتُقرأ من مسافة 20 مترًا في طقس صاف.','تشتعل مع أضواء الوضعية؛ لا تسر ليلًا بدونها.'],temp:['المؤشر الأحمر لحرارة سائل التبريد يعني حرارة مرتفعة جدًا: يجب التوقف حالًا.','توقف بأمان وأوقف المحرك ولا تفتح غطاء المبرّد وهو ساخن.'],batt:['مؤشر شحن البطارية الأحمر يدل على أن شحن الحاشدة قارب النهاية وتجب إعادة شحنها أو تغييرها.','توجه إلى ورشة قريبًا وقلّل استعمال الكهرباء.'],brk:['المؤشر الأحمر للفرامل يدل على عطب في جهاز الفرملة أو أن المكبح اليدوي ما زال مشدودًا.','توقف وتحقق من أنك أرخيت المكبح اليدوي، وإن استمر المؤشر فلا تواصل السير.'],eng:['المؤشر البرتقالي للمحرك تنبيه بوجود خلل، ويمكنك مواصلة السير لكيلومترات قبل تفقد السيارة.','واصل بحذر وتوجه إلى ورشة قريبًا.'],abs:['مؤشر ABS البرتقالي يدل على عطب في نظام منع انغلاق العجلات؛ الفرامل تعمل لكن دون هذا النظام.','واصل بحذر وزد مسافة الأمان ثم افحص السيارة.'],glow:['مؤشر تسخين محرك الديزل يضيء قبل التشغيل وينطفئ عند انتهاء التسخين.','انتظر انطفاءه ثم شغّل المحرك.'],pedl:['الضوء الأخضر الخاص بالراجلين يسمح لهم بالعبور، والأحمر يمنعهم.','عند الأخضر للراجلين أتوقف وأفسح لهم المجال.'],toll:['في محطات الاستخلاص السهم الأخضر يدل على السبيل المسموح به، والعلامة الحمراء ✕ على السبيل الممنوع.','اسلك السبيل ذا السهم الأخضر.'],off2:['وقوف العون جانبيًا مع ذراع ممدودة على جنب يعني السماح بالمرور.','أمرّ بحذر في الاتجاه المسموح.'],off3:['حركة اليد بطريقة دائرية من الأعلى إلى الأسفل تعني: واصل السير وأسرع.','أواصل ولا أتوقف.'],rail:['الأضواء الحمراء الوامضة عند تقاطع سكة حديدية تمنع عبور العربات.','اضغط 🛑 وتوقف قبل السكة وانتظر انطفاء الأضواء.'],blk:['حتى مع الأخضر يجب ألا تدخل مفترقًا مسدودًا، وعليك إفساح المجال للعربات والراجلين الموجودين فيه.','توقف قبل الخط وانتظر أن ينفرج المفترق ثم امرّ.']});
const QZ=[
[2260,'ما المسافة التي تُقرأ منها لوحة التسجيل الخلفية ليلًا بفضل أضوائها في طقس صاف؟',['20 مترًا','100 متر','150 مترًا'],0,'plate'],
[2320,'أضاء هذا المؤشر الأحمر (حرارة سائل التبريد مرتفعة جدًا). ماذا تفعل؟',['أتوقف حالًا','أواصل حتى أصل','أسرّع للوصول'],0,'temp','🌡️','#f22'],
[2380,'أضاء مؤشر أحمر: شحن البطارية. ماذا يعني؟',['الحاشدة قاربت النهاية وتحتاج إعادة شحن أو تغيير','نفد الوقود','ضغط الإطارات منخفض'],0,'batt','🔋','#f22'],
[2440,'أضاء مؤشر أحمر: علامة تعجب داخل دائرة. ماذا يعني؟',['عطب في الفرامل أو مكبح يدوي مشدود','باب مفتوح','خلل في الأضواء'],0,'brk','❗','#f22'],
[2500,'أضاء مؤشر برتقالي على شكل محرك. ماذا تفعل؟',['أواصل بحذر وأفحص السيارة قريبًا','أترك السيارة في الطريق','أتجاهله تمامًا'],0,'eng','🔧','#f90'],
[2660,'أضاء مؤشر برتقالي ABS. ماذا يعني؟',['عطب في نظام منع انغلاق العجلات','مستوى الزيت منخفض','الحرارة مرتفعة'],0,'abs','🅰️','#f90'],
[2690,'يضيء مؤشر برتقالي (حلزون) عند تشغيل سيارة ديزل. متى أشغّل المحرك؟',['بعد انطفاء المؤشر','فورًا','بعد ساعة'],0,'glow','🌀','#f90'],
[2900,'ضوء أخضر خاص بالراجلين على ممر أمامك. ماذا يعني؟',['يعبر الراجلون وأتوقف لهم','يمكنني المرور بسرعة','لا يخصني'],0,'pedl'],
[2960,'أمام محطة الاستخلاص: سهم أخضر فوق سبيل وعلامة ✕ حمراء فوق آخر. ماذا تفعل؟',['أسلك السبيل ذا السهم الأخضر','أسلك السبيل ذا العلامة الحمراء','أي سبيل'],0,'toll'],
[3020,'عون المرور يقف جانبيًا وذراعه ممدودة على جنب. ماذا يعني؟',['المرور مسموح','وجوب التوقف','ارجع إلى الخلف'],0,'off2'],
[3080,'عون المرور يحرّك يده بطريقة دائرية من الأعلى إلى الأسفل. ماذا يعني؟',['واصل السير وأسرع','قف','انعطف يمينًا'],0,'off3']];
function fin(){st=2;const ok=score>=70&&d>endD-50&&!fl.some(x=>x[1]==20);if(ok){save(cur,score);AU.win()}ov.style.display='flex';ov.innerHTML=`<h2>${ok?'🎉 نجحت':'😕 رُسبت'}</h2>النقاط: ${score}/100 (النجاح 70)<br>${fl.length?fl.map(f=>`<div class="f">${f[0]} (-${f[1]})</div>`).join(''):'لا مخالفات! 👏'}${ok&&(cur<5||(cur>=7&&cur<19))?`<button class="go" onclick="play(${cur+1})">المرحلة التالية ➡️</button>`:''}<button class="go" onclick="init()">أعد المرحلة</button><button class="go" style="background:#333" onclick="menu()">☰ القائمة</button>`}
const hit=o=>Math.abs(o.x-x)<1.8&&Math.abs(o.d-d)<4.4;
function crash(){F('hit',1);v=0;d-=6;AU.crash();rum(1,1)}
