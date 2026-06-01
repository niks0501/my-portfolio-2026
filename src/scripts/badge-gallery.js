document.addEventListener('DOMContentLoaded', () => {
  const badges = [
    {
      src: '/images/badges/microsoft-office-specialist-excel-office-2016.png',
      name: 'Microsoft Office Specialist \u2014 Excel',
      category: 'Microsoft Office Specialist',
    },
    {
      src: '/images/badges/it-specialist-data-analytics.png',
      name: 'IT Specialist \u2014 Data Analytics',
      category: 'IT Specialist',
    },
    {
      src: '/images/badges/it-specialist-device-configuration-and-management.png',
      name: 'IT Specialist \u2014 Device Configuration and Management',
      category: 'IT Specialist',
    },
    {
      src: '/images/badges/it-specialist-databases.png',
      name: 'IT Specialist \u2014 Databases',
      category: 'IT Specialist',
    },
  ];

  let currentIndex = 0;
  const dialog = document.getElementById('badge-modal');
  const img = document.getElementById('modal-img');
  const title = document.getElementById('modal-title');
  const categoryEl = document.getElementById('modal-category');
  const counter = document.getElementById('modal-counter');
  const dots = document.getElementById('modal-dots');

  if (!dialog || !img) return;

  function buildDots() {
    dots.innerHTML = '';
    badges.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className =
        'w-2 h-2 rounded-full transition-colors ' +
        (i === currentIndex ? 'bg-primary' : 'bg-border');
      dots.appendChild(dot);
    });
  }

  function updateModal() {
    const badge = badges[currentIndex];
    img.src = badge.src;
    img.alt = badge.name;
    if (title) title.textContent = badge.name;
    if (categoryEl) categoryEl.textContent = badge.category;
    if (counter) counter.textContent = currentIndex + 1 + ' / ' + badges.length;
    const dotEls = dots.children;
    for (let i = 0; i < dotEls.length; i++) {
      dotEls[i].className =
        'w-2 h-2 rounded-full transition-colors ' +
        (i === currentIndex ? 'bg-primary' : 'bg-border');
    }
  }

  function show(index) {
    currentIndex = index;
    updateModal();
    dialog.showModal();
  }

  function navigate(dir) {
    currentIndex = (currentIndex + dir + badges.length) % badges.length;
    updateModal();
  }

  buildDots();

  document.querySelectorAll('[data-badge-index]').forEach((el) => {
    el.addEventListener('click', () => show(parseInt(el.dataset.badgeIndex)));
  });

  document.querySelectorAll('[data-nav-dir]').forEach((el) => {
    el.addEventListener('click', () => navigate(parseInt(el.dataset.navDir)));
  });

  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  dialog.addEventListener('click', (e) => {
    const rect = dialog.getBoundingClientRect();
    const isOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;
    if (isOutside) dialog.close();
  });
});
