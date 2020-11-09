let calculadora={
    sumar: function(a,b){
      return a+b;
    },
    restar: function(a,b){
        return a-b;
    },
    multiplicar: function(a,b){
        return a*b;
    },
    dividir: function(a,b){
        return a/b;
    }
}
console.log(calculadora.multiplicar(2,4));