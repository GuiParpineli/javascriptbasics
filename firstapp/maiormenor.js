var maiorMenorAltura = a => {
  a = a.map( a => a.altura);

  let ordenarAlturas = a.sort()

  let maiorAltura = ordenarAlturas[ordenarAlturas.length - 1];

  let menorAltura = ordenarAlturas[0];

  console.log('A maior altura é: '+ maiorAltura+ ' Metros')

  console.log('A menor altura é: '+ menorAltura+ ' Metros')

}

module.exports = maiorMenorAltura;