//se

const numero = 0;
const numeroPar = (numero%2)===0;

/* 

if(numeroPar)se eu não colocar nada para comparar a lógica boleana o if sempre vai executar se for verdade{
    console.log('Número é par');
}else{
    console.log('Número é impar');
}
*/


//para negar um if eu faço com que a condição seja negativa ! 

/*
if( !numeroPar ){
}
o operador ! nega o numero ser par, e se esta negação for verdadeira significar que o if será executado 
*/

//////////////////////////////////////////////////////////////////
//fazendo a logica com if e else

if(numeroPar){
    console.log('NUMERO É PAR');

}else if(!numeroPar){
    console.log('NUMERO É IMPAR');
}else {
    console.log('não é nem par nem impar kkkkk');
}