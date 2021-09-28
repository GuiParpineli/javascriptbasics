let mediaOtimo = a => {

  let otimo = a.filter( a => a.opnion == 3);

  let idadeOtimo = otimo.map(a => a.idade);

  let mediaIdadeOtimo = idadeOtimo.reduce((a,b)=> a+b)/idadeOtimo.length;

  console.log('A media de idade das pessoas que responderam ótimo é: '+ Math.round(mediaIdadeOtimo));

}

module.exports = mediaOtimo;