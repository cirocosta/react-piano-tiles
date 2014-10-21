/**
 * @jsx React.DOM
 */

require('./Piano.scss');

var React = require('react/addons');
var Matrix = require('react-matrix');
var CONSTANTS = require('../constants/');
var update = React.addons.update;
var { MatrixStore } = require('../stores/');

var Piano = React.createClass({
  getInitialState () {
    return {
      matrix: MatrixStore.getMatrixState()
    }
  },

  handleCellClick () {
    console.log('click');
  },

  render () {
    console.table(this.state.matrix);

    return (
      <div className={'Piano'}>
        <Matrix squareSize={CONSTANTS.Matrix.SQUARE_SIZE}
                matrix={this.state.matrix}
                onCellClick={this.handleCellClick}
                cellStates={CONSTANTS.Matrix.STATES} />
      </div>
    );
  }
});

module.exports = Piano;
