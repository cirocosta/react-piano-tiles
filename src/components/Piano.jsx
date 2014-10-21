/**
 * @jsx React.DOM
 */

require('./Piano.scss');

var React = require('react/addons');
var Matrix = require('react-matrix');
var CONSTANTS = require('../constants/');
var { MatrixStore } = require('../stores/');
var { MatrixActions } = require('../actions/');
var storesGlueMixin = require('../mixins/storesGlueMixin');

var Piano = React.createClass({
  mixins: [storesGlueMixin(MatrixStore)],

  getStateFromStores () {
    return {
      matrix: MatrixStore.getMatrixState()
    }
  },

  handleCellClick (cellState) {
    MatrixActions.click(cellState.y ,cellState.x);
  },

  render () {
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
