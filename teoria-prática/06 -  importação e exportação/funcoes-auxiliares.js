/*
ANOTAÇÕES

deste modo eu crio funções aqui neste arquivo visando a organização doo meu código, posso criar inumerar funções auxiliares para todos os meus arquivos java script
*/


//base de dados para exercicio
const numerosAleatorios = [5,235,10,98,23];
let posicao = 0;
//minha função gets recebe ums tring com numero aleatorios e printa eles, no caso imitando que eça puxa isso de um banco de dados  
function gets() {
  let valor = numerosAleatorios[posicao];
  posicao ++;
  return valor;
}

function printf(texto) {
  console.log(texto);
}

//neste momento o as funções que estão dentro deste arquivo precisão ser EXPORTADAS e para isso poderem ser utilizads em outros arquivos, para ajudar na programação.

//para isso vamos exportar a função de modo que sejam um objeto

module.exports = {
  gets: gets,
  printf :printf
};
