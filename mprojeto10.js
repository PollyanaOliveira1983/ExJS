//Criar função para mostrar os numeros primos

//Primos
//Compostos

//Ex:10, 11
//10(divisivel por 1 ou por ele mesmo)- 1,2,4,6,10
//11 - 1,11
//1 Opcao
/* exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for (let numero =2; numero <= limite; numero++){
        let ehPrimo = true;

        for (let divisor = 2; divisor < numero; divisor++){
            if (numero % divisor === 0){
                ehPrimo = false;
                break
            }
        }
        if (ehPrimo) console.log(numero);
    }    
} */

// Opção 02

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for (let numero =2; numero <= limite; numero++){
       if (NumeroPrimo(numero))console.log(numero);
    }
}    

function NumeroPrimo(numero){
    for (let divisor = 2; divisor < numero; divisor++){
        if (numero % divisor === 0){
            return false;
        }    
    }
    return true;    
}

