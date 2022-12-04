<?php
    $serverName = "localhost";
    $username = "root";
    $password = "";
    $DBName = "JogoMemoria";

    if(!isset($conn)) {
        try {
            $conn = new PDO("mysql:host=$serverName;dbname=$DBName", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }
?>