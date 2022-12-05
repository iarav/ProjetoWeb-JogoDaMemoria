<?php
    $user = [$_POST['username'], $_POST['senha']];
    $mensagem = [];
    
    // echo "$user - $password - $res";
    //enviar dados para o banco de dados
    include_once('conexaoDB.php');
    
    // $user = "joa";
    // $password = "123456";
    

    if (isset($conn)) {
        $sql = $conn->query("SELECT count(*) as qnt FROM usuario WHERE username = '$user[0]' and senha = '$user[1]'");
        $res = null;


        while ($linha = $sql->fetch(PDO::FETCH_ASSOC)) 
            $res = $linha['qnt'];
        
        

        if($res == 0){
            $mensagem = ['login invalido'];
        }else{
            $mensagem = ['login valido'];
        }

        //encerra conexão com DB
        $conn = null;
    }
    
    //echo json_encode($mensagem);
    echo json_encode($mensagem);
?>