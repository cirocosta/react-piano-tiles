var Store = require('./Store');
var {rafLoop} = require('../utils');
var assign = require('object-assign');
var CONSTANTS = require('../constants/');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var _elapsedTime = 0;
var _initial = null;
var _running = false;

var TimerStore = assign(Store, {
  getTimerState () {
    return {
      elapsedTime: _elapsedTime,
      running: _running
    };
  },

  dispatcherIndex: AppDispatcher.register((payload) => {
    var { action } = payload;

    switch (action.actionType) {
      case CONSTANTS.Timer.START:

        console.log(action.actionType);
        if (_running)
          return;

        _running = true;
        requestAnimationFrame(rafLoop.tick.bind(this, (milli) => {
          if (!_initial)
            _initial = milli;

          _elapsedTime = milli - _initial;
          TimerStore.emitChange();
        }));
        break;

      case CONSTANTS.Timer.STOP:
        cancelAnimationFrame(rafLoop.rAFid);
        _running = false;
        _elapsedTime = 0.0;
        _initial = null;

        TimerStore.emitChange();
        break;
    }

    return true;
  })
});

module.exports = TimerStore;
