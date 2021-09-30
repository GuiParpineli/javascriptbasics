var mediaAlturaMulheres = a => {

  let mulheres = a.filter( a => a.sexo == "F");
  
  let alturaMulheres = mulheres.map(a => a.altura);
  
  let mediaAlturasM = alturaMulheres.reduce((a,b) => a + b)/alturaMulheres.length;
   
  console.log('A media de altura das mulheres é: ' + mediaAlturasM);
  
};


module.exports = mediaAlturaMulheres;