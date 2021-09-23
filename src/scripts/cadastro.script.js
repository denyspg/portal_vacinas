
async function cadastrar() {
    const path = `http://localhost:8080/api/Cadastro`;
    postUsuario(path, usuario);
    const path = `http://localhost:8080/Cadastro`;

     $.ajax({
        type: 'POST',
        url: path,
        data: usuario,
        success: function (result) {
            alert(result);
        },
        error: function (err) {
            alert(`Ops! Ocorreu um erro: ${err.statusText}`);
        }
    });
}

function validaEmail() {
	const componente = document.getElementById('email');
	usuario = componente.value.substring(0, componente.value.indexOf('@'));
	dominio = componente.value.substring(componente.value.indexOf('@') + 1, componente.value.length);

	if (
		usuario.length >= 1 &&
		dominio.length >= 3 &&
		usuario.search('@') == -1 &&
		dominio.search('@') == -1 &&
		usuario.search(' ') == -1 &&
		dominio.search(' ') == -1 &&
		dominio.search('.') != -1 &&
		dominio.indexOf('.') >= 1 &&
		dominio.lastIndexOf('.') < dominio.length - 1
	) {
		return true;
	} else {
        return false;
}
