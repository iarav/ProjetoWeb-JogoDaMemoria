<?php
        include_once('conexaoDB.php');
    if (isset($conn)) {
        if ($_POST["Username"] != '' && $_POST["NomeCompleto"] != '' && $_POST["datadenascimento"] != '' && $_POST["CPF"] != '' && $_POST["Telefone"] != '' &&
                                                                                                            $_POST["E-mail"] != '' && $_POST["Password"] != '') {
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

                    $mensagem = ["Usuário válido"];

                } catch (PDOException $e) {
                    echo "Ocorreu um erro: " . $e->getMessage();
                }
            } else {
                $mensagem = ["Usuário inválido"];
            }
        }
        else{
        $mensagem = ["Dados incompletos"];
        }

        echo json_encode($mensagem);
    }
?>