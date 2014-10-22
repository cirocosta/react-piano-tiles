/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
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
    var timer = null;

    if (this.state.currentScreen === CONSTANTS.Application.SCREENS.START)
      dialog = <Dialog color={'blue'}><DialogStart /></Dialog>;
    else if (this.state.currentScreen === CONSTANTS.Application.SCREENS.FAIL)
      dialog = <Dialog color={'red'}><DialogFail /></Dialog>;
    else
      timer = <Timer />;

    return (
      <main className={'GamePage'}>
        <h1>React Piano Tiles!</h1>
        {timer}
        <Piano>
          <ReactCSSTransitionGroup transitionName={"diag"}>
          {dialog}
          </ReactCSSTransitionGroup>
        </Piano>
      </main>
    );
  }
});

module.exports = GamePage;
