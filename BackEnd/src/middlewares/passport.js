var passport = require('passport');

var User = require('../../../DB/sequelize/models/User');

exports.join = async (req, res, next) => {
    const { name, sex, cycle } = req.body;
    try {
      const exUser = await User.findOne({ where: { name } });
      if (exUser) {
        return res.redirect('/join?error=exist');
      }
      await User.create({
        name,
        sex,
        cycle,
      });
      next();
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
        return res.send("done")
      });
    })(req, res, next);
};


exports.test = async (req, res, next) => {
  const exUser = await User.findOne({ where: { name : "나나김" } });
  res.send(exUser);
}

exports.delete = async (req, res, next) => {
    await User.destroy({ where: { name:  "나나김"} });
    res.send("delete")
};

