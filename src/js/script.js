/*menu*/
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

/*carousel*/
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
  });
}

/*lightbox*/
const lightbox = document.querySelector('#lightbox');
const listThumbnail = document.querySelectorAll("[data-full-img]");
const lightboxImg = document.querySelector('#lightbox > img');

listThumbnail.forEach((thumbnail) => {
  thumbnail.addEventListener('click', (evt) => {
    lightbox.classList.add('entrer');
    lightboxImg.src = thumbnail.dataset.fullImg;
    lightbox.showModal();

  })
});

lightbox.addEventListener('click', () => {
  lightbox.classList.add('sortie');
  lightbox.addEventListener('animationend', () => {
    lightbox.classList.remove('sortie');
    lightbox.close();
  }, { once: true });
});



