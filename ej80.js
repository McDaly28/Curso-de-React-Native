let contador = 0;
let acumulador = 0;

do{
    if(contador % 2 !== 0){
        acumulador = acumulador + contador;
    }
    contador++;
}while(contador <= 1000);
console.log(acumulador);