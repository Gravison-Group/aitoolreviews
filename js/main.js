// AI Tool Reviews - Main JS
// Mobile nav toggle
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
}

// FAQ accordion
document.querySelectorAll('.faq-item__q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const wasOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// Active nav link
const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
document.querySelectorAll('.nav__links a').forEach(link => {
  const linkPath = new URL(link.href, window.location).pathname.replace(/\/$/, '') || '/';
  if (linkPath === currentPath) link.classList.add('active');
});

// ===== Scroll-Spy: Sticky TOC Active Link Highlighting =====
(function() {
  const tocLinks = document.querySelectorAll('.article-toc-list a');
  if (!tocLinks.length) return;

  const headings = [];
  tocLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      const heading = document.getElementById(href.slice(1));
      if (heading) headings.push({ link, heading });
    }
  });

  if (!headings.length) return;

  function updateActiveToc() {
    const scrollY = window.scrollY;
    let current = headings[0];

    for (const item of headings) {
      const top = item.heading.getBoundingClientRect().top + window.scrollY;
      if (scrollY >= top - 120) {
        current = item;
      }
    }

    tocLinks.forEach(link => link.classList.remove('active'));
    current.link.classList.add('active');
  }

  // Set initial active state
  updateActiveToc();

  // Throttled scroll listener
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveToc();
        ticking = false;
      });
      ticking = true;
    }
  });
})();
