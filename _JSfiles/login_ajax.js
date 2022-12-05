function login(){

    var botao1 = document.getElementById("entrar");


    var username = document.getElementById("Username").value;
    var senha = document.getElementById("Senha").value;

    var ajax = new XMLHttpRequest();

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

    botao1.addEventListener("click",function(){
        console.log("clicou");
        var formdata= new FormData();
        formdata.append("Username", username);
        formdata.append("Senha", senha);
        
        ajax.open('POST','../_PHPfiles/dadosLogin-ajax.php');

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
}








window.addEventListener('load', function(){
    login();
    
});

