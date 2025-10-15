import Swiper from "swiper/bundle";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiperMain = document.querySelector(".swiper-main");

if (swiperMain) {
  let swiperMain;
  function initSwiperMain() {
    if (window.innerWidth >= 1440 && !swiperMain) {
      swiperMain = new Swiper(".swiper-main", {
        direction: "vertical",
        effect: "fade",
        keyboard: { enabled: true, onlyInViewport: true },
        modules: [Pagination, Keyboard],
        slidesPerView: 1,
        resizeObserver: true,
        observer: true,
        observeParents: true,
        loop: false,
        navigation: {
          nextEl: ".swiper-button-next-main",
          prevEl: ".swiper-button-prev-main",
        },
        pagination: {
          el: ".swiper-pagination-main",
          clickable: true,
          renderBullet: function (index, className) {
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
        on: {
          init: function () {
            toggleNavButtons(this);
          },
          slideChange: function () {
            toggleNavButtons(this);
          },
        },
      });

      function toggleNavButtons(swiper) {
        const prevBtn = document.querySelector(".swiper-button-prev-main");
        const nextBtn = document.querySelector(".swiper-button-next-main");

        // якщо це перший слайд — ховаємо prev
        if (swiper.activeIndex === 0) {
          prevBtn.style.opacity = "0";
          prevBtn.style.pointerEvents = "none";
        } else {
          prevBtn.style.opacity = "1";
          prevBtn.style.pointerEvents = "auto";
        }

        // якщо це останній слайд — ховаємо next
        if (swiper.activeIndex === swiper.slides.length - 1) {
          nextBtn.style.opacity = "0";
          nextBtn.style.pointerEvents = "none";
        } else {
          nextBtn.style.opacity = "1";
          nextBtn.style.pointerEvents = "auto";
        }
      }
    } else if (window.innerWidth < 1440 && swiperMain) {
      swiperMain.destroy(true, true);
      swiperMain = null;
    }
  }
  document.addEventListener("DOMContentLoaded", initSwiperMain);

  window.addEventListener("resize", () => {
    initSwiperMain();
  });
}
