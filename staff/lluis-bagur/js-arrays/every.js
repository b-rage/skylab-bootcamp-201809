function every(arr, callback) {
    if (!(arr instanceof Array)&& callback===undefined) throw Error('arr is not an array and callback is not a function');
    if (!(arr instanceof Array)) throw Error('arr is not an array');
    for (var i=0; i<arr.length; i++) {
        if (!callback(arr[i])) {
           return false;
        }
    }
    return true;
}