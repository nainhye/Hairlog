var User = require('../../../DB/sequelize/models/User');

exports.test1 = async (req, res, next) => {
    const exUser = await User.findOne({ where: { name : "나나김" } });
    res.send(exUser);
  }

exports.test2 = (req, res, next) => {
  var obj = { name : "jongjun"}
  next(obj)
  // next()
}

exports.test3 = (req, res, next) => {
  res.send("done")
}