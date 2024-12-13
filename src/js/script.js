const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.ariaExpanded === "true";
      const isClosed = !isOpen;
      // Mise à jour des attributs ARIA pour accessibilité
      toggle.ariaExpanded = isClosed;
      nav.ariaHidden = isOpen;
      page.classList.toggle("noscroll", isClosed);
    });
  }

const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__item");
const scrollAmount = premierItem.clientWidth;


if (carousel) {
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });}