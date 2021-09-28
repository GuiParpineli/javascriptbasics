let totalHomens = a => {

let homens = a.filter( a => a.sexo == 'M');

let quantidadeHomens = homens.length

console.log('A quantidade total de Homens é: ' + quantidadeHomens);

}

module.exports = totalHomens;