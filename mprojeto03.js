//fizzBuzz compara alguns valores de entrada e retorna um valor

//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por 3 e 5 => FizzBuzz
//Nao divisivel por 3 ou 5 => entrada
//Nao e um numero => Nao e um numero

const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')//compara se e um numero
        return 'Nao e um numero';
    if ((entrada % 3 === 0) && (entrada % 5 === 0)) //entrada seja divisivel por 3 e 5
        return 'FizzBuzz';
    if (entrada % 3 === 0) //entrada seja divisivel por 3
        return 'Fizz';
    if (entrada % 5 === 0) //entrada seja divisivel por 5
        return 'Buzz';
    return entrada; // caso nenhuma das opções forem verdadeiras retorna o numero que o usuario digitou                
}