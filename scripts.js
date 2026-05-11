window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.borderColor = 'rgba(255,255,255,0.12)';
  } else {
    nav.style.borderColor = 'rgba(255,255,255,0.07)';
  }
});
document
  .querySelectorAll('.btn-primary, .nav-cta')
  .forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = '/cadastro';
    });
  });
  document
  .querySelectorAll('.feat-card')
  .forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
  });
  const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);
