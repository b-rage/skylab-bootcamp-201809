function sort(array) {
    if (!Array.isArray(array)) throw Error('array is not valid');
    if (array.length <= 0) throw Error('array is empty');

    var arr=[]
    for (i=0;i<array.length;i++){
        arr[i]=array[i];
    }
    var e;
    for (i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                e = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = e;
            }
        }
    }
    return arr;
}