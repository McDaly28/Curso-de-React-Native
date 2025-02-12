function obtenerPerimetro (base, altura){
    let p = 0;
    if (base == altura){
        console.log("Como la base y la altura presentan valores similares, \nse procede a calcular el perímetro de un cuadrado.");
        p = base * 4;
        console.log(`El perímetro del cuadrado es: ${p} cm.`);
        return p;
    }else if (base != altura){
        console.log("Como la base y la altura presentan valores diferentes, \nse procede a calcular el perímetro de un rectángulo.")
        p = (2*base) + (2* altura);
        console.log(`El perímetro del rectángulo es: ${p} cm.`);
        return p;
    }
}


let perimetro = obtenerPerimetro(15,20);


if (perimetro > 100){
    console.log("El perímetro es muy grande.");
    }else{
    console.log("El perímetro no es muy grande.");
}



  
