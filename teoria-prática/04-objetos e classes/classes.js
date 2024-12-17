/*

const luiz ={
    nome: 'Luiz Gustavo Fagundes Teixeira' ,//ATENÇÃO PARA ESTA VIRGULA NO FINAL DE CADA ATRIBUTO DO OBJETO 
    idade: 20,
    namorada: 'Amandinha',
};

//ESTE É O MEU OBJETO, PARA CRIAR MAIS DE UM OBJETO EU TERIA QUE REPETIR TODO ESSE CODIGO E ISSO TAMBEM SERIA ESTATICO A ESTRUTURA DE CRIAÇÃO DE VARIAVEIS USANDO CLASSE EU TENHO O QUE SE ASSEMELHA A UMA STRUCT EM C 

 */
//ISTO é UMA CLASSE
class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  //a ideia de um construtor é que sempre que eu criar uma instancia da minha classe eu terei de passar alguns parametros para ela visando que o meu construtur ira agir ! 

  constructor(nome,idade){
    this.nome/**nome usado na classe */ = nome/**nome usado no construtor  */;
    this.idade = idade;
    this.anoDeNascimento = 2024-idade;


  }

  descrever() /*observe que eu não precisei escrever function para declara um novo metodo */ {
    console.log("Meu nome é " + this.nome + "e minha idade é " + this.idade);
  }
}

//ISTO É UMA INSTANCIA DE UMA CLASSE, NO CASSO É A OCORRENCIA DA CLASSE NO CASO
const luiz = new Pessoa('Luiz', 20);//neste momento temos que passar os parametros na chamada da classe para que o constrututor atue
const amanda = new Pessoa('Amanda', 20);
/*
//SEM O CONSTRUTOR
luiz.nome = "Luiz Gustavo Fagundes Teixeira";
amanda.nome = "Amanda gomes";

luiz.idade = 20;
amanda.idade = 18;
*/
luiz.descrever();
amanda.descrever();


//façamos uma função que compara a idade das pessoas 

function comapraIdade(p1,p2){
    if(p1.idade>p2.idade){
        console.log(`${p1.nome} é mais valho(a) que ${p2.nome}`);
    }else if(p2.idade>p1.idade){
        console.log(`${p2.nome} é mais valho(a) que ${p1.nome}`);
    }else {
        console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`);
    }
}


//chamando a função 

comapraIdade(luiz,amanda);