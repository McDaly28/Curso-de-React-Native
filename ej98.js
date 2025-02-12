let sum = 0;
let contar = 0;

for(contar; contar <= 1000; contar++){
    sum = sum + contar;
    if(sum > 100){
        console.log(sum);
        break;
    }
}