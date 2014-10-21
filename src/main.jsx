/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var {GamePage} = require('./components');

React.renderComponent(
  <GamePage />,
  document.body
);

window.React = React;
