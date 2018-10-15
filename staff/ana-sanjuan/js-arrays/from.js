// from.js

function from(arr, callback) {
    if (!(typeof arr[Symbol.iterator] === 'function')) throw Error('object is not iterable');
    if (callback && typeof callback !==  'function') throw Error('callback is not a function');
   
    var result = [];
    for (var i = 0; i < arr.length; i++){ 
        result[i] = callback? callback(arr[i], i, arr): arr[i];
        if (result[i]) throw Error('Empty value found in array');
    }
    return result;
}