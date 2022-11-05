//Váriaveis de tempo atual:
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let minutes = date.getMinutes();
let hour = date.getHours();

//variaveis obtidas do formulário
let dimensao=null, modalidade=null;

//variaveis do jogo
let qntImg;
let alreadyUsed = [], clickedCards = [], turnedCards = [];
let contentCard = [], pairs=0,idImg = 0, lastClicked=null;
let contentCardRandom = ``, idx;

//váriaveis para contagem de tempo
let intervaloDuracao;
let intervaloTempo;
let min,minContra,sec,secContra;
let duracao=0;

window.addEventListener("load", function () {
    showHistory();
});

//função chamada ao clicar no botão de iniciar jogo
function startGame(){
    mostrarDimensao();
    mostrarModalidade();  
    if(modalidade!=null&&dimensao!=null){
        mostrarDuracao();
        document.getElementById('modalidade-p').innerHTML = modalidade;
        document.getElementById('dimensao-p').innerHTML = dimensao + "x" + dimensao;
        document.getElementById("iniciar-jogo").style.display = "none";
        document.getElementById("jogando").style.display = "flex";
        qntImg = (dimensao*dimensao)/2;
        insertCards();
    }else{
        document.getElementById("preencha-tudo").style.display="block";
        document.getElementById("preencha-tudo").style.animation="none";
        setTimeout(() => document.getElementById("preencha-tudo").style.animation="preencha 0.3s linear", 5);
    }
}

//função de verificar a fimensão do jogo
function mostrarDimensao(){
    var dimen;
    var radios = document.getElementsByName('dimensao');

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        dimen = radios[i].value;
        break;
      }
    }
    if(dimen == "2x2"){
        dimensao = 2;
        minContra = 0;
        secContra = 10;
    }
    if(dimen == "4x4"){
        dimensao = 4;
        minContra = 0;
        secContra = 40;
    }
    if(dimen == "6x6"){
        dimensao = 6;
        minContra = 1;
        secContra = 30;
    }
    if(dimen == "8x8"){
        dimensao =8;
        minContra = 5;
        secContra = 0;
    }
}

//função de verificar a modalidade do jogo
function mostrarModalidade (){
var mod;
var mod1 = document.getElementsByName('modalidade');

    for (var i = 0, length = mod1.length; i < length; i++) {
      if (mod1[i].checked) {
        
        mod = mod1[i].value;
        if(mod == "Classica"){
            document.getElementById("caixa-tempo-restante").style.display="none";        
        }
    
        if (mod == "Contra o Tempo"){
            mostrarTempo();
        }
        break;
      }
    }
    modalidade = mod;
}

//função de contar a duração do jogo
function mostrarDuracao(){ 
    var timer = document.getElementById("dura-p").innerHTML;
    var arr = timer.split(":");
    min = arr[0];
    sec = arr[1];

    function myTimer() {
        let strmin = '', strsec='';
        if(sec<10 && sec!=="00"){
            strsec = '0';
        }else{
            strsec = '';
        }
    
        if(min<10 && min!="00"){
            strmin = '0';
        }else{
            strmin = '';
        }

        document.getElementById("dura-p").innerHTML= strmin + min + ":" + strsec + sec;
        duracao = strmin + min + ":" + strsec + sec;
        sec++;

        if (sec == 60){
            min++;
            sec = 0;
        }
    }
    intervaloDuracao = setInterval(myTimer, 1000);
}

//função de contar o contra tempo do jogo
function mostrarTempo(){

    function myTimer2(){

        if (secContra == -1){
            secContra = 59;
            minContra = minContra -1;
        }
        if (minContra == 0 && secContra==0){
            clearInterval(intervaloTempo);
            clearInterval(intervaloDuracao);
            checkVictory();
        }

        let strmin = '', strsec='';
        if(secContra<10 && secContra!=="00"){
            strsec = '0';
        }else{
            strsec = '';
        }
    
        if(minContra<10 && minContra!="00"){
            strmin = '0';
        }else{
            strmin = '';
        }

        document.getElementById("tempo-p").innerHTML=  strmin + minContra + ":" + strsec + secContra;
        secContra--;
    }

    intervaloTempo = setInterval(myTimer2, 1000);
}

//funçaõ que mostra as cartas do jogo
function revelarPecas(){
    let imagens = document.getElementsByClassName("img-card");
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].style.visibility = "visible";
    }
}

//função que recupera a exibição de antes de clicar em revelar peças
function recuperarExibicao(){
    let imagens = document.getElementsByClassName("img-card");
    for (let i = 0; i < imagens.length; i++) {
        let x = false;
        for(let j = 0; j < turnedCards.length; j++){
            if(imagens[i].id==turnedCards[j]){
                x = true;
            }
        }
        if(!x){
            imagens[i].style.visibility = "hidden";
        }
    }
    if(lastClicked!=null){
        document.getElementById(lastClicked).style.visibility = "visible";
    }
}

//função que checa se o jogador venceu ou perdeu o jogo
function checkVictory(){
    if(pairs==qntImg){
        setTimeout(() => { 
            document.getElementById("winOrLose").innerHTML = "Você Ganhou!";
            caixaTexto()
            document.getElementById("fim-jogo").style.visibility = "visible";
            clearInterval(intervaloDuracao);
            clearInterval(intervaloTempo);
            addHistory();
        }, 200);
    }
    if(minContra ==0 && secContra == 0){
        setTimeout(() => { 
            document.getElementById("winOrLose").innerHTML = "Você Perdeu!";
            caixaTexto();
            document.getElementById("fim-jogo").style.visibility = "visible";
            clearInterval(intervaloDuracao);
            clearInterval(intervaloTempo);
        }, 200);
    }
}

//função para quando uma carta é selecionada
function cardClicked(id){
    if(document.getElementById(id).style.visibility!="visible"){
        document.getElementById(id).style.visibility="visible";
        clickedCards.push(id);
        if(clickedCards.length==2){
            lastClicked = null;
            if(document.getElementById(clickedCards[0]).src==document.getElementById(clickedCards[1]).src){
                turnedCards.push(clickedCards[0]);
                turnedCards.push(clickedCards[1]);
                pairs++;
                clickedCards = [];
                checkVictory();
            }else{
                let card1 = clickedCards[0], card2 = clickedCards[1];
                clickedCards = [];
                setTimeout(() => { 
                    document.getElementById(card1).style.visibility="hidden";
                    document.getElementById(card2).style.visibility="hidden";
                }, 600);
            }
        }
        if(clickedCards.length==1){
            lastClicked = id;
        }
    }
}

//função para pegar o id de acordo com a dimensão
function getId(){
    switch(dimensao){
        case 2:
            return "cartas-2x2";
        case 4:
            return "cartas-4x4";
        case 6:
            return "cartas-6x6";
        case 8:
            return "cartas-8x8";
        default:
            console.log("Erro identificando dimensao");
    }
}

//função que retorna uma carta em html
function listaCandies(candies) {
    idImg++;
    return `
    <button class="carta-box" onclick="cardClicked(${idImg})">
        <img class="img-card" id=${idImg} src=${candies.src} alt=${candies.alt}>
    </button>
    `
}

//função que insere as cartas no jogo
function insertCards(){
    let idTab = getId();
    document.getElementById(idTab).style.display = "grid";
    for(let i = 0; i<qntImg; i++){
        contentCard.push(listaCandies(candies[i]));
        contentCard.push(listaCandies(candies[i]));
    }

    for(let i = 0; i<qntImg*2;i++){
        idx = Math.floor(Math.random() * idImg);
        verifyBoard(idx);
    }
    document.getElementById(idTab).innerHTML = contentCardRandom;
}

//função que verifica as cartas no jogo e as situação delas
function verifyBoard(idx){
    let inBoard = false;
    for (let i = 0; i < alreadyUsed.length; i++){
        if(alreadyUsed[i]==idx){
            inBoard=true;
        }
    }
    if(inBoard==false){
        alreadyUsed.push(idx);
        contentCardRandom += contentCard[idx];
    }else{
        idx = Math.floor(Math.random() * idImg);
        verifyBoard(idx);
    }
}

//função que altera a div de fim de jogo
function caixaTexto(){
    let currentDate = `${day}/${month}/${year} - ${hour}:${minutes}`;
    document.getElementById("dim-valor").innerHTML = dimensao + "x" + dimensao;
    document.getElementById("mod-valor").innerHTML = modalidade;
    document.getElementById("dur-valor").innerHTML = duracao ;
    document.getElementById("pont-valor").innerHTML = pairs + "pts";
    document.getElementById("dat-valor").innerHTML = currentDate;
}

//função que recomeça o jogo com as mesmas configurações
function jogarNovamente(){ 
    document.getElementById("dura-p").innerHTML = "00:00";
    let imagens = document.getElementsByClassName("img-card");       
    mostrarDimensao();
    mostrarModalidade();
    mostrarDuracao();
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].style.visibility = "hidden";
    }
    alreadyUsed = [], clickedCards = [], turnedCards = [];
    contentCard = [], pairs = 0, idImg = 0, lastClicked=null;
    contentCardRandom = ``, idx = 0;
    document.getElementById("fim-jogo").style.visibility = "hidden";
}

//função que sai do jogo e volta para o formulário inicial
function sair(){
    window.location.reload(true);
}

//função que adiciona o resultado do jogo no histórico
function addHistory(){

    const lista  = [
        {
            'nome':'Luis Francisco',
            'dimensao':'4x4',
            'modalidade':'Contra o Tempo',
            'duracao':'10:00',
            'resultado':'Derrota',
            'data_hora':'20/06/2022 - 12:05'
        },
    ]

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

    document.getElementById('historico').innerHTML +=`
    ${lista.map(boxHist).join('')}
    `;
}

//função que mostra o histórico do jogador
function showHistory(){

    const lista  = [
        {
            'nome':'Joao da Cunha',
            'dimensao':'4x4',
            'modalidade':'Contra o Tempo',
            'duracao':'10:00',
            'resultado':'Derrota',
            'data_hora':'20/06/2022 - 12:05'
        },
        {
            'nome':'Joao da Cunha',
            'dimensao':'4x4',
            'modalidade':'Contra o Tempo',
            'duracao':'10:00',
            'resultado':'Derrota',
            'data_hora':'20/06/2022 - 12:05'
        },
        {
            'nome':'Joao da Cunha',
            'dimensao':'4x4',
            'modalidade':'Contra o Tempo',
            'duracao':'10:00',
            'resultado':'Derrota',
            'data_hora':'20/06/2022 - 12:05'
        },
        {
            'nome':'Joao da Cunha',
            'dimensao':'4x4',
            'modalidade':'Contra o Tempo',
            'duracao':'10:00',
            'resultado':'Derrota',
            'data_hora':'20/06/2022 - 12:05'
        },
        {
            'nome':'Joao da Cunha',
            'dimensao':'4x4',
            'modalidade':'Contra o Tempo',
            'duracao':'10:00',
            'resultado':'Derrota',
            'data_hora':'20/06/2022 - 12:05'
        },
        {
            'nome':'Joao da Cunha',
            'dimensao':'4x4',
            'modalidade':'Contra o Tempo',
            'duracao':'10:00',
            'resultado':'Derrota',
            'data_hora':'20/06/2022 - 12:05'
        },
        {
            'nome':'Joao da Cunha',
            'dimensao':'4x4',
            'modalidade':'Contra o Tempo',
            'duracao':'10:00',
            'resultado':'Derrota',
            'data_hora':'20/06/2022 - 12:05'
        }
    ];

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

    document.getElementById('historico').innerHTML +=`
    ${lista.map(boxHist).join('')}
    `;
}

//contante com as informaçoes de todos os doces e suas imagens usados no jogo
const candies = [
    {
        'id':1,
        'src': '../images/memorygame/algodaoDoce.jpg',
        'alt': 'algodão doce'
    },
    {
        'id':2,
        'src': '../images/memorygame/açai.jpg',
        'alt': 'Açaí'
    },
    {
        'id':3,
        'src': '../images/memorygame/bala.png',
        'alt': 'Bala'
    },
    {
        'id':4,
        'src': '../images/memorygame/pancake.png',
        'alt': 'Panqueca'
    },
    {
        'id':5,
        'src': '../images/memorygame/balaGoma.jpg',
        'alt': 'Bala de Goma'
    },
    {
        'id':6,
        'src': '../images/memorygame/bengalaDoce.png',
        'alt': 'Bengala Doce'
    },
    {
        'id':7,
        'src': '../images/memorygame/waffles.png',
        'alt': 'Waffles'
    },
    {
        'id':8,
        'src': '../images/memorygame/brigadeiro.png',
        'alt': 'Brigadeiro'
    },
    {
        'id':9,
        'src': '../images/memorygame/cake.png',
        'alt': 'Bolo'
    },
    {
        'id':10,
        'src': '../images/memorygame/pirulitos.png',
        'alt': 'Pirulitos'
    },
    {
        'id':11,
        'src': '../images/memorygame/chichletes.jpg',
        'alt': 'Chicletes'
    },
    {
        'id':12,
        'src': '../images/memorygame/chiclete.png',
        'alt': 'Chiclete'
    },
    {
        'id':13,
        'src': '../images/memorygame/chocolate.png',
        'alt': 'Chocolate'
    },
    {
        'id':14,
        'src': '../images/memorygame/chocolateComMorango.jpg',
        'alt': 'Chocolate com Morango'
    },
    {
        'id':15,
        'src': '../images/memorygame/churros.png',
        'alt': 'Churros'
    },
    {
        'id':16,
        'src': '../images/memorygame/coockie.png',
        'alt': 'Coockie'
    },
    {
        'id':17,
        'src': '../images/memorygame/cupcake.jpg',
        'alt': 'Cupcake'
    },
    {
        'id':18,
        'src': '../images/memorygame/donut.png',
        'alt': 'Donut'
    },
    {
        'id':19,
        'src': '../images/memorygame/icecream.png',
        'alt': 'Sorvete'
    },
    {
        'id':20,
        'src': '../images/memorygame/jujuba.png',
        'alt': 'Jujuba'
    },
    {
        'id':21,
        'src': '../images/memorygame/macaAmor.svg',
        'alt': 'Maça do Amor'
    },
    {
        'id':22,
        'src': '../images/memorygame/marshmellow.png',
        'alt': 'Marshmellow'
    },
    {
        'id':23,
        'src': '../images/memorygame/minhoquinha.jpg',
        'alt': 'Minhoquinha'
    },
    {
        'id':24,
        'src': '../images/memorygame/pacoca.jpg',
        'alt': 'Paçoca'
    },
    {
        'id':25,
        'src': '../images/memorygame/balacoracao.jpg',
        'alt': 'Bala de Coração'
    },
    {
        'id':26,
        'src': '../images/memorygame/peDeMoleque.webp',
        'alt': 'Pé de Moloque'
    },
    {
        'id':27,
        'src': '../images/memorygame/picole.png',
        'alt': 'Picole'
    },
    {
        'id':28,
        'src': '../images/memorygame/pipocaDoce.jpg',
        'alt': 'Pipoca Doce'
    },
    {
        'id':29,
        'src': '../images/memorygame/candies.jpg',
        'alt': 'Doces'
    },
    {
        'id':30,
        'src': '../images/memorygame/pudim.jpg',
        'alt': 'Pudim'
    },
    {
        'id':31,
        'src': '../images/memorygame/ursoGoma.jpg',
        'alt': 'Urso de Goma'
    },
    {
        'id':32,
        'src': '../images/memorygame/bidu.jpg',
        'alt': 'Bidu'
    }
];





