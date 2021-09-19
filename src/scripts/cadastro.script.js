function verificaPreenchimento(nomeComponente){
    const componente = document.getElementById(nomeComponente);
    const valorComponente = componente.value;
    if (valorComponente==''){
        alert("O campo não pode ficar vazio!");
    } 
};

function cadastrar(){

    console.log('entrou na função')
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('ultimo-nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuario = {
        nome,
        sobrenome,
        email,
        senha
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/Cadastro');
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            console.log(xhr.responseText);
        }
    }

    if(validaEmail()){
    xhr.send(JSON.stringify(usuario));
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
            console.log("E-mail valido");
            return true;
    }
    else{
        alert("E-mail invalido");
    }
}