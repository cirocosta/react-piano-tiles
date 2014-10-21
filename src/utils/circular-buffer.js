var assign = require('object-assign');

function CircularBuffer (n) {
  if (!(this instanceof CircularBuffer))
    return new CircularBuffer(n);

  this.buffer = [];
  this.length = n;

  while (n--)
    this.buffer.push([]);

  return this;
}

assign(CircularBuffer.prototype, {
  add (elem) {
    var i = this.length;

    while (--i)
      this.buffer[i] = this.buffer[i-1];

    this.buffer[0] = elem;

    return this;
  }
});


module.exports = {
  create: (n) => new CircularBuffer(n)
};
