<?php
    $mensagem = [];
    $dados = [$_POST["nome_completo"], $_POST["telefone"], $_POST["email"], $_POST["senha"], $_POST["user"]];

    include_once('conexaoDB.php');
    if (isset($conn)) {
        try {
            $sql = "UPDATE usuario SET nome_completo='" 
            . $dados[0] 
            . "', telefone='" 
            . $dados[1]
            . "', email='"
            . $dados[2]
            . "', senha='"
            . $dados[3]
            . "' WHERE username='"
            . $dados[4]
            . "' " ;

            $conn->exec($sql);
            
            $mensagem = ['atualizado com sucesso'];
            

        } catch (PDOException $e) {
            $mensagem = ['ocorreu um erro'];
        }
    }
    echo json_encode($mensagem);
?>