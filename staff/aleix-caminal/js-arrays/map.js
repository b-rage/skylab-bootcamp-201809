document.querySelector('#map').addEventListener('click', function() {
    var arr = [1, 2, 3];
    var res = map(arr, function(num) {
        return num * 2;
    });

    console.log(res);
});

function map(arr, callback) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i]);
    }
    return result;
}
