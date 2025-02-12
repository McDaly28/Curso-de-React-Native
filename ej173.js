function dividir (numero1, numero2){
    try {
        if (numero2 === 0){
            throw new Error ("No se puede dividir por cero.");
    }else{
        return console.log(numero1 / numero2);
    }
    }
    catch(error){
        console.log(`Mostramos el error: ${error.message}`);
    }
}

dividir(10,4);