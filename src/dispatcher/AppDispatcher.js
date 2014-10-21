var Dispatcher = require('./Dispatcher');
var CONSTANTS = require('../constants');
var assign = require('object-assign');

module.exports = assign(Dispatcher.prototype, {
  handleViewAction (action) {
    this.dispatch({
      source: CONSTANTS.VIEW_ACTION,
      action: action
    });
  },

  handleGeneralAction (action) {
    this.dispatch({
      source: CONSTANTS.GENERAL_ACTION,
      action: action
    });
  }
});
