<?php
    if (isset($_POST["NomeCompleto"])&&($_POST["Telefone"])&&($_POST["Email"])&&($_POST["Password"])) {
        
        include_once('conexaoDB.php');
        if (isset($conn)) {
            try {
                $sql = "UPDATE usuario SET nome_completo='" 
                . $_POST["NomeCompleto"] 
                . "', telefone='" 
                . $_POST["Telefone"] 
                . "', email='"
                . $_POST["Email"]
                . "', senha='"
                . $_POST["Password"]
                . "' WHERE username='"
                . $_POST["Username"]
                . "' " ;

                $conn->exec($sql);
                
                //header("Location: ../_pages/principal_jogando.php");
                
                exit();

            } catch (PDOException $e) {
                echo "Ocorreu um erro: " . $e->getMessage();
            }
        }
    }
?>