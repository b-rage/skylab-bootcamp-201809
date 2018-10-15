function fill(arr, value, start, end) {
    if (!(arr instanceof Array)) throw Error(arr + ' is not valid');

    
    for (var i = ((start)? start: 0) ; i < (end? end: arr.length); i++){
        arr[i] = value;
    }
    return arr
}