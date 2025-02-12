const usuario = {
    username: "batman",
    password: "Alfred1960KPO!",
};


function autenticarUsuario (nomUsu, clave){
    if (nomUsu === "batman" && clave === "Alfred1960KPO!"){
        return true;
    }else{
        return false;
    }
}


let credenciales = autenticarUsuario("batman","Alfred1960KPO!");

if (credenciales === true){
    console.log("Los datos ingresados por el usuario son: ",usuario);
}else{
    console.log("Error, usurio no autenticado.");

}

