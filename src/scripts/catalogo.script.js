async function pesquisaVacina() {
    limpaTabela();
    const nomeVacina = document.getElementById('buscaVacina').value;
    const path = `http://localhost:8080/api/PesquisaVacinas/${nomeVacina}`;
	const listaVacinas = await getVacinas(path);
	imprimeVacinas(listaVacinas);
}

function imprimeVacinas(data){
  if (data !== "") {
    var tabela = document.getElementById('listaDeVacinas');

    data.forEach(function (obj) {
        var tr = document.createElement('tr');
        Object.keys(obj).forEach(function (chave) {
            if (chave == "nome" || chave == "descricao" || chave == "imagem") {
              
              var td = document.createElement('td');
              td.innerHTML = obj[chave];
              tr.appendChild(td);
            } 
        });
        tabela.appendChild(tr);
    });
  }
}

function limpaTabela(){
  document.getElementById("tbody").innerHTML = "";
}