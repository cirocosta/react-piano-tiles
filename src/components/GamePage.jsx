/**
 * @jsx React.DOM
 */

var React = require('react');
var Piano = require('./Piano.jsx');
var Timer = require('./Timer.jsx');
var CONSTANTS = require('../constants');
var {Dialog, DialogStart, DialogFail} = require('./Dialogs');
var {GameActions} = require('../actions');
var {ApplicationStore} = require('../stores');
var storesGlueMixin = require('../mixins/storesGlueMixin');

var GamePage = React.createClass({
  mixins: [storesGlueMixin(ApplicationStore)],

  getStateFromStores: ApplicationStore.getApplicationState,

  render () {
    var dialog = null;

    if (this.state.currentScreen === CONSTANTS.Application.SCREENS.START)
      dialog = <Dialog color={'blue'} show={true}><DialogStart /></Dialog>;
    else if (this.state.currentScreen === CONSTANTS.Application.SCREENS.FAIL)
      dialog = <Dialog color={'red'} show={true}><DialogFail /></Dialog>;

    return (
      <main className={'GamePage'}>
        <h1>React Piano Tiles!</h1>
        <Timer />
        <Piano>
          {dialog}
        </Piano>
      </main>
    );
  }
});

module.exports = GamePage;
