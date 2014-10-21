var Store = require('./Store');
var Game = require('../game');
var assign = require('object-assign');
var CONSTANTS = require('../constants/');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var game = Game().init();
var _gameStatus = {
  started: false,
  failed: true
};
var _matrix = game.getState();


var GameStore = assign(Store, {
  getMatrixState: () => _matrix,

  dispatcherIndex: AppDispatcher.register((payload) => {
    var { action } = payload;

    switch (action.actionType) {
      case CONSTANTS.Game.UPDATE:
        _matrix = action.matrix.matrix;
        GameStore.emitChange();

        break;

      case CONSTANTS.Game.CLICK:
        if (!_gameStatus.started)
          return;
        else if (action.x !== 3)
          return;
        else if (!game.isValidClick(action.x, action.y))
          return (_gameStatus.started = false,
                  _gameStatus.failed = true,
                  game.fail());

        game.next(action.x, action.y);
        GameStore.emitChange();
        break;

      case CONSTANTS.Game.RESTART:
        _gameStatus.failed = false;
        _gameStatus.started = false;
        game.init();

        GameStore.emitChange();
        break;

      case CONSTANTS.Game.START:
        if (_gameStatus.failed) {
          game.init();
          _gameStatus.failed = false;
        }

        _gameStatus.started = true;
        break;
    }

    return true;
  })
});

module.exports = GameStore;
