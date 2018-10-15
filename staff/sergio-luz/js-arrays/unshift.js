function unshift(arr) {
    if (!(arr instanceof Array)) throw Error(arr+' is not an array');

    var temp = [];
    for (var i = 1; i < arguments.length; i++) {
        temp[i - 1] = arguments[i];
    }
    for (var i = 0; i < arr.length; i++) {
        temp[temp.length] = arr[i];
    }
    for (var i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
    }
    return temp.length;
}