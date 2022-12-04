<?php
    #Carregara historico de Partidas na página "principal_jogando.php"

    include_once('conexaoDB.php');

    if (isset($conn)) {
        $user = "joao";
        $senha = "123456";

        //seleciona o id usuario logado no banco de dados para usar como PK
        $sql = $conn->query("SELECT id FROM `usuario` WHERE username = '$user' and senha = '$senha'");
        while ($linha = $sql->fetch(PDO::FETCH_ASSOC)) 
            $idUsuarioSQL = $linha['id'];

        //seleciona o nome usuario logado no banco de dados para usar como PK
        $sql = $conn->query("SELECT username FROM `usuario` WHERE id = $idUsuarioSQL");
        while ($linha = $sql->fetch(PDO::FETCH_ASSOC)) 
            $nickUsuarioSQL = $linha['username'];

        //retorna dados da partida do usuário logado
        $sql = $conn->query("SELECT * FROM PartidaJogo WHERE id_jogador = $idUsuarioSQL");
        $i = 0;

        //declarando variavel json dadosJogador para ser usado no while
        echo "<script>const dadosJogador = [];</script>";

        while ($linha = $sql->fetch(PDO::FETCH_ASSOC)) {
            //reserva os dados de cada linha retornada do sql em variáveis
            $nome = $nickUsuarioSQL;
            $dimensao = $linha['dimensao'];
            $modalidade = $linha['modalidade'];
            $tempo = $linha['tempo_partida'];
            $resultado = $linha['resultado'];
            $pontos = $linha['pontos'];
            $data = $linha['horario_partida'];
            
            //cria json em javascript dos dados capturados,
            //será enviado para o file 'historicoPartidas.js'. Verificar no arquivo indicado
            echo "
            <script>
                dadosJogador[$i] = {
                    'nome':'$nome',
                    'dimensao':'$dimensao',
                    'modalidade':'$modalidade',
                    'duracao':'$tempo',
                    'resultado':'$resultado',
                    'data_hora':'$data'
                };
            </script>";
            $i++;
        };
        //Fecha conexão com banco de dados 
        $conn = NULL;

    }
    else {
        echo "
        <script>
            console.log('Não foi possível conectar ao banco MySQL.');
        </script>";
    }
    
    //Mostra o histórico na página "principal_jogando.php"
    echo "
    <script>
        const boxHistoria = dadosJogador.map(function(jogador){
            return `
                <div class='hist-box'>
                    <div class='linha-hist'>
                        <p class='p-atributo'>Nome: </p>
                        <p class='p-info'>`+jogador.nome+`</p>
                    </div>
                    <div class='linha-hist'>
                        <p class='p-atributo'>Dimensão: </p>
                        <p class='p-info'>`+jogador.dimensao+`</p>
                    </div>
                    <div class='linha-hist'>
                        <p class='p-atributo'>Modalidade: </p>
                        <p class='p-info'>`+jogador.modalidade+`</p>
                    </div>
                    <div class='linha-hist-dupla'>
                        <div class='linha-hist'>
                            <p class='p-atributo'>Duração: </p>
                            <p class='p-info'>`+jogador.duracao+`</p>
                        </div>
                        <div class='linha-hist'>
                            <p class='p-atributo'>Resultado: </p>
                            <p class='p-info'>`+jogador.resultado+`</p>
                        </div>
                    </div>
                    <div class='linha-hist'>
                        <p class='p-atributo'>Data/Hora: </p>
                        <p class='p-info'>`+jogador.data_hora+`</p>
                    </div>
                </div>
            `;
        }).join('');

        
        if (dadosJogador.length === 0) {
            document.getElementById('historico').innerHTML += `Não há histórico para o jogador!`;
        }
        else{
            document.getElementById('historico').innerHTML += boxHistoria;
        }
    </script>
    ";
?>