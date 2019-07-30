// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const attendee = sequelizeClient.define('attendee', {
    RegId: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    ContactId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    CampaignId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    KioskConfigurationId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SiteId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ContactObj: DataTypes.JSONB,
    CheckInDateTime: DataTypes.STRING,
    LastCheckInDateTime: DataTypes.STRING,
    PrintDateTime: DataTypes.STRING,
    RegisterDateTime: DataTypes.STRING,
    PrintCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    CheckedIn: DataTypes.BOOLEAN,
    UpsertStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    Deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    fromScan: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  attendee.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return attendee;
};
