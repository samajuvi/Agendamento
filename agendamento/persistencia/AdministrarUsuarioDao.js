function AdministrarUsuarioDao(connection) {
    this._connection = connection;
}

AdministrarUsuarioDao.prototype.salva = function (usuario, callback){
 
    var query = 'CALL agendamento.USUARIO_SPUI();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}



AdministrarUsuarioDao.prototype.lista = function (usuario, callback){

    var query = 'CALL agendamento.CONSULTA_USUARIO_SPS();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}

//exportando o modulo
module.exports = function(){
    return AdministrarUsuarioDao;
};