document.querySelector('#find-index').addEventListener('click', function() {
    var arr = [5, 12, 8, 130, 44];
    var res = findIndex(arr, function(num) {
        return num > 13;
    });

    console.log(res);
});

function findIndex(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return i;
        }
    }
    return -1;
}
