function pesquisaVacina() {
    const nomeVacina = document.getElementById('buscaVacina').value;
	
	const xhr = new XMLHttpRequest();
    const path = `http://localhost:8080/PesquisaVacinas/${nomeVacina}`;

    xhr.open('GET', path);

    xhr.onreadystatechange = () => {
		if (xhr.readyState == 4) {
			console.log(JSON.parse(xhr.response));
		}
	};

	xhr.send();
    imprimeVacinas(JSON.parse(xhr.response));
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

    document.querySelector("tbody").appendChild(linha);
}
