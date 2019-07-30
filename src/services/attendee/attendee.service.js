// Initializes the `attendee` service on path `/attendee`
const createService = require('feathers-sequelize');
const createModel = require('../../models/attendee.model');
const hooks = require('./attendee.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/attendee', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('attendee');

  service.hooks(hooks);
};
