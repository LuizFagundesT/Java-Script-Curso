/*DIGAMOS QUE AS OPÇÕES SÃO 
1- DEBITO,RECEBE 10% DE DESCONTO 
2- A VISTA RECEBE 15% DE DESCONTO
3- PARCELADO EM DUAS VEZES É O PREÇO NORMAL DA ETIQUETA 
4- PREÇO DA ETIQUETA MAIS 10% DE JUROS 

*/

//funções

function calculaDesconto(preçoProduto, desconto ) {
  let valorFinal;
  return valorFinal = preçoProduto - (preçoProduto * (desconto/100));
}

function calculaJuros(precoEtiqueta, juros) {
  return precoEtiqueta = precoEtiqueta +(precoEtiqueta*(juros/100))
}

const op = 4;
let precoEtiqueta = 100;
//dez por cento de desconto
if (op === 1) {
  console.log(calculaDesconto(precoEtiqueta, 10));
}//quize por cento de desconto
if (op === 2) {
  console.log(calculaDesconto(precoEtiqueta, 15));
}//nada de desconto
if (op === 3) {
  console.log(calculaDesconto(precoEtiqueta, 0));
}//juros de 10% 
if(op===4) {
    console.log(calculaJuros(precoEtiqueta,10));
}
