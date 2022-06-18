module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction(t => {
            return Promise.all([
              queryInterface.removeColumn('records', 'img', { transaction: t }),
            ]);
          });
    },
    down: (queryInterface, Sequelize) => {
        
      }
  };