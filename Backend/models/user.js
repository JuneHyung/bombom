const Sequelize = require('sequelize');


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
        allowNull: false,
      },
      userAddress:{
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      userTel:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      isAdmin:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      joinDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
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