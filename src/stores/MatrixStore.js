var Store = require('./Store');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var CONSTANTS = require('../constants/');
var assign = require('object-assign');
var Game = require('../game');
var clone = (obj) => JSON.parse(JSON.stringify(obj));

var game = Game().init();
var _matrix = game.getState();


var MatrixStore = assign(Store, {
  getMatrixState: () => _matrix,

  dispatcherIndex: AppDispatcher.register((payload) => {
    var action = payload.action;

    switch (action.actionType) {
      case CONSTANTS.Matrix.UPDATE:
        _matrix = action.matrix.matrix;
        MatrixStore.emitChange();

        break;
    }

    return true;
  })
});

module.exports = MatrixStore;
