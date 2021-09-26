let pessoas = [
    
    {
        altura: 1.82,
        sexo: 'M',
        opnion: 3,
        idade: 18
    },
    
    {
        altura: 1.69,
        sexo: 'M',
        opnion: 2,
        idade: 44
    },

    {
        altura: 1.57,
        sexo: 'F',
        opnion: 3,
        idade: 22
    },

    {
        altura: 1.69,
        sexo: 'M',
        opnion: 2,
        idade: 43
    },

    {
        altura: 1.75,
        sexo: 'M',
        opnion: 1,
        idade: 17
    },

    {
        altura: 1.65,
        sexo: 'M',
        opnion: 3,
        idade: 18
    },

    {
        altura: 1.62,
        sexo: 'F',
        opnion: 2,
        idade: 76
    },

    {
        altura: 1.66,
        sexo: 'M',
        opnion: 3,
        idade: 19
    },

    {
        altura: 1.70,
        sexo: 'M',
        opnion: 1,
        idade: 18
    },

    {
        altura: 1.50,
        sexo: 'M',
        opnion: 2,
        idade: 27
    },

    {
        altura: 1.82,
        sexo: 'M',
        opnion: 3,
        idade: 26
    },

    {
        altura: 1.80,
        sexo: 'F',
        opnion: 3,
        idade: 24
    },

    {
        altura: 1.55,
        sexo: 'F',
        opnion: 1,
        idade: 18
    },

    {
        altura: 1.50,
        sexo: 'F',
        opnion: 1,
        idade: 16
    },


    {
        altura: 1.60,
        sexo: 'F',
        opnion: 3,
        idade: 44
    },
];

// maior  menor altura
let alturas = pessoas.map( a => a.altura)

let ordenarAlturas = alturas.sort()

let maiorAltura = ordenarAlturas[ordenarAlturas.length - 1];

let menorAltura = ordenarAlturas[0];

console.log('A maior altura é: '+ maiorAltura+ ' Metros')

console.log('A menor altura é: '+ menorAltura+ ' Metros')

//media altura mulheres

let mulheres = pessoas.filter( a => a.sexo == 'F');

let alturaMulheres = mulheres.map(a => a.altura);

let soma_alturasF = alturaMulheres.reduce((a,b) => a +b);

let mediaAlturasM = soma_alturasF/alturaMulheres.length;

console.log('A media de altura das mulheres é: ' + Math.round(mediaAlturasM));

//total de homens

let sexoM = pessoas.filter( a => a.sexo == 'M');

let quantidadeHomens = sexoM.length

console.log('A quantidade total de Homens é: ' + quantidadeHomens);

//media de idades das pessoas que responderam otimo

let otimo = pessoas.filter( a => a.opnion == 3);

let idadeOtimo = otimo.map(a => a.idade);

let mediaIdadeOtimo = idadeOtimo.reduce((a,b)=> a+b)/idadeOtimo.length;

console.log('A media de idade das pessoas que responderam ótimo é :' + Math.round(mediaIdadeOtimo));

//a quantidade de pessoas que responderam regular;

let regular = pessoas.filter( a => a.opnion == 1);

let totalRegular = regular.length;

console.log('A quantidade de pessoas que responderam regular é: ' + totalRegular);


//a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let bom = pessoas.filter( a => a.opnion == 2);

let totalBom = bom.length;

console.log('A porcentagem de pessoas que respoderam bom entre todos os espctadores é: ' 
+ Math.round(totalBom*100/pessoas.length));








