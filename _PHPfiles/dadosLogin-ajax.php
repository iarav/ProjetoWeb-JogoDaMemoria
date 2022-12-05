<?php
    $user = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['senha']) ? $_POST['senha'] : '';
    $mensagem = [];
    
    //enviar dados para o banco de dados
    include_once('conexaoDB.php');
    
    

    if (isset($conn)) {
        $sql = $conn->query("SELECT count(*) FROM `usuario` WHERE username = '$user' and senha = '$password'");

        if($sql == 0){
            $mensagem = ['login invalido'];
        }else{
            $mensagem = ['login valido'];
        }

        //encerra conexão com DB
        $conn = null;
    }
    
    echo json_encode($mensagem);
?>