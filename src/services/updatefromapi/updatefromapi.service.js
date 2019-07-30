// Initializes the `updatefromapi` service on path `/updatefromapi`
const createService = require('./updatefromapi.class.js');
const hooks = require('./updatefromapi.hooks');
const schedule = require('node-schedule');
const logger = require('../../logger');
// import {
//   machineId,
//   machineIdSync
// } from 'node-machine-id';

let jobList, j, currentjobschedule;

var newSchedule = schedule.scheduleJob('*/1 * * * *', function () {
  logger.info('scheduling working');
});
module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/updatefromapi', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('updatefromapi');

  service.hooks(hooks);
};
