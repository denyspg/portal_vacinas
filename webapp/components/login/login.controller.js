let valorPrimeiroNome = document.getElementById("primeiroNome");
let valorUltimoNome = document.getElementById("ultimoNome");
let email = document.getElementById("email");


valorPrimeiroNome.addEventListener("blur", function(event) {
    primeiroNome=document.querySelector('#primeiroNome').value;
    if (primeiroNome==''){
      alert("O campo não pode ficar vazio!");
    }
  }, true);


valorUltimoNome.addEventListener("blur", function(event) {
    ultimoNome=document.querySelector('#ultimoNome').value;
    if (ultimoNome==''){
      alert("O campo não pode ficar vazio!");
    }
  }, true);

email.addEventListener("blur", function(event) {
    email=document.querySelector('#ultimoNome').value;
    if (email==''){
      alert("O campo não pode ficar vazio!");
    }
}, true);