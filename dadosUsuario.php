<?php
    include_once('conexaoDB.php');

    if (isset($conn)) {
        $user = "joao";
        $senha = "123456";

        //seleciona o id usuario logado no banco de dados para usar como PK
        $sql = $conn->query("SELECT id FROM `usuario` WHERE username = '$user' and senha = '$senha'");
        while ($linha = $sql->fetch(PDO::FETCH_ASSOC)) 
            $idUsuarioSQL = $linha['id'];

        //seleciona o nome usuario logado no banco de dados para usar como PK
        $sql = $conn->query("SELECT username FROM `usuario` WHERE id = $idUsuarioSQL");
        while ($linha = $sql->fetch(PDO::FETCH_ASSOC)) 
            $nickUsuarioSQL = $linha['username'];

        //retorna dados da partida do usuário logado
        $sql = $conn->query("SELECT * FROM PartidaJogo WHERE id_jogador = $idUsuarioSQL");
        while ($linha = $sql->fetch(PDO::FETCH_ASSOC)) {
            echo $nickUsuarioSQL;
            echo $linha['dimensao'];
            echo $linha['modalidade'];
            echo $linha['tempo_partida'];
            echo $linha['resultado'];
            echo $linha['pontos'];
            echo $linha['horario_partida'];
        };
        
    }
    else {
        echo "Não foi possível conectar ao banco MySQL."; exit;
    }
?>