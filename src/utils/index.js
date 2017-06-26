module.exports = {
  clone: (obj) => JSON.parse(JSON.stringify(obj)),
  CircularBuffer: require('./circular-buffer'),
  keyMirror: require('./keyMirror'),
  rafLoop: require('./rafLoop'),
  Sound: require('./Sound'),
  store: require('./store'),
  cx: require('./cx')
};
