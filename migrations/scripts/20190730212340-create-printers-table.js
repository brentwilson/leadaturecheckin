'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('printer', {
      Name: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      Label: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Station: {
        type: Sequelize.STRING
      },
      Color: {
        type: Sequelize.STRING
      }

    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('printer');
  }
};
