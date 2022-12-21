// Menu ativo. Faz com que o menu fique com o sublinhado branco embaixo do nome quando estivermos na página (foi adicionada a class "ativo" no header-menu //

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

//ativar ítens do orçamento //

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas Frequentes //

const perguntas = document.querySelectorAll(".perguntas button");

function eventosPerguntas(pergunta) {
  console.log(pergunta);
}

perguntas.forEach(eventosPerguntas);

console.log(perguntas);
