'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('appsettings', {
      KioskConfigurationId: {
        type: Sequelize.STRING,
        primaryKey: true
      }, 
      CampaignId: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Region: {
        type: Sequelize.STRING,
        allowNull: false
      },
      CampaignName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      SurveyKioskId: {
        type: Sequelize.STRING
      },
      UpdateFrequency: {
        type: Sequelize.INTEGER,
        defaultValue: 60
      },
      ContactsEditable: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      SinceKey: {
        type: Sequelize.STRING,
        defaultValue: '0'
      },
      TemplateName: {
        type: Sequelize.STRING,
        defaultValue: 'PrintTemplate',
        allowNull: false
      },
      PrintFields: {
        type: Sequelize.TEXT,
        defaultValue: 'RegId, FirstName, LastName, CompanyName'
      }, 
      PrintByColor: {
        type: Sequelize.BOOLEAN
      },
      PrintOnlyDisabled: {
        type: Sequelize.BOOLEAN
      },
      Active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      TimeZone: {
        type: Sequelize.STRING,
        defaultValue: 'America/Los_Angeles'
      },
      MinCharsForSearch: {
        type: Sequelize.INTEGER,
        defaultValue: 3
      },
      AttendeeTypeFieldName: {
        type: Sequelize.STRING,
        defaultValue: 'AttendeeType'
      },
      TypeToColor: {
        type: Sequelize.TEXT
      }

    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('appsettings');
  }
};
