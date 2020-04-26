const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

class users extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        login: DataTypes.STRING,
        email: DataTypes.STRING,
        senha: DataTypes.STRING,
        tipo: DataTypes.STRING,
        data_nascimento: DataTypes.STRING,
        token: DataTypes.TEXT,
      },
      {
        sequelize,
        modelName: "users",
      }
    );
    users.beforeCreate((user) => {
      return bcrypt.hash(user.senha, 10).then((hashedPw) => {
        user.senha = hashedPw;
      });
    });
  }
}

module.exports = users;
