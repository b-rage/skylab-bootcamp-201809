// for-each.js

function forEach(arr, callback) {
    if (!(arr instanceof Array)) throw Error(arr + ' is not an array');

<<<<<<< HEAD
    for (var i = 0; i < arr.length; i++) callback(arr[i], i, arr);
}
=======
    if (typeof callback !== 'function') throw Error(callback + ' is not a function');

    for (var i = 0; i < arr.length; i++) callback(arr[i], i, arr);
}
>>>>>>> develop
