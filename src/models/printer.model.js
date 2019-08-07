// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const printer = sequelizeClient.define('printer', {
    Name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    }, 
    Label: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Station: {
      type: DataTypes.STRING
    },
    Color: {
      type: DataTypes.STRING
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  printer.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return printer;
};
