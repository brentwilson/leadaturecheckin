// Initializes the `appsettings` service on path `/appsettings`
const createService = require('feathers-sequelize');
const createModel = require('../../models/appsettings.model');
const hooks = require('./appsettings.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/appsettings', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('appsettings');

  service.hooks(hooks);
};
