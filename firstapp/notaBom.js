let notaBom = a => {

let bom = a.filter( a => a.opnion == 2);

let totalBom = bom.length;

console.log('A porcentagem de pessoas que respoderam bom entre todos os espctadores é: ' 
+ Math.round(totalBom*100/a.length)+ '%');
}

module.exports = notaBom;