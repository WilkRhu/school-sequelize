const { Model, DataTypes } = require("sequelize");

class estudantes extends Model {
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
        serie_id: {
          type: DataTypes.INTEGER,
          references: {
            model: "series",
            key: "id",
          },
        },
        matricula: DataTypes.STRING,
        responsavel_aluno_um: DataTypes.STRING,
        responsavel_aluno_dois: DataTypes.STRING,
        data_nascimento: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "estudantes",
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.series, {
      foreignKey: "serie_id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    this.belongsTo(models.users, {
      foreignKey: "user_id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
}

module.exports = estudantes;
