const { DataTypes, Sequelize } = require('sequelize');

module.exports = class Dyeing extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      color: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      decolorization: {
        type: DataTypes.INTEGER(40),
        allowNull: false,
      },
      time: {
        type: DataTypes.INTEGER(40),
        allowNull: false,
      },
      hurt: {
        type: DataTypes.INTEGER(40),
        allowNull: false,
        validate: {
            max : 3,
        },
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Dyeing',
      tableName: 'dyeing',
      paranoid: true, 
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  
  static associate(db) {
    db.Dyeing.belongsTo(db.Record)
  }
}; 