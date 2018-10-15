function every(arr, callback) {

    for (var i = 0; i < arr.length; i++) {
        if (!callback(arr[i]), i, arr) {
            return false;
        }
    }
    return true;
}