
function UserDAO() {
   this._user = require('../model/Usuario.js');
}

UserDAO.prototype.findById = function(id,callback) {
    this._user.findById(id).then(function(usuario) { 
       return callback(usuario);
   }).catch(function(error) {
   console.log(error);
  });
}


UserDAO.prototype.findUsuario = function(usuario,callback) {
    this._user.findOne({
      where: {
        login: usuario.login,
        senha: usuario.senha
      }
      ,
       include: [
       { model: Perfil}
     ]
    }).then(function(usuario) { 
           return callback(usuario);
       }).catch(function(error) {
       console.log(error);
      });
}


UserDAO.prototype.save = function(usuario,callback) {
  
  this._user.create(usuario).then(function(usuario) { 
       return callback(usuario);
   }).catch(function(error) {
   console.log(error);
  });
}


UserDAO.prototype.update = function(usuario,callback) {
  
  this._user.create(usuario).then(function(usuario) { 
       return callback(usuario);
   }).catch(function(error) {
   console.log(error);
  });
}

UserDAO.prototype.destroy = function(idUsuario,callback) {
  
  this._user.destroy({
    where: {
      id: idUsuario //this will be your id that you want to delete
   }
}).then(function(usuario) { 
       return callback(usuario);
   }).catch(function(error) {
   console.log(error);
  });
}



module.exports = function(){
    return UserDAO;
};

 
 