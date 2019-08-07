'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('printer', {
      PrinterName: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      PrinterLabel: {
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
