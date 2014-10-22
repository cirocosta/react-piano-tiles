var CONSTANTS = require('../constants/');
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  changeScreen (screen) {
    AppDispatcher.handleViewAction({
      actionType: CONSTANTS.Application.CHANGE_SCREEN,
      screen: screen
    });
  },
};
