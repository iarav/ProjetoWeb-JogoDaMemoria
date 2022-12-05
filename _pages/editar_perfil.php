<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../_CSSfiles/global.css">
    <link rel="stylesheet" href="../_CSSfiles/forms.css">
    <script src="../_JSfiles/forms.js"></script>
    <title>Editar Perfil</title>
</head>

<body>
    <header>
        <h1>Jogo da Memória</h1>
    </header>
    <div id="conteudo">
        <div class="perfilbox">
            
            <div class = "titulo" id="titulo-editar-perfil">
                <a href="principal_jogando.php"><img id = "voltar" src="../images/back-arrow-black.svg" alt="retornar"></a>
                <div>
                    <h2><img src="../images/user-icon.svg" alt="icon nav">Editar Perfil</h2>
                    <hr>
                </div>
                
            </div>

            <!-- <h2><img src="../images/user-icon.svg" alt="icon nav"/> Editar Perfil</h2>
            <hr> -->

            <form method="post" action="../_PHPfiles/EditarPerfil.php" class="d-flex">
                <?php include_once('../_PHPfiles/dadosPerfil.php'); ?>
            </form>
            
        </div>
    </div>
</body>

</html>