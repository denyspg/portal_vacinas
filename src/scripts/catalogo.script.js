function pesquisaVacina() {
    const nomeVacina = document.getElementById('buscaVacina').value;
	
	const xhr = new XMLHttpRequest();
    const path = `http://localhost:8080/PesquisaVacinas/${nomeVacina}`;

    $.ajax({
      type: "GET",
      url: path,   
      success: function (result) {
        imprimeVacinas(result);
      },
      error: function (err) {
        console.log(err);
      }
 });


}

function imprimeVacinas(data){
    var tabela = document.getElementById('listaDeVacinas');
    console.log(data);

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
