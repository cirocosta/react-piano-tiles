/**
 * @jsx React.DOM
 */

require('./Dialog.scss');
var React = require('react');
var {cx} = require('../utils');

var Dialog = React.createClass({
  propTypes: {
    show: React.PropTypes.bool
  },

  render () {
    var classes = cx({
      Dialog: true,
      show: this.props.show,
      hidden: !this.props.show
    });

    return (
      <div className={classes}>
        <h1>fucking dialog!</h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Dialog;
