async function logar(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if(!validaEmail()){
        alert('E-mail inválido!');
        return;
    }

    if(!senha.length){
        alert('Insira a senha!');
        return;
    }

    await postLogar('http://localhost:4000/api/login', { email, senha });

    const loginPlace = window.location.href.indexOf('pages');
    const firstUrlPath = window.location.href.substring(0, loginPlace);
    const finalUrlPath = firstUrlPath + 'index.html';
    window.location.href = finalUrlPath;
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