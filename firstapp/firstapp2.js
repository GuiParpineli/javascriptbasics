const dados = require("./construtora");

let pessoas = [

 new dados(1.90, "M", 3 ,23),
 new dados(1.80, "F", 2 ,66),
 new dados(1.20, "F", 3, 99),
 new dados(1.70, "M", 2, 34),
 new dados(1.60, "F", 1, 26),
 new dados(1.65, "M", 1, 36),
 new dados(1.95, "M", 2, 23),
 new dados(2.00, "F", 2, 19),
 new dados(1.80, "M", 3, 26),
 new dados(1.63, "F", 3, 22),
 new dados(1.82, "F", 3, 33),
 new dados(1.69, "M", 1, 20),
 new dados(1.70, "M", 2, 78),
 new dados(1.55, "M", 2, 18),
 new dados(1.50, "F", 3, 58),

];



// maior  menor altura
let maiorMenorAltura = require('./maiormenor')

maiorMenorAltura(pessoas);

//Media altura das mulheres 

let mediaAlturaMulheres = require('./mediaAlturaMulheres');

mediaAlturaMulheres(pessoas);









