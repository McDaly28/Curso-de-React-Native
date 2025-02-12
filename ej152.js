let usuario = {
    username : null,
    password : null,
    saludar : function(){
        if (usuario.username != null){
            console.log(`Hola, soy el usuario ${this.username}.`);
        }else{
            console.log("Este usuario no tiene username válido.");
        }
    },
    updaterUsername : function(nombre){
        this.username = nombre;
    },
    updatePassword : function(nombre){
        this.password = nombre;
    }
};

usuario.updaterUsername("McDaly");
usuario.updatePassword(1234);

usuario.saludar();
console.log("La clave ingresada es: ",usuario.password);