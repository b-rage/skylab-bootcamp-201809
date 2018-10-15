document.querySelector('#concat').addEventListener('click', function() {
    var arr = [1, 2, 3];
    var arr2 = [4, 5, 6];
    var res = concat(arr, arr2)
    console.log(res);
});

function concat() {
    var result = [];
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) {
            result[arguments.length] = arguments[i][j];
        }
    }
    return result;
}
