function crearMultiplicador(numero1) {
   
    return function hijo (numero2) {
        numero2 = 5;      
        let salida = numero2 * crearMultiplicador(numero1)
        console.log(salida);
    };
    
  }

  crearMultiplicador(3)




  function crearMultiplicador(numero1) {
    return function (numero2) {
      return numero1 * numero2;
    };
  }

  let salida = crearMultiplicador(5);
  let salida2 = salida(3);
  console.log(salida2);