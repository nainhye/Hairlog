const { DataTypes, Sequelize } = require('sequelize');

module.exports = class Designer extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      designer: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate : {
            designer(value) {
                var isDesigner =  /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
                if(isDesigner.test(value) == false){
                    throw new Error('다시 디자이너 이름을 입력해주세요!');
                }
            }
        }
      },
      salon: {
        type: DataTypes.STRING(40),
        allowNull: true,
        validate : {
            salon(value) {
                var isSalon =  /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
                if(isSalon.test(value) == false){
                    throw new Error('다시 미용실 이름을 입력해주세요!');
                }
            }
        }
      },
      fav: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue : true
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Designer',
      tableName: 'designers',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  
  static associate(db) {
    db.Designer.belongsTo(db.User)
    db.Designer.hasMany(db.Record)
  }
};