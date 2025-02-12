function mejorJugadorArg (num){
    let nombres = [];
    nombres[18] = "Nery Pumpido";
    nombres[5] = "José Luis Brown";
    nombres[9] = "José Cuciuffo";
    nombres[19] = "Oscar Ruggeri";
    nombres[14] = "Ricardo Giusti";
    nombres[16] = "Julio Olarticoechea";
    nombres[2] = "Sergio Batista";
    nombres[12] = "Héctor Enrique";
    nombres[7] = "Jorge Burruchaga";
    nombres[10] = "Diego Armando Maradona";
    nombres[11] = "Jorge Valdano";

    if (nombres[num] == undefined){
        
        console.log("Carlos Bilardo");
    }else{
       console.log(`Jugador número ${num}, ${nombres[num]}.`);
       
    }
    
    
}
mejorJugadorArg(11);
