function cantidadDeCaracteres (texto){
    if (typeof(texto) != "string"){
        console.log("El valor ingresado no corresponde a una cadena de texto.");
    }else{
        console.log(texto.length);
    }
    
}

cantidadDeCaracteres("25");