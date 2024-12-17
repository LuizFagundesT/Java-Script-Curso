

//criando um objeto e utilizando a sintaxe
//imaginemos um objeto luiz e digamos seus detalhes
const luiz ={
    nome: 'Luiz Gustavo Fagundes Teixeira' ,//ATENÇÃO PARA ESTA VIRGULA NO FINAL DE CADA ATRIBUTO DO OBJETO 
    idade: 20,
    namorada: 'Amandinha',
};





console.log(luiz.nome);
console.log(luiz.idade);
console.log(luiz.namorada);
console.log(luiz);
//ALEM DE CRIAR O OBJETO LITERAL PODEMOS TAMBEM CRIA INCREMENTOS AO PROPIO OBJETO

luiz.altura = 1.70;

console.log(luiz.altura);
//o delete siginifica que posso tambem excluir um determinado dado que foi atribuido ao objeto
delete luiz.nome;