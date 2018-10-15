function indexOf(arr, word) {
    if(!(arr instanceof Array)) {
        throw Error (typeof arr + ' is not an array');
    }
    if (!arr.length) {
        throw Error ('one argument is empty');
    }

    var indexPosition = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i]===word) {
            indexPosition = i;
            return indexPosition;
        }
    }
}