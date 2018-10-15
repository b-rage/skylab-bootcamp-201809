function push(arr, elem) {

    if (arr == undefined) throw Error ('array is not valid');
    if (elem == undefined) throw Error ('element not defined');

    length = arr.length;
    arr[length]=elem;
    return elem.length;
}