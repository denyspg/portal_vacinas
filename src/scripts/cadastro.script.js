async function cadastrar() {
	const nome = document.getElementById('nome').value;
	const sobrenome = document.getElementById('ultimo-nome').value;
	const email = document.getElementById('email').value;
	const senha = document.getElementById('senha').value;
    
	if (!validaEmail() || !nome || !sobrenome || !senha) {
		alert('Dados inválidos!');
	}

	const usuario = {
		nome: nome,
		sobrenome: sobrenome,
		email: email,
		senha: senha
	};

    const path = `http://localhost:8080/api/Cadastro`;
    const result = await postUsuario(path, usuario);
    
    console.log(result);

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
}