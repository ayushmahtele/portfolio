/* === CONFIG ===
   EmailJS keys (you gave these):
   Public key: m0plRSADgAyFeVLte
   Service ID: service_ldnz3he
   Template ID: template_hholibf
*/
(function(){
  if(window.emailjs) {
    emailjs.init("m0plRSADgAyFeVLte");
  } else {
    console.warn('EmailJS library not loaded');
  }
})();

/* NAV: smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

/* MOBILE MENU (simple) */
const mobileBtn = document.getElementById('mobileMenuBtn');
mobileBtn?.addEventListener('click', ()=> {
  const links = document.querySelector('.nav-links');
  links.style.display = (links.style.display === 'flex') ? 'none' : 'flex';
  links.style.flexDirection = 'column';
  links.style.background = 'rgba(0,0,0,0.4)';
  links.style.position = 'absolute';
  links.style.right = '20px';
  links.style.top = '67px';
  links.style.padding = '12px';
  links.style.borderRadius = '8px';
});

/* PROJECT CARD: open modal with details */
const projectModal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalLinks = document.getElementById('modalLinks');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.proj-view').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const card = e.target.closest('.project-card');
    const title = card.dataset.title || 'Project';
    const desc = card.dataset.desc || '';
    const links = card.dataset.links || '';
    modalTitle.textContent = title;
    modalDesc.textContent = desc;
    modalLinks.innerHTML = links ? links : '<small>No external links provided.</small>';
    projectModal.classList.remove('hidden');
  });
});
closeModal?.addEventListener('click', ()=> projectModal.classList.add('hidden'));
projectModal?.addEventListener('click', (e)=>{ if(e.target===projectModal) projectModal.classList.add('hidden') });

/* Hero image subtle parallax on scroll */
window.addEventListener('scroll', ()=>{
  const hero = document.querySelector('.hero');
  const photo = document.querySelector('.hero-photo');
  if(!hero || !photo) return;
  const scrolled = window.scrollY;
  // push the photo slightly up as user scrolls for depth
  photo.style.transform = `translateY(${scrolled * -0.06}px) scale(1.02)`;
});

/* CONTACT FORM SEND (EmailJS) */
const contactForm = document.getElementById('contactForm');
const statusEl = document.getElementById('status');

contactForm?.addEventListener('submit', function(e){
  e.preventDefault();
  statusEl.textContent = 'Sending...';
  const form = this;

  const payload = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value
  };

  emailjs.send("service_ldnz3he", "template_hholibf", payload)
    .then((resp)=>{
      statusEl.style.color = '#7bed9f';
      statusEl.textContent = 'Message sent successfully — I will reply soon.';
      form.reset();
    })
    .catch((err)=>{
      console.error('EmailJS error:', err);
      statusEl.style.color = '#ff8b8b';
      statusEl.textContent = 'Failed to send. Please try again later.';
    });
});

/* Set current year */
document.getElementById('year').textContent = new Date().getFullYear();
