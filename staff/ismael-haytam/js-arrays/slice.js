function slice(arr, begin, end) {
    var result = [];

    for (var i = 0; i < arr.length; i++) (i === end) ? this.break : (i >= begin) ? result.push(arr[i]) : false;

    return result;

}