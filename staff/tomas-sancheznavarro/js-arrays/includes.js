function includes(arr, item) {
    // Validation
    if (arguments.length === 0) {
        throw Error('function must contain two arguments');
    }

    if (!(arr instanceof Array)) {
        throw Error('array is not valid');
    }

    if (arr.length === 0) {
        throw Error('array cannot be empty');
    }

    if (!item) {
        throw Error('item to search is missing');
    }

    if (item instanceof Array) {
        throw Error('item to search cannot be an array');
    }

    // Function
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}