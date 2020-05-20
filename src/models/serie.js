const { Model, DataTypes } = require("sequelize");

class series extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: "series",
      }
    );
  }
}

module.exports = series;
