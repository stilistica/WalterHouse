import Swiper from "swiper/bundle";
import { Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const swiperMain = document.querySelector(".swiper-main");

if (swiperMain) {
  document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".swiper-main", {
      direction: "horizontal",
      keyboard: { enabled: true, onlyInViewport: true },
      modules: [Pagination, Keyboard],
      slidesPerView: 1,
      resizeObserver: true,
      observer: true,
      observeParents: true,
      // slidesPerView: 0,
      loop: false,
      breakpoints: {
        0: {
          enabled: false,
        },
        1440: {
          enabled: true,
        },
      },
    });
    // swiper.update();
  });
}
