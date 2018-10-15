//fill.js
//implement a function that works as Array.prototype.fill
// fill.js
var arr = [1, 2, 3, 4];

function fill(arr, value, start, end) {
    if (start == null){
        for (var i = 0; i < arr.length; i++){
            arr[i] = value;
        }
        return arr
    }

    if (end == null){
        for (var i = 0; i < arr.length; i++){
            if (i >= start)
            arr[i] = value;
        }
    return arr;
    }

    for (var i = 0; i < arr.length; i++){
        if (i >= start && i <= end) {
            arr[i] = value; 
        }
        return arr   
    }
}
