// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const cred = sequelizeClient.define('cred', {
    siteId: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    USERID: DataTypes.STRING,
    CAMPAIGNUSERID: DataTypes.STRING,
    CAMPAIGNTOKEN: DataTypes.STRING,
    APIKEY: DataTypes.STRING,
    BASEURL: DataTypes.STRING,
    TemplateLocation: {
      type: DataTypes.STRING,
      defaultValue: 'C:\\Badge_Template\\dropbox\\' +
        'Dropbox\\Badge_Templates\\'
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  cred.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return cred;
};
