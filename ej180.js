function mostrarNumeros (numero){
    console.log(numero);
    if (numero <= 9){
        mostrarNumeros(numero + 1);
    }
    
    
}

mostrarNumeros(5);