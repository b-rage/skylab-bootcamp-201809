document.querySelector('#shift').addEventListener('click', function() {
    var nums = [1, 2, 3];
    var first = shift(nums);
    console.log(nums);
    console.log(first);
});

function shift(arr) {
    if (!Array.isArray(arr)) throw Error('array is not valid');
    if (arr.length <= 0) throw Error('array is empty');

    var result = arr[0];
    for (var i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.length--;
    return result;
}
