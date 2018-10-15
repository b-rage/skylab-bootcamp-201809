function splice(arr, start, count) {
    var del = [];
    var keep = [];
    var iteratordel = 0;
    var iteratorkeep = 0;
    if (start === undefined && count === undefined) {
        return newArr = [];
    } else if (start != undefined && count === undefined) {
        for (var i = 0; i < arr.length; i++) {
            if (i >= start) {
                del[iteratordel] = arr[i];
                iteratordel++;
            } else {
                keep[iteratorkeep] = arr[i];
                iteratorkeep++;
            }

        }

    } else {
        for (var i = 0; i < arr.length; i++) {
            if (i >= start && i < start + count) {
                del[iteratordel] = arr[i];
                iteratordel++;
            } else {
                keep[iteratorkeep] = arr[i];
                iteratorkeep++;
            }

        }
    }
    for (var i = 0; i < keep.length; i++) {
        arr[i] = keep[i];
    }
    arr.length = keep.length;
    return del;
}