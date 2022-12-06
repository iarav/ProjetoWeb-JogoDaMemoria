<?php 
    //da start em sessão
    session_start();

    $user = [$_POST['username'], $_POST['senha']];
    $mensagem = [];
    $_SESSION['logged'] = null;
    //cria conexão cm DB
    include_once('conexaoDB.php');
    
    if($user[0]!=''&&$user[1]!=''){
        if (isset($conn)) {
            $sql = $conn->query("SELECT count(*) as qnt FROM usuario WHERE username = '$user[0]' and senha = '$user[1]'");
            $res = null;

            while ($linha = $sql->fetch(PDO::FETCH_ASSOC)) 
                $res = $linha['qnt'];
            
            if($res == 0){
                $mensagem = ['login invalido'];
            }else{
                $mensagem = ['login valido'];
                //cria a var "logged" para as outras paginas
                $_SESSION['logged'] = $user[0];
            }

            //encerra conexão com DB
            $conn = null;
        }
    }else{
        $mensagem = ['dados incompletos'];
    }
    
    //echo json_encode($mensagem);
    echo json_encode($mensagem);
?>