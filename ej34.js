let ingresos;
let ganancias;
let impuestos;

ingresos = 1000;
ganancias = 600;
impuestos = 500;

console.log("Condiciones:")
console.log("Generar al menos 800 pesos o más de ingreso.");
console.log("Gastar menos de 400 pesos de impuestos.");
console.log("Se Paga bono si se ganan 600 pesos de ganancias justo.");

console.log(`Objetivo de ingresos: ${ingresos >= 800}.`);
console.log(`Objetivo de impuestos: ${impuestos < 500}.`);
console.log(`Bono de ganancias: ${ganancias == 600}.`);

