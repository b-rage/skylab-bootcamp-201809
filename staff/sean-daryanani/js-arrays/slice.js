function slice(arr, begin, end) {
    if (!(arr instanceof Array)) {
        throw Error('array is not valid');
    }
    if (typeof begin !== 'number') {
        throw Error('start is not valid');
    }
    if (typeof end !== 'number') {
        throw Error('end is not valid');
    }
    var newArr = [];
    var iterator = 0;
    if (begin === undefined && end === undefined) {
        newArr = arr;
        return newArr;
    } else if (begin != undefined && end === undefined) {
        for (var i = 0; i < arr.length - begin; i++) {
            newArr[i] = arr[begin + i];
        }
    } else {
        for (var i = begin; i < end; i++) {
            newArr[iterator] = arr[i];
            iterator++
        }
    }
    return newArr;
}