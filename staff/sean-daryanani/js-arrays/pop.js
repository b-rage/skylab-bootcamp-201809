function pop(arr) {
   if (arguments.length>1) {
    throw Error('only one argument allowed');
   }
    if (!(arr instanceof Array)) {
        throw Error('input is not an array');
    }
    if (arr.length===0) {
        throw Error('array is empty');
    }
    var popped = arr[arr.length-1];
    arr.length = arr.length - 1;
    return popped;
}