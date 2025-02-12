let numeros = [1,2,3,4,5,6,7,8,9,10];

function metodoMap (coleccion, funcion){
    funcion(coleccion);
}

let nuevoA = [];

function mostrarPantalla (array){
  for (let n = 0; n <= array.length-1; n++){
   
    nuevoA.push(array[n] * 2);
    
  }
 
  console.log(nuevoA);
  
}

metodoMap(numeros,mostrarPantalla);
