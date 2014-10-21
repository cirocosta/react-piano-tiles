/**
 * @jsx React.DOM
 */


var React = require('react');
var Piano = require('./Piano.jsx');

var GamePage = React.createClass({
  render () {
    return (
      <main>
        <h1>React Piano Tiles!</h1>
        <Piano />
      </main>
    );
  }
});

module.exports = GamePage;
