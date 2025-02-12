function saludar (){
   for (let n = 0; n <= arguments.length-1; n++ ){
    console.log(`Hola, ${arguments[n]}`);
   } 
};

saludar("Nicolás","Natalia","Javier","Ana");