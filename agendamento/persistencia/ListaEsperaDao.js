function ListaEsperaDao(connection) {
    this._connection = connection;
}

ListaEsperaDao.prototype.salva = function (listaEspera, callback){
     
    var query = 'CALL agendamento.LISTA_ESPERA_SPUI();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}

ListaEsperaDao.prototype.lista = function (listaEspera, callback){
     
    var query = 'CALL agendamento.CONSULTA_LISTA_ESPERA_SPS();';
    this._connection.query(query, callback);
    console.log('Query Executada: '+ query);
}


//exportando o modulo
module.exports = function(){
    return ListaEsperaDao;
};