const funcAuxiliar = require ('./funções-auxiliares');
const notas =[1];


let notaAluno=  funcAuxiliar.gets(notas);



if(notaAluno<5){
    funcAuxiliar.printf('Aluno Reprovado')
} else if(notaAluno>=5 && notaAluno<7){
    funcAuxiliar.printf('Aluno em Recuperação')
}else{
    funcAuxiliar.printf('Aluno Aprovado')
}