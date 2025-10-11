const btnOpenSteps = document.querySelector(".steps__info-variant-title");
const btnCloseSteps = document.querySelector(".modal-steps__back");
const modalSteps = document.querySelector(".modal-steps");

if (btnOpenSteps) {
  btnOpenSteps.addEventListener("click", () => {
    modalSteps.classList.add("active");
    document.body.style.overflow = "hidden";
  });
}
if (btnCloseSteps) {
  btnCloseSteps.addEventListener("click", () => {
    modalSteps.classList.remove("active");
    document.body.style.overflow = "";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalSteps.classList.contains("active")) {
      modalSteps.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}
if (modalSteps) {
	window.addEventListener("resize", () => {
		if (window.innerWidth < 1440 && modalSteps.classList.contains('active')) {
			modalSteps.classList.remove("active");
			document.body.style.overflow = "";
		}
	})
}