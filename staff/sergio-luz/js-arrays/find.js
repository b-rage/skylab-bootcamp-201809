function find(arr, Callback) {
    if( !(arr.length)) throw Error('Arr is empty');
    if(!(Callback instanceof Function)) throw Error("Callback isn't a function");


    var x;
    for (var i = 0; i < arr.length; i++) {
        x = Callback(arr[i]);
        if (x) {
            return arr[i];
        }
    }
}