let contador = 0;
let acumulador = 0;

for (contador; contador <= 1000; contador++){
    if (contador % 2 !== 0){
        acumulador = acumulador + contador;
    }
    if (contador == 1000){
        console.log(acumulador);
    }
}