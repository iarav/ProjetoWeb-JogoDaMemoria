<?php
    include_once('conexaoDB.php');

    if (isset($conn)) {
        $user = "joao";
        $senha = "123456";

        //seleciona o id usuario logado no banco de dados para usar como PK
        $idUsuarioSQL = 
        "SELECT id_jogador FROM usuario WHERE
         user = '$user' AND senha = '$senha'";

        //seleciona o nome usuario logado no banco de dados para usar como PK
        $nickUsuarioSQL = 
        "SELECT username FROM usuario WHERE
         user = '$user' AND senha = '$senha'";

        //retorna dados da partida do usuário logado
        $dadosPartidaSQL = 
        "select * from PartidaJogo where id_jogador = $idUsuarioSQL";

        //retorna um array com os resultados do sql
        $sth = $conn->prepare($dadosPartidaSQL);
        #$resultado = mysql_fetch_assoc($dadosPartidaSQL);
        //retorna total de linhas da tabela, ou seja, total de partidas no histórico
        $linhas = mysql_num_rows($dadosPartidaSQL);

        do {
            echo $nickUsuarioSQL;
            echo $resultado['dimensao'];
            echo $resultado['modalidade'];
            echo $resultado['tempo_partida'];
            echo $resultado['resultado'];
            echo $resultado['pontos'];
            echo $resultado['horario_partida'];
        } while ($resultado = mysql_fetch_assoc($dadosPartidaSQL));

        //libera dados da memória
        mysql_free_result($resultado);
    }
    else {
        echo "Não foi possível conectar ao banco MySQL."; exit;
    }
?>