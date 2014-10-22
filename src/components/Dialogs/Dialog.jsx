/**
 * @jsx React.DOM
 */

require('./Dialog.scss');
var React = require('react');
var {cx} = require('../../utils');

var Dialog = React.createClass({
  propTypes: {
    show: React.PropTypes.bool,
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.component),
      React.PropTypes.component])
  },

  render () {
    var classes = cx({
      Dialog: true,
      show: this.props.show,
      hidden: !this.props.show
    });

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Dialog;
