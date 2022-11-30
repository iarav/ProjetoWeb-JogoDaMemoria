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

            <form method="post" class="d-flex">
                <div class="txt_field">
                    <input type="text" required id="Username" placeholder="Username" readonly>
                </div>

                <div class="txt_field">
                    <input type="text" required id="NomeCompleto" placeholder="Nome Completo">
                </div>

                <div class="txt_field">
                    <input type="text" required id="Telefone" placeholder="Telefone">
                </div>

                <div class="txt_field">
                    <input type="text" required id="E-mail" placeholder="E-mail">
                </div>

                <div class="txt_field2">
                    <input type="date" required id="datadenascimento" readonly>
                    <input type="text" required id="CPF" placeholder="CPF" readonly>
                </div>

                <div class="txt_field">
                    <input type="password" required id="Password" placeholder="Password">
                </div>

                <p id="preencha-tudo">&#x26A0; Preencha todos os campos para continuar!! </p>

                <div class="Botao_salvar">
                    <a class="salvar" onclick="getUserEdit()">Salvar</a>
                </div>
            </form>
            
        </div>
    </div>
</body>

</html>