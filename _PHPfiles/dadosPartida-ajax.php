<?php
    $dimensao = isset($_POST['dimensao']) ? $_POST['dimensao'] : '';
    $modalidade = isset($_POST['modalidade']) ? $_POST['modalidade'] : '';
    $tempo_partida = isset($_POST['duracao']) ? $_POST['duracao'] : '';
    $pontos = isset($_POST['pontos']) ? $_POST['pontos'] : '';
    $horario_partida = isset($_POST['tempo']) ? $_POST['tempo'] : '';
    $resultado = isset($_POST['resultado']) ? $_POST['resultado'] : '';
    
    //enviar dados para o banco de dados
    include_once('conexaoDB.php');

    if (isset($conn)) {
        try{
            $user = "joao";
            $senha = "123456";

            //seleciona o id usuario logado no banco de dados para usar como PK
            $sql = $conn->query("SELECT id FROM `usuario` WHERE username = '$user' and senha = '$senha'");
            while ($linha = $sql->fetch(PDO::FETCH_ASSOC)) 
                $idUsuarioSQL = $linha['id'];
            
            //salva dados da partida no id do usuario
            $sql = "
            INSERT INTO PartidaJogo
            (id_jogador, pontos, dimensao, modalidade, tempo_partida, resultado, horario_partida)
            VALUES ($idUsuarioSQL, $pontos, '$dimensao', '$modalidade', '$tempo_partida', '$resultado', '$horario_partida');
            ";

            $conn->exec($sql);

            $conn = null;
        }
        catch(PDOException $e){
            echo "Connection failed: " . $e->getMessage();
        }
    }
    else {
        echo "
        <script>
            console.log('Não foi possível fazer o INSERT no banco MySQL.');
        </script>";
    }

    $dadosPartida = [
        'pontos' => $pontos,
        'dimensao' => $dimensao,
        'modalidade' => $modalidade,
        'tempo_partida' => $tempo_partida,
        'resultado' => $resultado,
        'horario_partida' => $horario_partida
    ];

    //mostra os dados
    echo json_encode($dadosPartida);

?>