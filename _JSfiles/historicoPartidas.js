function showHistory(){

    const lista  = [];
    //    {
    //        'nome':'',
    //        'dimensao':'',
    //        'modalidade':'',
    //        'duracao':'',
    //       'resultado':'',
    //        'data_hora':''
    //    }
    //];

    function boxHist(jogador){
        return `
        <div class="hist-box">
            <div class="linha-hist">
                <p class="p-atributo">Nome: </p>
                <p class="p-info">${jogador.nome}</p>
            </div>
            <div class="linha-hist">
                <p class="p-atributo">Dimensão: </p>
                <p class="p-info">${jogador.dimensao}</p>
            </div>
            <div class="linha-hist">
                <p class="p-atributo">Modalidade: </p>
                <p class="p-info">${jogador.modalidade}</p>
            </div>
            <div class="linha-hist-dupla">
                <div class="linha-hist">
                    <p class="p-atributo">Duração: </p>
                    <p class="p-info">${jogador.duracao}</p>
                </div>
                <div class="linha-hist">
                    <p class="p-atributo">Resultado: </p>
                    <p class="p-info">${jogador.resultado}</p>
                </div>
            </div>
            <div class="linha-hist">
                <p class="p-atributo">Data/Hora: </p>
                <p class="p-info">${jogador.data_hora}</p>
            </div>
        </div>`;
    }

    
    if (lista.length === 0) {
        document.getElementById('historico').innerHTML += `Não há histórico para o jogador!`;
    }
    else{
        document.getElementById('historico').innerHTML +=`
        ${lista.map(boxHist).join('')}
        `;
    }
}

window.addEventListener("load", function () {
    showHistory();
});