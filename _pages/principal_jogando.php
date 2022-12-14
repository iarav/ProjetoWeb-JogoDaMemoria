<?php
    //se a pessoa não escolheu nenhuma cadeira, ou não está logado
    session_start();
    if (!isset($_SESSION['logged'])){
        header('Location:../_pages/login.php', true, 301);
    }
?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina Principal</title>
    <link rel="stylesheet" href="../_CSSfiles/principal.css">
    <link rel="stylesheet" href="../_CSSfiles/global.css">
    <link rel="stylesheet" href="../_CSSfiles/principal_jogando.css">
    <link rel="stylesheet" href="../_CSSfiles/principal_iniciar.css">
    <script src="../_JSfiles/memoryGame.js"></script>
    <script src="../_JSfiles/header.js"></script>
    <script src="../_JSfiles/dadosPartida_ajax.js"></script>

</head>

<body>
    <header>
        <h1>Jogo da Memória</h1>
        <a class="ranking-a" href="./ranking.php">
            <p>Ranking Global</p>
        </a>
        <div id='nav' onclick="abrirLogout()">
            <div id="user">
                <img src="../images/user-icon.svg" alt="icon nav">
                <p><?php echo $_SESSION['logged'] ?></p>
            </div>
            <div id='logout'>
                <div>
                    <div id="triangulo-para-cima"></div>
                    <div id="textos">
                        <a href="./editar_perfil.php">Editar perfil</a>
                        <a href="./login.php?logout=true">Sair</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div id="conteudo">
        <div id="historico">
            <h2>Histórico:</h2>
        </div>
        <div id="jogo">
            <div id="iniciar-jogo">
                <h2>Iniciar Jogo</h2>
                <hr>
                <form id="forms">
                    <div class="dimensao">
                        <h3>Dimensão:</h3>
                            <input type="radio" id="2x2" name="dimensao" value="2x2">
                            <label for="2x2">2x2</label>
                            <input type="radio" id="4x4" name="dimensao" value="4x4">
                            <label for="4x4">4x4</label>
                            <input type="radio" id="6x6" name="dimensao" value="6x6">
                            <label for="6x6">6x6</label>
                            <input type="radio" id="8x8" name="dimensao" value="8x8">
                            <label for="8x8">8x8</label>
                    </div>
                    <div id="modalidade" class="modalidade">
                        <h3>Modalidade:</h3>
                            <input type="radio" id="Classica" name="modalidade" value="Classica">
                            <label for="Classica">Clássica</label>
                            <input type="radio" id="ContraTempo" name="modalidade" value="Contra o Tempo">
                            <label for="ContraTempo">Contra o Tempo</label>
                    </div>
                    <p id="preencha-tudo">&#x26A0; Preencha todos os campos para continuar!! </p>
                    <div class="botao-jogar">
                        <div class="jogar">
                            <div id="botao" onclick="startGame()">Iniciar Jogo</div>
                        </div>
                    </div>
                </form>
            </div>
            <div id="jogando">
                <div id="jogo-box">
                    <div id="fim-jogo">
                        <h2 id="winOrLose"></h2>
                        <div class="linha-fim-jogo">
                            <div class="linha-fim">
                                <p class="p-atributo">Dimensão: </p>
                                <p id="dim-valor" class="p-info"></p>
                            </div>
                            <div class="linha-fim">
                                <p class="p-atributo">Modalidade: </p>
                                <p id="mod-valor" class="p-info"></p>
                            </div>
                        </div>
                        <div class="linha-fim-jogo">
                            <div class="linha-fim">
                                <p class="p-atributo">Duração: </p>
                                <p id="dur-valor" class="p-info"></p>
                            </div>
                            <div class="linha-fim">
                                <p class="p-atributo">Data/Hora: </p>
                                <p id="dat-valor" class="p-info"></p>
                            </div>
                        </div>
                        <div class="linha-fim" id="pont-final">
                            <p class="p-atributo">Pontuação Final: </p>
                            <p id="pont-valor" class="p-info"></p>
                        </div>
                        <div class="botoes-fim">
                            <button id="sair" onclick="sair()">
                               Sair
                            </button>
                            <button id="jogar-novamente" onclick="jogarNovamente()">
                                Jogar Novamente 
                            </button>
                        </div>
                    </div>

                    <div class="cartas-memoria">
                        <div id="cartas-2x2">
                        </div>
                        <div id="cartas-4x4">
                        </div>
                        <div id="cartas-6x6">
                        </div>
                        <div id="cartas-8x8">
                        </div>
                    </div>
                    <div class="barra-lateral">
                        <div id="caixa-modalidade">
                            <h3>Modalidade:</h3>
                            <p id="modalidade-p"></p>
                        </div>
                        <div id="caixa-duracao">
                            <h3>Duração:</h3>
                            <p id="dura-p">00:00</p>
                        </div>
                        <div id="caixa-config">
                            <h3>Configuração:</h3>
                            <p id="dimensao-p"></p>
                        </div>
                        <div id="caixa-tempo-restante">
                            <h3>Tempo Restante:</h3>
                            <p id="tempo-p"></p>
                        </div>
                    </div>
                </div>
                <div class="botoes">
                    <button class="desistir" onclick="sair()">
                        Desistir
                    </button>
                    <div class="botoes-trapaca">
                        <button onclick="revelarPecas()" id="revelar" type="button">
                            Revelar Peças
                        </button>
                        <button onclick="recuperarExibicao()" id="recuperar" type="button">
                            Recuperar Exibição Normal
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    <?php include_once('../_PHPfiles/dadosUsuario.php'); ?>
    </div>
</body>
</html>