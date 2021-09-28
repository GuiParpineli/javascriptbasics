var mediaAlturaMulheres = a => {

  a = a.filter( a => a.sexo == 'F');
  
  let alturaMulheres = a.map(a => a.altura);
  
  let soma_alturasF = alturaMulheres.reduce((a,b) => a + b);
  
  let mediaAlturasM = soma_alturasF/a.length;
  
  console.log('A media de altura das mulheres é: ' + Math.round(mediaAlturasM));
  
};


module.exports = mediaAlturaMulheres;