
(function(){
  const q=document.querySelector('[data-filter]');
  if(!q) return;
  const entries=[...document.querySelectorAll('.index-entry')];
  const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  q.addEventListener('input',()=>{const v=normalize(q.value.trim()); entries.forEach(e=>{e.hidden=v && !normalize(e.textContent).includes(v);});});
})();
