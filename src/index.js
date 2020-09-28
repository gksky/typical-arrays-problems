
exports.min = function min (array) {
  if (Array.isArray(array) && array.length > 0) {
    var res = array[0];
    for (i = 1; i < array.length; i++) {
      if (array[i] < res) res = array[i];
    }
    return res;
  } else return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length > 0) {
    var res = array[0];
    for (i = 1; i < array.length; i++) {
      if (array[i] > res) res = array[i];
    }
    return res;
  } else return 0;
}

exports.avg = function avg (array) {
  var res = 0;
  if (Array.isArray(array) && array.length > 0) {
    for (i = 0; i < array.length; i++) {
      res += array[i];
    }
    return res / array.length;
  } else return 0;
}
