/**
 * @jsx React.DOM
 */

require('./Piano.scss');

var React = require('react/addons');
var update = React.addons.update;
var Matrix = require('react-matrix');
var CONSTANTS = require('../constants/');
var { GameStore } = require('../stores/');
var { GameActions } = require('../actions/');
var storesGlueMixin = require('../mixins/storesGlueMixin');
var animationEndEvts = ['animationend', 'animationend', 'webkitAnimationEnd',
                     'oanimationend', 'MSAnimationEnd'];
var $grid;


var Piano = React.createClass({
  mixins: [storesGlueMixin(GameStore)],

  getStateFromStores: GameStore.getGameState,

  handleAnimationEnd () {
    $grid.classList.remove('move');

    GameActions.nextState();
  },

  componentDidMount () {
    $grid = this
      .getDOMNode()
      .querySelector('.Grid');

    animationEndEvts.forEach((evt) => {
      $grid.addEventListener(evt, this.handleAnimationEnd, false);
    });
  },

  componentWillUnmount () {
    animationEndEvts.forEach((evt) => {
      $grid.removeEventListener(evt, this.handleAnimationEnd, false);
    });

    $grid = null;
  },

  handleCellClick (cellState) {
    if (!this.state.gameStatus.started)
      return;

    GameActions.click(cellState.y, cellState.x);
    $grid.offsetWidth = $grid.offsetWidth;
    $grid.classList.add('move');
  },

  render () {
    return (
      <div className={'Piano'}>
        {this.props.children}
        <Matrix squareSize={CONSTANTS.Game.SQUARE_SIZE}
                matrix={this.state.matrix}
                onCellClick={this.handleCellClick}
                cellStates={CONSTANTS.Game.STATES}
                move={false} />
      </div>
    );
  }
});

module.exports = Piano;
