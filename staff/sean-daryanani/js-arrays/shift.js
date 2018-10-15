function shift(arr) {
    if (arr===undefined) {throw Error('no parameter has been introduced')};
    if(!(arr instanceof Array)) {
        throw Error ('input is not array');
    }
    if(!arguments.length) {
        throw Error ('no parameter has been introduced');
    }

    if(!arr.length) {
        throw Error('array is empty');
    }
    var shifted = arr[0];
    for (var i=0; i<arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr.length = arr.length - 1;
    return shifted;
}  