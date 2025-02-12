let contador = 0;
let acumulador = 0;
let indicador = 0;

for (contador; contador <=10000; contador += 2){
    
    acumulador = acumulador + contador;
    indicador = indicador + 1;
    if (contador === 18){
        break;

    }
}
console.log(`La suma asciende a: ${acumulador}.`);
console.log(`Hasta el momento se han encontrado: ${indicador} números pares.`) ;
