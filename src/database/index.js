const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const User = require("../models/user");
const Endereco = require("../models/endereco");
const Series = require('../models/serie');

const connection = new Sequelize(dbConfig);
User.init(connection);
Endereco.init(connection);
Endereco.associate(connection.models);
Series.init(connection);

module.exports = connection;
