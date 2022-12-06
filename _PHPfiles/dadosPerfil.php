<?php
    #Carregara historico de Partidas na página "principal_jogando.php"

    include_once('conexaoDB.php');

    if (isset($conn)) {
        $user = "iv";

        //seleciona o id usuario logado no banco de dados para usar como PK
        $sql = $conn->query("SELECT * FROM `usuario` WHERE username = '$user'");

        while ($linha = $sql->fetch(PDO::FETCH_ASSOC)) {
            //reserva os dados de cada linha retornada do sql em variáveis
            $nomeCompleto = $linha['nome_completo'];
            $dataNasc = $linha['data_nascimento'];
            $cpf = $linha['cpf'];
            $telefone = $linha['telefone'];
            $email = $linha['email'];
            $senha = $linha['senha'];
            
        };
        echo "
        <script>
            sessionStorage.setItem('user', '" . $user . "');
            sessionStorage.setItem('nome_completo', '" . $nomeCompleto . "');
            sessionStorage.setItem('telefone', '" . $telefone . "');
            sessionStorage.setItem('email', '" . $email . "');
            sessionStorage.setItem('senha', '" . $senha . "');
        </script>";
        

        //Fecha conexão com banco de dados 
        $conn = NULL;

    }
    else {
        echo "
        <script>
            console.log('Não foi possível conectar ao banco MySQL.');
        </script>";
    }

   
    
    //Mostra o histórico na página "principal_jogando.php"
    echo "
        <div class='txt_field'>
            <input type='text' required id='Username' value='" . $user . "' placeholder='Username'  name='Username' readonly>
        </div>

        <div class='txt_field'>
            <input type='text' required id='NomeCompleto' value='" . $nomeCompleto . "' placeholder='Nome Completo' name='NomeCompleto'>
        </div>

        <div class='txt_field'>
            <input type='text' required id='Telefone' value='" . $telefone . "' placeholder='Telefone' name='Telefone'>
        </div>

        <div class='txt_field'>
            <input type='text' required id='E-mail' value='" . $email . "' placeholder='E-mail' name='Email'>
        </div>

        <div class='txt_field2'>
            <input type='date' required id='datadenascimento' value='" . $dataNasc . "' readonly>
            <input type='text' required id='CPF' value='" . $cpf . "' placeholder='CPF' readonly>
        </div>

        <div class='txt_field'>
            <input type='password' required id='Password' value='" . $senha . "' placeholder='Password' name='Password'>
        </div>
    ";
?>