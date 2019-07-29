const cred = require('./cred/cred.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(cred);
};
