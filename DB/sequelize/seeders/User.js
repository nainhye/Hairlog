'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
      email : "jongjun@gmail.com",
      password : "1234",
      name : "김종준",
      sex : "m",
      cycle : 7,
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      email : "hyeyeon@gmail.com",
      password : "1234",
      name : "나혜연",
      sex : "w",
      cycle : 7,
      createdAt: new Date(),
      updatedAt: new Date(),
     },{
      email : "inhye@gmail.com",
      password : "1234",
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
