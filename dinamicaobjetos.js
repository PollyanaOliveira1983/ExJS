/* 
const mouse = {
    cor:'red',
    marca: 'dazz',
}

mouse.velocidade = 5000;
mouse.trocarDPI = function() {
    console.log('mudando DPI');
}
delete mouse.velocidade;
delete mouse.trocarDPI;

console.log(mouse); */

//Clonando objetos

const celular = {
    marcaCelular: 'Asus',
    tamanhoTela: {
        vertical:155,
        horizontal: 75
    },
    ligar: function(){
        console.log("Fazendo ligação...")
    }
}

const novoObjeto = Object.assign({
    bateria: 5000
}, celular);
console.log(novoObjeto);
//... spread clona o objeto que voce passar
const objeto2 = {...celular};
console.log(objeto2);
