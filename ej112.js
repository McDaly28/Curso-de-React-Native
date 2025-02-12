function mostrarNumeros (inicio,fin){
   if (typeof(inicio) === "number" && typeof(fin) === "number"){
    console.log("Ambos parámetros tienen un valor numérico válido.");
    console.log("Ejecución válida.")
   }else{
    console.log("Uno o más valores no es numérico, ingrese valores válidos.")
    return;
   }
    if (inicio > fin){
        console.log("Secuencia: ascendente.")
        for (fin; fin <= inicio; fin++){
            console.log(fin);
        }
    }else if (inicio < fin){
        console.log("Secuencia: descendente.");
        for (fin; fin >= inicio; fin-- ){
            console.log(fin);
        }
    }else if (inicio == fin){
        console.log("Los números ingresados son iguales, no hay ejecución.");
    }
}

mostrarNumeros(5,30);