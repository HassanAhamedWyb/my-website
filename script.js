// Navbar mobile toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ===== Smooth Scroll Highlight + Section Reveal =====
const sections = document.querySelectorAll('[data-section]');
const navItems = document.querySelectorAll('.nav-link');

// Intersection Observer for fade-in animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Highlight active navbar link
        const id = entry.target.getAttribute('id');
        navItems.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

// Observe each section
sections.forEach((section) => observer.observe(section));

// ===== Close menu on link click (mobile) =====
navItems.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
  // === Mobile Menu Toggle ===
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

});
