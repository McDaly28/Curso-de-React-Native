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


console.log(helados);


function nuevoOrden(lista, nuevoGusto){
    
    let nuevaLista = [...lista];
    nuevaLista.push(nuevoGusto);
    nuevaLista.reverse();
    return nuevaLista;
}

let salida = nuevoOrden (helados, "blacked");
console.log(salida);

