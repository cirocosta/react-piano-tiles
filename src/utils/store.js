module.exports = {
  get (key) {
    var item = localStorage.getItem(key);

    return item ? JSON.parse(item) : null;
  },

  set: (key, data) => localStorage.setItem(key, JSON.stringify(data))
};
