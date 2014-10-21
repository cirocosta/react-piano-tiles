var CONSTANTS = require('../constants/');
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  updateMatrix (matrix) {
    AppDispatcher.handleViewAction({
      actionType: CONSTANTS.Matrix.UPDATE,
      matrix: matrix
    });
  }
};
