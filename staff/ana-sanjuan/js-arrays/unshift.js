function unshift(arr, elems) {
    var original = [];
    for (var i = 0; i < arr.length ; i++){
        original[i] =  arr[i];
    }
    for (var i = 0; i < (original.length + arguments.length -1) ; i++){
        arr[i] =  (i < arguments.length-1)? arguments[i +1] : original [i - (arguments.length -1)];
    }
    return original.length + arguments.length -1;
}