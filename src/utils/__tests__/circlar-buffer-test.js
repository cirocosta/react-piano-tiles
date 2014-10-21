jest.autoMockOff();

describe('CircularBuffer', function() {

  var cb;

  beforeEach(function () {
    cb = require('../circular-buffer');
  });

  it('be requireable', function() {
    expect(cb).toBeDefined();
  });
});
