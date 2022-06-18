const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

var User = require('../../DB/sequelize/models/User');


module.exports = () => {
  passport.use(new LocalStrategy(
  {
    usernameField: 'name',
    passwordField: 'name',
  }, 
  async (name, password, done) => {
      try {
        const exUser = await User.findOne({ where: { name } });
        if (!exUser) {
          done(null, false, { message: '가입되지 않은 회원입니다.' });
        } else {
          done(null, exUser);
        }
      } catch (error) {
        console.error(error);
        done(error);
      }
    }
  ));
};
