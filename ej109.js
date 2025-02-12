function autenticarUsuario (usuario, password){
    if (usuario === "nacho" && password === "Nerd1979"){
        console.log(`Bienvenido ${usuario}, te estábamos esperando.`);
    }else if (usuario === "pedro" && password === "Batman0217"){
        console.log(`Bienvenido ${usuario}, te estábamos esperando.`);
    }else if (usuario === "marta" && password === "Madre2312"){
        console.log(`Bienvenido ${usuario}, te estábamos esperando.`);
    }else{
        console.log("Credenciales incorrectas, por favor ingrese credenciales válidas.");
    }
    
}
autenticarUsuario("marta","Madre2312");

