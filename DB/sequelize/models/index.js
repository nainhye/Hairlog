const Sequelize = require('sequelize');
const User = require('./User');
const Record = require('./Record');
const Image = require('./Image');



const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

// connecting to a database
const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
);

// add db object
const db = {};
db.sequelize = sequelize; 
db.User = User;
db.Record = Record;
db.Image = Image;


// Sequelize adds a getter & a setter for each attribute defined through Model.init
User.init(sequelize);
Record.init(sequelize);
Image.init(sequelize);


User.associate(db);
Record.associate(db);
Image.associate(db);


module.exports = db;