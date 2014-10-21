var assign = require('object-assign');
var { CircularBuffer } = require('./utils');
var slice = Function.prototype.call.bind(Array.prototype.slice);
var STATES = {
  invalid: 0,
  valid: 1,
  passed: 2,
  start: 3
};

function Game () {
  if (!(this instanceof Game))
    return new Game();

  this.cb = CircularBuffer.create(5);
}

assign(Game.prototype, {
  _ARR: [STATES.invalid, STATES.invalid, STATES.invalid, STATES.invalid],

  _getRandRow () {
    var arr = slice(this._ARR);

    return (arr[Math.random() * 4 | 0] = STATES.valid, arr);
  },

  isValidClick (x, y) {
    console.log(this.getState()[x]);

    return !!this.getState()[x][y];
  },

  init () {
    var n = this.cb.length;

    this.cb.add([STATES.start,STATES.start,STATES.start,STATES.start]);

    while (--n)
      this.cb.add(this._getRandRow());

    return this;
  },

  getState () {
    return this.cb.buffer;
  },

  next (x, y) {
    this.getState()[x][y] = STATES.passed;
    this.cb.add(this._getRandRow());

    return this;
  },

  fail () {
    alert('FAAAAIL');
  }
});


module.exports = Game;
