function shift(arr) {
    
    // validation
    if (typeof arr == 'undefined') throw Error ('no parameter has been introduced');
    if (!(arr instanceof Array)) throw Error ('input is not array');
    if (!arr.length) throw Error ('array is empty');

    // logic
    var element = arr[0];
    var length = arr.length;
    for (var i = 0; i < arr.length; i ++) arr[i] = arr[i+1];
    arr.length = length - 1;
    return element;
}
