var {keyMirror} = require('../utils');

module.exports = keyMirror({
  STATES: ['invalid', 'valid', 'start'],
  SQUARE_SIZE: [50, 100],

  UPDATE: false,
  CLICK: false,

  START: false,
  END: false,
});
