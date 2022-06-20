const { DataTypes, Sequelize } = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: DataTypes.STRING(40),
        allowNull: true,
        unique: false,
        validate : {
          email(value){
            var isEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
            if (isEmail.test(value) === false) {
              throw new Error('이메일을 입력해주세요!');
            }
          }
        }
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: true,
        validate : {
            name(value) {
                var isName =  /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
                if(isName.test(value) == false){
                    throw new Error('다시 이름을 입력해주세요!');
                }
            }
        }
      },
      sex: {
        type: DataTypes.STRING(40),
        allowNull: true,
        set(value) {
            this.setDataValue("sex", value.toLowerCase())
        },
        validate : {
            isIn : {
                args : [[ 'm', 'w' ]],
                msg : "성별을 다시 지정해 주세요"
            },
            sex(value) {
                var isSex = /[^m|w]/;
                if(isSex.test(value)) {
                    throw new Error('성별을 다시 지정해 주세요!')
                } else {
                    return console.log(value)
                }
            }
        }
      },
      cycle: {
        type: DataTypes.INTEGER(40),
        allowNull: true,
        validate: {
            isInt : true,
        }
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  
  static associate(db) {
    db.User.hasMany(db.Record);
    db.User.hasMany(db.Designer);
  }
};