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

//ativar ítens do orçamento. Foi feito dentro da página de seguro  das bicicletas para que cada vez que clicar em uma opção de orçamento já abrir a página com a escolha que foi feita via URL  //

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas Frequentes. Foram incluídos em todas as perguntas a acção de clicar para abrir ou fechar a caixinha de pergunta e resposta//

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas. Foi criado um evento de clique para que sempre que escolher uma foto, ela se torne a principal entre as 3 do site. Pensando no mediaquery colocamos um filtro determinado para que só ocorra isso quando tiver uma foto principal efetivamente //

const galeria = document.querySelectorAll(".imagens-bicicletas img");
const galeriaContainer = document.querySelector(".imagens-bicicletas");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 950px)").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//animação//
if (window.SimpleAnime) {
  new SimpleAnime();
}
