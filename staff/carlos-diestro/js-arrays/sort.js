function sort(array) {
  if(!(array instanceof Array)) throw Error('array is not valid');
  if(array.length === 0) throw Error('array is empty');

  var temp;

  for(var i = 0; i < array.length; i++) {
    for(var j = i + 1; j < array.length; j++) {
      if(array[i].toString() > array[j].toString()) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}