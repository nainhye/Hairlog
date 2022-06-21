require('dotenv').config();

module.exports = {
  development : {
    username: "root",
    password: process.env.SEQUELIZE_PASSWORD,
    database: process.env.SEQUELIZE_DB_DEVELOPEMENT,
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases:'false',
  },
  test : {
    username: "root",
    password: process.env.SEQUELIZE_PASSWORD,
    database: process.env.SEQUELIZE_DB_TEST,
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: process.env.SEQUELIZE_PASSWORD,
    database: process.env.SEQUELIZE_DB_PRODUCTION,
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases:'false',
    logging: false,
  }
}
