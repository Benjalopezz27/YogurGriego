document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    document.querySelectorAll('[data-reveal]').forEach(el => {
      el.classList.remove('opacity-0', 'translate-y-6');
      el.classList.add('opacity-100', 'translate-y-0');
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
      el.style.transitionDelay = `${delay}ms`;
      el.classList.add(
        'opacity-100',
        'translate-y-0',
        'transition-all',
        'duration-700',
        'ease-out'
      );
      el.classList.remove('opacity-0', 'translate-y-6');
      obs.unobserve(el);
    });
  }, {
    threshold: 0.15,
  });

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
});
