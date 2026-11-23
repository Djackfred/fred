const modal=document.getElementById('modal');
const openModal=(mode)=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');const login=mode==='login';document.getElementById('modal-title').textContent=login?'Connexion':'Créer votre compte';document.getElementById('modal-copy').textContent=login?'L’espace client sera activé lors du raccordement de l’authentification sécurisée.':'Inscrivez-vous pour être informé de l’ouverture de la plateforme.';document.querySelector('#account-form button').textContent=login?'Connexion bientôt disponible':'Valider ma demande →';document.getElementById('success').style.display='none';document.getElementById('account-form').style.display='grid';};
document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.open)));
document.getElementById('close').addEventListener('click',()=>modal.classList.remove('open'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});
document.getElementById('account-form').addEventListener('submit',e=>{e.preventDefault();document.getElementById('account-form').style.display='none';document.getElementById('success').style.display='block';});
document.getElementById('refresh').addEventListener('click',e=>{e.currentTarget.textContent='✓ Démo actualisée';setTimeout(()=>e.currentTarget.textContent='↻ Actualiser',1400)});
document.getElementById('menu').addEventListener('click',()=>document.querySelector('.topbar nav').classList.toggle('open'));
