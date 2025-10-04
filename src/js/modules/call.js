const btnOpenCall = document.querySelector(".header__call-button");
const btnCloseCall = document.querySelector(".call__close-button");
const call = document.querySelector(".call");

const btnFormCall = document.querySelector(".call__info-form button");

const formCall = document.querySelector(".call__info-form");
const respondCall = document.querySelector(".call__info-respond");

const btnBackCall = document.querySelector(".call__info-respond-back");

if (formCall && respondCall) {
  formCall.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = formCall.querySelectorAll("input");
    let valid = true;

    inputs.forEach((i) => {
      const div = i.closest(".call__info-form__input");
      const err = i.nextElementSibling;

      if (err) {
        err.remove();
      }

      if (!i.value.trim()) {
        i.classList.add("err");
        const msg = document.createElement("div");
        msg.classList.add("err-mess");
        msg.innerText = "Please fill out this field.";
        div.appendChild(msg);
        valid = false;
      } else {
        i.classList.remove("err");
      }
    });

    if (valid) {
      formCall.style.display = "none";
      respondCall.classList.add("active");
    }
  });
}

if (btnOpenCall && call) {
  btnOpenCall.addEventListener("click", () => {
    call.classList.add("active");
    document.body.style.overflow = "hidden";
  });
}

if (btnCloseCall) {
  btnCloseCall.addEventListener("click", () => {
    call.classList.remove("active");
    document.body.style.overflow = "";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && call.classList.contains("active")) {
      call.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

if (btnBackCall) {
  btnBackCall.addEventListener("click", () => {
    call.classList.remove("active");
    document.body.style.overflow = "";

    formCall.style.display = "";
    respondCall.classList.remove("active");
  });
}
