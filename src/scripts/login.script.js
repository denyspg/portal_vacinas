// Buscar email e senha no Banco de dados (que ainda não existe)
let email = document.getElementById("email");
let senha = document.getElementById("senha");

function logar(){
    var email=document.querySelector('#email').value;
    var senha = document.getElementById("senha");

    console.log(email.value + senha.value);

    if(email == "email@padrao.ufsc" && senha.value == "senha123"){
        localStorage.setItem("acesso", true);
        alert("Usuario autenticado");
        //window.location.href = "index.html"
    }else{
        alert("Usuario ou senha invalidos.")
    }
}

function verificaEmailBranco(){
    var email=document.querySelector('#email').value;
    if (email==''){
        alert("O campo não pode ficar vazio!");
    }
};

function verificaSenhaBranco(){
    var senha=document.querySelector('#senha').value;
    if (senha==''){
        alert("O campo não pode ficar vazio!");
    }
};


email.addEventListener("blur", verificaEmailBranco, true);
senha.addEventListener("blur", verificaSenhaBranco, true);
email.addEventListener("blur", logar, true);
senha.addEventListener("blur", logar, true);
