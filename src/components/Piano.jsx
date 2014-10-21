/**
 * @jsx React.DOM
 */

require('./Piano.scss');

var React = require('react/addons');
var Matrix = require('react-matrix');
var CONSTANTS = require('../constants/');
var { GameStore } = require('../stores/');
var { GameActions } = require('../actions/');
var storesGlueMixin = require('../mixins/storesGlueMixin');

var Piano = React.createClass({
  mixins: [storesGlueMixin(GameStore)],

  getStateFromStores () {
    return {
      matrix: GameStore.getMatrixState()
    }
  },

  handleCellClick (cellState) {
    GameActions.click(cellState.y ,cellState.x);
  },

  render () {
    return (
      <div className={'Piano'}>
        <Matrix squareSize={CONSTANTS.Game.SQUARE_SIZE}
                matrix={this.state.matrix}
                onCellClick={this.handleCellClick}
                cellStates={CONSTANTS.Game.STATES} />
      </div>
    );
  }
});

module.exports = Piano;
