var Store = require('./Store');
var Game = require('../game');
var assign = require('object-assign');
var CONSTANTS = require('../constants/');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var {gameLoop} = require('../utils');

var game = Game().init();

var _rAFid = null;
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
        if (!game.isValidClick(action.x, action.y))
          return game.fail();

        game.next();
        GameStore.emitChange();
        break;

      // case CONSTANTS.Game.START:
      //   _rAFid = requestAnimationFrame(gameLoop.tick);
      //   break;

      // case CONSTANTS.Game.END:
      //   cancelAnimationFrame(_rAFid);
      //   break;
    }

    return true;
  })
});

module.exports = GameStore;
