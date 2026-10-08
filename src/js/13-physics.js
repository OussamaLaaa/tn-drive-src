function up(dt){
if(st!=1)return;t+=dt;
const g=IN.g,b=Math.max(IN.b,IN.hb*1.4),gr=wet?.55:1;
const ac=g*(26-.16*v)-b*55*gr-(.0008*v*v+(g?.6:2.5));ACC=ac;v=Math.max(0,Math.min(112,v+ac*dt));
const tgs=IN.s;sa+=(tgs-sa)*Math.min(1,(Math.abs(tgs)>.02?5:9)*dt);
const sf=Math.min(1,v/12)*(1-.5*Math.min(1,v/110));h+=(sa*.28*sf-h)*Math.min(1,(wet?1.4:3.2)*dt);if(wet)h+=Math.sin(t*2.7)*.004*Math.min(1,v/60);
x=Math.max(-3.4,Math.min(3.4,x+v/3.6*Math.sin(h)*dt));
const pf=d+2;d+=v/3.6*Math.cos(h)*dt;const f=d+2,cr=L=>pf<L&&f>=L,lim=LIM(d),sol=!LV[cur].sg&&f>700&&f<800;
if(sig&&(sigT-=dt)<=0)sig=0;
if(Math.abs(x)>3.15&&f<620&&!LV[cur].sg)F('curb',1);
if(slow&&x>1.2&&slow.d>d&&v>20){if(slow.d-d-4.4<v/3.6*1.5){if((dsT+=dt)>2)F('dist')}else dsT=0}else dsT=0;
if(!belt&&v>5)F('belt');
if(v>lim+3){if((spdT+=dt)>1.2)F('spd')}else spdT=0;
const al=!sol&&slow&&Math.abs(slow.d-d)<26;
if(x<.9){if(!wasL){wasL=1;if(sig!=-1)F('sig');if(t-mirT>4)F('mirror',1);if(sol)F('solid',1)}if(!al&&(leftT+=dt)>1.5)F('left')}else{wasL=0;leftT=0}
if(!ped.on&&!ped.done&&f>60)ped.on=1;
if(ped.on){ped.x+=2.5*dt;if(ped.x>7){ped.on=0;ped.done=1}}
if(cr(120)&&ped.on&&Math.abs(ped.x)<4.5)F('ped',1);
if(lg==0&&f>170){lg=1;lt=2}else if(lg==1&&(lt-=dt)<=0){lg=2;lt=8}else if(lg==2){lt-=dt*(v<1&&f<260?4:1);if(lt<=0)lg=3}
if(cr(260)&&lg==2)F('red',1);
if(f>350&&f<380&&v<3)stopped=1;
if(cr(380)&&!stopped)F('stop',1);
if(!cross.on&&!cross.done&&f>440)cross.on=1;
if(cross.on){cross.x-=12*dt;if(cross.x<-40){cross.on=0;cross.done=1}else if(Math.abs(cross.x-x)<3&&Math.abs(CZ-d)<3){cross.on=0;cross.done=1;crash()}}
if(cr(500)&&cross.on&&Math.abs(cross.x)<6)F('yield',1);
if(!slow&&!slowD&&f>760)slow={d:f+90,x:2};
if(slow){slow.d+=7*dt;if(!LV[cur].sg&&f>1000){slow=null;slowD=1}else if(hit(slow)){slow=null;slowD=1;crash()}}
if(slow&&!onc&&!oncD&&f>820)onc={d:f+200,x:-2};
if(onc){onc.d-=14*dt;if(onc.d<d-30){onc=null;oncD=1}else if(hit(onc)){onc=null;oncD=1;crash()}}
if(!amb&&!ambD&&f>1000)amb={d:d-70,x:-2};
if(amb){amb.d+=30*dt;if(amb.d>d+60){amb=null;ambD=1}else{if(Math.abs(amb.d-d)<40&&(x<.9||v>45))F('amb',1);if(hit(amb)){amb=null;ambD=1;crash()}}}
if(toastT>0)toastT-=dt;
if(!ev.o&&f>1170){ev.o=1;lampR=1;lt2=t}
if(lampR){if(v<1){if((st2+=dt)>1)lampR=0}else st2=0;if(lampR&&t-lt2>9){lampR=0;F('oil',1)}}
if(!ev.f&&f>1300){ev.f=1;lampO=1;Q('أضاء مؤشر برتقالي: مستوى الوقود منخفض. ماذا تفعل؟',['أتوقف فورًا في وسط الطريق','أواصل وأتجه إلى أقرب محطة وقود','أتجاهل المؤشر'],1,'fuel')}
if(!ev.p&&f>1360){ev.p=1;of=1;ot=t}
if(of==1&&t-ot>7)of=2;
if(!LV[cur].sg&&cr(1440)&&of==1)F('offc',1);
if(!ev.q&&f>1500){ev.q=1;Q('ضوء برتقالي وامض في المفترق. ماذا يعني؟',['ممنوع المرور','أبطئ وأنتبه وأطبّق قواعد الأولوية','مرور حر دون انتباه'],1,'flash')}
if(!LV[cur].sg&&f>1680&&f<3200&&v>5&&lights<2){if((ltT+=dt)>3)F('dark')}else ltT=0;
if(!LV[cur].sg&&f>1800&&f<2000&&lights==2&&v>50){if((dpT+=dt)>2)F('dip50')}else dpT=0;
if(!ev.c&&f>1880){ev.c=1;onc={d:f+170,x:-2}}
if(f>1800&&onc&&lights==3&&onc.d>d&&onc.d-d<130){if((dzT+=dt)>1)F('dazzle')}else dzT=0;
if(!LV[cur].sg&&f>2000&&f<2160&&v>5&&(!fog||v>50)){if((fgT+=dt)>3)F('fogf')}else fgT=0;
if(!ev.z&&f>2170){ev.z=1;Q('توقفت ليلًا خارج المدينة في طريق غير مضاءة. أي أضواء تُبقيها مشتعلة؟',['أضواء الوضعية','أضواء الطريق','أطفئ كل الأضواء'],0,'pos')}
QZ.forEach((e,i)=>{if(!ev['z'+i]&&f>e[0]){ev['z'+i]=1;Q((e[5]?`<span style="background:${e[6]};border-radius:50%;padding:2px 8px">${e[5]}</span> `:'')+e[1],e[2],e[3],e[4])}});
if(!ev.rl&&f>2540){ev.rl=1;rl=1;rt=t}
if(rl&&t-rt>10)rl=0;
if(!LV[cur].sg&&cr(2600)&&rl)F('rail',1);
if(!ev.bk&&f>2720){ev.bk=1;bl=1;bt=t}
if(bl&&t-bt>12)bl=0;
if(cr(2830)&&bl)F('blk',1);
if(bl&&hit({x:2,d:2840})){bl=0;crash()}
if(LV[cur].sg){const L=LV[cur];ZL=0;wet=0;BN='';RN=0;M.spd=M0;E.spd=E0;ZN.forEach(z=>zu(z,L,dt,f,cr))}
if(f>endD)fin();
}
