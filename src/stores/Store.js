var EventEmitter = require('events').EventEmitter;
var CONSTANTS = require('../constants/');
var assign = require('object-assign');


module.exports = assign({
  emitChange () {
    this.emit(CONSTANTS.CHANGE_EVENT);
  },

  addChangeListener (cb) {
    this.on(CONSTANTS.CHANGE_EVENT, cb);
  },

  removeChangeListener (cb) {
    this.removeListener(CONSTANTS.CHANGE_EVENT, cb);
  }
}, EventEmitter.prototype);
