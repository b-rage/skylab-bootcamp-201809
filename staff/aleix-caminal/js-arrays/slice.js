document.querySelector('#slice').addEventListener('click', function() {
    var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(slice(animals, 2));
    console.log(slice(animals, 2, 4));
    console.log(slice(animals, 1, 5));
});

function slice(arr, begin, end) {
    var result = [];
    for (var i = (begin ? begin : 0); i < (end ? end : arr.length); i++) {
        result[result.length] = arr[i];
    }
    return result;
}
