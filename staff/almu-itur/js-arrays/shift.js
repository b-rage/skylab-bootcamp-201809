function shift(arr) {
    
    var element;
    var index;
    var length;

    if (!(arr instanceof Array)) throw Error ('input is not array');
    if (typeof arr == 'undefined') throw Error ('no parameter has been introduced');
    // if (!arr.length) throw Error ('array is empty'); //REDUNDANTE, ya se comprueba con instanceof

    element = arr[0];
    length = arr.length;

    for (index = 0; index < arr.length; index ++) {

        arr[index] = arr[index+1];
    }
    arr.length = length - 1;
    return element;

}