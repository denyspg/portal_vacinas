function pesquisaVacina() {
    const nomeVacina = document.getElementById('buscaVacina').value;

    if (nomeVacina !== '') {
	
	const xhr = new XMLHttpRequest();
    if (nomeVacina == 'gripe' || nomeVacina == 'Gripe') {
        xhr.open('GET', 'http://localhost:8080/ListaVacinas/Gripe');
    }

    if (nomeVacina == 'polio' || nomeVacina == 'Poliomelite' || nomeVacina =='Polio') {
        xhr.open('GET', 'http://localhost:8080/ListaVacinas/Poliomelite');        
    }

    if (nomeVacina == 'covid' || nomeVacina == 'Covid19' || nomeVacina == 'pfizer' || nomeVacina == 'Pfizer') {
        xhr.open('GET', 'http://localhost:8080/ListaVacinas/Pfizer');        
    }
    xhr.setRequestHeader('Content-type', 'application/json')
	xhr.onreadystatechange = () => {
		if (xhr.readyState == 4) {
			console.log(xhr.responseText);
		}
	};

	xhr.send();
	}else{
        alert('É necessário preencher o nome da vacina!')
    }
}
function buscaTodasVacinas() {
    	
	const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/ListaVacinas/');
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.responseType = 'json';
	xhr.send();
    xhr.onload = listaVacinas(xhr.response);
}

function listaVacinas(JsonObj) {
    var vacinas = JsonObj['vacinas'];
  
    for (var i = 0; i < vacinas.length; i++) {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
  
      myH2.textContent = vacinas[i].name;
      myPara1.textContent = 'Nome: ' + vacinas[i].nome;
      myPara2.textContent = 'Descrição: ' + vacinas[i].descricao;
  
        
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
  
      section.appendChild(myArticle);
    }
  }
