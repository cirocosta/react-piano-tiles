/**
 * @jsx React.DOM
 */


var React = require('react');
var Piano = require('./Piano.jsx');
var {GameActions} = require('../actions');

var GamePage = React.createClass({
  handleClick () {
    GameActions.startGame();
  },

  render () {
    return (
      <main>
        <h1>React Piano Tiles!</h1>
        <Piano />
        <button onClick={this.handleClick}>Start!</button>
      </main>
    );
  }
});

module.exports = GamePage;
