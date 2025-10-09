const styleItems = document.querySelectorAll(".styles__item");

if (styleItems) {
  styleItems.forEach((item) => {
    item.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      styleItems.forEach((i) => i.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });
}
