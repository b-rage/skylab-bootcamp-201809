function push(){
    
    var arr = arguments[0];

    if (!(arr instanceof Array)) throw Error("array is not valid");

    if (arguments[1] === undefined) throw Error("element not defined");

    var aux = arr.length;
    for(var i = 1; i < arguments.length;i++){
        arr[aux] = arguments[i];
        aux++;
    }
    return arr;
}