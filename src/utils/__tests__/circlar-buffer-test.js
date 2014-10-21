jest.autoMockOff();

describe('CircularBuffer', () => {
  var CB;

  beforeEach(() => {
    CB = require('../circular-buffer');
  });

  it('be requireable', () => {
    expect(CB).toBeDefined();
  });

  it('start empty', () => {
    var cb = CB.create(5);

    expect(cb.buffer.length).toEqual(5);
    expect(cb.buffer.reduce((curr, mem) => (mem += curr, +mem), 0)).toEqual(0);
  });

  describe('.add', () => {
    var cb;

    beforeEach(() => {
      cb = CB.create(3);
    });

    it('should add respecting FIFO', () => {
      cb.add(2);
      expect(cb.buffer).toEqual([2,[],[]]);

      cb.add(3);
      expect(cb.buffer).toEqual([3,2,[]]);

      cb.add(4);
      expect(cb.buffer).toEqual([4,3,2]);

      cb.add(5);
      expect(cb.buffer).toEqual([5,4,3]);
    });
  });
});
