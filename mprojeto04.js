//velocidade maxima de ate 70
// a cada 5km acima do limite voce ganha 1 ponto na carteira
//Math.Floor() arendondar par o numero mais baixo
//caso pontos maior que 12 -> carteira e supensa

verificarVelociada(130);

function verificarVelociada(velocidade){
//velocidade maxima de ate 70
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('ok');
// a cada 5km acima do limite voce ganha 1 ponto na carteira   
    else{
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto )); //Math.Floor() arendondar par o numero mais baixo   
        if (pontos >= 12)//caso pontos maior que 12 -> carteira e supensa
            console.log('Carteira suspensa');
        else   
            console.log('Pontos ', pontos); 
    }        
}