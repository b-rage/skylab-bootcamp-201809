document.querySelector('#some').addEventListener('click', function() {
    var nums = [1, 2, 3, 4, 5];
    var res = some(nums, function(elem) {
        return elem % 2 === 0;
    });
    console.log(res);
});

function some(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}
