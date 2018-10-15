function filter(arr, callback){

    var output = [];
    var j = 0;

    if (!(arr instanceof Array)) throw Error('first element is not an array');

    if ((arr.length === 0)) throw Error('the array passed as argument is empty');

    if ((callback !== undefined) && !(callback instanceof Function)) throw Error("second element is not an function");

    for(var i = 0; i < arr.length;i++){

        if(callback(arr[i]))
        {
             output[j] = arr[i];
             j++;
        }
    }
    return output;
}