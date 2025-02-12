//Si ejecutamos esta función nos dará error, porque
//las variables se definen dentro de la estructura if
//y al ser (let) y (const) respectivamente, tienen un alcance
//de bloque lo que significa que la expresión: console.log (numero1);
//y console.log (numero2); no pueden acceder al valor de las variables
// porque están fuera del bloque if, pero dentro de la función.
//Por otro lado, si declaramos las variables con (Var), esa limitación se elimina,
//es decir que, ahora console.log ya puede acceder a leer el valor de las variables
//e imprimir por pantalla; sin embargo, si se intenta hacer consolo.log desde fuera
//de la función, obtenemos un error y el mensaje será que la variable a la que intentamos
//acceder no está definida, esto sucede porque a pesar de declarar con (var),
//permite que las variables alcancen el nivel superior que en este caso es la función,
//pero no llegarán a ser variables globlales nunca, ya no pueden sortear el nivel superior
//de la función. 

function test() {
    if (true) {
      var numero1 = 5;
      var numero2 = 10;
    }
    console.log(numero1);
    console.log(numero2);
  }
  
  test();
  