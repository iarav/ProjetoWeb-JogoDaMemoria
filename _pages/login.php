<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../_CSSfiles/forms.css">
    <link rel="stylesheet" href="../_CSSfiles/global.css">
    <script src="../_JSfiles/forms.js"></script>
    <script src="../_JSfiles/login_ajax.js"></script>
</head>
<?php
    session_start();
    if(!isset($_GET["logout"]))
        $_GET["logout"] = false;
    if ($_GET["logout"] == "true") {
        session_destroy();
        echo "<script>alert('Sessão destruida')</script>";
    }
?>
<body>
    <header>
        <h1>Jogo da Memória</h1>
    </header>
    <div id="conteudo">
        <div class="loginbox">
            <h2>Login</h2>
            <hr style="height:1px;left:437px;top:251px;border-width:0;width:405.03px;background-color:rgb(0, 0, 0, 0.6)">

            <form method="post" class="d-flex">

                <div class="txt_field">
                    <input type="text" required id="Username" placeholder="Username" name="username">
                </div>

                <div class="txt_field">
                    <input type="password" required id="Senha" placeholder="Senha" name="senha">
                </div>

                <p id="preencha-tudo">&#x26A0; Preencha todos os campos para continuar!! </p>

                <div class="Sem_cadastro">
                    <a href="./cadastro.php">Não tem cadastro? Cadastre-se aqui</a>
                </div>

                <div class="Botao_entrar">
                    <div class="entrar">
                        <input type="button" id="entrar" onclick="getUserLog()">Entrar</input>
                    </div>
                </div>
            </form>
        </div>
    </div>

</body>
</html>