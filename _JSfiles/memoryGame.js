let dimensao=null;
let modalidade=null;
let qntImg;
let alreadyUsed = [], clickedCards = [], turnedCards = [];
let contentCard = [], pairs=0,idImg = 0, lastClicked=null;
let contentCardRandom = ``, idx;
let intervaloDuracao;
let intervaloTempo;

window.onload = function(){
    
}

function mostrarDimensao(){
    var dimen;

    var radios = document.getElementsByName('dimensao');

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        
        dimen = radios[i].value;
        console.log(dimen);
    
        break;
      }
    }
    if(dimen == "2x2"){
        dimensao =2;
    }
    if(dimen == "4x4"){
        dimensao =4;
    }
    if(dimen == "6x6"){
        dimensao =6;
    }
    if(dimen == "8x8"){
        dimensao =8;
    }

    
}

function mostrarModalidade (){
var mod;

var  mod1 = document.getElementsByName('modalidade');

    for (var i = 0, length = mod1.length; i < length; i++) {
      if (mod1[i].checked) {
        
        mod = mod1[i].value;
        if(mod == "Classica"){
            document.getElementById("caixa-tempo-restante").style.display="none";        
        }
    
        break;
      }
    }
    modalidade = mod;
}

function mostrarDuracao(){
    
    var timer = document.getElementById("dura-p").innerHTML;
    var arr = timer.split(":");
    var min = arr[0];
    var sec = arr[1];

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
        sec++;

        if (sec == 60){
            min++;
            sec = 0;
        }
    }
    
    intervaloDuracao = setInterval(myTimer, 1000);
}

function mostrarTempo(){

    // if(dimen == "2x2"){
    //     var min = 1;
    //     var sec = 00;
    // }
    // if(dimen == "4x4"){
    //     var min = 2;
    //     var sec = 00;
    // }
    // if(dimen == "6x6"){
    //     var min = 4;
    //     var sec = 00;
    // }
    // if(dimen == "8x8"){
    //     var min = 8;
    //     var sec = 00;
    // }

    var min = 0;
    var sec =5;

    function myTimer2(){
       
        if (sec == 0){
            sec = 59;
            min = min -1;
        }
        if (min == 0 && sec==0){
            clearInterval(intervaloTempo);
            clearInterval(intervaloDuracao);

        }

        document.getElementById("tempo-p").innerHTML=  min + ":" + sec;
        sec--;
    }

    intervaloTempo = setInterval(myTimer2, 1000);
}

function jogarNovamente(){
    let imagens = document.getElementsByClassName("img-card");
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].style.visibility = "hidden";
    }
    alreadyUsed = [], clickedCards = [], turnedCards = [];
    contentCard = [], pairs = 0, idImg = 0, lastClicked=null;
    contentCardRandom = ``, idx = 0;
    document.getElementById("fim-jogo").style.visibility = "hidden";

}

function revelarPecas(){
    let imagens = document.getElementsByClassName("img-card");
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].style.visibility = "visible";
    }
}

function recuperarExibicao(){
    let imagens = document.getElementsByClassName("img-card");
    console.log(imagens);
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
        console.log("last clicked: " + lastClicked);
        console.log(imagens[lastClicked]);
        document.getElementById(lastClicked).style.visibility = "visible";
    }
    
}

function checkVictory(){
    if(pairs==qntImg){
        setTimeout(() => { 
            
            document.getElementById("fim-jogo").style.visibility = "visible";
            clearInterval(intervaloDuracao);
        }, 200);
        if(cont == 1000000){
            clearInterval(intervaloDuracao);
        }  
        
    }
}

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

function listaCandies(candies) {
    idImg++;
    return `
    <button class="carta-box" onclick="cardClicked(${idImg})">
        <img class="img-card" id=${idImg} src=${candies.src} alt=${candies.alt}>
    </button>
    `
}

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

function startGame(){
    mostrarDimensao();
    mostrarModalidade();  
    if(modalidade!=null&&dimensao!=null){
        mostrarDuracao();
        mostrarTempo();
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

function sair(){
    window.location.reload(true);
}

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





