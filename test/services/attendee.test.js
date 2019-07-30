const app = require('../../src/app');

describe('\'attendee\' service', () => {
  it('registered the service', () => {
    const service = app.service('attendee');
    expect(service).toBeTruthy();
  });
});
