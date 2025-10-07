import Swiper from "swiper/bundle";
import { Pagination, Keyboard, Mousewheel } from "swiper/modules";
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
        mousewheel: {
          forceToAxis: true, 
        },
        keyboard: { enabled: true, onlyInViewport: true },
        modules: [Pagination, Keyboard, Mousewheel],
        slidesPerView: 1,
        resizeObserver: true,
        observer: true,
        observeParents: true,
        loop: false,
        pagination: {
          el: ".swiper-pagination-main",
          clickable: true,
          renderBullet: function (index, className) {
            if (index >= 5) return "";
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
      });
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
