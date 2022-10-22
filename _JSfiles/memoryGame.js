const dimensao = 8;
const qntImg = (dimensao*dimensao)/2;
let alreadyUsed = [], clickedCards = [], turnedCards = [];
let contentCard = [], pairs=0,idImg = 0, lastClicked=null;
let contentCardRandom = ``, idx;

window.onload = function(){
    insertCards2();
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
        }, 200);
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

// function verifyBoard(candie, arr, x){
//     let inBoard = false;
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i]==candie.id){
//             inBoard=true;
//         }
//     }
//     if(inBoard==false){
//         contentCard += listaCandies(candie);
//         arr.push(candie.id);
//     }else{      
//         let idran = getRandomId(x);
//         verifyBoard(candies[idran],arr,x);
//     }
// }

// function getRandomId(x){
//     //Para pegar json aleatório:
//     if(x==1){
//         return Math.floor(Math.random() * qntImg);
//     }else{
//         return (Math.floor(Math.random() * alreadyUsed.length));
//     }
// }

// function insertCards(){
//     let idTab = getId();
//     document.getElementById(idTab).style.display = "grid";
//     for(let i = 0; i<qntImg; i++){
//         let idran = getRandomId(1);
//         verifyBoard(candies[idran], alreadyUsed,1);
//     }
//     for(let i = 0; i<qntImg; i++){
//         const card = getRandomId(2);
//         verifyBoard(candies[card], cards,2);
//     }
//     console.log(contentCard);
//     document.getElementById(idTab).innerHTML = contentCard;
// }

function insertCards2(){
    let idTab = getId();
    document.getElementById(idTab).style.display = "grid";
    for(let i = 0; i<qntImg; i++){
        contentCard.push(listaCandies(candies[i]));
        contentCard.push(listaCandies(candies[i]));
    }

    for(let i = 0; i<qntImg*2;i++){
        idx = Math.floor(Math.random() * idImg);
        verifyBoard2(idx);
    }
    document.getElementById(idTab).innerHTML = contentCardRandom;
}

function verifyBoard2(idx){
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
        verifyBoard2(idx);
    }
}

function startGame(){
    document.getElementById("iniciar-jogo").style.display = "none";
    document.getElementById("jogando").style.display = "flex";
}

function sair(){
    document.getElementById("jogando").style.display = "none";
    document.getElementById("iniciar-jogo").style.display = "flex";
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





