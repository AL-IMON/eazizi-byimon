// Mobile nav toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Scroll-triggered reveal animations (cards, text blocks, service lists)
const revealEls = document.querySelectorAll('.reveal, .service-list');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// Header background state + scroll progress bar
const header = document.querySelector('header');
const progress = document.getElementById('progress');

function onScroll() {
  const y = window.scrollY || document.documentElement.scrollTop;
  header.classList.toggle('scrolled', y > 40);

  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
  if (progress) progress.style.width = pct + '%';

  const toTop = document.getElementById('toTop');
  if (toTop) toTop.classList.toggle('show', y > 600);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Back to top button
const toTopBtn = document.getElementById('toTop');
if (toTopBtn) {
  toTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// Contact form (front-end only placeholder)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    this.reset();
    const note = document.getElementById('formNote');
    if (note) note.style.display = 'block';
  });
}
