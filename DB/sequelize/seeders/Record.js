'use strict';
var User = require('../models/User');

module.exports = {
  async up (queryInterface, Sequelize) {;
    async function  findId( userName ) {
      var id = await queryInterface.rawSelect('users', {
        where: {
          name: userName,
        },
      }, ['id']);
      return id;
    }
    await queryInterface.bulkInsert('records', [{
      date : "1999-03-04",
      etc : null,
      grade : 5,
      UserId : await findId("김종준"),
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      date : "2001-07-25",
      etc : null,
      grade : 5,
      UserId : await findId("나인혜"),
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      date : "2002-09-04",
      etc : null,
      grade : 5,
      UserId : await findId("나혜연"),
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('records', null, {});

  }
};
