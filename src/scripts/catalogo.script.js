document.getElementById("listaDeVacinas").appendChild(document.createElement('td'));

async function pesquisaVacina() {
    limpaTabela();
    const nomeVacina = document.getElementById('buscaVacina').value;
    const path = `http://localhost:8080/api/PesquisaVacinas/${nomeVacina}`;
	const listaVacinas = await getVacinas(path);
	imprimeVacinas(listaVacinas);
}

function imprimeVacinas(data){
  if (data !== "") {
    const tabela = document.getElementById('listaDeVacinas');
    
    tabela.innerHTML = `<tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrição</th>
                    </tr>`;

    data.forEach(function (obj) {
        var tr = document.createElement('tr');
        Object.keys(obj).forEach(function (chave) {
            if (chave == "nome" || chave == "descricao") {
              
              const td = document.createElement('td');
              td.innerHTML = obj[chave];
              tr.appendChild(td);
            } 
        });
        tabela.appendChild(tr);
    });
  }
}

function limpaTabela(){
    const tabela = document.getElementById("listaDeVacinas");
    const td = document.createElement('td');
    tabela.appendChild(td);
}