const Sequelize = require('sequelize');


class Notice extends Sequelize.Model {
  static initiate(sequelize){
    Notice.init({
      noticeTitle:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      noticeContent:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      noticeView:{
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      noticeDate:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: false,
      underscored:false,
      modelName: 'Notice',
      tableName: 'notices',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_cli',
    });
  }

  static associate(db) {}
}

module.exports = Notice;