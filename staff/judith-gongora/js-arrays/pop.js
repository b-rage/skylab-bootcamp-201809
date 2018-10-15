function pop (arr){
    if (!(arr instanceof Array)) throw Error("input is not an array");
    if(!arr.length) throw Error("array is empty");
    if(arguments.length > 1) throw Error("only one argument allowed")

    var last= arr[arr.length-1]
    arr.length--;
    return last;
}