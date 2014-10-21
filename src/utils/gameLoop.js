/**
 * Exposes some simple control over the game
 * loop w/ req animation frame.
 *
 * Call it like:
 * _rAFid = requestAnimationFrame(tick(obs));
 * By doing that, when needing to stop the loop:
 * cancelAnimationFrame(_rAFid).
 */
module.exports = {
  _gameTime: {
    now: null,
    then: Date.now(),
    interval: 1000/15,
    delta: null
  },

  /**
   * Ticks a new animation frame.
   * @param {function} obs observer to the loop
   * event. Get's called whenever an actual
   * update occurs.
   */
  tick (obs) {
    requestAnimationFrame(this.tick);

    this._gameTime.now = Date.now();
    this._gameTime.delta = this._gameTime.now - this._gameTime.then;

    if (this._gameTime.delta <= this._gameTime.interval)
      return;

    this._gameTime.then = this._gameTime.now - (this._gameTime.delta % this._gameTime.interval);

    obs();
  },
};
