function ProcedimentoDao(connection) {
    this._connection = connection;
}

ProcedimentoDao.prototype.salva = function (procedimento, callback){
     
    var query = 'CALL agendamento.PROCEDIMENTOS_SPUI();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}



ProcedimentoDao.prototype.lista = function (procedimento, callback){
     
    var query = 'CALL agendamento.CONSULTA_PROCEDIMENTOS_SPS();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}

//exportando o modulo
module.exports = function(){
    return ProcedimentoDao;
};