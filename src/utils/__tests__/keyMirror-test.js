jest.autoMockOff();

describe('keyMirror', function() {
  var keyMirror;

  beforeEach(() => {
    keyMirror = require('../keyMirror');
  });

  it('be requireable', () => {
    expect(keyMirror).toBeDefined();
  });

  it('mirror only those keys with falsy values', () => {
    var expected = {a: 'a', b: 'b', c:'cool'};
    var actual = keyMirror({
      a: false,
      b: null,
      c: 'cool'
    });

    expect(actual).toEqual(expected);
  });
});
