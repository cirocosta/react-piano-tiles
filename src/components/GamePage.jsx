/**
 * @jsx React.DOM
 */


var React = require('react');
var Piano = require('./Piano.jsx');
var {GameActions} = require('../actions');

var GamePage = React.createClass({
  handleStart () {
    GameActions.startGame();
  },

  handleRestart () {
    GameActions.restartGame();
  },

  render () {
    return (
      <main>
        <h1>React Piano Tiles!</h1>
        <Piano />
        <button onClick={this.handleStart}>Start!</button>
        <button onClick={this.handleRestart}>Restart!</button>
      </main>
    );
  }
});

module.exports = GamePage;
