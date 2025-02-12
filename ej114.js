function invertirTexto (texto){
    let a,b,c,d;
        
    a = texto.slice (texto.length-1);
    b = texto.slice (-2,-1);
    c = texto.slice (-3,-2);
    d = texto.slice (-4,-3);
   
    console.log(a,b,c,d)

    

}
invertirTexto("HOLA");