document.querySelector('#unshift').addEventListener('click', function() {
    var nums = [1, 2, 3];
    console.log(unshift(nums, 4, 5));
    console.log(nums);
});

function unshift(arr, ...elems) {
    var copy = slice(arr);
    for (var i = 0; i < elems.length; i++) {
        arr[i] = elems[i];
    }

    for (i; i < copy.length + elems.length; i++) {
        arr[i] = copy[i - elems.length];
    }
    return arr.length;
}
