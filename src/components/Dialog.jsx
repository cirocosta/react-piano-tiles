/**
 * @jsx React.DOM
 */

require('./Dialog.scss');
var React = require('react');

var Dialog = React.createClass({
  render () {
    return (
      <div className={'Dialog'}>
        <h1>fucking dialog!</h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Dialog;
