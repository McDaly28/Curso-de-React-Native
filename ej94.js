let contador = 1;
let simbolo = "";

for (contador; contador <= 13; contador++){
    simbolo = simbolo + "*";
    if (contador % 2 !== 0){
        console.log(simbolo);
    }
}