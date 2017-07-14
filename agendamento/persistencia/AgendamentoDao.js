function AgendamentoDao(connection) {
    this._connection = connection;
}

AgendamentoDao.prototype.salva = function (agendamento, callback){

    var query = 'CALL agendamento.AGENDAMETO_SPUI();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}

AgendamentoDao.prototype.lista = function (agendamento, callback){
     
    var query = 'CALL agendamento.CONSULTA_AGENDAMETO_SPS();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}

AgendamentoDao.prototype.listaResumo = function (idAcao, idUser, callback){
     console.log('parametros: '+ idAcao + idUser);
    this._connection.query("CALL agendamento.RESUMO_DIARIO_SPS("+idAcao+","+idUser+");", callback);
}


AgendamentoDao.prototype.listaResumoHorario = function (agendamento, callback){
     
    var query = 'CALL agendamento.RESUMO_DISPONIVEL_SPS();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}



//exportando o modulo
module.exports = function(){
       return AgendamentoDao;
};