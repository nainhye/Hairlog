var passport = require('passport');
const bcrypt = require('bcrypt');


var User = require('../../../DB/sequelize/models/User');

exports.join = async (req, res, next) => {
    const { email, password, name, sex, cycle } = req.body;
    try {
      const exUser = await User.findOne({ where: { name } });
      if (exUser) {
        return res.redirect('/join?error=exist');
      }
      const hash = await bcrypt.hash(password, 12);
      await User.create({
        email,
        password : hash,
        name,
        sex,
        cycle,
      });
      return res.send("Join Success");
    } catch (error) {
      console.error(error);
      return next(error);
    }
  }

exports.authenticate = (req, res, next) => {
    passport.authenticate('local', (authError, user) => {
      if (authError) {
        console.error(authError);
        return next(authError);
      };
      if (!user) {
        return res.send('NO EXISTING USER');
      };
      return req.login(user, (loginError) => {
        if (loginError) {
          console.error(loginError);
          return next(loginError);
        };
        return res.send("Login Success")
      });
    })(req, res, next);
};

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
      next();
  } else {
      res.status(403).send('로그인 필요');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
      next();
  } else {
      const message = encodeURIComponent('로그인한 상태입니다.');
      res.redirect(`/?error=${message}`);
  }
};

exports.deleteAPITest = async (req, res, next) => {
    await User.destroy({ where: { name:  "나나김"} });
    res.send("delete")
};

