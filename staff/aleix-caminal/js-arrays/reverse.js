document.querySelector('#reverse').addEventListener('click', function() {
    var arr = ['one', 'two', 'three'];
    var reversed = reverse(arr);
    console.log(reversed);
    console.log(arr);
    console.log(arr === reversed);
});

function reverse(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var rev = arr[i];
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = rev;
    }
    return arr;
}
