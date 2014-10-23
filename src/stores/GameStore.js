var Store = require('./Store');
var Game = require('../game');
var assign = require('object-assign');
var CONSTANTS = require('../constants/');
var {GameActions, TimerActions} = require('../actions');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var update = require('react/addons').addons.update;

var game = Game().init();
var _gameStatus = {
  started: false,
  failed: false
};
var _matrix = game.getState();
var _x;
var _y;
var _tiles = 0;

var GameStore = assign({
  getGameState () {
    return {
      matrix: _matrix,
      x: _x,
      y: _y,
      gameStatus: _gameStatus,
      tiles: _tiles
    };
  },

  dispatcherIndex: AppDispatcher.register((payload) => {
    var { action } = payload;

    switch (action.actionType) {
      case CONSTANTS.Game.NEXT_STATE:
        game.next(_x, _y);
        GameStore.emitChange();
        break;

      case CONSTANTS.Game.CLICK:
        if (!_gameStatus.started)
          return;
        else if (action.x !== 3)
          return;
        else if (!game.isValidClick(action.x, action.y))
          (_gameStatus.started = false,
           _gameStatus.failed = true,
           GameActions.fail());

        _x = action.x;
        _y = action.y;
        !_gameStatus.failed && _tiles++;

        _matrix[_x][_y] = 2;
        GameStore.emitChange();
        break;

      case CONSTANTS.Game.FAIL:
        TimerActions.stop();
        break;

      case CONSTANTS.Game.RESTART:
        _gameStatus.failed = false;
        _tiles = 0;
        _gameStatus.started = true;
        game.init();

        GameStore.emitChange();
        process.nextTick(TimerActions.start);
        break;

      case CONSTANTS.Game.START:
        if (_gameStatus.failed) {
          game.init();
          _gameStatus.failed = false;
        }

        _gameStatus.started = true;
        GameStore.emitChange();
        process.nextTick(TimerActions.start);
        break;
    }

    return true;
  })
}, Store);

module.exports = GameStore;
