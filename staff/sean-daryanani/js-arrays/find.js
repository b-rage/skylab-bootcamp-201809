function find(arr, elem) {
    if (elem===undefined) {
        throw Error("Callback isn't a function");
    }
    if (!arr.length) {
        throw Error("Arr is empty");
    }
    for (var i=0; i<arr.length; i++) {
        if (elem(arr[i])) {
        return arr[i];
        }
    }

    return undefined;
    
}