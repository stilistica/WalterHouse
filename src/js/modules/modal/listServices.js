const btnOpenList = document.querySelectorAll(".styles__item-hover-btns-list");
const btnCloseList = document.querySelector(".list-modal__close");
const modalList = document.querySelector(".list-modal");
const titleList = modalList.querySelector(".list-modal__info-title");

if (btnOpenList) {
  btnOpenList.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      // const parentItem = btn.closest(".styles__item");
      // const title = parentItem.querySelector(".styles__item-title").textContent;

      modalList.classList.add("active");
      document.body.style.overflow = "hidden";

      titleList.textContent = ["elite", "vip", "extra"][index];

      // titleList.textContent = title;
    });
  });
}
if (btnCloseList) {
  btnCloseList.addEventListener("click", () => {
    modalList.classList.remove("active");
    document.body.style.overflow = "";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalList.classList.contains("active")) {
      modalList.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}
if (modalList) {
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1440 && modalList.classList.contains("active")) {
      modalList.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}
