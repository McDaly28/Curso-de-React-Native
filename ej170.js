function contar() {
    let contador = 0;
    return function () {
      contador++;
      console.log(contador);
    };
  }
  
  const incrementar = contar();
  incrementar();
  incrementar();
  incrementar();
  incrementar();

  //la función contar que en este caso sería la función padre, retornará una función hija,
  //la función hija es capaz de acceder a la variable que fue declarada dentro de la función
  //padre, en este caso "contador", incrementa su valor e y lo imprime con console.log dentro
  //de la función hija; por otro lado, fuera de la función padre podemos declarar una variable
  //global "const incrementar = contar ();" Esta variable contiene el resultado de ejecutar la
  //función padre "contar();" puesto que una vez ejecutado, la variable contador incrementa su 
  //valor en 1, cuando ejecutamos incrementar lo podemos hacer como una función porque de hecho
  //contiene a la función padre, cada vez que ejecutamos "incrementar" se almacena el valor de
  //"contador" y se incrementa cada vez que se ejecuta, de esa manera acumulamos el resultado 
  //anterior.