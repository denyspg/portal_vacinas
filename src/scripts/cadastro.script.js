function verificaPreenchimento(nomeComponente){
    const componente = document.getElementById(nomeComponente);
    const valorComponente = componente.value;
    if (valorComponente==''){
        alert("O campo não pode ficar vazio!");
    } 
};

function cadastrar(){

    console.log('entrou na função')
    //validaEmail();
    const usuario = {
        nome:'jose',
        sobrenome:'ribamar',
        email:'jose@ribamar.com',
        senha:'1234'
    }

    const xhr = new XMLHttpRequest();
    xhr.withCredentials= true;
    xhr.open('POST', 'http://localhost:8080/Cadastro');
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            console.log(xhr.responseText);
        }
    }
    xhr.send(JSON.stringify(usuario));
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