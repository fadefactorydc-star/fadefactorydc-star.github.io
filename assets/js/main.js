// FADE FACTORY — Cinematic Motion + Mobile Nav + Year

document.addEventListener("DOMContentLoaded", function () {

  // Auto year in footer
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const toggle = document.querySelector(".navToggle");
  const mobileMenu = document.querySelector(".navMobile");

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", function () {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", !isOpen);
      mobileMenu.style.display = isOpen ? "none" : "block";
    });
  }

  // Subtle gear parallax movement (cinematic feel)
  const gearLayer = document.querySelector(".gear-layer");

  if (gearLayer) {
    window.addEventListener("mousemove", function (e) {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;

      gearLayer.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

});
