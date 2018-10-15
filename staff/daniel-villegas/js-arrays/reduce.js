//reduce.js
//implement a function that works as Array.prototype.reduce
// reduce.js

function reduce(arr, callback, initialValue) {
    var result = 0;

        if (initialValue == null) {
            for (var i = 0; i < arr.length; i++){
            result += arr[i];
            }

        return result;

        } else {
            for (var i = 0; i < arr.length; i++){
            result += arr[i];
            }

            return callback(result, initialValue);
        }
}
 
