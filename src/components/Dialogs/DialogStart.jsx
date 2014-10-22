/**
 * @jsx React.DOM
 */

var React = require('react');
var {ApplicationActions, GameActions} = require('../../actions');
var CONSTANTS = require('../../constants');

var DialogStart = React.createClass({
  handleClick () {
    ApplicationActions.changeScreen(CONSTANTS.Application.SCREENS.GAME);
    GameActions.startGame();
    // Timer.start();
  },

  render () {
    return (
      <div className='DialogStart'>
        <h1>Welcome to React Piano Tiles! </h1>
        <button onClick={this.handleClick}>Start!</button>
      </div>
    );
  }
});

module.exports = DialogStart;
