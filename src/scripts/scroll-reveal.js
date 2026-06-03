function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  const threshold = 50;
  return (
    rect.top < window.innerHeight - threshold &&
    rect.bottom > threshold
  );
}

let scrollObserver = null;

function init() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document
      .querySelectorAll('.scroll-reveal, .stagger-children')
      .forEach((el) => {
        el.classList.add('revealed');
      });
    return;
  }

  if (scrollObserver) {
    scrollObserver.disconnect();
  }

  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          scrollObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0,
      rootMargin: '0px 0px 0px 0px',
    },
  );

  const elements = document.querySelectorAll('.scroll-reveal, .stagger-children');

  elements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add('revealed');
    } else {
      scrollObserver.observe(el);
    }
  });
}

init();
document.addEventListener('astro:after-swap', init);
