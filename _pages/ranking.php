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
    <link rel="stylesheet" href="../_CSSfiles/global.css">
    <link rel="stylesheet" href="../_CSSfiles/ranking.css">
    <link rel="stylesheet" href="../_CSSfiles/wrapper_ranking.css">
    <script src="../_JSfiles/ranking.js"></script>
    <script src="../_JSfiles/header.js"></script>
    <title>Jogo da Memória | Ranking</title>
</head>

<body>
    <header>
        <h1>Jogo da Memória</h1>
        <a class="ranking-a" href="./principal_jogando.php">
            <p>Página do Jogo</p>
        </a>
        <div id='nav' onclick="abrirLogout()">
            <div id="user">
                <img src="../images/user-icon.svg" alt="icon nav">
                <p><?php echo $_SESSION['logged'] ?></p>
            </div>
            <div id='logout'>
                <div>
                    <div id="textos">
                        <a href="./editar_perfil.php">Editar perfil</a>
                        <a href="./login.php?logout=true">Sair</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div id="conteudo">
        <div id="painel">
            <div id="titulo">
                <a href="principal_jogando.php"><img id="voltar" src="../images/back-arrow-pink.svg" alt="retornar"></a>
                <div>
                    <img src="../images/bolinho.svg" alt="bolinho">
                    <h1>Ranking</h1>
                </div>

            </div>
            <ul id="tabela">
                <?php include_once('../_PHPfiles/queryRanking.php'); ?>
                <script>
                    let dadosRanking = (<?= json_encode($rankingData) ?>)
                    let html = `   <li>
                        <div class="coluna1"><p>Ingredientes</p></div>
                            <div class="coluna2"><p>Modo de preparo</p></div>
    </li > `
                    for (let i = 0; i < dadosRanking.length; i++) {
                        html += listaJogadores(dadosRanking[i]);
                    }
                    document.getElementById("tabela").innerHTML = html
                </script>
            </ul>
        </div>
    </div>
</body>

</html>