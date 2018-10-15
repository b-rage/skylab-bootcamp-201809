function every(array, callback) {
  if(!(array instanceof Array)) throw Error('arr is not an array');
  if(typeof callback !== 'function') throw Error('callback is not a function');

  var pass = true;

  for(var i = 0; i < array.length; i++) {
    if(!callback(array[i])) {
      pass = false;
      break;
    }
  }

  return pass;
}