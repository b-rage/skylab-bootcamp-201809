document.querySelector('#join').addEventListener('click', function() {
    var arr = [1, 2, 3];
    console.log(join(arr, '-'));
});

function join(arr, separator) {
    var result = arr[0];
    for (var i = 1; i < arr.length; i++) {
        result += separator + arr[i];
    }
    return result;
}
