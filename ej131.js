let alumnos = [];
alumnos.push("Luis");
alumnos.push("Lucas");
alumnos.push("Pablo");
alumnos.push("José");
alumnos.push("Paolo");

let alumnas = [];
alumnas.push("Luisa");
alumnas.push("Camila");
alumnas.push("paola");
alumnas.push("Karla");
alumnas.push("Carolina");

let aluYalu = alumnos.concat(alumnas);
console.log("Los nombres de las alumnas son: ")
console.log(alumnas[0]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);

let n = 0;
console.log("Los nombres de los alumnos son: ")
while (n <= alumnos.length-1){
    console.log(alumnos[n]);
    n++;
}

let f = 0;
console.log("Todos los alumnos en el aula son: ");
for (f; f <= aluYalu.length-1 ; f++){
    console.log(aluYalu[f]);
}
