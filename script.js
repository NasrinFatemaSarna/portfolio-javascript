// script.js

// Show skills tab toggle
function showSkills(type) {
  const frontend = document.getElementById("frontend");
  const backend = document.getElementById("backend");
  const btnFrontend = document.getElementById("btn-frontend");
  const btnBackend = document.getElementById("btn-backend");

  if (!frontend || !backend || !btnFrontend || !btnBackend) return;

  if (type === "frontend") {
    frontend.classList.remove("hidden");
    backend.classList.add("hidden");

    btnFrontend.classList.add("bg-[#58a6ff]");
    btnFrontend.classList.remove("bg-white/10");

    btnBackend.classList.add("bg-white/10");
    btnBackend.classList.remove("bg-[#58a6ff]");
  } else {
    backend.classList.remove("hidden");
    frontend.classList.add("hidden");

    btnBackend.classList.add("bg-[#58a6ff]");
    btnBackend.classList.remove("bg-white/10");

    btnFrontend.classList.add("bg-white/10");
    btnFrontend.classList.remove("bg-[#58a6ff]");
  }
}

// 3D tilt effect
function initTilt() {
  const cards = document.querySelectorAll(".skill-card");

  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8; // up-down
      const rotateY = ((x - centerX) / centerX) * 8; // left-right

      card.style.transform =
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });
}

// All DOM logic in one place
document.addEventListener("DOMContentLoaded", () => {
  // AOS animation initialize
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }

  const menuBtn = document.getElementById("menu-button");
  const closeBtn = document.getElementById("close-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll("#mobileNav .mobile-link");

  const openMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    document.body.classList.add("overflow-hidden");
  };

  const closeMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");
    document.body.classList.remove("overflow-hidden");
  };

  // Menu button events
  menuBtn && menuBtn.addEventListener("click", openMenu);
  closeBtn && closeBtn.addEventListener("click", closeMenu);

  // Close mobile menu when clicking any nav link
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Default state: show frontend skills
  showSkills("frontend");

  // Init 3D tilt
  initTilt();
});


 