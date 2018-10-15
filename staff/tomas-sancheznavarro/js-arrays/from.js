function from(iter, func) {
    var new_arr = [];
    for (var i = 0; i < iter.length; i++) {
        if (func === undefined) {
            new_arr[i] = iter[i];
        } else {
            new_arr[i] = func(iter[i]);
        }
    }
    return new_arr;
}