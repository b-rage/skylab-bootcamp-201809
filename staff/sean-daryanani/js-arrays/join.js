function join(arr, str) {
    if (!(arr instanceof Array)) {
        throw Error('Invalid or unexpected token');
    }
    var outputString = arr[0];
    if (str === undefined) {
        for (var i = 1; i < arr.length; i++) {
            outputString += "," + arr[i];
        }
    } else {
        for (var i = 1; i < arr.length; i++) {
            outputString += str + arr[i];
        }
    }
    if (!arr.length) {
        return outputString = "";
    }
    return outputString;
}