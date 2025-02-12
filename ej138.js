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

let novoList = [];
novoList = mutantes.map(function(mutante){
    
    if (mutante === "Prof. Charles Francis Xavier"){
        mutante = "Spiderman";
    }
    if (mutante === 'James "Logan" Howlett'){
        mutante = "Captain Tsubasa";
    }
    if (mutante === "Jean Elaine Grey"){
        mutante = "Noob Saibot";
    }
    mutante = "<3 " + mutante
    return mutante;
    
})

console.log("Lista original de mutantes: ",mutantes);
console.log("Lista modificada de mutantes: ",novoList); 
