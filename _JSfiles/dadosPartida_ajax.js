function requisicao(){
    //botoes "jogar-novamente" e "sair" no painel de WinOrLose
    var botoes= [document.getElementById('jogar-novamente'),
    document.getElementById('sair')];  

    //cria a instância
    var ajax = new XMLHttpRequest();

    //verifica se a solicitação foi enviada, coloco apenas Status pq se não
    //ele testa mais de 1 vez os States, fazendo aparecer o alert
    ajax.onreadystatechange= function(){
        if(ajax.status===200){
            if(ajax.readyState===4){
                console.log('OK! Enviado solicitação');
            }
        }
        else{
            console.error('Error 404 Page Not Found!');
        }
    }

    botoes.forEach(botao => {
        botao.addEventListener("click",function(){
            //capturando dados da funcao "caixaTexto()" no file "memoryGame"
            var dimensao = sessionStorage.getItem("dimensao");
            var modalidade = sessionStorage.getItem("modalidade");
            var duracao = sessionStorage.getItem("duracao");
            var pontos = sessionStorage.getItem("pontos");
            var tempo = sessionStorage.getItem("tempo");
            var resultado = sessionStorage.getItem("resultado");
            console.log('Dimensao: '+ dimensao);
            console.log(modalidade);
            console.log('duracao: '+ duracao);
            console.log('pontos: '+ pontos);
            console.log('tempo: '+ tempo);
            console.log('resultado: '+ resultado);
            
            //guarda dadas da variavel para enviar
            var formdata= new FormData();
            formdata.append("resultado", resultado);
            formdata.append("dimensao", dimensao);
            formdata.append("modalidade", modalidade);
            formdata.append("duracao", duracao);
            formdata.append("pontos", pontos);
            formdata.append("tempo", tempo);

            //especifica o método da requisição e para onde enviar
            ajax.open('POST','../_PHPfiles/dadosPartida-ajax.php');

            //envia a requisição
            ajax.send(formdata);

            //onload quer dizer "quando carregar faça..."
            //em onload ira transformar o obj em JSON
            ajax.onload = function(){
                //transforma em JSON
                let respostaAjax = null;
                try {
                    respostaAjax = JSON.parse(ajax.responseText);
                } catch (e) {
                    console.error('Não conseguiu converter em JSON');
                };
                
                if (respostaAjax) {
                    console.log(respostaAjax);
                }
            };
        });
    });
}
window.addEventListener('load', function(){
    requisicao();
});