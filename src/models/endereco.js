const { Model, DataTypes } = require("sequelize");

class enderecos extends Model {
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
        rua: DataTypes.STRING,
        numero: DataTypes.STRING,
        cidade: DataTypes.STRING,
        bairro: DataTypes.STRING,
        estado: DataTypes.STRING,
        telefone: DataTypes.STRING,
        referencia: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "endereco",
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.users, {
      foreignKey: "user_id",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
}

module.exports = enderecos;
