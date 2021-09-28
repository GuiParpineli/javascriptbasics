let notaRegular = a => {

let regular = a.filter( a => a.opnion == 1);

let totalRegular = regular.length;

console.log('A quantidade de pessoas que responderam regular é: ' + totalRegular);

}

module.exports = notaRegular;