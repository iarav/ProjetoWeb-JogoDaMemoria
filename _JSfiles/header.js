
//variaveis estado link
let estadoLogout = false;

function abrirLogout(){
    if(estadoLogout==false){
        document.getElementById('logout').style.visibility = "visible";
        estadoLogout = true;
    }else{
        document.getElementById('logout').style.visibility = "hidden";
        estadoLogout = false;
    } 
}