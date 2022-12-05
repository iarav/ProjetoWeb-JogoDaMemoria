<?php
    if (isset($_POST["Username"])&&($_POST["NomeCompleto"])&&($_POST["datadenascimento"])&&($_POST["CPF"])&&($_POST["Telefone"])&&($_POST["E-mail"])&&($_POST["Password"])) {
        $usuario = $_POST["Username"];
        $query = "SELECT count(*) FROM  `usuario`  WHERE `Username`= $usuario";
        if ($query == 0) {
            try {
                $conn = new PDO("mysql:host=localhost;dbname=jogomemoria", "root", "");
                $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                $sql = "INSERT INTO usuario VALUES ('','" . $_POST["Username"] . "', '" .
                    $_POST["NomeCompleto"] . "', '" .
                    $_POST["datadenascimento"] . "', '" .
                    $_POST["CPF"] . "', '" .
                    $_POST["Telefone"] . "', '" .
                    $_POST["E-mail"] . "', '" .
                    $_POST["Password"] . "')";

                $conn->exec($sql);

                header("Location: login.html");
                exit();

            } catch (PDOException $e) {
                echo "Ocorreu um erro: " . $e->getMessage();
            }
        }
        else{
            echo "<script>
                alert('Usuário já existe!');
                </script>";
        }
    }
?>