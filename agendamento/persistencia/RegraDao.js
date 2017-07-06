function RegraDao(connection) {
    this._connection = connection;
}

RegraDao.prototype.salva = function (regra, callback){
     
    var query = 'CALL agendamento.REGRAS_SPUI();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}


RegraDao.prototype.lista = function (regra, callback){
     
    var query = 'CALL agendamento.CONSULTA_REGRAS_SPS();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}

//exportando o modulo
module.exports = function(){
    return RegraDao;
};