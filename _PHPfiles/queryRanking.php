<?php
    include_once('conexaoDB.php');

    $rankingData = [];
    $ranking = $conn->query("SELECT * FROM `PartidaJogo` p inner join `Usuario` u on p.id_jogador = u.id where p.id_jogador = u.id ORDER BY pontos desc limit 10");
    while ($linha = $ranking->fetch(PDO::FETCH_ASSOC)){
        array_push($rankingData,$linha);
    } 
?>