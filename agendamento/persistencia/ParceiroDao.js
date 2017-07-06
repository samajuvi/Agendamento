function ParceiroDao(connection) {
    this._connection = connection;
}

ParceiroDao.prototype.salva = function (parceiro, callback){
     
    var query = 'CALL agendamento.PARCEIROS_SPUI();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}



ParceiroDao.prototype.lista = function (parceiro, callback){
     
    var query = 'CALL agendamento.CONSULTA_PARCEIROS_SPS();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}


//exportando o modulo
module.exports = function(){
    return ParceiroDao;
};