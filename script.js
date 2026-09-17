// ================================
// Mobile Navigation
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


// ================================
// Current Year
// ================================

document.getElementById("year").textContent = new Date().getFullYear();


// ================================
// Header background on scroll
// ================================

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(40, 22, 13, .92)";
    header.style.backdropFilter = "blur(12px)";
  } else {
    header.style.background = "transparent";
    header.style.backdropFilter = "none";
  }
});


// ================================
// Simple reveal animation
// ================================

const revealElements = document.querySelectorAll(
  ".feature-card, .resource-item, .section-content, .resource-intro, .contact-grid"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});


// ================================
// Inject animation styles
// ================================

const animationStyles = document.createElement("style");

animationStyles.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(25px);
    transition:
      opacity .7s ease,
      transform .7s ease;
  }

  .reveal.revealed {
    opacity: 1;
    transform: translateY(0);
  }

  .feature-card:nth-child(2) {
    transition-delay: .08s;
  }

  .feature-card:nth-child(3) {
    transition-delay: .16s;
  }
`;

document.head.appendChild(animationStyles);
