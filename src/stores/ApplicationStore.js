var Store = require('./Store');
var assign = require('object-assign');
var CONSTANTS = require('../constants/');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var _currentScreen = CONSTANTS.Application.SCREENS.START;

var ApplicationStore = assign(Store, {
  getApplicationState () {
    return {
      currentScreen: _currentScreen
    };
  },

  dispatcherIndex: AppDispatcher.register((payload) => {
    var { action } = payload;

    switch (action.actionType) {
      case CONSTANTS.Application.CHANGE_SCREEN:
        _currentScreen = action.screen;

        ApplicationStore.emitChange();
        break;

      case CONSTANTS.Game.FAIL:
        _currentScreen = CONSTANTS.Application.SCREENS.FAIL;

        ApplicationStore.emitChange();
        break;
    }

    return true;
  })
});

module.exports = ApplicationStore;
