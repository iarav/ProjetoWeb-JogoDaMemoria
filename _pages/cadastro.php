<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../_CSSfiles/global.css">
    <link rel="stylesheet" href="../_CSSfiles/forms.css">
    <script src="../_JSfiles\cadastro_ajax.js"></script>
    <title>Cadastro</title>
</head>

<body>
    <header>
        <h1>Jogo da Memória</h1>
    </header>
    <div id="conteudo">
        <div class="cadastrobox">
            <div class = "titulo">
                <a href="./login.html"><img id = "voltar" src="../images/back-arrow-black.svg" alt="retornar"></a>
                <div>
                    <h2>Cadastro</h2>
                </div>
            </div>
            <form method="post" class="d-flex">
                <div class="txt_field">
                    <input type="text" required id="Username" placeholder="Username" name="Username">
                </div>

                <div class="txt_field">
                    <input type="text" required id="NomeCompleto" placeholder="Nome Completo" name="NomeCompleto">
                </div>

                <div class="txt_field">
                    <input type="text" required id="Telefone" placeholder="Telefone" name="Telefone">
                </div>

                <div class="txt_field">
                    <input type="text" required id="E-mail" placeholder="E-mail" name="E-mail">
                </div>

                <div class="txt_field2">
                    <input type="date" required id="datadenascimento" name="datadenascimento">
                    <input type="text" required id="CPF" placeholder="CPF" name="CPF">
                </div>

                <div class="txt_field">
                    <input type="password" required id="Password" placeholder="Password" name="Password">
                </div>

                <p id="preencha-tudo">&#x26A0; Preencha todos os campos para continuar!! </p>

                <div>
                    <input type="submit" id="cadastrar" value="Cadastrar">
                </div>
            </form>
        </div>
    </div>
</body>

</html>