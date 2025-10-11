const sizeArr = [
  {
    title: "elite",
    description:
      "The price of the ELITE style includes the entire basic set of works necessary for an excellent renovation.",
  },
  {
    title: "vip",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
  },
  {
    title: "extra",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
  },
];

const openModalSize = document.querySelectorAll(
  ".size__info-variant-btns button p"
);
const modalSize = document.querySelector(".size-modal");

const modalTitleSize = modalSize.querySelector(".size-modal__info-title span");
const modalDescSize = modalSize.querySelector(".size-modal__info-desc p");
const modalCloseSize = modalSize.querySelector(".services-modal__close");

if (openModalSize) {
  openModalSize.forEach((item, index) => {
    item.addEventListener("click", () => {
      modalTitleSize.textContent = sizeArr[index].title;
      modalDescSize.textContent = sizeArr[index].description;

      modalSize.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });
}
if (modalCloseSize && modalSize) {
  modalCloseSize.addEventListener("click", () => {
    modalSize.classList.remove("active");
    document.body.style.overflow = "";
  });
}
if (modalSize) {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 1439 && modalSize.classList.contains("active")) {
      modalSize.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}
