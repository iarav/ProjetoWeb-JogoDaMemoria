function eventos() {

    const lista = [
        {
            'doce': '../images/ranking_img1.png',
            'nome': 'João C.',
            'cozimento': '10min',
            'porcoes': '4x4',
            'avaliacao': '100 pts'
        },
        {
            'doce': ' ../images/ranking_img1.png',
            'nome': 'Lucas .',
            'cozimento': '15min',
            'porcoes': '4x4',
            'avaliacao': '120 pts'
        },
        {
            'doce': ' ../images/ranking_img1.png',
            'nome': 'Pedro L.',
            'cozimento': '20min',
            'porcoes': '8x8',
            'avaliacao': '200 pts'
        },
        {
            'doce': '../images/ranking_img1.png',
            'nome': 'Patricia D.',
            'cozimento': '12min',
            'porcoes': '4x4',
            'avaliacao': '90 pts'
        },
        {
            'doce': '../images/ranking_img1.png',
            'nome': 'Sabrina C.',
            'cozimento': '12min',
            'porcoes': '4x4',
            'avaliacao': '100 pts'
        },
        {
            'doce': '../images/ranking_img1.png',
            'nome': 'Fábio F.',
            'cozimento': '11min',
            'porcoes': '4x4',
            'avaliacao': '100 pts'
        },
        {
            'doce': '../images/ranking_img1.png',
            'nome': 'Gabriel F.',
            'cozimento': '10min',
            'porcoes': '4x4',
            'avaliacao': '130 pts'
        },
        {
            'doce': '../images/ranking_img1.png',
            'nome': 'Pedro G.',
            'cozimento': '10min',
            'porcoes': '4x4',
            'avaliacao': '130 pts'
        },
        {
            'doce': '../images/ranking_img1.png',
            'nome': 'Rafael F.',
            'cozimento': '10min',
            'porcoes': '4x4',
            'avaliacao': '130 pts'
        },
        {
            'doce': '../images/ranking_img1.png',
            'nome': 'Gabriel F.',
            'cozimento': '10min',
            'porcoes': '4x4',
            'avaliacao': '130 pts'
        }
    ];

    function listaJogadores(jogador) {
        return `
        <li>
            <div class="coluna1"><img src="${jogador.doce}" alt="candy"><p>${jogador.nome}</p>
                <div class="info_player">
                    <div class="linha_info"><div class="tipo">Nome:</div><div class="dado">João</div></div>
                    <div class="linha_info"><div class="tipo">Dimensão:</div><div class="dado">4x4</div></div>
                    <div class="linha_info"><div class="tipo">Modalidade:</div><div class="dado">Contra Tempo</div></div>
                    <div class="linha_info"><div class="tipo">Duração:</div><div class="dado">10:00</div><div class="tipo">Resultado:</div><div class="dado">Vitória</div></div>
                    <div class="linha_info"><div class="tipo">Data/Hora:</div><div class="dado">11/10/2022 - 12:05</div></div>
                </div>
            </div>
            <div class="coluna2">
                <div class="campo"><img src="../images/ranking_img2.png" alt="time"><p class="tipo">Cozimento:</p><p class="dado">${jogador.cozimento}</p></div>
                <div class="campo, campo2"><img src="../images/ranking_img3.png" alt="cutlery"><p class="tipo">Porções:</p><p class="dado">${jogador.porcoes}</p></div>
                <div class="campo"><img src="../images/ranking_img4.png" alt="rating"><p class="tipo">Avaliação:</p><p class="dado">${jogador.avaliacao}</p></div>
            </div>
        </li>
        <li class="linha"></li>
        `
    }

    document.getElementById('tabela').innerHTML = `
    <li>
        <div class="coluna1"><p>Ingredientes</p></div>
        <div class="coluna2"><p>Modo de preparo</p></div>
    </li>
    ${lista.map(listaJogadores).join('')}
    `;

    nomeJogadores = document.getElementsByClassName('coluna1');
    
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