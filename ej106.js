let obtenerIDUsuario = function(){
    return 35;
};
let usuarioValido = function(){
    
    if (obtenerIDUsuario() > 30){
        return true;
    }else{
        false;
    }
};

if (usuarioValido()){
    console.log("El usuario es válido.");
}else{
    console.log("El usuario no es válido.");
}