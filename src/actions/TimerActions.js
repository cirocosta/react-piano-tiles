var CONSTANTS = require('../constants/');
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  start () {
    AppDispatcher.handleViewAction({
      actionType: CONSTANTS.Timer.START,
    });
  },

  stop () {
    AppDispatcher.handleViewAction({
      actionType: CONSTANTS.Timer.STOP,
    });
  },
};
