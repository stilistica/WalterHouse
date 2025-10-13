const btnsSize = document.querySelectorAll(
  ".size__info-variant-btns button"
);
const hoverSize = document.querySelectorAll(
  ".size__info-variant-hover hr, .size__info-variant-hover svg"
);
const priceSize = document.querySelector(".size__info-price p");

const typesArrSize = [
  {
    name: "elite",
    price: "233 000",
  },
  {
    name: "vip",
    price: "210 000",
  },
  {
    name: "extra",
    price: "253 000",
  },
];

if (btnsSize && hoverSize) {
  btnsSize[0].classList.add("active");
  document
    .querySelectorAll(".size__info-variant-hover-elite")
    .forEach((el) => el.classList.add("active"));
  priceSize.textContent = typesArrSize[0].price;

  btnsSize.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      btnsSize.forEach((el) => el.classList.remove("active"));
      hoverSize.forEach((el) => el.classList.remove("active"));

      btn.classList.add("active");
      document
        .querySelectorAll(".size__info-variant-hover-" + typesArrSize[i].name)
        .forEach((el) => el.classList.add("active"));
      priceSize.textContent = typesArrSize[i].price;
    });
  });
}
