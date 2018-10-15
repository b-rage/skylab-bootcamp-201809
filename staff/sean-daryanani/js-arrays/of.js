function of() {
    var arr = [];
    for (var i=0; i<arguments.length;i++) {
        arr[i] = arguments[i];
    }
    console.log(arr);
    return arr;
}