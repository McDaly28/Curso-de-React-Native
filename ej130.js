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

console.log("La lista original de mutantes es: ",mutantes);

let listaOrd = mutantes.sort();
console.log("La lista ordenada de mutantes es: ",listaOrd);

let invLista = listaOrd.reverse();
console.log("La lista invertida de mutantes es: ",invLista);

let separatedby = invLista.join(" * ")
console.log("Los mutantes separados por (*) son: ",separatedby);
