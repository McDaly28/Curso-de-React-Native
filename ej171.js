function mostrarValor() {
    console.log(valor);
    let valor = 5;
  }
mostrarValor();

//La función no se ejecutará a pesar de tener declarada la variable "valor", esto ocurre porque
//la función en primer lugar está ejecutando un console.log de una variable que hasta ese momento
//no existe, entonces la función no puede imprimir el valor, la variable únicamente puede ser
//utilizada una vez que ha sido declarada antes de trabajar o realizar operaciones con ella.