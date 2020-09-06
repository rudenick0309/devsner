const Sequelize = require('sequelize');

module.exports = class Test extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      message :{
        type : Sequelize.STRING(100),
        allowNull: false,
      },
      long: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull:true,
        defaultValue: Sequelize.NOW,
      }
    },{
      sequelize,
      timestamps: false,
      underscored:false,
      paranoid:false,
      modelName: 'Test',
      tableName: 'Tests',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    })
  }
}
