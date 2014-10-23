var Store = require('./Store');
var {rafLoop} = require('../utils');
var assign = require('object-assign');
var CONSTANTS = require('../constants/');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var _elapsedTime = 0;
var _initial = null;
var _running = false;
var _last = 0;

var TimerStore = assign({
  getTimerState () {
    return {
      elapsedTime: _elapsedTime,
      running: _running,
      last: _last
    };
  },

  dispatcherIndex: AppDispatcher.register((payload) => {
    var { action } = payload;

    switch (action.actionType) {
      case CONSTANTS.Timer.START:
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
        _last = _elapsedTime;
        _elapsedTime = 0.0;
        _initial = null;

        TimerStore.emitChange();
        break;
    }

    return true;
  })
}, Store);

module.exports = TimerStore;
