document.querySelector('#for-each').addEventListener('click', function() {
    var arr = [1, 2, 3];
    forEach(arr, function(num) {
        console.log(num * 2);
    });
});

function forEach(arr, callback) {
    if (typeof arr !== 'object' || arr.length === undefined) throw Error('array is not valid');
    if (typeof callback !== "function") throw Error('callback is not a function');

    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
