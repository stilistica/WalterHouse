import Swiper from "swiper/bundle";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiperMain = document.querySelector(".swiper-main");

if (swiperMain) {
  document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".swiper-main", {
      direction: "vertical",
      effect: "fade",
      keyboard: { enabled: true, onlyInViewport: true },
      modules: [Pagination, Keyboard],
      slidesPerView: 1,
      resizeObserver: true,
      observer: true,
      observeParents: true,
      loop: false,
      breakpoints: {
        0: {
          enabled: false,
        },
        1440: {
          enabled: true,
          pagination: {
            // dynamicBullets: true,
            el: ".swiper-pagination-main",
            clickable: true,
            renderBullet: function (index, className) {
              // if (index >= 5) return "";
              return ` 
              <div class="${className}">
              <svg class="pagination-icon default">
                <use href="img/sprite.svg#icon-swiper-dot"></use>
              </svg>
              <svg class="pagination-icon active">
                <use href="img/sprite.svg#icon-swiper-dot-active"></use>
              </svg>
              </div>`;
            },
          },
        },
      },
    });
  });
}
