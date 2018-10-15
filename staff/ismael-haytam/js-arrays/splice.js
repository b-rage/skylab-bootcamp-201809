
function splice(arr, start, count) {
    
    var removed = [];
    var original = [];

    for (var i = 0; i < arr.length; i++) (i >= start && i <= count) ? removed.push(arr[i]): original.push(arr[i]);
    
    arr.length = original.length;

    for(var i = 0; i < original.length; i++) arr[i] = original[i];
    
    return removed;

}