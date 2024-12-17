const consumoCarro = 12.0;
const distanciaViagem = 100.0;
const gastoCombustivel = distanciaViagem/consumoCarro;
let gastoTotalDinheiro ;
const tipoCombustivel ='gas';/*gasolina ou gas */

if(tipoCombustivel==='etanol'){
    gastoTotalDinheiro = 2.73 * gastoCombustivel;
    console.log(`O valor a ser pago é ${gastoTotalDinheiro}`)
}else if(tipoCombustivel==='gasolina'){
    gastoTotalDinheiro = 5.99 * gastoCombustivel;
    console.log(`O valor a ser pago é ${gastoTotalDinheiro}`)

}else if(tipoCombustivel==='gas'){
    gastoTotalDinheiro = 2.99 * gastoCombustivel;
    console.log(`O valor a ser pago é ${gastoTotalDinheiro}`)

}


