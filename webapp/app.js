const express = require("express");
const app = express();
const porta = 8080;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/components/portal/portal.view.html');
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

app.get('/fonts/icomoon/style.css', function (req, res) {
    res.sendFile(__dirname + '/components/portal/fonts/icomoon/style.css');
});

app.get('/css/bootstrap.min.css', function (req, res) {
    res.sendFile(__dirname + '/components/portal/css/bootstrap.min.css');
});

app.get('/css/magnific-popup.css', function (req, res) {
    res.sendFile(__dirname + '/components/portal/css/magnific-popup.css');
});

app.get('/css/jquery-ui.css', function (req, res) {
    res.sendFile(__dirname + '/components/portal/css/jquery-ui.css');
});

app.get('/css/owl.theme.default.min.css', function (req, res) {
    res.sendFile(__dirname + '/components/portal/css/owl.theme.default.min.css');
});

app.get('/css/owl.carousel.min.css', function (req, res) {
    res.sendFile(__dirname + '/components/portal/css/owl.carousel.min.css');
});

app.get('/css/aos.css', function (req, res) {
    res.sendFile(__dirname + '/components/portal/css/aos.css');
});

app.get('/css/style.css', function (req, res) {
    res.sendFile(__dirname + '/components/portal/css/style.css');
});


app.get('/css/style.css', function (req, res) {
    res.sendFile(__dirname + '/components/portal/css/style.css');
});
app.get('/css/style.css', function (req, res) {
    res.sendFile(__dirname + '/components/portal/css/style.css');
});
app.get('/css/style.css', function (req, res) {
    res.sendFile(__dirname + '/components/portal/css/style.css');
});

app.get('/images/product_01.png', function (req, res) {
    res.sendFile(__dirname + '/components/portal/images/product_01.png');
});

app.get('/images/product_02.png', function (req, res) {
    res.sendFile(__dirname + '/components/portal/images/product_02.png');
});

app.get('/images/product_03.png', function (req, res) {
    res.sendFile(__dirname + '/components/portal/images/product_03.png');
});

app.get('/images/product_04.png', function (req, res) {
    res.sendFile(__dirname + '/components/portal/images/product_04.png');
});

app.get('/images/product_05.png', function (req, res) {
    res.sendFile(__dirname + '/components/portal/images/product_05.png');
});

app.get('/images/product_06.png', function (req, res) {
    res.sendFile(__dirname + '/components/portal/images/product_06.png');
});

app.get('/js/jquery-3.3.1.min.js', function (req, res) {
    res.sendFile(__dirname + '/components/portal/js/jquery-3.3.1.min.js');
});

app.get('/js/jquery-ui.js', function (req, res) {
    res.sendFile(__dirname + '/components/portal/js/jquery-ui.js');
});

app.get('/js/popper.min.js', function (req, res) {
    res.sendFile(__dirname + '/components/portal/js/popper.min.js');
});

app.get('/js/bootstrap.min.js', function (req, res) {
    res.sendFile(__dirname + '/components/portal/js/bootstrap.min.js');
});

app.get('/js/owl.carousel.min.js', function (req, res) {
    res.sendFile(__dirname + '/components/portal/js/owl.carousel.min.js');
});

app.get('/js/jquery.magnific-popup.min.js', function (req, res) {
    res.sendFile(__dirname + '/components/portal/js/jquery.magnific-popup.min.js');
});

app.get('/js/aos.js', function (req, res) {
    res.sendFile(__dirname + '/components/portal/js/aos.js');
});

app.get('/js/main.js', function (req, res) {
    res.sendFile(__dirname + '/components/portal/js/main.js');
});

app.get('/fonts/icomoon/fonts/icomoon.ttf?10si43', function (req, res) {
    res.sendFile(__dirname + '/components/portal/fonts/icomoon/fonts/icomoon.ttf?10si43');
});

app.get('/images/hero_1.jpg', function (req, res) {
    res.sendFile(__dirname + '/components/portal/images/hero_1.jpg');
});

app.get('/fonts/icomoon/fonts/icomoon.woff?10si43', function (req, res) {
    res.sendFile(__dirname + '/components/portal/fonts/icomoon/fonts/icomoon.woff?10si43');
});

console.log(__dirname);

app.listen(8080, function () {
    console.log('Servidor iniciado\tPorta: ' + porta)
});