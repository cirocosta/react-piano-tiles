/**
 * @jsx React.DOM
 */

require('./DialogStart.scss');
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
        <h1>Welcome to <strong>React Piano Tiles</strong>!</h1>
        <button onClick={this.handleClick}>START</button>
      </div>
    );
  }
});

module.exports = DialogStart;
