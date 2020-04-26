"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("enderecos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      rua: {
        type: Sequelize.STRING,
      },

      numero: {
        type: Sequelize.STRING,
      },

      cidade: {
        type: Sequelize.STRING,
      },

      bairro: {
        type: Sequelize.STRING,
      },

      estado: {
        type: Sequelize.STRING,
      },

      telefone: {
        type: Sequelize.STRING,
      },

      referencia: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("enderecos");
  },
};
