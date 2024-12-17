//FUNÇÕES DENTRO DE UM OBJETO SÃO CHAMADOS DE METODOS

//criando um objeto

const pessoa = {
  nome: "amanda gomes lacerda",
  idade: 18,

  //agora vou criar um metodo ou melhor uma função que descreve a pessoa
  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    //o elemento this é um elemento isolado que serve para nos refereirmos a elementos de um objeto dentro de um metodo a ser usado, ao inves de escrevermos pessoa.nome fazemos this.nome
  },
};

pessoa.descrever();

pessoa.nome = "Luiz";
pessoa.idade = 20;

pessoa.descrever();

//acessando uma instancia de modo dinamico

let atributo='nome';

console.log(pessoa[atributo]);

pessoa.nome='amandinha '
console.log(pessoa[atributo]);

//mudando atributo 
atributo='idade';

console.log(pessoa[atributo]);//neste caso vai imprimir a idade
