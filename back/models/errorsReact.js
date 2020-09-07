const Sequelize = require("sequelize");

module.exports = class ErrorsReact extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      title: {
        type: Sequelize.STRING(300),
        allowNull: true,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      paranoid: true,
      modelName: "ErrorsReact",
      tableName: "errorsReacts",
      charset: "utf8",
      collate: "utf8_general_ci",
    });
  }
};
