function filter(array, callback) {
  if(!(array instanceof Array)) throw Error(array + ' is not an array');
  if(array.length === 0) throw Error(array + ' is empty');
  if(typeof callback !== 'function') throw Error(callback + ' is not a function');

  var newArray = [];

  for(var i = 0, j = 0; i < array.length; i++) {
    if(callback(array[i])) {
      newArray[j] = array[i];
      j++;
    }
  }

  return newArray;
}