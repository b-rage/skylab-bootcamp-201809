document.querySelector('#find').addEventListener('click', function() {
    var arr = [5, 12, 8, 130, 44];
    var res = find(arr, function(elem) {
        return elem > 10;
    });

    console.log(res);
});

function find(arr, callback) {
    if (!Array.isArray(arr)) throw Error ("Arr is not a array");
    if (arr.length <= 0) throw Error ("Arr is empty");
    if (typeof callback !== "function") throw Error ("Callback isn't a function");

    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return -1;
}
