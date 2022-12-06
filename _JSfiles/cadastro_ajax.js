function cadastro(){

    var botao = document.getElementById("cadastrar");
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
        event.preventDefault();
        let username = document.getElementById("Username").value;
        let nome = document.getElementById("NomeCompleto").value
        let telefone = document.getElementById("Telefone").value
        let email = document.getElementById("E-mail").value
        let datadenascimento = document.getElementById("datadenascimento").value
        let CPF = document.getElementById("CPF").value
        let senha = document.getElementById("Password").value
        
        var formdata= new FormData();
        formdata.append('Username', username);
        formdata.append('NomeCompleto', nome);
        formdata.append('Telefone', telefone);
        formdata.append('E-mail', email);
        formdata.append('datadenascimento', datadenascimento);
        formdata.append('CPF', CPF);
        formdata.append('Password', senha);

        ajax.open('POST','../_PHPfiles/dadosCadastro-ajax.php');
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
                    if(respostaAjax[0]=="Usuário inválido"){
                        alert("Esse nome de usuário já existe!")
                    if(respostaAjax[0]!="Dados incompletos")
                        alert("Usuário criado com sucesso!")
                        window.location.href = "../_pages/login.php";

                    }
                }
            };
    });
}

window.addEventListener('load', function(){
    cadastro();
});