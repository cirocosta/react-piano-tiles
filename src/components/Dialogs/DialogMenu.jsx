/**
 * @jsx React.DOM
 */

require('./DialogMenu.scss');
var React = require('react');
var {ApplicationActions} = require('../../actions');
var {ApplicationStore} = require('../../stores');
var CONSTANTS = require('../../constants');
var storesGlueMixin = require('../../mixins/storesGlueMixin');

var DialogMenu = React.createClass({
  mixins: [storesGlueMixin(ApplicationStore)],

  getStateFromStores: ApplicationStore.getApplicationState,

  handleBack () {
    ApplicationActions.changeScreen(CONSTANTS.Application.SCREENS.START);
  },

  handleChange () {
    ApplicationActions.toggleAudio();
  },

  render () {
    var sound = this.state.audio ? 'ON' : 'OFF';

    return (
      <div className='DialogMenu'>
        <h1>SOUND:</h1>
        <label>{sound}</label>
        <input type="checkbox" onChange={this.handleChange} checked={this.state.audio} />
        <br />
        <button onClick={this.handleBack}>back</button>
      </div>
    );
  }
});

module.exports = DialogMenu;
