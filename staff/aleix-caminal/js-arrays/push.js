document.querySelector('#push').addEventListener('click', function() {
    var arr = [1, 2, 3];
    push(arr, 4)
    console.log(arr);
});

function push(arr, elem) {
    if (!Array.isArray(arr)) throw Error('array is not valid');
    if (arr.length <= 0) throw Error('array is empty');
    if (!elem) throw Error('element not defined');

    arr[arr.length] = elem;
}
