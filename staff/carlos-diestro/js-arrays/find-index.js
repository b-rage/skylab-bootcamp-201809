function findIndex(array, callback) {
  if(!(array instanceof Array)) throw Error(array + ' is not an array');
  if(array.length === 0) throw Error(array + ' is empty');
  if(typeof callback !== 'function') throw Error(callback + ' is not a function');

  var position = -1;

  for(var i = 0; i < array.length; i++) {
    if(callback(array[i], i, array)) {
      position = i;
      break;
    }
  }

  return position;
}