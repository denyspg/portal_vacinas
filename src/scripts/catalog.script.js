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
    if (nomeVacina == 'gripe' || nomeVacina == 'Gripe') {
        xhr.open('GET', 'http://localhost:8080/ListaVacinas/Gripe');        
    }

    if (nomeVacina == 'polio' || nomeVacina == 'Poliomelite' || nomeVacina =='Polio') {
        xhr.open('GET', 'http://localhost:8080/ListaVacinas/Poliomelite');        
    }

    if (nomeVacina == 'covid' || nomeVacina == 'Covid19' || nomeVacina == 'pfizer' || nomeVacina == 'Pfizer') {
        xhr.open('GET', 'http://localhost:8080/ListaVacinas/Pfizer');        
    }

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
