
const btnAvancar = document.getElementById("btn-avancar");

const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;

const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {



  if (cartaoAtual === cartoes.length - 1) return;


  esconderCartaoselecionado();


  cartaoAtual++;
  mostarCartao();




});

btnVoltar.addEventListener("click", function () {
  if(cartaoAtual=== 0) return;
  
 esconderCartaoselecionado();


  cartaoAtual--;
  cartoes[cartaoAtual].classList.add("selecionado")


});

function mostarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoselecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}
