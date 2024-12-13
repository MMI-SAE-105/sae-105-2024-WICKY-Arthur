/*menu*/
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}

// *** LIGHTBOX ***
const lightbox = document.querySelector('#lightbox');
const listThumbnail = document.querySelectorAll("[data-full-img]");
const lightboxImg = document.querySelector('#lightbox > img');

listThumbnail.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    lightbox.classList.add('entrer');
    lightboxImg.src = thumbnail.dataset.fullImg;
    lightbox.showModal();
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.add('sortie');
  lightbox.addEventListener('animationend', () => {
    lightbox.classList.remove('sortie');
    lightbox.close();
  }, { once: true });
});

