const Dados = require("./construtora");

let pessoas = [

 new Dados(1.90, "M", 3 ,23),
 new Dados(1.80, "F", 2 ,66),
 new Dados(1.20, "F", 3, 99),
 new Dados(1.70, "M", 2, 34),
 new Dados(1.60, "F", 1, 26),
 new Dados(1.65, "M", 1, 36),
 new Dados(1.95, "M", 2, 23),
 new Dados(2.00, "F", 2, 19),
 new Dados(1.80, "M", 3, 26),
 new Dados(1.63, "F", 3, 22),
 new Dados(1.82, "F", 3, 33),
 new Dados(1.69, "M", 1, 20),
 new Dados(1.70, "M", 2, 78),
 new Dados(1.55, "M", 2, 18),
 new Dados(1.50, "F", 3, 58),

];



// maior  menor altura
let maiorMenorAltura = require('./maiormenor')

maiorMenorAltura(pessoas);

//Media altura das mulheres 

let mediaAlturaMulheres = require('./mediaAlturaMulheres');

mediaAlturaMulheres(pessoas);


//total de homens

let totalHomens = require('./totalHomens')

totalHomens(pessoas);

//media de idades das pessoas que responderam otimo

let mediaOtimo = require('./mediaOtimo');

mediaOtimo(pessoas);

//a quantidade de pessoas que responderam regular;

let notaRegular = require('./notaRegular');

notaRegular(pessoas);

//a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let notaBom = require('./notaBom');

notaBom(pessoas);












