document.addEventListener('DOMContentLoaded', () => {
  const filterContainer = document.querySelector('[data-projects-filters]');
  const grid = document.querySelector('[data-projects-grid]');
  if (!filterContainer || !grid) return;

  const cards = Array.from(grid.querySelectorAll('[data-project-card]'));
  const buttons = Array.from(filterContainer.querySelectorAll('button[data-filter]'));

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const apply = (filter) => {
    cards.forEach((card) => {
      const categories = (card.getAttribute('data-categories') || '')
        .split(' ')
        .filter(Boolean);
      const featured = card.getAttribute('data-featured') === 'true';
      const show =
        filter === 'all' ||
        categories.includes(filter) ||
        (filter !== 'all' && featured);
      if (reduceMotion) {
        card.classList.toggle('hidden', !show);
        return;
      }
      if (show) {
        card.classList.remove('hidden');
        requestAnimationFrame(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        });
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(8px)';
        const finish = () => card.classList.add('hidden');
        card.addEventListener('transitionend', finish, { once: true });
        setTimeout(finish, 220);
      }
    });

    buttons.forEach((btn) => {
      const active = btn.getAttribute('data-filter') === filter;
      btn.setAttribute('aria-pressed', String(active));
      btn.classList.toggle('bg-foreground', active);
      btn.classList.toggle('text-background', active);
      btn.classList.toggle('border-foreground', active);
      btn.classList.toggle('bg-card', !active);
      btn.classList.toggle('text-muted-foreground', !active);
      btn.classList.toggle('border-border', !active);
      btn.classList.toggle('hover:text-foreground', !active);
      btn.classList.toggle('hover:bg-muted/40', !active);
    });
  };

  filterContainer.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const btn = target.closest('button[data-filter]');
    if (!(btn instanceof HTMLElement)) return;
    const filter = btn.getAttribute('data-filter');
    if (!filter) return;
    apply(filter);
  });
});
