let numeros = [1,2,3,4,5,6,7,8,9,10];
let a = [2,0,3,3,3,3,9];
let c = ["perro","gato","luis","feo"];


function forEach(coleccion, funcion){
    
    funcion(coleccion);
}

function imprimirPantalla (elArray){
   for (let n = 0; n <= elArray.length-1 ; n++){
        console.log(elArray[n]);

   }
}

forEach(c,imprimirPantalla);


