const { DataTypes, Sequelize } = require('sequelize');

module.exports = class Record extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      date: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate : {
            date(value) {
                var isDate = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
                if(isDate.test(value) == false) {
                    throw new Error('다시 날짜를 입력해주세요!');
                }
            }
        },
      },
      etc: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      grade: {
        type: DataTypes.INTEGER(40),
        allowNull: false,
        validate: {
            max : 5,
        },
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Record',
      tableName: 'records',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  
  static associate(db) {
    db.Record.belongsTo(db.User)
    db.Record.hasMany(db.Image)
  }
};