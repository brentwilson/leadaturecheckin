'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('attendee', {
      RegId: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      ContactId:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      }, 
      CampaignId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      KioskConfigurationId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      SiteId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ContactObj: Sequelize.JSONB,
      CheckInDateTime: Sequelize.STRING,
      LastCheckInDateTime: Sequelize.STRING,
      PrintDateTime: Sequelize.STRING,
      RegisterDateTime: Sequelize.STRING,
      PrintCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      CheckedIn: Sequelize.BOOLEAN,
      UpsertStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: true 
      },
      Deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      fromScan: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('attendee');
  }
};
