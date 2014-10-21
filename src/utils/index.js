module.exports = {
  CircularBuffer: require('./circular-buffer'),
  keyMirror: require('./keyMirror'),
  gameLoop: require('./gameLoop'),
  clone: (obj) => JSON.parse(JSON.stringify(obj))
};
