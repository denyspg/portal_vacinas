function logar(){
    const email= document.getElementById("email");
    const senha = document.getElementById("senha");

    if(!validaEmail()){
        alert('Insira a senha!');
        return;
    }

    if(!senha.value.length){
        alert('Insira a senha!');
        return;
    }
}

function validaEmail(){
    const componente = document.getElementById('email');
    usuario = componente.value.substring(0, componente.value.indexOf("@"));
    dominio = componente.value.substring(componente.value.indexOf("@")+ 1, componente.value.length);

    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            return true;
    }
    return false;
}