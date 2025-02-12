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

let add = [];
mutantes.forEach(function(nombre){
    if (nombre == "Jean Elaine Grey" || nombre == 'James "Logan" Howlett'){
        add.push(nombre);
    }
        
})

console.log(add.toString());

