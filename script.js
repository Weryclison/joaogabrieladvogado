const body = document.body;
body.classList.add("js");

import scrollSuave from "./js/scroll-suave.js";
import perguntas from "./js/abrir-resposta.js";

if (body.classList.contains("js")) {
  scrollSuave();
  perguntas();
}
