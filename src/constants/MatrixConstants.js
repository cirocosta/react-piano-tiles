var {keyMirror} = require('../utils');

module.exports = keyMirror({
  STATES: ['invalid', 'valid', 'start'],
  SQUARE_SIZE: [20, 50],

  UPDATE: false,
  CLICK: false,
});
