/**
 * Exposes some simple control over the game
 * loop w/ req animation frame.
 *
 * Call it like:
 * _rAFid = requestAnimationFrame(tick(obs));
 * By doing that, when needing to stop the loop:
 * cancelAnimationFrame(_rAFid).
 */
var rafLoop = {
  _timeStatus: {
    now: null,
    then: Date.now(),
    interval: 1000/24,
    delta: null
  },

  tick (obs, milli) {
    rafLoop.rAFid = requestAnimationFrame(rafLoop.tick.bind(null, obs));

    rafLoop._timeStatus.now = Date.now();
    rafLoop._timeStatus.delta = rafLoop._timeStatus.now - rafLoop._timeStatus.then;

    if (rafLoop._timeStatus.delta <= rafLoop._timeStatus.interval)
      return;

    rafLoop._timeStatus.then = rafLoop._timeStatus.now -
                            (rafLoop._timeStatus.delta % rafLoop._timeStatus.interval);

    obs && obs(milli);
  }
};

module.exports = rafLoop;
