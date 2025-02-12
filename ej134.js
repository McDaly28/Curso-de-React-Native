let numeros = [];
let n = 0;
let sumador = 0;

console.log("Sumas parciales: ");
for (n; n <= 10000; n++){
    numeros.push(n);
    sumador = sumador + n;
    console.log(sumador);
}
console.log("El resultado final es: ",sumador);
if (sumador === 50005000){
    console.log("El ejercicio es correcto.");
}else{
    console.log("Verificar el ejercicio para obtener el resultado esperado!!!")
}