const menu=document.querySelector('.menu');
const nav=document.querySelector('#nav');
function setMenu(open){nav.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);menu.setAttribute('aria-expanded',String(open));menu.querySelector('span').textContent=open?'×':'☰';}
menu.addEventListener('click',()=>setMenu(!nav.classList.contains('open')));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
