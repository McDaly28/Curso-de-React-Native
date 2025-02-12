let jugador = {
    nombre : null,
    energia : 100,
    vidas : 3,
    perderEnergia : function(danio){
       this.energia = this.energia - danio;
       if (this.energia <= 0){
        console.log("El jugador no tiene más energía");
        this.energia = 0;
       }
              
    },
    recuperarEnergia : function(energy){
        this.energia += energy;
        if (this.energia >= 100){
            console.log("La energía del jugador está al máximo.");
            this.energia = 100;
        }
        
    },
    perderVida : function(perdidadVida){
        this.vidas = this.vidas - perdidadVida;
        if (this.vidas <= 0){
            console.log("El jugador no tiene vidas suficientes.");
        this.vidas = 0;
        }
        
    },
    recuperarVida : function(vidaRecuperada){
        this.vidas = this.vidas + vidaRecuperada;
        if (this.vidas >= 99){
            console.log("Máximo de vidas alcanzado, no se pueden acumular más vidas.");
            this.vidas = 99;
        }
        
    }
};

jugador.nombre = "McDaly";
jugador.perderVida(1);
console.log(`El jugador ${jugador.nombre}, tiene: ${jugador.energia} de energía y ${jugador.vidas} vidas.`);
jugador.perderEnergia(10);
console.log(`El jugador ${jugador.nombre}, tiene: ${jugador.energia} de energía y ${jugador.vidas} vidas.`);
jugador.recuperarEnergia(150);
console.log(`El jugador ${jugador.nombre}, tiene: ${jugador.energia} de energía y ${jugador.vidas} vidas.`);
jugador.perderEnergia(5);
console.log(`El jugador ${jugador.nombre}, tiene: ${jugador.energia} de energía y ${jugador.vidas} vidas.`);
jugador.perderEnergia(15);
console.log(`El jugador ${jugador.nombre}, tiene: ${jugador.energia} de energía y ${jugador.vidas} vidas.`);
jugador.perderEnergia(20);
console.log(`El jugador ${jugador.nombre}, tiene: ${jugador.energia} de energía y ${jugador.vidas} vidas.`);
jugador.recuperarEnergia(10);
console.log(`El jugador ${jugador.nombre}, tiene: ${jugador.energia} de energía y ${jugador.vidas} vidas.`);
jugador.perderEnergia(30);
console.log(`El jugador ${jugador.nombre}, tiene: ${jugador.energia} de energía y ${jugador.vidas} vidas.`);
jugador.perderEnergia(40);
console.log(`El jugador ${jugador.nombre}, tiene: ${jugador.energia} de energía y ${jugador.vidas} vidas.`);
jugador.perderVida(1);
console.log(`El jugador ${jugador.nombre}, tiene: ${jugador.energia} de energía y ${jugador.vidas} vidas.`);
jugador.perderVida(1);
console.log(`El jugador ${jugador.nombre}, tiene: ${jugador.energia} de energía y ${jugador.vidas} vidas.`);
jugador.recuperarVida(3);
console.log(`El jugador ${jugador.nombre}, tiene: ${jugador.energia} de energía y ${jugador.vidas} vidas.`);
jugador.perderVida(1);
console.log(`El jugador ${jugador.nombre}, tiene: ${jugador.energia} de energía y ${jugador.vidas} vidas.`);
