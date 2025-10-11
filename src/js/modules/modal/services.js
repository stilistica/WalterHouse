const servicesArr = [
  {
    title: "Video-surveillance and alarm",
    description:
      "Purchase, installation and setup of video surveillance, both open and hidden, for indoor and outdoor use. Help with registering the system on the security panel.",
  },
  {
    title: "Selection of furniture",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
  },
  {
    title: "Household appliances",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
  },
  {
    title: "Ultra service",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
  },
  {
    title: "Online broadcast of repair",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.",
  },
];

const itemsServices = document.querySelectorAll(".services__list-item");
const modalServices = document.querySelector(".services-modal");

const modalTitleServices = modalServices.querySelector(
  ".services-modal__info-title"
);
const modalDescServices = modalServices.querySelector(
  ".services-modal__info-desc"
);
const modalCloseServices = modalServices.querySelector(
  ".services-modal__close"
);
if (itemsServices && modalServices) {
  itemsServices.forEach((item, index) => {
    item.addEventListener("click", () => {
      modalTitleServices.textContent = servicesArr[index].title;
      modalDescServices.textContent = servicesArr[index].description;

      modalServices.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  if (modalCloseServices && modalServices) {
    modalCloseServices.addEventListener("click", () => {
      modalServices.classList.remove("active");
      document.body.style.overflow = "";
    });
  }
  window.addEventListener("resize", () => {
    if (modalServices.classList.contains("active")) {
      modalServices.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

const modalServicesDesk = document.querySelector(".modal-desk .services-modal");

const modalTitleServicesDesk = modalServicesDesk.querySelector(
  ".services-modal__info-title"
);
const modalDescServicesDesk = modalServicesDesk.querySelector(
  ".services-modal__info-desc"
);
const modalCloseServicesDesk = modalServicesDesk.querySelector(
  ".services-modal__close"
);

if (itemsServices && modalServicesDesk) {
  itemsServices.forEach((item, index) => {
    item.addEventListener("click", () => {
      modalTitleServicesDesk.textContent = servicesArr[index].title;
      modalDescServicesDesk.textContent = servicesArr[index].description;

      modalServicesDesk.classList.add("active");

      setTimeout(() => {
        modalServicesDesk.classList.remove("active");
      }, 60000);
    });
  });

  if (modalCloseServicesDesk && modalServicesDesk) {
    modalCloseServicesDesk.addEventListener("click", () => {
      modalServicesDesk.classList.remove("active");
    });
  }

  window.addEventListener("resize", () => {
    if (modalServices.classList.contains("active")) {
      modalServices.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}
