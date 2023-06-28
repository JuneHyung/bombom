const Sequelize = require('sequelize');
const dayjs = require('dayjs');

class User extends Sequelize.Model {
  static initiate(sequelize){
    User.init({
      userId:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      userPw:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      userName:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      userEmail:{
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      userAddress:{
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      userTel:{
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      isAdmin:{
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0,
      },
      joinDate: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: dayjs()
      },
    }, {
      sequelize,
      timestamps: false,
      underscored:false,
      modelName: 'User',
      tableName: 'users',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_cli',
    });
  }

  static associate(db) {}
}

module.exports = User;