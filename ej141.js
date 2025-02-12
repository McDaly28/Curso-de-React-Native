let gastos = [];
gastos.push(100);
gastos.push(1000);
gastos.push(200);

let suma = gastos.reduce(function(acumulador, gasto){
    acumulador = acumulador + gasto;
    return acumulador;
},0);
console.log("Los gastos estimados que se van a gastar en el viaje ascienden a: ",suma, "dólares.");