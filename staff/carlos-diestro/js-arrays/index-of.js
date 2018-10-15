function indexOf(array, search) {
  if(!(array instanceof Array)) throw Error(array + ' is not an array');
  if(array.length === 0) throw Error(array + ' is empty');

  var postion = -1;

  for(var i = 0; i < array.length; i++) {
    if(search == array[i]) {
      position = i;
      break;
    }
  }

  return position;
}