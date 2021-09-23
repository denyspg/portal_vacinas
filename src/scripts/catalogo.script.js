async function pesquisaVacina() {
    const nomeVacina = document.getElementById('buscaVacina').value;
    const path = `http://localhost:8080/api/PesquisaVacinas/${nomeVacina}`;
	const listaVacinas = await getVacinas(path);
	imprimeVacinas(listaVacinas);
}

function imprimeVacinas(data){
    var tabela = document.getElementById('listaDeVacinas');

    data.forEach(function (obj) {
        var tr = document.createElement('tr');
        Object.keys(obj).forEach(function (chave) {
            var td = document.createElement('td');
            td.innerHTML = obj[chave];
            tr.appendChild(td);
        });
        tabela.appendChild(tr);
    });
}
