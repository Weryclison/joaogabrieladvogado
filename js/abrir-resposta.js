export default function perguntas() {
  const perguntaLista = document.querySelectorAll("dl dt");
  perguntaLista[0].classList.add("ativo");
  perguntaLista[0].nextElementSibling.classList.add("ativo");

  function esconder() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  perguntaLista.forEach((item) => {
    item.addEventListener("click", esconder);
  });
}
