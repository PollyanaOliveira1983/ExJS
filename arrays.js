//Arrays conjunto de dados que pode ser acessado por um indice que identifica uma posicao e retorna // sempre conta do 0 opara iniciar o array

/* let familia = [26, 45, 50, 17];
console.log(familia.length)//mostra o maior valor do array
console.log(familia[2]);
let nomeDoColega = ['Stella', 35, 'Rio de Janeiro'
]
console.log(nomeDoColega);
 */

// Introducao a arrays
// Add novos elementos, encontrar, remover, dividir, dividir arrays, combinar arrays

//Adicionar elementos no Array

/* const numeros = [1,2,3];

//Inserir no inicio do Array

numeros.unshift(0);
console.log(numeros);

//Inserir no meio do Array
numeros.splice(1,0,'a');
console.log(numeros);

//Inserir no final do Array

numeros.push(5);
console.log(numeros); */



/* const numeros = [10,20,30,40,50,60];

//Inserir no inicio do Array

numeros.unshift(0);
console.log(numeros);

//Inserir no meio do Array
numeros.splice(1,0,0,0,'a');
console.log(numeros);

//Inserir no final do Array

numeros.push(100);
console.log(numeros); */

//Elementos primitivos

/* const numeros = [1,2,3,4];

console.log(numeros.indexOf(2));
 

const numeros = [1,2,3,1,4];
console.log(numeros.indexOf(2) !== -1);

console.log(numeros.lastIndexOf(1));

console.log(numeros.includes(2));

// Tipos de referencia

const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'}
];

marcas.find(function(marca){
    return marca.nome === 'a';
})
console.log(marcas);

//Arrow Functions

const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'}
];

console.log(marcas.find(marca => {
    return marca.nome === 'a';
}));

// remover elementos do array

const numeros = [1,2,3,4,5,6];
numeros.push();
numeros.unshift();
numeros.splice();

//final

const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

//inicio

const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);

//meio

const meio = numeros.splice(2,1);
console.log(meio);*/

//esvaziando um array
/* 
let numeros = [1,2,3,4,5,6];
let outros = numeros;
solucao 01
numeros = [];
console.log(outros);

//Solucao 02 melhor metodo
numeros.length = 0;
console.log(numeros);
console.log(outros);

// Solucao 03
numeros.splice(0,numeros.length);
console.log(numeros);
console.log(outros);

// Solucao 04 não recomendado
while (numeros.length > 0)
    numeros.pop();

// Combinando e cortando arrays

const primeiro = [1,2,3];
const segundo = [4,5,6];
//combinar
const combinado = primeiro.concat(segundo)
console.log(combinado)
//dividir
const cortado = combinado.slice(1,3);
console.log(cortado);
// operador spread

const primeiro = [1,2,3];
const segundo = [4,5,6];

//const combinado = primeiro.concat(segundo)
const combinado = [...primeiro,'a',...segundo];
console.log(combinado);

//const cortado = combinado.slice(1,3);
const clonado = [...combinado];
console.log(clonado);


//Iterando um array ou percorrendo um 

const numeros = [1,2,3,4,5];

/*for (numero of numeros)
    console.log(numero);

//forEach
numeros.forEach((numero, indice) => console.log(numero, indice))*/

//combinando Arrays

const numeros = [1,2,3,4,5];

const combinado = numeros.join('.');
console.log(combinado);

const frase = "ola bem vindo ao curso";
const resultado = frase.split(' ');
console.log(resultado);

console.log(resultado.join('-'));




