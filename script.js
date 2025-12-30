
const faders=document.querySelectorAll('.fade');
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show');});
});
faders.forEach(f=>observer.observe(f));
