function listaJogadores(partida) {
    console.log(partida)
    return `
    <li>
        <div class="coluna1"><img src="../images/ranking_img1.png" alt="candy"><p>${partida.username}</p>
            <div class="info_player">
                <div class="linha_info"><div class="tipo">Nome:</div><div class="dado">${partida.nome_completo}</div></div>
                <div class="linha_info"><div class="tipo">Dimensão:</div><div class="dado">${partida.dimensao}</div></div>
                <div class="linha_info"><div class="tipo">Modalidade:</div><div class="dado">${partida.modalidade}</div></div>
                <div class="linha_info"><div class="tipo">Duração:</div><div class="dado">${partida.tempo_partida}</div><div class="tipo">Resultado:</div><div class="dado">${partida.resultado}</div></div>
                <div class="linha_info"><div class="tipo">Data/Hora:</div><div class="dado">${partida.horario_partida}</div></div>
            </div>
        </div>
        <div class="coluna2">
            <div class="campo"><img src="../images/ranking_img2.png" alt="time"><p class="tipo">Cozimento:</p><p class="dado">${partida.tempo_partida}</p></div>
            <div class="campo, campo2"><img src="../images/ranking_img3.png" alt="cutlery"><p class="tipo">Porções:</p><p class="dado">${partida.dimensao}</p></div>
            <div class="campo"><img src="../images/ranking_img4.png" alt="rating"><p class="tipo">Avaliação:</p><p class="dado">${partida.pontos}</p></div>
        </div>
    </li>
    <li class="linha"></li>
    `
}

function eventos(dadosRanking) {
    nomeJogadores = document.getElementsByClassName('coluna1');
    console.log(nomeJogadores)
    
    for (i = 1; i < nomeJogadores.length; i++) {
        nomeJogadores[i].addEventListener('mouseover', function(){
            this.children[2].style.display = "block";
        });
        nomeJogadores[i].addEventListener('mouseout', function(){
            this.children[2].style.display = "none";
        });
    };

}

window.addEventListener("load", function () {
    eventos();
});