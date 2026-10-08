const body=document.body;

// entrance animation
document.querySelectorAll('.reveal').forEach((el,i)=>setTimeout(()=>el.classList.add('show'),120+i*110));

// interactive space glow + subtle parallax
const glow=document.querySelector('.cursor-glow');
document.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';}});
const planet=document.querySelector('.planet');
document.addEventListener('pointermove',e=>{if(!planet)return;const x=(e.clientX/innerWidth-.5)*10,y=(e.clientY/innerHeight-.5)*10;planet.style.setProperty('--mx',x+'deg');planet.style.setProperty('--my',y+'deg');});

// scroll progress
addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;const v=h?scrollY/h*100:0;document.querySelector('.progress')?.style.setProperty('width',v+'%');});

// mobile menu
const menu=document.querySelector('.menu'), nav=document.querySelector('nav');
menu?.addEventListener('click',()=>nav?.classList.toggle('open'));

// crew form
const form=document.getElementById('crewForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const code='MRS-2040-'+Math.floor(1000+Math.random()*9000);localStorage.setItem('marsCode',code);const msg=document.getElementById('formMessage');if(msg){msg.innerHTML='درخواست شما با موفقیت ثبت شد · کد پیگیری: <b>'+code+'</b>';msg.classList.add('show');msg.scrollIntoView({behavior:'smooth',block:'center'});}form.reset();});}

// smooth anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});}));
