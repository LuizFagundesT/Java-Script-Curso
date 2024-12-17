//neste exercício deveremos receber uma sequencia de numeros e comisso decidir dentre eles o maior par e o menor par
const funcAuxiliar = require ('./funções-auxiliares');

const numeros= [6,5,9,3,8];

let maiorPar = 0;
let menorImpar = 0; 

for( let i= 0; i < numeros.length; i++ ){
    let valorAnalisado = funcAuxiliar.gets(numeros);
    
    if (valorAnalisado%2===0){
        if(valorAnalisado > maiorPar){
            maiorPar = valorAnalisado;
        }
    }else{
        menorImpar = valorAnalisado;
        if(valorAnalisado < menorImpar){
            menorImpar = valorAnalisado;
        }
    }
    
    
    
}

funcAuxiliar.printf(`O maior valor par é ${maiorPar} e o menor valor impar é ${menorImpar}`);