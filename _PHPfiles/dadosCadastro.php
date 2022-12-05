<?php
    if (isset($_POST["Username"])&&($_POST["NomeCompleto"])&&($_POST["datadenascimento"])&&($_POST["CPF"])&&($_POST["Telefone"])&&($_POST["E-mail"])&&($_POST["Password"])) {
        
        include_once('conexaoDB.php');
        if (isset($conn)) {
            $usuario = $_POST["Username"];
            $sql = $conn->query("SELECT count(*) as qnt FROM usuario WHERE username = '$usuario'");
            $res = null;
            while ($linha = $sql->fetch(PDO::FETCH_ASSOC)) 
                $res = $linha['qnt'];

            if ($res == 0) {
                try {
                    $sql = "INSERT INTO usuario VALUES ('','" . $_POST["Username"] . "', '" .
                        $_POST["NomeCompleto"] . "', '" .
                        $_POST["datadenascimento"] . "', '" .
                        $_POST["CPF"] . "', '" .
                        $_POST["Telefone"] . "', '" .
                        $_POST["E-mail"] . "', '" .
                        $_POST["Password"] . "')";

                    $conn->exec($sql);

                    header("Location: ../_pages/login.html");
                    echo "<script>
                        alert('Usuário cadastrado com sucesso!');
                        </script>";
                    exit();

                } catch (PDOException $e) {
                    echo "Ocorreu um erro: " . $e->getMessage();
                }
            }
            else{
                echo "<script>
                    alert('Usuário já existe!');
                    </script>";
                header("Location: ../_pages/cadastro.php");
            }
        }
    }
?>