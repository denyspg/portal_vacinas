let email = document.getElementById("email");


function verificaNomeBranco(){
    primeiroNome=document.querySelector('#primeiroNome').value;
    if (primeiroNome==''){
      alert("O campo não pode ficar vazio!");
    }
}

email.addEventListener("blur", verificaNomeBranco, true);