module.exports = (obj) => {
  var ret = {};

  for (var key in obj) {
    if (!obj.hasOwnProperty(key))
      continue;

    ret[key] = !obj[key] ? key : obj[key];
  }

  return ret;
};
