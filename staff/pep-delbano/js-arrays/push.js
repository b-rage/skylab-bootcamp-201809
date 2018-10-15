function push(arr, elem) {
    if (!(arr instanceof Array))  {throw Error('array is not valid');}
    if (elem === undefined)  {throw Error('element not defined');}


    var args = [];
    var placeHolderArray=[];
    var iterator = 0;
    
    for (var i=1; i<arguments.length; i++) {
        args[i-1] = arguments[i];
    }
    for (var i=0; i<(arr.length+args.length); i++) {
        if (i<arr.length) {
            placeHolderArray[i]=arr[i];
        }
        else {
            placeHolderArray[i] = args[iterator];
            iterator++;
        }
    }
    for (var i=0; i<placeHolderArray.length;i++) {
        arr[i] = placeHolderArray[i];
    }
    return arr;
}
