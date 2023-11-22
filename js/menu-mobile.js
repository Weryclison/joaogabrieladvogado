export default function initMenuMobile() {
  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector('[data-menu="button"]');
    var menu = document.querySelector("#menu");
    var linksInterno = document.querySelectorAll(".menu li a");

    function scrolar(i) {
      i.preventDefault();
      const href = i.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      button.classList.remove("active");
      menu.classList.remove("active");
    }

    linksInterno.forEach((item) => {
      item.addEventListener("click", scrolar);
    });

    button.addEventListener("click", function () {
      this.classList.toggle("active");
      menu.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
      var isClickInside =
        menu.contains(event.target) || button.contains(event.target);
      if (!isClickInside) {
        button.classList.remove("active");
        menu.classList.remove("active");
      }
    });
  });
}
