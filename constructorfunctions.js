//camelCase = umDoisTresQuatro

/* function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar(){
        console.log("Fazendo ligação...")
    }
}
}

// Pascal Case -- UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo ligação...");
    }

}
const celular = new Celular('asus', 5.5, 5000);
console.log(celular); */

//Objeto Postagem de Blog
//que vai conter titulo/ mensagem / autor / visualizacoes / comentarios / estaAoVivo
function Postagem(titulo, mensagem, autor){
    this.titulo = titulo ,
    this.mensagem =  mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    estaAoVivo = false
}

let postagem = new Postagem('a', 'b', 'c');
console.log(postagem);