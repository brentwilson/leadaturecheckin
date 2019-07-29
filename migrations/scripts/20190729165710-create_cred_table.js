'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('cred', {
      siteId: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      USERID: Sequelize.STRING,
      CAMPAIGNUSERID: Sequelize.STRING,
      CAMPAIGNTOKEN: Sequelize.STRING,
      APIKEY: Sequelize.STRING,
      BASEURL: Sequelize.STRING
    });
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('cred');
  }
};
