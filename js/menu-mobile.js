export default function initMenuMobile() {
  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector('[data-menu="button"]');
    var menu = document.querySelector("#menu");
    var img = document.querySelector('[data-menu="button"] img');

    menu.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        button.classList.remove("active");
        menu.classList.remove("active");
        img.setAttribute("src", "./img/menu-mobile.svg");
      }
    });

    button.addEventListener("click", function () {
      this.classList.toggle("active");
      menu.classList.toggle("active");

      if (menu.classList.contains("active")) {
        img.setAttribute("src", "./img/menu-x.svg");
      } else {
        img.setAttribute("src", "./img/menu-mobile.svg");
      }
    });

    document.addEventListener("click", function (event) {
      var isClickInside =
        menu.contains(event.target) || button.contains(event.target);
      if (!isClickInside) {
        button.classList.remove("active");
        menu.classList.remove("active");

        img.setAttribute("src", "./img/menu-mobile.svg");
      }
    });
  });
}
