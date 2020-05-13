"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("serie_materia", {
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
    return queryInterface.dropTable("serie_materia");
  },
};
