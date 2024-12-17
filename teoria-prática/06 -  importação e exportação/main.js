
//vamos requisitar nossas funções auxiliares lembrando que nos iremos receber um objeto onde suas instancias são denominadas as funções !
const funcoes= require('./funcoes-auxiliares');

//vou popular este array com a função gets
const numerosAleatorios = [];


//VALE DIZER QUE A FUNÇÃO GETS ELA NÃO SO MOSTRA VALORES NO POMPT MAS TAMBEM POSSO USAR ESTES VALORES PARA FAZER MANIPULAÇÕES
for (let i = 0; i < 5; i++) {
    let valorEncontrado = funcoes.gets();
    numerosAleatorios.push(valorEncontrado);
}

//fazendo a logica do meu numero sorteado ver qual é o maior
let maiorValor = 0;
for (let i = 0; i < numerosAleatorios.length; i++) {
    
    if(numerosAleatorios[i]>maiorValor){
        maiorValor = numerosAleatorios[i];
    }
    
}

funcoes.printf(`O maior valor encntrado no sorteio foi ${maiorValor}`);
