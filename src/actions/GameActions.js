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

  endGame () {
    AppDispatcher.handleViewAction({
      actionType: CONSTANTS.Game.END,
    });
  },

  updateMatrix (matrix) {
    AppDispatcher.handleViewAction({
      actionType: CONSTANTS.Game.UPDATE,
      matrix: matrix
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
