const btnForm = document.querySelector(".form button");

if (btnForm) {
  btnForm.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.querySelector(".form");
    const inputs = form.querySelectorAll("input");

    inputs.forEach((i) => {
      const div = i.closest(".form__input");
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
      } else {
        i.classList.remove("err");
      }
    });
  });
}

