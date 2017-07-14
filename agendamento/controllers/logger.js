
///////////////
var fs = require('fs'); 
var logger = exports; 
  
  logger.debugLevel = 'warn';
  logger.log = function(level, message) {
    var levels = ['error', 'warn', 'info'];
    if (levels.indexOf(level) >= levels.indexOf(logger.debugLevel) ) {
      if (typeof message !== 'string') {
        message = JSON.stringify(message);
      }
     
      fs.writeFile('App/Agendamento:',new Date()+ ' - '+ message, 'utf8');
    
    }
  }

/*var fs = require('fs') 
  , Log = require('log')
  , log = new Log('erro', fs.createWriteStream('app/log/crud.log'));


module.exports = log;*/