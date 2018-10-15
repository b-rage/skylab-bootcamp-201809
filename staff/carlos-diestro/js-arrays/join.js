function join(array, separator) {
  if(!(array instanceof Array)) throw Error('Invalid or unexpected token');

  var string = array[0] || '';
  (separator === undefined ? separator = ',' : true);

  for(var i = 1; i < array.length; i++) {
    string += separator + array[i];
  }

  return string;
}