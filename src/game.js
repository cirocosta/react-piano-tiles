var assign = require('object-assign');
var { CircularBuffer } = require('./utils');
var slice = Function.prototype.call.bind(Array.prototype.slice);


function Game () {
  if (!(this instanceof Game))
    return new Game();

  this.cb = CircularBuffer.create(4);
}

assign(Game.prototype, {
  _ARR: [0,0,0,0],

  _getRandRow () {
    var arr = slice(this._ARR);

    return (arr[Math.random() * 4 | 0] = 1, arr);
  },

  isValidClick (x, y) {
    return !!this.cb.buffer[x][y];
  },

  init () {
    var n = this.cb.length;
    this.cb.add(this._getRandRow());
    this.cb.add(this._getRandRow());
    this.cb.add(this._getRandRow());
    this.cb.add([2,2,2,2]);

    return this;
  },

  getState () {
    return this.cb.buffer;
  },

  next () {
    console.log('neext');
    this.cb.add(this._getRandRow());

    return this;
  },

  fail () {
    console.log('FAAAAIL');
  }
});


module.exports = Game;
