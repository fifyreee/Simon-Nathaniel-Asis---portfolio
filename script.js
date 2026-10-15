const btn=document.getElementById('menuBtn'),links=document.getElementById('links');
btn.addEventListener('click',()=>{const o=links.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
links.addEventListener('click',e=>{if(e.target.tagName==='A'){links.classList.remove('open');btn.setAttribute('aria-expanded',false)}});
document.getElementById('year').textContent=new Date().getFullYear();
