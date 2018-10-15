function join(arr, separator) {

    if (!(arr instanceof Array)) throw Error('Invalid or unexpected token');

    var new_str = "";

    if (separator === undefined) {
        for (var i = 0; i < arr.length; i++) {
            if (i === arr.length - 1) {
                new_str += arr[i]
            } else {
                new_str += arr[i] + ",";
            }
        }
        return new_str;

    } else {

        for (var i = 0; i < arr.length; i++) {
            new_str += arr[i];
            if (i < arr.length - 1) {
                new_str += separator;
            }
        }
        return new_str;
    }
}