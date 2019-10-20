// Initializes the `updatefromapi` service on path `/updatefromapi`
const createService = require('./updatefromapi.class.js');
const hooks = require('./updatefromapi.hooks');
const logger = require('../../logger');
const schedule = require('node-schedule');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };


  // get active campaigns
  async function updateSched() {
    var jobList, j, currentjobschedule;
    let activeCampaigns = await app.service('appsettings')
      .find({
        query: {
          Active: true
        }
      })
    logger.info('checking update schedule');
  }
  // Initialize our service with any options it requires
  app.use('/updatefromapi', createService(options));

  let newSchedule = schedule.scheduleJob('*/1 * * * *', function () {
    updateSched();
  });

  // Get our initialized service so that we can register hooks
  const service = app.service('updatefromapi');

  service.hooks(hooks);
};
