const usuario = {
    username: "batman",
    password: "Alfred1960KPO!",
};


function autenticarUsuario (usuario){
    if (usuario.username === "batman" && usuario.password === "Alfred1960KPO!"){
        return true;
    }else{
       return false;
    }
}


let credenciales = autenticarUsuario(usuario);

if (credenciales === true){
    console.log("Los datos ingresados por el usuario son: ",usuario);
}else{
    console.log("Error, usurio no autenticado.");

}
