// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = DataTypes.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const appsettings = sequelizeClient.define('appsettings', {
    KioskConfigurationId: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    CampaignId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    CampaignName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SurveyKioskId: {
      type: DataTypes.STRING
    },
    UpdateFrequency: {
      type: DataTypes.INTEGER,
      defaultValue: 60
    },
    ContactsEditable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    SinceKey: {
      type: DataTypes.STRING,
      defaultValue: '0'
    },
    TemplateName: {
      type: DataTypes.STRING,
      defaultValue: 'PrintTemplate',
      allowNull: false
    },
    PrintFields: {
      type: DataTypes.TEXT,
      defaultValue: 'RegId, FirstName, LastName, CompanyName'
    },
    PrintByColor: {
      type: DataTypes.BOOLEAN
    },
    PrintOnlyDisabled: {
      type: DataTypes.BOOLEAN
    },
    Active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    TimeZone: {
      type: DataTypes.STRING,
      defaultValue: 'America/Los_Angeles'
    },
    MinCharsForSearch: {
      type: DataTypes.INTEGER,
      defaultValue: 3
    },
    AttendeeTypeFieldName: {
      type: DataTypes.STRING,
      defaultValue: 'AttendeeType'
    },
    TypeToColor: {
      type: DataTypes.TEXT
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  appsettings.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return appsettings;
};
