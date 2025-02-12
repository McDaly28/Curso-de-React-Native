function obtenerFuncion() {
    const nombre = "JavaScript";
  
    function mostrarMensaje() {
      console.log("Yo <3 " + nombre);
    }
  
    mostrarMensaje();
  }
  
  obtenerFuncion();
  

//La función se ejecutará sin problemas, tenemos dos funciones, una función padre
//y una función hijo que en este caso es "mostrarMensaje", la función hija puede
//acceder a la variable global o la que fue declarada dentro de la función padre,
//por otro lado, la función padre puede llamar a la función hija sin problemas, y 
//mientras que desde fuera de la función padre, podemos ejecutar la función padre,
//inconveniente, sin embargo desde fuera de la función padre no podemos acceder a 
//la función hija.