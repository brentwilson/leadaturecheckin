// Initializes the `updatefromapi` service on path `/updatefromapi`
const createService = require('./updatefromapi.class.js');
const hooks = require('./updatefromapi.hooks');
const schedule = require('node-schedule');
const logger = require('../../logger');
// import {
//   machineId,
//   machineIdSync
// } from 'node-machine-id';





module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  let jobList, j, currentjobschedule;

  // Initialize our service with any options it requires
  app.use('/updatefromapi', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('updatefromapi');

  async function updateSched() {
    logger.info('Checking for new contacts');
    // get array of active campaigns
    let activeCampaigns = app.service('appsettings').find({
      query: {
        active: true
      }
    });
    logger.info(activeCampaigns);

  }
  var newSchedule = schedule.scheduleJob('*/1 * * * *', function () {
    updateSched();
  });

  service.hooks(hooks);
};
