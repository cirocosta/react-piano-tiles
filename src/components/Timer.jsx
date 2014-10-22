/**
 * @jsx React.DOM
 */

var React = require('react');
var {TimerStore} = require('../stores');
var {TimerActions} = require('../actions');
var storesGlueMixin = require('../mixins/storesGlueMixin');


var Timer = React.createClass({
  propTypes: {
    type: React.PropTypes.string
  },

  mixins: [storesGlueMixin(TimerStore)],

  getStateFromStores: TimerStore.getTimerState,

  statics: {
    start: () => TimerActions.start(),
    stop: () => TimerActions.stop()
  },

  render () {
    return (
      <p>{this.state.elapsedTime}</p>
    );
  }
});

module.exports = Timer;
