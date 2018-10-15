document.querySelector('#fill').addEventListener('click', function() {
    var arr = [1, 2, 3, 4];
    console.log(fill(arr, 0, 2, 4));
    console.log(fill(arr, 5, 1));
    console.log(fill(arr, 6));
});

function fill(arr, value, start, end) {
    for (var i = (start ? start : 0); i < (end ? end : arr.length); i++) {
        arr[i] = value;
    }
    return arr;
}
