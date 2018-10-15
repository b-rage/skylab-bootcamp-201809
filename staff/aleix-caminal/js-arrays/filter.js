document.querySelector('#filter').addEventListener('click', function() {
    var words = ['spray', 'limit', 'elite', 'exuberant', 'construction', 'present'];
    var res = filter(words, function(word) {
        return word.length > 6;
    });

    console.log(res);
});

function filter(arr, callback) {
    if (!Array.isArray(arr)) throw Error('array is not valid');
    if (typeof callback !== 'function') throw Error('callback is not a function');
    if (arr.length <= 0) throw Error('array is empty');

    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            result[result.length] = arr[i];
        }
    }
    return result ? result : -1;
}
