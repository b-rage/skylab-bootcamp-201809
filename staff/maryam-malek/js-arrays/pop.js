function pop(arr) {
    if (!(arr instanceof Array)) throw Error (arr + ' is not an array');
    if(!arr.length) throw Error ('invalid array');
    if(arguments. length>1) throw Error ('only one argument allowed')
    var newArr = arr;
    var extra = arr[arr.length-1];
    for(i=0; i< arr.length-2; i++){
        newArr[i] = arr[i];
    }
    newArr.length = (arr.length -1)
    return extra;
}