/**
 * @jsx React.DOM
 */

require('./Timer.scss');
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
      <h1 className={'Timer'}>{(this.state.elapsedTime/1000).toFixed(2)}</h1>
    );
  }
});

module.exports = Timer;
