
var express = require('express');

var bodyParser = require('body-parser');
var expressValidator = require('express-validator'); 


module.exports = function() {
  var app = express(); 
//  app.use(express.static('./app/public'));
//  app.set('view engine', 'ejs');
//  app.set('views','./app/views');
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(expressValidator()); 
  
   /*app.use(function(req,res,next){
    res.status(404).render('erros/404');
     next();
  })*/
   load('reoutes',{cwd: 'app'})
        .then('infra').then('dao')
        .into(app);
    return app;
};