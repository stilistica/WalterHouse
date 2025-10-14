import Swiper from "swiper/bundle";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiperGalleryVip = document.querySelector(".swiper-gallery-vip");

let swiperVip;

if (swiperGalleryVip) {
  function initSwiperVip() {
    swiperVip = new Swiper(".swiper-gallery-vip", {
      direction: "horizontal",
      keyboard: { enabled: true, onlyInViewport: true },
      modules: [Pagination, Keyboard],
      slidesPerView: 1,
      resizeObserver: true,
      observer: true,
      observeParents: true,
      loop: false,
      navigation: {
        nextEl: ".swiper-button-next-vip",
        prevEl: ".swiper-button-prev-vip",
      },
      on: {
        init: function () {
          const totalEl = document.querySelector(".total-vip");
          const currentEl = document.querySelector(".current-vip");

          totalEl.textContent = this.slides.length.toString().padStart(2, "0");
          currentEl.textContent = "01";
        },
        slideChange: function () {
          const currentEl = document.querySelector(".current-vip");
          currentEl.textContent = (this.activeIndex + 1)
            .toString()
            .padStart(2, "0");
        },
      },
    });
  }
  document.addEventListener("DOMContentLoaded", initSwiperVip);

  window.addEventListener("resize", () => {
    initSwiperVip();
  });
}

const imagesGallery = [
  { src: "img/page-3/elite.webp", alt: "elite" },
  { src: "img/page-3/vip.webp", alt: "vip" },
  { src: "img/page-3/extra.webp", alt: "extra" },
];

const opanVip = document.querySelectorAll(".styles__item-hover-btns-gall");
const modalVip = document.querySelector(".gallery-vip");
const closeVip = document.querySelector(".gallery-vip__close");

const imgGallery = modalVip.querySelector(".gallery-slide-1 img");

if (opanVip && modalVip) {
  opanVip.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      modalVip.classList.add("active");
      document.body.style.overflow = "hidden";

      imgGallery.src = imagesGallery[index].src;
      imgGallery.alt = imagesGallery[index].alt;
    });
  });

  if (closeVip && modalVip) {
    closeVip.addEventListener("click", () => {
      modalVip.classList.remove("active");
      document.body.style.overflow = "";

      if (swiperVip) {
        swiperVip.slideTo(0, 0);
        swiperVip.update();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalVip.classList.contains("active")) {
        modalVip.classList.remove("active");
        document.body.style.overflow = "";

        if (swiperVip) {
          swiperVip.slideTo(0, 0);
          swiperVip.update();
        }
      }
    });
  }
}
