//Operadores Aritmeticos (matematicos) + - *  **
/* let salario = 100;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5); */

// operadores de incremento ++ e decremento --
/* let idade = 18;

console.log(idade++); 
console.log(idade);

console.log(++idade);
console.log(idade); 

console.log(idade--); 
console.log(idade);*/


/*//Operadores de Atribuiçao
let valorTecladoGamer = 100;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

valorTecladoGamer -= valorTecladoGamer;
console.log(valorTecladoGamer);*/



/*/Operadores de Comparação
//Operadores de Igualdade
//Igualdade Restrita

console.log(1 === 1);
console.log('1' === 1); // recomendado

//Igualdade Solta
console.log(1 == 1);
console.log('1' == 1); // nao e recomendado*/

/*/Operadores de ternario
// tem um cliente, 100 premium, comum
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);*/

//Operadores logicos
// Operador logico E (&&) retorna True se os dois operandos forem True

/*console.log(true && true);
console.log(true && false);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);*/

/*/Operador logico OU(|| retorna True se um dos operando for True)

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade ||possuiCarteiraDeTrabalho;

console.log(podeAplicar);*/

/*/Operador NOT (!) vai fazer uma negação
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade ||possuiCarteiraDeTrabalho;

console.log('pode aplicar: ', podeAplicar);

let candidatoRecusado = !podeAplicar;
console.log('Candidato Recusado: ', candidatoRecusado);*/

//Operadores de Comparação não boleano
// falsy / underfined / null / 0 / false / ''/ NaN - not a number 

// Truthy apenas um true para retornar o true

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);

let corPersonalizada1 = '';
let corPadrao1 = 'Azul';
let corPerfil1 = corPersonalizada1 || corPadrao1;

console.log(corPerfil1);


