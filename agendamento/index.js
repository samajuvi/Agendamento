var bodyParser = require('body-parser');

var app = require('./config/custom-express.js')();

app.use(function (req, res, next) {
   // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  
});

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function(){

    console.log('SEVIDOR SETADO NA PORTA 3000 - SAFERREIRA');


});

