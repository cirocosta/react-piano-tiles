/**
 * @jsx React.DOM
 */

require('./DialogFail.scss');
var React = require('react');
var {ApplicationActions, GameActions} = require('../../actions');
var {TimerStore, GameStore} = require('../../stores');
var CONSTANTS = require('../../constants');

var DialogFail = React.createClass({
  handleClick () {
    ApplicationActions.changeScreen(CONSTANTS.Application.SCREENS.GAME);
    GameActions.restartGame();
  },

  render () {
    var {last} = TimerStore.getTimerState();
    var {tiles} = GameStore.getGameState();

    return (
      <div className='DialogFail'>
        <h1>FAIL :(</h1>
        <h2>{(last/1000).toFixed(2)}</h2>
        <h2>{tiles} tiles</h2>
        <button onClick={this.handleClick}>Restart!</button>
      </div>
    );
  }
});

module.exports = DialogFail;
