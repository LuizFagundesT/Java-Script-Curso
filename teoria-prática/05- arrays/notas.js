const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

//iniciando variavel de soma para media
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];

  //somando todos os valores
  soma = soma + nota;
}

//calculando a media
const media = soma / notas.length;
console.log(media);
