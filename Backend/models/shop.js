const Sequelize = require('sequelize');

class Shop extends Sequelize.Model {
  static initiate(sequelize){
    Shop.init({
      locName:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      shopName:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      shopTel:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      shopAddress:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored:false,
      modelName: 'shop',
      tableName: 'shops',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_cli',
    });
  }

  static associate(db) {}
}

module.exports = Shop;