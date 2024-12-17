
//FUNÇÕES AUXILIARES 

//minha função gets ela recebe um nome de um array e com isso lê os valores presentes nele de modo unitário, toda vez que é invocada le a posição atual 0 e na segunda vez a proxima posição. é necessario que para ela leia todos os valores, esteja dentro de um laço de repetição
let i = 0;
function gets(nomeDoArray){
    let valor = nomeDoArray[i];
    i++;
    return valor;
}
//minha função somente recebe um texto e printa ele no console;
function printf(texto){
    console.log(texto);
}

//neste bloco estou exportando em forma de objeto todas as minhas funções, não necessariamente preciso exportar todas mas sim as que declarar como isntâncias do meu objeto;
module.exports = {
    gets: gets,
    printf: printf
}