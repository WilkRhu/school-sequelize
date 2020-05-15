const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const User = require("../models/user");
const Endereco = require("../models/endereco");
const Series = require("../models/serie");
const Materias = require("../models/materia");
const SerieMateria = require("../models/serireMateria");
const Aulas = require("../models/aulas");
const Estudantes = require("../models/estudante");
const Professor = require("../models/professor");

const connection = new Sequelize(dbConfig);
User.init(connection);
Endereco.init(connection);
Endereco.associate(connection.models);
Series.init(connection);
Materias.init(connection);
SerieMateria.init(connection);
SerieMateria.associate(connection.models);
Aulas.init(connection);
Aulas.associate(connection.models);
Estudantes.init(connection);
Estudantes.associate(connection.models);
Professor.init(connection);
Professor.associate(connection.models);

module.exports = connection;
