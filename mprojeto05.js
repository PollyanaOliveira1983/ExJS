//Receber uma quanatidade de valores para avaliar
//funcao exibe se cada valor e par ou impar

exibirTipo(10);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++){
        if (i % 2 === 0)
            console.log(i, 'Par')
        else
            console.log(i, 'Impar') ;   
    }
}