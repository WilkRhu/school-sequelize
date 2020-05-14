"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("aulas", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      serie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "series",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      materia_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "materias",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      conteudo: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      link: {
        type: Sequelize.STRING,
        allowNull: true,
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
    return queryInterface.dropTable("aulas");
  },
};
