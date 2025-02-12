let contador = 0;
let acumulador = 0;

while (contador <= 1000){
    if (contador % 2 !== 0){
        acumulador = acumulador + contador;

    }
    
    contador++
}
console.log(acumulador);