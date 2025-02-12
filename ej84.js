let clocker = 1;
let texto = "";

do{
    texto = texto + "*";
    if (clocker %2 !== 0){
        console.log(texto);
    }
    clocker++;
}while (clocker <= 13);