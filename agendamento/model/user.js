"use strict"

var conexao = require('../persistencia/connectionFactory.js');

var Sequelize = conexao.Sequelize;

var User = conexao.define('User', {
  username: Sequelize.STRING,
  senha: Sequelize.STRING
})

module.exports = User;
   