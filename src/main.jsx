/**
 * @jsx React.DOM
 */

'use strict';

require('./main.scss');
require('es6-promise');

var React = require('react');
var {GamePage} = require('./components');

React.renderComponent(
  <GamePage />,
  document.body
);

window.React = React;
