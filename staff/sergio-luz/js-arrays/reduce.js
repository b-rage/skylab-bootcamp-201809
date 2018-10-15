function reduce(arr, callback, initial){
    if(!(arr instanceof Array)) throw Error(arr+' is not an array');
    if(!(callback instanceof Function)) throw Error(callback+' is not a function');

    if(initial===undefined){
        initial=0;
    }
    var sum=initial+arr[0];
    for (var i = 1; i < arr.length; i++) {
        sum=callback(sum, arr[i]);
        initial=sum;
    }
    return sum;
}