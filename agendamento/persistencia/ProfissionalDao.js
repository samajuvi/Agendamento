function ProfissionalDao(connection) {
    this._connection = connection;
}

ProfissionalDao.prototype.salva = function (profissional, callback){

    var query = 'CALL agendamento.PROFISSIONAIS_SPUI();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}



ProfissionalDao.prototype.lista = function (profissional, callback){
     
    var query = 'CALL agendamento.CONSULTA_PROFISSIONAIS_SPS();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}

//exportando o modulo
module.exports = function(){
    return ProfissionalDao;
};