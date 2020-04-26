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
      }
    );
  }
}

module.exports = enderecos;
