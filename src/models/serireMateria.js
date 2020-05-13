const { Model, DataTypes } = require("sequelize");

class serie_materia extends Model {
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
      },
      {
        sequelize,
        modelName: "serie_materia",
      }
    );
  }
  static associate(models) {
    this.hasMany(models.series, {
      foreignKey: "serie_id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    this.hasMany(models.materias, {
      foreignKey: "materia_id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
}

module.exports = serie_materia;
