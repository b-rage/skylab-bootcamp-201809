document.querySelector('#from').addEventListener('click', function() {
    console.log(from('foo'));
    console.log(from([1, 2, 3], function(x) { return x + x; }));

    var a = [1, 2, 3];
    var b = from(a);
    console.log(a);
    console.log(b);
    console.log(a === b);
});

function from(arr, callback) {
    if (typeof arr[Symbol.iterator] !== 'function') throw Error('object is not iterable');
    if (callback !== undefined && typeof callback !== 'function') throw Error('callback is not a function');

    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!arr[i]) throw Error('empty value found in array');
        if (typeof callback === "function") {
            result[i] = callback(arr[i], i);
        } else {
            result[i] = arr[i];
        }
    }
    return result;
}
