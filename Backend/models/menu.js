const Sequelize = require('sequelize');


class Menu extends Sequelize.Model {
  static initiate(sequelize){
    Menu.init({
      menuName:{
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      menuPrice:{
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      menuType:{
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      menuNew:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      menuImg:{
        type: Sequelize.STRING(500),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored:false,
      modelName: 'Notice',
      tableName: 'menus',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_cli',
    });
  }

  static associate(db) {}
}

module.exports = Menu;