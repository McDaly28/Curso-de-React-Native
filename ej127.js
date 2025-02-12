let helados = [];

helados.push("crema");
helados.push("chocolate");
helados.push("coco"); 
helados.push("vainilla"); 
helados.push("frutas");
helados.push("fresa");
helados.push("ronpasas");
helados.push("cono");
helados.push("vasito");
helados.push("mix");


function nuevoOrden(lista, nuevoGusto){
    
    let nuevaLista = [...lista];
    nuevaLista.push(nuevoGusto);
    nuevaLista.reverse();
    return nuevaLista;
}

let salida = nuevoOrden (helados, "blacked");
console.log("Lista final: ",salida);

let sinStock1 = [salida.shift()];
let sinStock2 = [salida.shift()];

console.log("Una vez que sacamos los dos primeros elementos de la lista.")
console.log("La lista de gustos que quedó es: ",salida);

let GsinS = [];
GsinS.push(sinStock1);
GsinS.push(sinStock2);
console.log("La lista de gustos sin stock es: ",GsinS);


