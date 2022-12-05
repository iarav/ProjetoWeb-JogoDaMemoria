<?php
    try
    {
        $conn = new PDO("mysql:host=localhost;dbname=JogoMemoria", "root", "");
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
        $sql = "INSERT INTO Usuario VALUES ('" . $_POST["Username"] . "', '" . 
                                            $_POST["NomeCompleto"] . "', '" . 
                                            $_POST["datadenascimento"] . "', '" .
                                            $_POST["CPF"] . "', '" .
                                            $_POST["Telefone"] . "', '" .
                                            $_POST["E-mail"] . "', '" . 
                                            $_POST["Password"] . "')";

        $conn->exec($sql);

        echo $form;
    }
    catch(PDOException $e)
    {
        echo "Ocorreu um erro: " . $e->getMessage();
    }	
?>