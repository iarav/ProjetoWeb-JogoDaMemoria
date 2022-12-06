function getUserCad() {
    let User = {
        username: document.getElementById("Username").value,
        nomecompleto: document.getElementById("NomeCompleto").value,
        telefone: document.getElementById("Telefone").value,
        email: document.getElementById("E-mail").value,
        datadenascimento: document.getElementById("datadenascimento").value,
        cpf: document.getElementById("CPF").value,
        password: document.getElementById("Password").value
    }
    if(checkCadform(User) == 0){
        return 0;
    }
    console.log(User)
    sessionStorage.setItem('User', User)
}

function getUserLog() {
    let userlogged = document.getElementById("Username").value
    let passwordlogged = document.getElementById("Senha").value
    
    if(checkLogForm(userlogged, passwordlogged) == 0){
        return 0;
    }
    sessionStorage.setItem('username', userlogged);
    sessionStorage.setItem('password', passwordlogged);
    console.log(userlogged,passwordlogged)
}

function getUserEdit() {
    let User = {
        nomecompleto: document.getElementById("NomeCompleto").value,
        telefone: document.getElementById("Telefone").value,
        email: document.getElementById("E-mail").value,
        password: document.getElementById("Password").value
    }
    if(checkEditform(User) == 0){
        return 0;
    }
    console.log(User)
    sessionStorage.setItem('User', User)
}

function checkCadform(u){
    for (var key in u) {
        if (u[key] == ""){
            document.getElementById("preencha-tudo").style.display="block";
            document.getElementById("preencha-tudo").style.animation="none";
            setTimeout(() => document.getElementById("preencha-tudo").style.animation="preencha 0.3s linear", 5);
            return 0;
        }
    }
    document.getElementsByClassName("cadastrar")[0].href="login.php";
}

function checkLogForm(l, p){
    if(l == "" || p == ""){
        document.getElementById("preencha-tudo").style.display="block";
        document.getElementById("preencha-tudo").style.animation="none";
        setTimeout(() => document.getElementById("preencha-tudo").style.animation="preencha 0.3s linear", 5);
        return 0;
    }
    document.getElementById("entrar").href="./principal_jogando.php"
}

function checkEditform(u){
    for (var key in u) {
        if (u[key] == ""){
            document.getElementById("preencha-tudo").style.display="block";
            document.getElementById("preencha-tudo").style.animation="none";
            setTimeout(() => document.getElementById("preencha-tudo").style.animation="preencha 0.3s linear", 5);
            return 0;
        }
    }
    document.getElementsByClassName("salvar")[0].href="./principal_jogando.html";
}