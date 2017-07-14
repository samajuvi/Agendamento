"use strict"
var conexao = require('../persistencia/connectionFactory.js');
var Sequelize = conexao.Sequelize;


var Usuario = conexao.define('USUARIO_TB', {
   ID_USUARIO: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true, 
    },
    LOGIN: {type:Sequelize.STRING, unique: true},
    NOME_COMPLETO: Sequelize.STRING,
    SENHA: Sequelize.STRING,
    data_cancelamento: Sequelize.DATE,
    //flag_troca_senha: Sequelize.CHAR,
    //codigo_usuario: Sequelize.STRING,
    //data_ini_validade: Sequelize.DATE,
    //data_fim_validade: Sequelize.DATE,
    usuario: Sequelize.STRING,
    data_inclusao: Sequelize.DATE,
    data_alteracao: Sequelize.DATE,
    id_perfil: Sequelize.INTEGER 
  
});
Usuario.belongsTo(Perfil,{foreignKey: 'id_perfil', targetKey: 'id'});

module.exports = Usuario;