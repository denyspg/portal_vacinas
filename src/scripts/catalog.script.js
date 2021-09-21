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
			console.log(JSON.parse(xhr.response));
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
    xhr.onload = function() {
        const vacinas = xhr.response;
        console.log(vacinas);
    }
}
