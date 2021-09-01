function verificaPreenchimento(nomeComponente){
    const componente = document.getElementById(nomeComponente);
    const valorComponente = componente.value;
    if (valorComponente==''){
        alert("O campo não pode ficar vazio!");
    } 
};

function cadastrar(){
    validaEmail();
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
            console.log("E-mail valido");
    }
    else{
        alert("E-mail invalido");
    }
}