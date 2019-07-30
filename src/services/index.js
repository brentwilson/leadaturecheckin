const cred = require('./cred/cred.service.js');
const updatefromapi = require('./updatefromapi/updatefromapi.service.js');
const attendee = require('./attendee/attendee.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(cred);
  app.configure(updatefromapi);
  app.configure(attendee);
};
