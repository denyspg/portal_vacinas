const bancoDeDados = {
    vacinas: {
        'bcg': {
            descricao: 'Descrição BCG'
        },
        'pfizer': {
            descricao: 'Descrição Pfizer'
        },
        'h1n1': {
            descricao: 'Descrição H1N1'
        },
        'febreAmarela': {
            descricao: 'Descrição Febre Amarela'
        },
        'polio': {
            descricao: 'Descrição Poliomielite'
        },
        'rotaVirus': {
            descricao: 'Descrição Rota Virus'
        }
    }
};

function exibeDescricao (nomeVacina){
    try{
        alert(bancoDeDados.vacinas[nomeVacina].descricao);
    }catch(err){
        alert('Descrição não cadastrada ou vacina não encontrada.');
    }
}

function pesquisaVacina() {
    const nomeVacina = document.getElementById('buscaVacina').value;

    if (nomeVacina !== '') {
	
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:8080/ListaVacinas/:nome');
	xhr.setRequestHeader('Content-type', 'application/json');
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