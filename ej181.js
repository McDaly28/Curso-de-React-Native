function crearMultiplicador (factor){
    return function (input){
        return console.log(input * factor);
    }
};

let doble = crearMultiplicador(2);
doble(10);
let triple = crearMultiplicador(3);
triple(4);