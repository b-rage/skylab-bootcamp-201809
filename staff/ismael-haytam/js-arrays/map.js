function map (arr, callback) {
    var result = [];
    for (var i = 0; !!(arr[i]); i++)  result[i] = callback(arr[i])
    return result;
}
