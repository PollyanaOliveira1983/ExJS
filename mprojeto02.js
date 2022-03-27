//Escreva uma funçao que usa 2 numeros e retorna o maior entre eles

/* let n = 50;
let n2 = 80;

if (n > n2) {
    console.log(n);
    }else{
      console.log(n2);
};
       */  

let valorMaior = max(30,50);
console.log(valorMaior);

function max(numero1, numero2){
    if(numero1 > numero2)
    return numero1;
    else return numero2;

    //return numero1 > numero2 ? numero1: numero2 ;
}      

//https://www.youtube.com/watch?v=i6Oi-YtXnAU