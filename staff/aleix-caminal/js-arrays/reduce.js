document.querySelector('#reduce').addEventListener('click', function() {
    var nums = [1, 2, 3, 4];
    console.log(reduce(nums, function(accum, num) { return accum + num; }));
    console.log(reduce(nums, function(accum, num) { return accum + num; }, 5));
});

function reduce(arr, callback, value) {
    var result = value ? value : 0;
    for (var i = 0; i < arr.length; i++) {
        result = callback(result, arr[i]);
    }
    return result;
}
