//declarando variáveis
const precocombustivel = 4.99;
const consumoCarro = 10;
let distanciaViagem = 100.0;/*em km de distância */

let gastoGasolina = distanciaViagem/consumoCarro;
let gasto = gastoGasolina*precocombustivel;
console.log('o gasto é:');
console.log(gasto);