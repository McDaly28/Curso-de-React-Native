let mutantes = [];
mutantes.push("Prof. Charles Francis Xavier");
mutantes.push("Scott Summers");
mutantes.push('Dr. Henry Philip "Hank" McCoy');
mutantes.push("Jean Elaine Grey");
mutantes.push("Calvin Montgomery Rankin");
mutantes.push("Kevin Sydney");
mutantes.push("Lorna Sally Dane");
mutantes.push("Alexander Summers");
mutantes.push("Suzanne Chan");
mutantes.push('James "Logan" Howlett');
mutantes.push("Ororo Monroe");

let novolist = mutantes.filter(function(nombre){

    return nombre === "Scott Summers";
})

let finalLista = [];

finalLista[1]= novolist;

console.log("El nombre del mutante en la lista original es: ", mutantes[1], "y se encuentra en el índice: ",mutantes.indexOf("Scott Summers"));
console.log("El nombre del mutante en la lista modificada es: ",novolist.toString(), "y se encuentra en el índice: ",finalLista.indexOf(novolist));
