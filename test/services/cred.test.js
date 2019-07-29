const app = require('../../src/app');

describe('\'Cred\' service', () => {
  it('registered the service', () => {
    const service = app.service('cred');
    expect(service).toBeTruthy();
  });
});
