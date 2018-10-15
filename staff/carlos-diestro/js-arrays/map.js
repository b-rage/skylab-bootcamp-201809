function map(array, callback) {
  if(!(array instanceof Array) || array.length === 0) throw Error(array + ' is not a valid array');
  if(typeof callback !== 'function') throw Error(callback + ' is not a function');

  var newArray = [];

  for(var i = 0; i < array.length; i++) {
    newArray[i] = callback(array[i], i, array);  
  }

  return newArray;
}