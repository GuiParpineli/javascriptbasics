function criarConta (a,b,c,d) {
    this.conta = a;
    this.tipoConta = b;
    this.saldo = c;
    this.titular = d;    
}


var contas = [ new criarConta(5486273622, 'Conta Corrente', 27771, 'Abigael Natte'),

 new criarConta(1183971869, 'Conta Poupança', 8675, 'Ramon Connell'),


 new criarConta(9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente'),


 new criarConta(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley'),

 new criarConta(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer'),


 new criarConta(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus'),

 
 new criarConta(4223508636, 'Conta Corrente', 2177, 'Thomasin Latour'),


 new criarConta(185979521, 'Conta Poupança', 25994, 'Lonnie Verheijden'),


 new criarConta(3151956165, 'Conta Corrente', 7601, 'Alonso Wannan'),


 new criarConta(2138105881, 'Conta Poupança', 33196, 'Bendite Huggett')]



var banco = {
    
    consultarCliente: function(nome){
        for(var i=0; i< contas.length; i++) {
            if(contas[i].titular == nome){
                console.log(contas[i])
            }
        }
    },

    deposito : function(titular,valor){
        for(var i=0; i< contas.length; i++) {
            if(contas[i].titular == titular){
               return (contas[i].saldo = contas[i].saldo+valor) && console.log('Depósito realizado, seu novo saldo é: '+ contas[i].saldo);                             
            }
        }
    },
    saque : function(titular,valor){
        for(var i=0; i< contas.length; i++) {
            if(contas[i].titular == titular && contas[i].saldo-valor <= 0){
                console.log('Fundos insuficientes');
                }else if(contas[i].titular == titular){
                    return (contas[i].saldo = contas[i].saldo-valor) && console.log('Extração feita com sucesso, seu novo saldo é: '+ contas[i].saldo);
                }
    }
}
}

banco.consultarCliente("Bendite Huggett");
banco.deposito("Bendite Huggett", 2000);
banco.consultarCliente("Bendite Huggett");
banco.saque("Bendite Huggett", 5000)
