const itemsInfo = document.querySelectorAll(".gallery-swiper .point-mob");
const modalInfo = document.querySelector(".info-modal");
const modalCloseInfo = modalInfo.querySelector(".info-modal__close");

if (itemsInfo && modalInfo) {
  itemsInfo.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        modalInfo.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  if (modalCloseInfo && modalInfo) {
    modalCloseInfo.addEventListener("click", () => {
      modalInfo.classList.remove("active");
      document.body.style.overflow = "";
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalInfo.classList.contains("active")) {
        modalInfo.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
  if (modalInfo) {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768 && modalInfo.classList.contains("active")) {
        modalInfo.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }
}
