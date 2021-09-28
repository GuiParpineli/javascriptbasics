let construtor = require('./firstapp/construtora');
  
  let pessoa1 = new Dados(1.90, "M", 3 , 23);
  let pessoa2 = new Dados(1.80, "F", 2 ,66);
  let pessoa3 = new Dados(1.20, "F", 3, 99);
  let pessoa4 = new Dados(1.70, "M", 2, 34);
  let pessoa5 = new Dados(1.60, "F", 1, 26);
  let pessoa6 = new Dados(1.65, "M", 1, 36);
  let pessoa7 = new Dados(1.95, "M", 2, 23);
  let pessoa8 = new Dados(2.00, "F", 2, 19);
  let pessoa9 = new Dados(1.80, "M", 3, 26);
  let pessoa11 = new Dados(1.63, "F", 3, 22);
  let pessoa10 = new Dados(1.82, "F", 3, 33);
  let pessoa12 = new Dados(1.69, "M", 1, 20);
  let pessoa13 = new Dados(1.70, "M", 2, 78);
  let pessoa14 = new Dados(1.55, "M", 2, 18);
  let pessoa15 = new Dados(1.50, "F", 3, 58);
  


//media altura mulheres
var mediaAlturaMulheres = a => {
let a = a.filter( a => a.sexo == 'F');

let alturaMulheres = mulheres.map(a => a.altura);

let soma_alturasF = alturaMulheres.reduce((a,b) => a +b);

let mediaAlturasM = soma_alturasF/alturaMulheres.length;

console.log('A media de altura das mulheres é: ' + Math.round(mediaAlturasM));
}

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








