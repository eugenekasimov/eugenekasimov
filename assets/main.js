document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const openBtn = document.querySelector("[data-nav-open]");
  const closeBtn = document.querySelector("[data-nav-close]");
  const overlay = document.querySelector(".mobile-menu-overlay");
  const panel = document.querySelector(".mobile-menu-panel");
  const links = document.querySelectorAll(".mobile-menu-link");
  const yearSpan = document.querySelector("[data-year]");

  function updateNavbarOnScroll() {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add("navbar--scrolled");
    } else {
      navbar.classList.remove("navbar--scrolled");
    }
  }

  function openMobileMenu() {
    if (!overlay || !panel) return;
    overlay.classList.add("is-open");
    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
  }

  function closeMobileMenu() {
    if (!overlay || !panel) return;
    overlay.classList.remove("is-open");
    panel.classList.remove("is-open");
    panel.setAttribute("aria-hidden", "true");
  }

  if (navbar) {
    window.addEventListener("scroll", updateNavbarOnScroll, { passive: true });
    updateNavbarOnScroll();
  }

  if (openBtn) {
    openBtn.addEventListener("click", function (event) {
      event.preventDefault();
      openMobileMenu();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function (event) {
      event.preventDefault();
      closeMobileMenu();
    });
  }

  if (overlay) {
    overlay.addEventListener("click", closeMobileMenu);
  }

  if (links && links.length) {
    links.forEach(function (link) {
      link.addEventListener("click", closeMobileMenu);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }
});

