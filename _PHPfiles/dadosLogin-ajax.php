<?php

$username = isset($_POST['Username']) ? $_POST['Username'] : '';
$senha = isset($_POST['Senha']) ? $_POST['Senha'] : '';

$sql = $conn->query("SELECT count(*) FROM `usuario` WHERE username = '$username' and senha = '$senha'");
if($sql == 0){
    echo json_encode(array("mensagem" => "Login invalido!"));
}else{
    echo json_encode(array("mensagem" => "Login valido!"));
}

?>