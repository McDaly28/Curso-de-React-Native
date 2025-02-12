let contador = 0;
let contador1 = -1;
let contador2 = 1; 
let crono = 0;

do{
    contador = contador1 + contador2;
    contador1 = contador2;
    contador2 = contador;
    console.log(contador);
    crono++;
}while (crono <= 9);