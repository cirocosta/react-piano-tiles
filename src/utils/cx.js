/**
 * Creates a string representing css classes
 * given an object literal.
 * @type {string}
 */
module.exports = (classes) => {
  return typeof classes !== 'object' ?
    Array.prototype.join.call(arguments, ' ') :
    Object.keys(classes).filter((className) => classes[className]).join(' ');
};


