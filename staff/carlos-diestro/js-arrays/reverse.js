function reverse(array) {
  if(!(array instanceof Array)) throw Error('the argument is not an array');
  if(array.length === 0) throw Error('the array is empty');

  var newArray = [];

  for(var i = 0; i < array.length; i++) {
    newArray[i] = array[i];
  }

  for(var i = 0, j = newArray.length - 1; i < newArray.length; i++, j--) {
    array[i] = newArray[j];
  }
}