// Initializes the `printer` service on path `/printer`
const createService = require('feathers-sequelize');
const createModel = require('../../models/printer.model');
const hooks = require('./printer.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/printer', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('printer');

  service.hooks(hooks);
};
