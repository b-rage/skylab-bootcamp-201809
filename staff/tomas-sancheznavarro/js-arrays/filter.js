function filter(arr, func) {
    var new_arr = [];
    var index = 0;
    for (var i = 0; i < arr.length; i++) {

        if (func(arr[i])) {
            new_arr[index] = arr[i];
            index++;
        }
    }
    return new_arr;
}