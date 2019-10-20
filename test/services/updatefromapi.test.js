const app = require('../../src/app');

describe('\'updatefromapi\' service', () => {
  it('registered the service', () => {
    const service = app.service('updatefromapi');
    expect(service).toBeTruthy();
  });
});
