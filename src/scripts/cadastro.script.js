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
    const path = `http://localhost:4000/api/cadastrar-usuario`;
    await postCadastrar(path, usuario);
    
    const cadastroPlace = window.location.href.indexOf('cadastro');
    const firstUrlPath = window.location.href.substring(0, cadastroPlace);
    const finalUrlPath = firstUrlPath + 'login.html';
    window.location.href = finalUrlPath;
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
