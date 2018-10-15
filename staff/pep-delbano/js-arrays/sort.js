function sort(arr) {
    if (arr===undefined) {
        throw Error('array is not valid');
    }
    if (!arr.length) {
        throw Error ('array is empty');
    }
    
    for (var i=0; i<arr.length;i++) {
        arr[i] = arr[i].toString();
    }
    for (var i=0; i<arr.length; i++) {
        for (j=0; j<(arr.length -i); j++) {
            if (arr[j] > arr[j+1]) {
                var temporary = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temporary;
            }
        }
    }
    return arr;
}