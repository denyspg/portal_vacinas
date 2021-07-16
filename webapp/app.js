const express = require("express");
const app = express();
const porta = 8080;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/components/portal/portal.html');
});

app.get('/portal', function (req, res) {
    res.sendFile(__dirname + '/components/portal/portal.view.html');
});

app.get('/catalogo', function (req, res) {
    res.sendFile(__dirname + '/components/catalogo/catalogo.view.html');
});

app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/components/login/login.view.html');
});

app.get('/cadastro', function (req, res) {
    res.sendFile(__dirname + '/components/cadastro/cadastro.view.html');
});

app.listen(8080, function () {
    console.log('Servidor iniciado\tPorta: ' + porta)
});