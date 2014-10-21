var CONSTANTS = require('../constants/');
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  startGame () {
    AppDispatcher.handleViewAction({
      actionType: CONSTANTS.Game.START,
    });
  },

  restartGame () {
    AppDispatcher.handleViewAction({
      actionType: CONSTANTS.Game.RESTART,
    });
  },

  nextState () {
    AppDispatcher.handleViewAction({
      actionType: CONSTANTS.Game.NEXT_STATE,
    });
  },

  click (x, y) {
    AppDispatcher.handleViewAction({
      actionType: CONSTANTS.Game.CLICK,
      x: x,
      y: y
    });
  },
};
