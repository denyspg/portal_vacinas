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
    xhr.responseType = 'text';
	xhr.onreadystatechange = () => {
		if (xhr.readyState == 4) {
			console.log(JSON.parse(xhr.response));
		}
	};

	xhr.send();
    imprimeVacinas(JSON.parse(xhr.response));
	}else{
        alert('É necessário preencher o nome da vacina!')
    }
}
function buscaTodasVacinas() {
    	
	const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/ListaVacinas/');
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.responseType = 'text';
	xhr.send();
    xhr.onload = function() {
        const vacinas = JSON.parse(xhr.responseText);
        console.log(vacinas);
        imprimeVacinas(vacinas);
    }
}

function imprimeVacinas(json){
    document.querySelector("table").style.visibility="visible"
    let linha = document.createElement("tr");
    for (let i = 0; i < json.length; i++) {
        let campoNome = document.createElement("td");
        let campoDescricao = document.createElement("td");
        let element = json[i];
        let elementNome = document.createTextNode(element.nome);
        let elementDescricao = document.createTextNode(element.descricao);

        campoNome.appendChild(elementNome);
        campoDescricao.appendChild(elementDescricao);
        
        linha.appendChild(campoNome);
        linha.appendChild(campoDescricao);
    }
    document.querySelector("tbody").appendChild(linha)


}
