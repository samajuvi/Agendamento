var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');


module.exports = function(){

var app = express();

//definindo a interpretação de parse do json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// incluindo todo o conteudo da pasta controllers e depois a persistencia para ser utilizado na variavel app
consign()
    .include('controllers')
    .then('persistencia')
    .into(app);

return app;

}