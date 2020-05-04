"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      login: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      serie: {
        type: Sequelize.STRING,
      },
      
      matricula: {
        type: Sequelize.STRING,
      },
      responsavel_aluno_um: {
        type: Sequelize.STRING,
      },

      responsavel_aluno_dois: {
        type: Sequelize.STRING,
      },

      file: {
        type: Sequelize.STRING,
      },
      data_nascimento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      token: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("users");
  },
};
