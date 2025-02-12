let aritmetica = {
    suma : function(num1,num2){
        if(typeof(num1) === "number" && typeof(num2)=== "number"){
            console.log("El resultado de la suma es: ",num1 + num2);
        }else{
            console.log("Uno o más datos ingresados no son números.");
        }
    },
    resta : function(num1,num2){
        if(typeof(num1) === "number" && typeof(num2)=== "number"){
            console.log("El resultado de la resta es: ",num1 - num2);
        }else{
            console.log("Uno o más datos ingresados no son números.");
        }
    },
    multiplicacion : function(num1,num2){
        if(typeof(num1) === "number" && typeof(num2)=== "number"){
            console.log("El resultado de la multiplicación es: ",num1 * num2);
        }else{
            console.log("Uno o más datos ingresados no son números.");
        }
    },
    division : function(num1,num2){
        if(typeof(num1) === "number" && typeof(num2)=== "number"){
            console.log("El resultado de la división es: ",num1 / num2);
        }else{
            console.log("Uno o más datos ingresados no son números.");
        }
    },
    modulo : function(num1,num2){
        if(typeof(num1) === "number" && typeof(num2)=== "number"){
            console.log("El módulo entre los dos números es: ",num1 % num2);
        }else{
            console.log("Uno o más datos ingresados no son números.");
        }
    },
};

aritmetica.suma(2,10);
aritmetica.resta(10,5);
aritmetica.multiplicacion(3,100);
aritmetica.division(40,2);
aritmetica.modulo(20,2);