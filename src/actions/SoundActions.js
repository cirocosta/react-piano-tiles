var CONSTANTS = require('../constants/');
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
  loadSounds () {
    console.log('hadsuhas');

    AppDispatcher.handleViewAction({
      actionType: CONSTANTS.Sound.SOUND_LOAD,
    });
  },

  playSound (sound) {
    AppDispatcher.handleViewAction({
      actionType: CONSTANTS.Sound.SOUND_PLAY,
      sound: sound
    });
  },
};
