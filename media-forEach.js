const notas = [10, 6.5, 8, 7.5];

let somaDasnotas = 0;

notas.forEach( function(nota){
    somaDasnotas += nota;
});

const media = somaDasnotas / notas.length;

console.log(`a média das notas é ${media}.`);
