var Store = require('./Store');
var assign = require('object-assign');
var CONSTANTS = require('../constants/');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var {store, Sound} = require('../utils');

var SOUNDS = ['assets/a.wav', 'assets/b.wav', 'assets/c.wav', 'assets/d.wav'];
var _sound = {};


var SoundStore = assign({
  getSoundState () {
    return {
      sound: _sound.buffers,
    };
  },

  dispatcherIndex: AppDispatcher.register((payload) => {
    var { action } = payload;

    switch (action.actionType) {
      case CONSTANTS.Sound.SOUND_LOAD:
        if (!_sound || !Object.keys(_sound).length)
          _sound = Sound().init();

        _sound.load(SOUNDS).then(() => {
          SoundStore.emitChange();
        }, (err) => {
          console.error(err);
        });
        break;

      case CONSTANTS.Sound.SOUND_PLAY:
        _sound.play(_sound.buffers[action.sound]);

        break;
    }

    return true;
  })
}, Store);

module.exports = SoundStore;
