var Store = require('./Store');
var assign = require('object-assign');
var CONSTANTS = require('../constants/');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var {store} = require('../utils');

var _currentScreen = CONSTANTS.Application.SCREENS.START;
var _audio = store.get('audio');


var ApplicationStore = assign({
  getApplicationState () {
    return {
      currentScreen: _currentScreen,
      audio: _audio
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

      case CONSTANTS.Application.TOGGLE_AUDIO:
        _audio = !_audio;

        store.set('audio', {audio: _audio});
        ApplicationStore.emitChange();
        break;
    }

    return true;
  })
}, Store);

module.exports = ApplicationStore;
