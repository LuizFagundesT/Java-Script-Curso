
//como declarar uma variavel tipo bolean
const camisetaLuizAzul = true;
const camisetaAmandaAzul = false;


// o % indica resto da divisão,então suponhamos que let numero =10, então fazemos nunero % 2, se tivermos o resto sera impar, caso nao indicará um numero par
const numero = 2;
const numeroPar = numero %2 === 0;
const numeropar = numero%2;
//se eu colocar uma proposição logica para ser adicionada a variavel, sera retornado true or false, caso coloque para retornar um valor, ira retornar um valor normalmente;

console.log(numeroPar);/* aqui vai printar true or false */
console.log(numeropar);/* aqui vai printar o resto da divisão em valor mesmo */


/*ATENÇÃO
se usarmos == , esse operador de igualdade atua realizando uma conversão inplicita:
vamos supor que eu copare um numero =0 com '0', '0' esta na forma de uma string e com isso essa comparação sempre deveria retornar FALSE. no entando o operador == converte esta string para o valor numeral e a compara !! O OPERADOR A SER USADO PARA QUE OS TIPOS SEJAM RESPEITADOS É O === */



