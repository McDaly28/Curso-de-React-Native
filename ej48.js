let mensaje =  '3.14 es un gran número, pero mejor es 42 que le da significado a la vida'
let pi = mensaje.slice(0,4)
pi = parseFloat(pi);
let significadoDeLaVida = mensaje.slice(38,40);
significadoDeLaVida = parseInt(significadoDeLaVida);
let resultado = pi + significadoDeLaVida;


console.log(pi);
console.log(significadoDeLaVida);
console.log(resultado);
console.log(`${resultado.toString()} es el resultado de sumar las variables ${pi.toString()} y ${significadoDeLaVida.toString()}.`);

