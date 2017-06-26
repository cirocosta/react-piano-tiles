require('es6-promise');
var assign = require('object-assign');
var seq = Promise.resolve();

function Sound () {
  if (!(this instanceof Sound))
    return new Sound();

  this.context;
  this.buffers = {};
}

assign(Sound.prototype, {
  _isString: (obj) => toString.call(obj) === '[object String]',

  /**
   * Assigns a new AudioContext.
   */
  init () {
    return (this.context = new AudioContext(), this);
  },

  /**
   * Loads a list of sounds.
   * @type {function}
   * @param {array} lst list of audio files url
   * @returns {Promise}
   */
  load (lst) {
    if (this._isString(lst))
      lst = [lst];

    return new Promise((resolve, reject) => {
      Promise.all(lst.map((item) =>
        new Promise((res, rej) => {
          var req = new XMLHttpRequest();

          req.open('GET', item, true);
          req.responseType = 'arraybuffer';
          req.onload = () => {
            if (req.status !== 200)
              return rej(new Error(req.statusText));

            this.context.decodeAudioData(req.response, (buffer) => {
              res(buffer);
            }, rej);
          };

          req.onerror = () => rej(new Error('Network Error'));
          req.send();
        })
      )).then((results) => {
        resolve(
          assign(this.buffers, lst.reduce((mem, curr, i) =>
            (mem[curr] = results[i], mem), {}))
        );
      }, (err) => reject(err));
    });
  },

  unload (lst) {
    if (!lst)
      this.buffers = {};

    if (this._isString(lst))
      lst = [lst];

    lst.forEach((item) =>
      (this.buffers[item] = null));
  },

  play (buffer) {
    var source = this.context.createBufferSource();

    source.buffer = buffer;
    source.connect(this.context.destination);
    source.start(0);
  },
});


var context = new AudioContext();

module.exports = Sound;
