const btnOpenAbout = document.querySelector(".main-about__btn");
const btnCloseAbout = document.querySelector(".modal-about__back");
const modalAbout = document.querySelector(".modal-about");

if (btnOpenAbout) {
  btnOpenAbout.addEventListener("click", () => {
    modalAbout.classList.add("active");
    document.body.style.overflow = "hidden";
  });
}
if (btnCloseAbout) {
  btnCloseAbout.addEventListener("click", () => {
    modalAbout.classList.remove("active");
    document.body.style.overflow = "";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalAbout.classList.contains("active")) {
      modalAbout.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}
if (modalAbout) {
	window.addEventListener("resize", () => {
		if (window.innerWidth < 1440 && modalAbout.classList.contains('active')) {
			modalAbout.classList.remove("active");
			document.body.style.overflow = "";
		}
	})
}