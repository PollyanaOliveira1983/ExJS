/*Switch case

let permissao; // usuario comum gerente ou diretor
permissao = 'diretor'
switch (permissao) {
    case 'comum':
    console.log('usuario comum');   
    break;

    case 'gerente':
    console.log('usuario gerente');   
    break;

    case 'diretor':
    console.log('usuario gerente');   
    break;

    default:
    console.log('Usuario não reconhecido!');    
} 

//Laço For / Loop For

console.log('Estou aprendendo!');
console.log('Estou aprendendo!');
console.log('Estou aprendendo!');
console.log('Estou aprendendo!');
console.log('Estou aprendendo!');

// 1. For

for (let i = 0; i < 5; i++){
    console.log('Estou aprendendo!',i);
}
//imprimindo valores impares
for (let i = 1; i <= 5; i++){
    if(i % 2 !== 0){ //% modulos se o resto da divisao do primeiro pelo segundo for diferente de 0 
        console.log(i);
    }    
}

//contagem do maior para o menor
for (let i = 5; i >= 1; i--){
    if(i % 2 !== 0){
        console.log(i);
    }
}        



// 2. While

let i = 5;

while (i >= 1) {
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}

// 3. Do .. while / do executa pelo menos uma vez depois ve a condicao / while  verifica primeiro e executa depois
let i = 0;
do {
    console.log('digitando!' ,i);
    i++;
}while (i < 10)


// 4. For .. In
const pessoa  = {
    nome: 'Polly',
    idade: 38
};
//key -- value
for (let chave in pessoa){
    console.log(chave, pessoa['nome']);
}
const cores = ['vermelho', 'azul', 'verde'];


for (let indice in cores){
    console.log(indice, cores[indice])
}



// 5. For .. of

for (let cor of cores) {
    console.log(cor);
    
}

numero = 50;

if (numero %2 == 0){
    console.log('Numero par');
}else{
    console.log('Numero impar')
};
*/

/* let linguagem; // cas01 - JavaScript / cas02 - phyton / cas03 - html / cas04 - css / cas05 - Java
linguagem = 'cas03'
switch (linguagem) {
    case 'cas01':
    console.log('Linguagem JavaScript');   
    break;

    case 'cas02':
    console.log('Linguagem Phyton');   
    break;

    case 'cas03':
    console.log('Linguagem HTML');   
    break;

    case 'cas04':
    console.log('Linguagem CSS ');   
    break;

    case 'cas05':
    console.log('Linguagem CSS ');   
    break;

    default:
    console.log('Não foi selecionado nenhum curso');    
}  

 let carro; // cas01 - hatch / cas02 - sedan / cas03 - motocicletas / cas04 - caminhonetes
carro = 'cas02'
switch (carro) {
    case 'cas01':
    console.log('Compra efetuada com sucesso');  
    break;

    case 'cas02':
    console.log('Tem certeza que prefere este modelo Sedan?');   
    break;

    case 'cas03':
    console.log('Tem certeza que prefere este modelo Motocicletas?');   
    break;

    case 'cas04':
    console.log('Tem certeza que prefere este modelo Caminhonetes?');   
    break;

    default:
    console.log('Não trabalhamos com este tipo de automóvel aqui');    
}  */

let fruta = 'gilo'; //


switch (fruta) {
    case 'maçã':
    console.log('Não vendemos esta fruta aqui');   
    break;

    case 'kiwi':
    console.log('Estamos com escassez de kiwis');  
    break;

    case 'melancia':
    console.log('Aqui está, são 3 reais o quilo');   
    break;

    default:
    console.log('Não trabalhamos com este tipo de fruta');    
} 