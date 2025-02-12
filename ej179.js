
function calcularPromedio (...numeros){
        let acumulador = 0;
    for ( let n = 0; n <= numeros.length-1; n++){
    acumulador = acumulador + numeros[n];
   }
   if (numeros.length > 0){
    let promedio = acumulador / numeros.length;
    console.log(promedio);
   }else{
    console.log(0);
   }
  
     
};

calcularPromedio(10,20,30);
calcularPromedio(5,15,25,35,45);
calcularPromedio(100,200);
calcularPromedio(2,524);