// splice.js

function splice(arr, start, count) {
    
  var result = [];
  var removed = [];
  var argsLen = arguments.length;
  var arrLen = arr.length;
  var i, k;

  // Follow spec more or less
  start = parseInt(start, 10);
  count = parseInt(count, 10);

  // Deal with negative start per spec
  // Don't assume support for Math.min/max
  if (start < 0) {
    start = arrLen + start;
    start = (start > 0)? start : 0;
  } else {
    start = (start < arrLen)? start : arrLen;
  }

  // Deal with count per spec
  if (count < 0) count = 0;

  if (count > (arrLen - start)) {
    count = arrLen - start;
  }

  // Copy members up to start
  for (i = 0; i < start; i++) {
    result[i] = arr[i];
  }

  // Add new elements supplied as args
  for (i = 3; i < argsLen; i++) {
    result.push(arguments[i]);
  }

  // Copy removed items to removed arr
  for (i = start; i < start + count; i++) {
    removed.push(arr[i]);
  }

  // Add those after start + count
  for (i = start + (count || 0); i < arrLen; i++) {
    result.push(arr[i]);
  }

  // Update original arr
  arr.length = 0;
  i = result.length;
  while (i--) {
    arr[i] = result[i];
  }

  // Return arr of removed elements
  return removed;

}