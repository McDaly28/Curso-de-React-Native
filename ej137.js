let numeros = [];
let n = 0;

for (n; n <= 100; n++){
    numeros.push(n);
    
}

let listaIncrementada = numeros.map(function(elementoModificado){
    elementoModificado = elementoModificado +10;
    
    return elementoModificado;
       
});

let original = numeros.slice(0,11).forEach(function (elementoOriginal,posicion){
  console.log("Índice: ",posicion, "valor original: ",elementoOriginal, "valor incrementado +10: ",listaIncrementada[posicion]);
})


