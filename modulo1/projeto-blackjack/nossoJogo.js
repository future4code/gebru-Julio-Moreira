// Constantes do Jogo

const listaDeNumeros = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];
const listaDeNaipes = [ "♦️", "♥️", "♣️", "♠️" ];
let jogador = [];
let computador = [];

// Funções do Jogo

function compraCarta() {
  const indiceAleatorioNumero = Math.floor(Math.random() * (listaDeNumeros.length - 1));
  const indiceAleatorioNaipe = Math.floor(Math.random() * (listaDeNaipes.length - 1));
  const cartaAleatoria = {
    numero: listaDeNumeros[indiceAleatorioNumero],
    naipe: listaDeNaipes[indiceAleatorioNaipe],
    pontuacao: geraValorPorNumero(listaDeNumeros[indiceAleatorioNumero])
  };
  return cartaAleatoria;
}

function geraValorPorNumero(numero) {
  if (numero === "A") {
	  return 11;
  } else if (numero === "J" || numero === "Q" || numero === "K") {
  	return 10;
  } else {
  	return parseInt(numero);
  }
} 

function jogadoresRecebemCartas() {
	jogador.push(compraCarta());
  jogador.push(compraCarta());
  computador.push(compraCarta());
  computador.push(compraCarta());
}

function geraPontuacaoPorParticipante(participante) {
	const pontuacao1 = participante[0].pontuacao;
  const pontuacao2 = participante[1].pontuacao;
  return pontuacao1 + pontuacao2;
}

function iniciaRodada() {
  jogador = [];
  computador = [];
  jogadoresRecebemCartas();
  const pontuacaoJogador = geraPontuacaoPorParticipante(jogador);
  const pontuacaoComputador = geraPontuacaoPorParticipante(computador);
  console.log("Jogador: ", jogador[0], jogador[1]);
  console.log("Computador: ", computador[0], computador[1]);
  if (pontuacaoJogador > pontuacaoComputador) {
    alert("Você ganhou!");
  } else if (pontuacaoComputador > pontuacaoJogador) {
    alert("Computador ganhou!");
  } else {
    alert("Vocês empataram!");
  }
}

// Execussão das Funções do Jogo

alert("Boas vindas ao jogo Blackjack!")
const resposta = confirm("Quer iniciar uma nova rodada?");
if (resposta === true) {
  iniciaRodada();
} else {
  alert("O jogo acabou!");
}