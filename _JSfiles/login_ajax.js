function login(){

    var botao = document.getElementById("entrar");
    // var username = document.getElementById("Username").value;
    // var senha = document.getElementById("Senha").value;

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

    botao.addEventListener("click",function(){
        let username = document.getElementById("Username").value
        let senha = document.getElementById("Senha").value
        
        var formdata= new FormData();
        formdata.append('username', username);
        formdata.append('senha', senha);


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
                    if(respostaAjax[0]=="login invalido"){
                        alert("Login ou senha incorretos, tente novamente!")
                    }else{
                        alert("Login correto")
                        window.location.href = "../_pages/principal_jogando.php";
                    }
                }
            };
    });
}

window.addEventListener('load', function(){
    login();
});

