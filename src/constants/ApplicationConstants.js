var {keyMirror} = require('../utils');

module.exports = keyMirror({
  SCREENS: {
    START: 'START_SCREEN',
    FAIL: 'FAIL_SCREEN',
    GAME: 'GAME_SCREEN',
    MENU: 'MENU_SCREEN',
  },

  CHANGE_SCREEN: false,
  TOGGLE_AUDIO: false
});
