<?php

include('conexaoDB.php');

$username = $_POST['Username'];
$password = $_POST['Senha'];

$username = stripcslashes($username);
$password = stripcslashes($password);
$username = mysqli_real_escape_string($con, $username);
$password = mysqli_real_escape_string($con, $password);

$sql = "select *from Usuario where username = '$username'and senha = '$password'";
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$count = mysqli_num_rows($result);

if($count == 1){
echo "<h1><center> Login concluído </center></h1>";
}
else{
echo "<h1>Tente Novamente. Nome ou Senha inválida</h1>";
}

?>