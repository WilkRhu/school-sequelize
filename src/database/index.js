const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const User = require("../models/user");
const Enderco = require("../models/endereco");

const connection = new Sequelize(dbConfig);
User.init(connection);
Enderco.init(connection);

module.exports = connection;
