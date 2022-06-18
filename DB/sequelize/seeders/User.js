'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
      name : "김종준",
      sex : "m",
      cycle : 7,
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      name : "나혜연",
      sex : "w",
      cycle : 7,
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      name : "나인혜",
      sex : "w",
      cycle : 7,
      createdAt: new Date(),
      updatedAt: new Date(),
     }],);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
