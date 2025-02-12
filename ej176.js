//EJEMPLO 1:
//console.log(numero1);
//var numero1 = 10;
//El resultado es undefined porque si bien está definida la variable con (var),
//al acceder antes de haberle asignado un valor, es como si el programa hciciera
//var numero1 = undefined.

//EJEMPLO2:
//saludar();

//function saludar() {
  //console.log("Hola Mundo!");
//}
//Sí funciona porque javascript eleva todo el contenido de la función, de manera 
//que pueden ser llamdas antes de definirlas.

//EJEMPLO 3:
//console.log(numero2);
//let numero2 = 20;
//Obtenemos un error de referencia porque a diferencia de (var) cuando declaramos
//con (const y let) javascript no eleva las variables, es decir que las mismas son
//inaccesibles antes de la inicialización.

//EJEMPLO 4:
//function prueba() {
    //console.log(numero3);
    //var numero3 = 5;
    //console.log(numero3);
 // }
  
  //prueba();
  //La variable var numero3 se eleva al principio dentro de la función con el valor de
  //undefined, una vez que se utiliza después de su declaración, ya es accesible su valor.
  //llamamos a la función prueba normalmente, así que no hay problema.

  //EJEMPLO 5:
  //saludar();

//var saludar = function () {
  //console.log("Hola Mundo!");
//};
//En este caso, var eleva la variable 'saludar' al principio del ejercicio, sin embargo,
//estamos llamando a la variable como una función pero la variable adquiere el valor de
//undefined, entonces no se puede ejecutar porque saludar = undefined no es una función aún.

//EJEMPLO 6:
{
    console.log(numero4);
    let numero4 = 15;
  }
//Mismo caso, al declarar con let y const la variable no se eleva y no se puede usar su valor
//antes de la inicialización.