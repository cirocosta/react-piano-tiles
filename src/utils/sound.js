require('es6-promise');
require('fetch');
var assign = require('object-assign');
var seq = Promise.resolve();

function Sound () {
  this.context;
  this.buffers = [];
}

assign(Sound.protoype, {
  init () {
    this.context = new AudioContext();
  },

  load (lst) {
    xxx
    // Promise
    //   .all(lst.map(fetch))
    //   .then((buffs) => {assign(this.buffers, buffs)})

  }
});


var context = new AudioContext();
