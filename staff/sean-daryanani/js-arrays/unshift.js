function unshift(arr, elems) {
    var iterator = 0;
    if (elems===undefined) {
        return arr.length;
    }
    var args = [];
    for (var i=1; i<arguments.length; i++) {
        args[i-1] = arguments[i];
    }
    var newArr=[];
    for (var i=0; i<arr.length+args.length; i++) {
        newArr[i] = 0;
    }
    for (var i=0; i<newArr.length; i++) {
        if (i<args.length) {
            newArr[i] = args[i];
        }
        else {
            newArr[i] = arr[iterator];
            iterator++;
        }
    }
    for (var i=0; i<newArr.length;i++) {
        arr[i] = newArr[i]
    }
    return arr.length;
}
