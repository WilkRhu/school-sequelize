const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const User = require("../models/user");
const Endereco = require("../models/endereco");

const connection = new Sequelize(dbConfig);
User.init(connection);
Endereco.init(connection);
Endereco.associate(connection.models);

module.exports = connection;
