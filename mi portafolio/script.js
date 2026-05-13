// Estrellitas de fondo animadas
const starsEl = document.getElementById('stars');
const colors = ['#f4a7b9','#d8b4fe','#fde68a','#a7f3d0','#bae6fd'];

for(let i = 0; i < 60; i++){
  const s = document.createElement('div');
  s.className = 'star';
  const size = Math.random() * 5 + 2;
  s.style.cssText = `
    width:${size}px;
    height:${size}px;
    left:${Math.random()*100}%;
    top:${Math.random()*100}%;
    background:${colors[Math.floor(Math.random()*colors.length)]};
    --d:${(Math.random()*4+3).toFixed(1)}s;
    --dl:${(Math.random()*6).toFixed(1)}s
  `;
  starsEl.appendChild(s);
}

// Aparición suave al hacer scroll
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.hobby, .chip, .about-text p').forEach(el => {
  el.style.cssText += 'opacity:0;transform:translateY(32px);transition:opacity .7s ease,transform .7s ease';
  obs.observe(el);
});