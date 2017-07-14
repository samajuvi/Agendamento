/*
function AunteticacaoDAO() {
   this._user = require('../models/Usuario.js');
}

AunteticacaoDAO.prototype.findById = function(id,callback) {
    this._user.findById(id).then(function(usuario) { 
       return callback(usuario);
   }).catch(function(error) {
   console.log(error);
  });
}


AunteticacaoDAO.prototype.findUsuario = function(usuario,callback) {
    this._user.findOne({
      where: {
        login: usuario.login,
        senha: usuario.senha
      },
       include: [
       { model: Perfil, required: true}
     ]
    }).then(function(usuario) { 
           return callback(usuario);
       }).catch(function(error) {
       console.log(error);
      });
}
 


module.exports = function(){
    return AunteticacaoDAO;
};
*/
 
 