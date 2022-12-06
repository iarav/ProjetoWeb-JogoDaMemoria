function requisicao(){
    var botao= document.getElementById('salvar');  
    
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

    botao.addEventListener("click",function(event){
        event.preventDefault();
        //capturando dados da funcao "caixaTexto()" no file "memoryGame"
        var user = document.getElementById('Username').value;
        var nome_completo = document.getElementById('NomeCompleto').value;
        var telefone = document.getElementById('Telefone').value;
        var email = document.getElementById('E-mail').value;
        var senha = document.getElementById('Password').value;

        
        //guarda dadas da variavel para enviar
        var formdata= new FormData();
        formdata.append("user", user);
        formdata.append("nome_completo", nome_completo);
        formdata.append("telefone", telefone);
        formdata.append("email", email);
        formdata.append("senha", senha);

        //especifica o método da requisição e para onde enviar
        ajax.open('POST','../_PHPfiles/EditarPerfil.php');

        //envia a requisição
        ajax.send(formdata);

        //onload quer dizer "quando carregar faça..."
        //em onload ira transformar o obj em JSON
        ajax.onload = function(){
            //transforma em JSON
            let respostaAjax = null;
            try {
                console.log(ajax.responseText);
                respostaAjax = JSON.parse(ajax.responseText);
            } catch (e) {
                console.error('Não conseguiu converter em JSON');
            };
            
            if (respostaAjax) {
                console.log(respostaAjax);
                if(respostaAjax[0] == 'atualizado com sucesso'){
                    alert("Dados atualizados com sucesso!!");
                }else{
                    alert("Não foi possível atualizar.");
                }
            }
        };
    });
}
window.addEventListener('load', function(){
    requisicao();
});