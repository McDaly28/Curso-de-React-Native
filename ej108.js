let resultado;
let invertido;
let division;
function ordenarNumeros(numero1, numero2, numero3, boolenao){
    if (numero1 < numero2 && numero2 < numero3){
        resultado = (`${numero1}, ${numero2}, ${numero3}`);
    }else if (numero1 < numero3 && numero3 < numero2){
        resultado = (`${numero1}, ${numero3}, ${numero2}`);
    }else if(numero2 < numero1 && numero1 < numero3){
        resultado = (`${numero2}, ${numero1}, ${numero3}`);
    }else if (numero2 < numero3 && numero3 < numero1){
        resultado = (`${numero2}, ${numero3}, ${numero1}`);
    }else if (numero3 < numero2 && numero2 < numero1 ){
        resultado = (`${numero3}, ${numero2}, ${numero1}`);
    }else if (numero3 < numero1 && numero1 < numero2){
        resultado = (`${numero3}, ${numero1}, ${numero2}`);
    }

    if (boolenao){
        division = resultado.split(",");
        invertido = (`${division[2]},${division[1]}, ${division[0]}`);
        console.log("Condición: activada")
        console.log(`El resultado en orden descendente es: ${invertido}`);
        
    }else{
        
        console.log(`El resultado en orden ascendente es: ${resultado}`);
    }
}
ordenarNumeros(10,9,8, true);