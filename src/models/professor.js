const { Model, DataTypes } = require("sequelize");

class professores extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: "users",
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
        modelName: "professores",
      }
    );
  }
  static associate(models) {
    this.hasMany(models.users, {
      foreignKey: "user_id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    this.belongsTo(models.materias, {
      foreignKey: "materia_id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
}

module.exports = professores;
