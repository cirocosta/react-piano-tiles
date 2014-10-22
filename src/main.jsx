/**
 * @jsx React.DOM
 */

'use strict';

require('./main.scss');
var React = require('react');
var {GamePage} = require('./components');

React.renderComponent(
  <GamePage />,
  document.body
);

window.React = React;
