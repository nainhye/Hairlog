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
      cost: {
        type: DataTypes.INTEGER(40),
        allowNull: false,
      },
      time: {
        type: DataTypes.INTEGER(40),
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate : {
          isIn : [['cut', 'perm', 'dyeing']]
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
    db.Record.belongsTo(db.Designer)
    db.Record.hasOne(db.Image)
    db.Record.hasOne(db.Cut)
    db.Record.hasOne(db.Perm)
    db.Record.hasOne(db.Dyeing)
  }
};