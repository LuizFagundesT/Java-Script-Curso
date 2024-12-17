// a diferença entre funções e  procedimentos é que em uma fução eu tenho o retorno de valores, ja em procedimentos eu não possuo retornos

//procedimento

function mostranome(
  nome /*criando um parametro nome a ser passado como se fosse um int char name[100] */
) {
  console.log("o nome é " + nome);
}

//chamando função
mostranome("luiz");
mostranome("amanda");

//realizando uma função

function quadradoNum(valor) {
  return valor * valor;
}

const result = quadradoNum(2);
console.log(result);
console.log(quadradoNum(4));
