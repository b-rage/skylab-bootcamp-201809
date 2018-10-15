function splice(arr, start, count) {
    var removed = [], original = [], counter;
    for (var i = 0; i < arr.length; i++) original[i] = arr[i];
    arr.length = arr.length - (count)

    for (var i = 0; i < start-1 ; i++){
        arr[i] = original[i]
    }
    for (var i = 0; i < (original.length - count -1) ; i++){
        arr[start+i] = original[start+count+i]
    }

    for (var i = 0; i < count; i++){
        removed[i] = original[start+i];
    }
    return removed
}
