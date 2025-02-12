let valores = [];
n = 0;
for (n; n <= 100; n++){
    valores.push(n);
}

let pares = valores.filter(function(numero){
    return numero %2 === 0;
})


let impares = valores.filter(function(numero){
    return numero %2 != 0;
})


let ultPares = pares.slice(-10).forEach(function(par){
    console.log("Los últimos 10 números pares: ",par);
})

let ultImpar = impares.slice(-10).forEach(function(impar){
    console.log("Los últimos 10 números impares: ",impar);
})