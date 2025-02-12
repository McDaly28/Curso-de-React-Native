let fibonacci = function(){
    let valor1 = -1;
    let valor2 = 1;
    let valor3 = 0;
    let contador = 0;

    for (contador; contador <= 9; contador++){
        valor3 = valor1 + valor2;
        valor1 = valor2;
        valor2 = valor3;
        console.log(valor3);

    }
};

fibonacci();
fibonacci();
fibonacci();
