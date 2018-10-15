function push(array, element) {
  if(!(array instanceof Array)) throw Error(array + ' is not an array');
  if(arguments.length < 2) return array.length;
  
  array[array.length] = element;

  return array.length;
}