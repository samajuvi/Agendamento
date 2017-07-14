function UserDAO() {
   this._user = require('../models/Perfil.js');
}

UserDAO.prototype.findById = function(id,callback) {
    this._user.findById(id).then(function(perfil) { 
       return callback(perfil);
   }).catch(function(error) {
      console.log(error);
  });
}


UserDAO.prototype.update = function(perfil,callback) {
  
  this._user.create(perfil).then(function(perfil) { 
       return callback(perfil);
   }).catch(function(error) {
       console.log(error);
  });
}