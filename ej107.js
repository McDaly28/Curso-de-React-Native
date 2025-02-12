function numeroMasGrande (numero1,numero2){

    if (typeof(numero1)=== "number" && typeof(numero2) === "number"){
        console.log("Los datos igresados son del tipo number.");
    }else{
        console.log("Esta función espera valores numéricos.");
        return;
    }
    
    if (numero1 > numero2){
    console.log(`El numero: ${numero1} es mayor que el número: ${numero2}`);
    }else if(numero2 > numero1){
    console.log(`El numero: ${numero2} es mayor que el número: ${numero1}`);
    }
    if (numero1 === numero2){
    console.log(`Los dos números tienen un valor de: ${numero1}.`);
    }

    
};


numeroMasGrande(42,42);