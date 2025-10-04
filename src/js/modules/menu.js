const btnMenu = document.querySelector(".header__menu");
const menu = document.querySelector(".menu");

if (btnMenu && menu) {
  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    document.querySelectorAll(".menu__nav-item").forEach((e) => {
      e.addEventListener("click", () => {
        menu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("active")) {
      menu.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}
