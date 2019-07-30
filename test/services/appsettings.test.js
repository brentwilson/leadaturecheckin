const app = require('../../src/app');

describe('\'appsettings\' service', () => {
  it('registered the service', () => {
    const service = app.service('appsettings');
    expect(service).toBeTruthy();
  });
});
