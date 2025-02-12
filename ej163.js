function saludar (mensaje, despedida){
    console.log(mensaje);
    despedida();
}

function chao (){
    console.log("Nos vemos xD");
}


saludar("Bienvenidos a Javascript", chao);

