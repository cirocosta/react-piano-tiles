/**
 * @jsx React.DOM
 */

var React = require('react');
var Piano = require('./Piano.jsx');
var Timer = require('./Timer.jsx');
var Dialog = require('./Dialog.jsx');
var {GameActions} = require('../actions');

var GamePage = React.createClass({
  handleStart () {
    GameActions.startGame();
    Timer.start();
  },

  handleRestart () {
    GameActions.restartGame();
    Timer.stop();
  },

  render () {
    return (
      <main className={'GamePage'}>
        <h1>React Piano Tiles!</h1>
        <div>
          <Timer />
          <Piano>
            <Dialog show={true}>
              <h2>content!</h2>
            </Dialog>
          </Piano>
        </div>
        <button onClick={this.handleStart}>Start!</button>
        <button onClick={this.handleRestart}>Restart!</button>
      </main>
    );
  }
});

module.exports = GamePage;
