var User = require('../../../DB/sequelize/models/User');

module.exports = async (req, res, next) => {
    const exUser = await User.findOne({ where: { name : "나나김" } });
    res.send(exUser);
  }