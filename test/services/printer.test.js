const app = require('../../src/app');

describe('\'printer\' service', () => {
  it('registered the service', () => {
    const service = app.service('printer');
    expect(service).toBeTruthy();
  });
});
