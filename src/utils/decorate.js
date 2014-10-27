module.exports = {
  /**
   * A decorator is just a callable that takes a
   * function as an argument and returns a
   * replacement function. We’ll start simply
   * and work our way up to useful decorators.
   * @type {function}
   * @returns {function} decorate function.
   */
  singleton: (fun) => {
    var instance;

    return (...args) {
      if (instance)
        return instance()
    }
  };
};
