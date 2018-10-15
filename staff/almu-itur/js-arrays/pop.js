function pop(arr) {

    var element = [];

    length = arr.length;
    element = arr[length-1];
    arr.length=length-1;
    return element;
}