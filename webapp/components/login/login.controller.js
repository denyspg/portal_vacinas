let email = document.getElementById("email");
let primeiroNome = document.getElementById("primeiroNome");
let ultimoNome = document.getElementById("ultimoNome");


function verificaPrimeiroNomeBranco(){
   var primeiroNome=document.querySelector('#primeiroNome').value;
    if (primeiroNome==''){
      alert("O campo não pode ficar vazio!");
    } 
};

function verificaUltimoNomeBranco(){
var ultimoNome=document.querySelector('#ultimoNome').value;
if (ultimoNome==''){
  alert("O campo não pode ficar vazio!");
}
};

function verificaEmailBranco(){
var email=document.querySelector('#email').value;
if (email==''){
  alert("O campo não pode ficar vazio!");
}
};

email.addEventListener("blur", verificaEmailBranco, true);
primeiroNome.addEventListener("blur", verificaPrimeiroNomeBranco, true);
ultimoNome.addEventListener("blur", verificaUltimoNomeBranco, true);
