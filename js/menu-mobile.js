import scrollSuave from "./scroll-suave.js";
export default function initMenuMobile() {
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('[data-menu="button"]');
    const menu = document.querySelector("#menu");
    const linksInterno = document.querySelectorAll(".menu li a");

    linksInterno.forEach((item) => {
      item.addEventListener("click", scrollSuave);
    });

    button.addEventListener("click", function () {
      this.classList.toggle("active");
      menu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
      let isClickInside =
        menu.contains(event.target) || button.contains(event.target);
      if (!isClickInside) {
        button.classList.remove("active");
        menu.classList.remove("active");
      }
    });
  });
}
