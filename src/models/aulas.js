const { Model, DataTypes } = require("sequelize");

class aulas extends Model {
  static init(sequelize) {
    super.init(
      {
        serie_id: {
          type: DataTypes.INTEGER,
          references: {
            model: "series",
            key: "id",
          },
        },
        materia_id: {
          type: DataTypes.INTEGER,
          references: {
            model: "materias",
            key: "id",
          },
        },
        titulo: DataTypes.STRING,
        conteudo: DataTypes.TEXT,
        link: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "aulas",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.materias, {
      foreignKey: "materia_id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    this.belongsTo(models.series, {
      foreignKey: "serie_id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
}

module.exports = aulas;
