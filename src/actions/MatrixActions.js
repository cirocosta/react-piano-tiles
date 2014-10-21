var CONSTANTS = require('../constants/');
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  updateMatrix (matrix) {
    AppDispatcher.handleViewAction({
      actionType: CONSTANTS.Matrix.UPDATE,
      matrix: matrix
    });
  },

  click (x, y) {
    AppDispatcher.handleViewAction({
      actionType: CONSTANTS.Matrix.CLICK,
      x: x,
      y: y
    });
  },
};
