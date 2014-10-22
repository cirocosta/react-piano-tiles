module.exports = {
  CircularBuffer: require('./circular-buffer'),
  keyMirror: require('./keyMirror'),
  rafLoop: require('./rafLoop'),
  clone: (obj) => JSON.parse(JSON.stringify(obj))
};
