let usuario = {
    nombre : "McDaly"
};

function isUserValid (){
    if (usuario.nombre === "McDaly"){
        console.log("Éxito");
    }else{
        console.log("Error");
    }
}

isUserValid();