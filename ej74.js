let contador = 1;
let simbolo = "";

while (contador <= 13){
    simbolo = simbolo + "*";

    if (contador % 2 !== 0){
        console.log(simbolo);
    }
 
    contador = contador + 1;
 
}