'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'cred',
        'createdAt', {
          type: Sequelize.DATE
        }
      ),
      queryInterface.addColumn(
        'cred',
        'updatedAt', {
          type: Sequelize.DATE
        }
      ),
      queryInterface.addColumn(
          'printer',
          'createdAt', {
            type: Sequelize.DATE
          }
        ),
      queryInterface.addColumn(
        'printer',
        'updatedAt', {
          type: Sequelize.DATE
        }
      ),
      queryInterface.addColumn(
          'appsettings',
          'createdAt', {
            type: Sequelize.DATE
          }
        ),
      queryInterface.addColumn(
        'appsettings',
        'updatedAt', {
          type: Sequelize.DATE
        }
      )

    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return Promise.all([
      queryInterface.removeColumn('cred', 'createdAt'),
      queryInterface.removeColumn('cred', 'updatedAt'),
      queryInterface.removeColumn('printer', 'createdAt'),
      queryInterface.removeColumn('printer', 'updatedAt'),
      queryInterface.removeColumn('appsettings', 'createdAt'),
      queryInterface.removeColumn('appsettings', 'updatedAt')

    ]);
  }
};
