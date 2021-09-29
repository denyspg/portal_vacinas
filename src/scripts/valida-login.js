

function setLogado(){
    const indexHeader = document.getElementById("index-header");
    let path = '.';
    if(indexHeader){
        path = './pages';
    }

    const catalogoHeader = document.getElementById("catalogo-header");
    const loginHeader = document.getElementById("login-header");
    const cadastroHeader = document.getElementById("cadastro-header");

    if(localStorage.getItem('token')) { 
        catalogoHeader.innerHTML = `<a id="catalogo-header" href="${path}/catalogo.html">Pesquisar Vacina</a>`;
        loginHeader.innerHTML = '';
        cadastroHeader.innerHTML = '';
    }else{
        catalogoHeader.innerHTML = '';
        loginHeader.innerHTML = `<a id="login-header" href="${path}/login.html">Login</a>`;
        cadastroHeader.innerHTML = `<a id="cadastro-header" href="${path}/cadastro.html">Cadastro</a>`;
    }
}

setLogado();